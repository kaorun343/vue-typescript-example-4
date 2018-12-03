import { Provider } from './di/Provider'
import { MESSAGE_REPOSITORY } from './domain/model/Message/MessageRepository'
import { InMemoryMessageRepository } from './domain/model/Message/InMemoryMessageRepository'

const provider = new Provider()

provider.bindConstructor(MESSAGE_REPOSITORY, InMemoryMessageRepository)

export const provide = provider.provide()
