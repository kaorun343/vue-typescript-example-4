import { Injectable } from './Injectable'
import { Inject } from './Inject'
import { Provider } from './Provider'
import { resetContainer } from './container'

describe('Provider', () => {
  beforeEach(() => {
    resetContainer()
  })

  it('should accept Constructors', () => {
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

    provider.bindConstructor(APPLE, Apple)
    provider.bindConstructor(BANANA, Banana)
    provider.bindConstructor(SERVICE, Service)

    const provide = provider.provide() as any

    expect(provide[APPLE] instanceof Apple).toBe(true)
    expect(provide[BANANA] instanceof Banana).toBe(true)

    const service = provide[SERVICE] as Service
    expect(service instanceof Service).toBe(true)
    expect(service.apple instanceof Apple).toBe(true)
    expect(service.banana instanceof Banana).toBe(true)
  })

  it('should accept objects', () => {
    const APPLE = 'APPLE'
    const SERVICE = Symbol('SERVICE')

    interface Apple {
      say(): void
    }

    const apple: Apple = {
      say() {},
    }

    @Injectable()
    class Service {
      constructor(@Inject(APPLE) public apple: Apple) {}
    }

    const provider = new Provider()

    provider.bindConstructor(SERVICE, Service)
    provider.bindObject(APPLE, apple)

    const provide = provider.provide() as any

    expect(typeof provide[APPLE] === 'object').toBe(true)
    expect(typeof provide[APPLE].say === 'function').toBe(true)

    const service: Service = provide[SERVICE]
    expect(typeof service.apple === 'object').toBe(true)
  })
})
