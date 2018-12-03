import { Vue, Component, Inject } from 'vue-property-decorator'
import {
  MESSAGE_REPOSITORY,
  MessageRepository,
} from '../domain/model/Message/MessageRepository'

@Component
export class SettingsComponent extends Vue {
  @Inject(MESSAGE_REPOSITORY) repository!: MessageRepository

  async reset() {
    if (confirm('削除しますか？')) {
      await this.repository.removeAll()
      alert('削除しました。')
    }
  }
}
