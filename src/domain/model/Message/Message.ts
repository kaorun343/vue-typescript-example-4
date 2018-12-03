export interface Message {
  id?: number

  /** タイトル */
  title: string

  /** メッセージ本文 */
  body: string

  /** 日時 */
  date: number
}
