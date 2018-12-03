import { Message } from './Message'

export const MESSAGE_REPOSITORY = Symbol()

export interface MessageRepository {
  get(messageId: number): Promise<Message | undefined>
  store(message: Message): Promise<number>
  getAll(): Promise<Message[]>
  removeAll(): Promise<void>
}
