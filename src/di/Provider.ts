import { get } from './container'
import { Constructor, Key } from './types'

export class Provider {
  private data = new Map<Key, Constructor>()

  bind(key: Key, Constructor: Constructor) {
    this.data.set(key, Constructor)
  }

  /**
   * provide dictionary of objects
   */
  provide(): Record<Key, any> {
    const generated = new Map<Key, Constructor>()

    return Array.from(this.data).reduce((acc, [key]) => {
      return { ...acc, [key]: this.instanciate(key, generated) }
    }, Object.create(null))
  }

  private instanciate(key: Key, generated: Map<Key, Constructor>): Object {
    const generatedInstance = generated.get(key)
    if (generatedInstance) return generatedInstance

    const Constructor = this.data.get(key)

    if (!Constructor) {
      throw new Error(`DI: ${key.toString()} is not registered!!`)
    }

    const injects = get(Constructor)

    const args = injects.map(inject => this.instanciate(inject.key, generated))

    return new Constructor(...args)
  }
}
