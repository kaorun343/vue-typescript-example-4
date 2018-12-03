import { Vue, Component, Inject } from 'vue-property-decorator'
import {
  MESSAGE_REPOSITORY,
  MessageRepository,
} from '../domain/model/Message/MessageRepository'
import { Message } from '../domain/model/Message/Message'

@Component<HomeComponent>({
  filters: {
    format: (n: number) => new Date(n).toLocaleString(),
  },

  beforeRouteEnter(_f, _t, next) {
    next(async vm => {
      vm.messages = (await vm.repository.getAll()).reverse()
    })
  },
})
export class HomeComponent extends Vue {
  @Inject(MESSAGE_REPOSITORY) repository!: MessageRepository

  title = ''
  body = ''

  messages: Message[] = []

  async submit() {
    const message: Message = {
      title: this.title,
      body: this.body,
      date: Date.now(),
    }

    await this.repository.store(message)

    this.clear()
    this.messages.unshift(message)
  }

  clear() {
    this.title = ''
    this.body = ''
  }

  async mounted() {
    this.messages = (await this.repository.getAll()).reverse()
  }
}
