import { add } from './container'

export function Inject(key: string | symbol): ParameterDecorator {
  return target => {
    add(target as any, { key })
  }
}
