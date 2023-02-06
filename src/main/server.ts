import { sendEmailRegistredUser } from '../services'

async function run (): Promise<void> {
  await sendEmailRegistredUser()
}

run().catch(err => { console.log(err) })
