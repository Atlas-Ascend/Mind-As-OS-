import type { CapabilityDescriptor, WorkPacket, WriteLevel } from './domain.js';

export class CapabilityDeniedError extends Error {}

export function assertCapabilityAllowed(packet: WorkPacket, descriptors: CapabilityDescriptor[]): void {
  const byId = new Map(descriptors.map((d) => [d.capabilityId, d]));

  for (const requested of packet.requiredCapabilities) {
    const descriptor = byId.get(requested);
    if (!descriptor) throw new CapabilityDeniedError(`Unknown capability: ${requested}`);
    if (descriptor.writeLevel < packet.requestedWriteLevel) {
      throw new CapabilityDeniedError(`Capability ${requested} write level ${descriptor.writeLevel} < requested ${packet.requestedWriteLevel}`);
    }
    if (descriptor.destructive && packet.requestedWriteLevel < 4) {
      throw new CapabilityDeniedError(`Destructive capability ${requested} requires write level 4 authority`);
    }
  }
}

export function maxWriteLevel(levels: WriteLevel[]): WriteLevel {
  return levels.reduce<WriteLevel>((max, level) => level > max ? level : max, 0);
}
