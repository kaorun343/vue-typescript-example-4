import { Inject } from './Inject'
import { Injectable } from './Injectable'
import { get, resetContainer } from './container'

describe('Inejct', () => {
  beforeEach(() => {
    resetContainer()
  })

  it('should add its target parameter to contianer', () => {
    const APPLE = 'APPLE'
    const BANANA = Symbol('BANANA')

    @Injectable()
    class Service {
      constructor(
        @Inject(APPLE) public apple: string,
        @Inject(BANANA) public banana: string,
      ) {}
    }

    const injects = get(Service)!
    expect(injects).toBeTruthy()
    expect(injects.length).toBe(2)

    const [apple, banana] = injects
    expect(apple.key).toBe(APPLE)

    expect(banana.key).toBe(BANANA)
  })
})
