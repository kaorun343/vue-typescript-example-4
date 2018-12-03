import { Provider } from './di/Provider'
import { MESSAGE_REPOSITORY } from './domain/model/Message/MessageRepository'
import { IdbMessageRepository } from './infra/MessageRepository'

const provider = new Provider()

provider.bindConstructor(MESSAGE_REPOSITORY, IdbMessageRepository)

export const provide = provider.provide()
