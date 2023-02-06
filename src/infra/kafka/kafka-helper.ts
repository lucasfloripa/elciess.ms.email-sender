import { Kafka, Consumer } from 'kafkajs'

export const KafkaHelper = {
  kafka: new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID,
    brokers: ['localhost:9092']
  }),
  consumer: null as unknown as Consumer,

  async consumerConnect (consumerName: string): Promise<void> {
    if (this.consumer === null) this.consumer = this.kafka.consumer({ groupId: consumerName })
    await this.consumer.connect()
  },
  useConsumer (): Consumer {
    return this.consumer
  }
}
