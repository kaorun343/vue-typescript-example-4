import { Key, Constructor } from './types'

export type ContainerValue = {
  key: Key
}

const container = new WeakMap<Object, ContainerValue[]>()

export function resetContainer() {}

export function set(Constructor: Object) {
  if (!container.has(Constructor)) {
    container.set(Constructor, [])
  }
}

export function add(Constructor: Constructor, parameter: ContainerValue) {
  const injects = container.get(Constructor) || []

  injects.unshift(parameter)

  container.set(Constructor, injects)
}

export function has(Constructor: Object) {
  return container.has(Constructor)
}

export function get(Constructor: Object) {
  return container.get(Constructor) || []
}
