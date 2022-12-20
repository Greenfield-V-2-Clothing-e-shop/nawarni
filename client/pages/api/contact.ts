export default function sendIt (req:any, res:any) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
      user:"nawarniproject@gmail.com",
      pass:'kbmdjwfiuuodrkjd'
    },
    secure:true
  });
  const mailData={
    from:'demo@demo.com',
    to:'nawarniproject@gmail.com',
    subject: `Message from : ${req.body.name}` + ` Number : ${req.body.tel}`,
    email: `email : ${req.body.email}`,
    tel: `tel : ${req.body.tel}`,
    text: req.body.message
  }
console.log(mailData)
  transporter.sendMail(mailData, function (err:any, info:any) {
    if(err)
      console.log(err)
    else
      console.log(info)
      res.send(res)
  })
}