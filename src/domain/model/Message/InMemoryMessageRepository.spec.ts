import { InMemoryMessageRepository } from './InMemoryMessageRepository'
import { Message } from './Message'

describe('InMemoryMessageRepository', () => {
  function initMessage(title: string, body: string, id?: number): Message {
    return {
      id,
      title,
      body,
      date: Date.now(),
    }
  }

  describe('#get', () => {
    it('should get the target item', async () => {
      const repository = new InMemoryMessageRepository(
        initMessage('Apple', 'apple apple', 1),
        initMessage('Banana', 'banana banana', 2),
      )

      const apple = (await repository.get(1))!

      expect(apple.id!).toBe(1)
      expect(apple.title).toBe('Apple')
    })
  })

  describe('#store', () => {
    it('should store an item', async () => {
      const repository = new InMemoryMessageRepository()

      const messageId = await repository.store(
        initMessage('Apple', 'apple apple'),
      )

      const apple = (await repository.get(messageId))!

      expect(apple.title).toBe('Apple')
    })
  })

  describe('#getAll', () => {
    it('should get all items', async () => {
      const repository = new InMemoryMessageRepository(
        initMessage('Apple', 'apple apple', 1),
        initMessage('Banana', 'banana banana', 2),
      )

      const messages = await repository.getAll()

      expect(messages.length).toBe(2)
    })
  })

  describe('#removeAll', () => {
    it('should remove all items', async () => {
      const repository = new InMemoryMessageRepository(
        initMessage('Apple', 'apple apple', 1),
        initMessage('Banana', 'banana banana', 2),
      )

      await repository.removeAll()

      const messages = await repository.getAll()

      expect(messages.length).toBe(0)
    })
  })
})
