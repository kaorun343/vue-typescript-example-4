import { Injectable } from './Injectable'
import { Inject } from './Inject'
import { Provider } from './Provider'
import { resetContainer } from './container'

describe('Provider', () => {
  beforeEach(() => {
    resetContainer()
  })

  it('should provide', () => {
    const APPLE = 'APPLE'
    const BANANA = Symbol('BANANA')
    const SERVICE = Symbol('SERVICE')

    @Injectable()
    class Apple {}

    @Injectable()
    class Banana {}

    @Injectable()
    class Service {
      constructor(
        @Inject(APPLE) public apple: Apple,
        @Inject(BANANA) public banana: Banana,
      ) {}
    }

    const provider = new Provider()

    provider.bind(APPLE, Apple)
    provider.bind(BANANA, Banana)
    provider.bind(SERVICE, Service)

    const provide = provider.provide() as any

    expect(provide[APPLE] instanceof Apple).toBe(true)
    expect(provide[BANANA] instanceof Banana).toBe(true)

    const service = provide[SERVICE] as Service
    expect(service instanceof Service).toBe(true)
    expect(service.apple instanceof Apple).toBe(true)
    expect(service.banana instanceof Banana).toBe(true)
  })
})
