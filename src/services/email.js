import { Resend } from 'resend';

const resend = new Resend('re_BnLTv3t8_4nfqqSdQLZ4Wz3wizXrceyTP');

export function sendEmail(name, address, message) {
  sendEmailToUser(name, address, message)
  sendEmailToJavier(name, address, message)
}

function sendEmailToUser(name, address, message) {
  resend.emails.send({
    from: 'Javier Piqueras <hello@javierpiqueras.com>',
    to: address,
    subject: 'Your email to Javier Piqueras has been sent successfully',
    html: `<h1>Thanks for contacting me</h1><div>Hello ${name}. Your email to Javier Piqueras has been sent succcessfully, you will receive soon a response.</div><div>A copy of your email:</div><div>${message}</div>`
  })
}

function sendEmailToJavier(name, address, message) {
  resend.emails.send({
    from: `${name} <portfolio@javierpiqueras.com>`,
    to: 'javierpiquerasmartinez@gmail.com',
    subject: `Email from ${name}`,
    html: `<p>Name: ${name}</p><p>Email: ${address}</p><p>Message: ${message}</p>`
  })
}
