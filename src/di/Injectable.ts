import { set } from './container'

export function Injectable(): ClassDecorator {
  return function(Constructor) {
    set(Constructor)
  }
}
