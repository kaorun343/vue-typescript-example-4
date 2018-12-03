import { Message } from './Message'

export interface MessageRepository {
  get(messageId: number): Promise<Message | undefined>
  store(message: Message): Promise<number>
  getAll(): Promise<Message[]>
}
