import { HomeComponent } from './Home'
import { MESSAGE_REPOSITORY } from '../domain/model/Message/MessageRepository'
import { InMemoryMessageRepository } from '../domain/model/Message/InMemoryMessageRepository'
import Vue from 'vue'
import { Message } from '../domain/model/Message/Message'

describe('HomeComponent', () => {
  describe('#subscribe', () => {
    it('should subscribe', async () => {
      const repository = new InMemoryMessageRepository()

      const parent = new Vue({
        provide: {
          [MESSAGE_REPOSITORY]: repository,
        },
      })

      const vm = new HomeComponent({ parent })

      vm.title = 'Title01'
      vm.body = 'body body'

      await vm.submit()
      expect(vm.messages.length).toBe(1)

      const messages = await repository.getAll()
      expect(messages.length).toBe(1)

      expect(vm.title).toBe('')
      expect(vm.body).toBe('')

      vm.title = 'Title02'
      vm.body = 'body body'

      await vm.submit()
      expect(vm.messages.length).toBe(2)
      expect(vm.messages[0].title).toBe('Title02')
      expect(vm.messages[1].title).toBe('Title01')
    })
  })

  describe('#initMessages', () => {
    it('should reverse messages', async () => {
      function initMessage(title: string, body: string, id?: number): Message {
        return {
          title,
          body,
          id,
          date: Date.now(),
        }
      }

      const repository = new InMemoryMessageRepository(
        initMessage('Title01', 'body', 1),
        initMessage('Title02', 'body', 2),
      )

      const parent = new Vue({
        provide: {
          [MESSAGE_REPOSITORY]: repository,
        },
      })

      const vm = new HomeComponent({ parent })

      await vm.initMessages()
      expect(vm.messages.length).toBe(2)
      expect(vm.messages[0].title).toBe('Title02')
      expect(vm.messages[1].title).toBe('Title01')
    })
  })
})
