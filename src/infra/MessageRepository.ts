import Dexie from 'dexie'
import { Message } from '../domain/model/Message/Message'
import { MessageRepository } from '../domain/model/Message/MessageRepository'
import { Injectable } from '../di/Injectable'

class Database extends Dexie {
  messages!: Dexie.Table<Message, number>

  constructor() {
    super('December4th')
    this.version(1).stores({
      messages: '++id,title,body,date',
    })
  }
}

const db = new Database()

@Injectable()
export class IdbMessageRepository implements MessageRepository {
  get(messageId: number) {
    return db.messages.get(messageId)
  }

  getAll() {
    return db.messages.toArray()
  }

  store(message: Message) {
    return db.messages.add(message)
  }

  removeAll() {
    return db.delete()
  }
}
