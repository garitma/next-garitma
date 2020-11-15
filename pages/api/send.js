const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message } = req.body;

  const sendContactFormConfig = {
    to: "hola@garitma.com",
    from: "Garitma <hola@garitma.com>",
    subject: `Nuevo formulario de contacto llenado`,
    html: `El mensaje fue: ${message}. Por: ${email} `,
  };

  const sendResponseContactFormCofig = {
    to: email,
    from: "Garitma <hola@garitma.com>",
    subject: `Gracias por ponerte en contacto conmigo :)`,
    html: `Acuso recibido. Hola 👋. 
            <br>
            Que bueno que te hayas puesto en contacto conmigo. <br>
            Responderé tan pronto sea posible para que convercemos.<br>
            Saludos.<br>
            <br>
            El mensaje que me enviaste fue:<br>
            ${message}.<br>
            <br>
            Este mensaje te llegó porque llenaste el formulario de contacto de
            garitma.com
            `,
  };

  try {
    await sgMail.send(sendContactFormConfig);
    await sgMail.send(sendResponseContactFormCofig);
    res.status(200).send("Tu mensaje fue enviado.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Ha occurrido un error.");
  }
}
