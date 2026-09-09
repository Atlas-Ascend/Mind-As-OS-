import type { EventBus } from './ports.js';
import type { MindEvent } from './domain.js';

export class InMemoryEventBus implements EventBus {
  private readonly events: MindEvent[] = [];

  async append(event: MindEvent): Promise<void> {
    this.events.push(structuredClone(event));
  }

  async list(traceId: string): Promise<MindEvent[]> {
    return this.events.filter((event) => event.traceId === traceId).map((event) => structuredClone(event));
  }
}
