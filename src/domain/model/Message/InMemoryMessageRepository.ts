import { MessageRepository } from './MessageRepository'
import { Message } from './Message'

function initItems<T extends { id?: number }>(items: T[]) {
  return new Map(items.map(item => [item.id!, item] as [number, T]))
}

export class InMemoryMessageRepository implements MessageRepository {
  private readonly items: Map<number, Message>

  constructor(...messages: Message[]) {
    this.items = initItems(messages)
  }

  async get(messageId: number) {
    return this.items.get(messageId)
  }

  async store(message: Message) {
    const items = this.items
    const id = items.size + 1
    items.set(id, message)
    return id
  }

  async getAll() {
    return Array.from(this.items.values())
  }

  async removeAll() {
    this.items.clear()
  }
}
