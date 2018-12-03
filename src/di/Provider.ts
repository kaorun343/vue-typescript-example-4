import { get } from './container'
import { Constructor, Key } from './types'

export class Provider {
  private constructors = new Map<Key, Constructor>()
  private objects = new Map<Key, object>()

  bindConstructor(key: Key, Constructor: Constructor) {
    this.constructors.set(key, Constructor)
  }

  bindObject(key: Key, object: object) {
    this.objects.set(key, object)
  }

  /**
   * provide dictionary of objects
   */
  provide(): Record<Key, any> {
    const generated = new Map<Key, object>(this.objects)

    const initialDictionary = [...this.objects].reduce(
      (acc, [key, object]) => ({ ...acc, [key]: object }),
      Object.create(null) as Record<Key, object>,
    )

    return [...this.constructors].reduce((acc, [key]) => {
      return { ...acc, [key]: this.instanciate(key, generated) }
    }, initialDictionary)
  }

  private instanciate(key: Key, generated: Map<Key, object>): Object {
    const generatedInstance = generated.get(key)
    if (generatedInstance) return generatedInstance

    const Constructor = this.constructors.get(key)

    if (!Constructor) {
      throw new Error(`DI: ${key.toString()} is not registered!!`)
    }

    const injects = get(Constructor)

    const args = injects.map(inject => this.instanciate(inject.key, generated))

    // instanciate
    return new Constructor(...args)
  }
}
