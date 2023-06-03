import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 587,
    auth: {
        user: 'ooo.it8@yandex.ru',
        pass: 'pfnhvlehdiyozjzm'
    }
});

const sendMail = (name: string, phone: string, email: string, text: string) => {
  console.log(name, phone, email, text)
  const message = {
    from: "ooo.it8@yandex.ru", // откуда
    to: "ooo.it8@yandex.ru", // куда
    subject: "Контакт", // Subject line
    text: text, // plain text body
    html: `<div><h1>${email}</h1><br /> <h2>${name}</h2> <br/ > <h2>${phone}</h2> <br/ > <h2>${email}</h2> <br/> <p>${text}</p> </div>`, // html body
  } 

  transporter.sendMail(message, (error, info) => {
    if(error){
      console.log(error);
    }else{
      console.log("Email sent successsfully", info);
    }
    transporter.close();
  })
}

export default sendMail