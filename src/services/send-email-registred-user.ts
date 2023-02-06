import { KafkaHelper } from '../infra/kafka'
import { sendEmailToRegistredUser } from '../infra/nodemailer'

export const sendEmailRegistredUser = async (): Promise<void> => {
  await KafkaHelper.consumerConnect('email-user-register')

  const consumer = KafkaHelper.useConsumer()

  await consumer.subscribe({ topic: 'confirm-user-register', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`email sent to ${message.value?.toString()}`)
      await sendEmailToRegistredUser(message.value?.toString())
    }
  })
}
