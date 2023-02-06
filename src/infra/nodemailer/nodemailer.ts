import { nodemailerTransporter } from '../../main/config'

export const sendEmailToRegistredUser = async (email?: string): Promise<void> => {
  if (email == null) return
  await nodemailerTransporter.sendMail({
    text: `${email} registered on elciess!`,
    subject: 'Elciess New User',
    from: 'Elciess Tech <elciess.tech@gmail.com>',
    to: email
  })
}
