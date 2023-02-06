import { createTransport } from 'nodemailer'

export const nodemailerTransporter = createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'elciess.tech@gmail.com',
    pass: 'azyggrzliayxedbl'
  },
  tls: {
    rejectUnauthorized: false
  }
})
