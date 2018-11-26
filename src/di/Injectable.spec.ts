import { Injectable } from './Injectable'
import { resetContainer, has } from './container'

describe('Injectable', () => {
  beforeEach(() => {
    resetContainer()
  })

  it('should add a constructor to the container', () => {
    @Injectable()
    class Service {}

    expect(has(Service)).toBe(true)
  })
})
