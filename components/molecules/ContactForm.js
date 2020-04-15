import React, { useState } from "react";
import { useStaticKit, ValidationError } from "@statickit/react";
import { sendContactEmail } from "@statickit/functions";

function ContactForm(props) {
  const client = useStaticKit();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setIsSubmitting(true);
    let resp = await sendContactEmail(client, {
      subject: `Contacto Garitma ${name}`,
      replyTo: email,
      fields: { name, email, phone },
    });

    switch (resp.status) {
      case "ok":
        setIsSubmitted(true);
        break;

      case "argumentError":
        setErrors(resp.errors);
        setIsSubmitting(false);
        break;

      default:
        setIsSubmitting(false);
        break;
    }
  };
  if (isSubmitted) {
    return (
      <div className="wall-pad blue">
        <div className="smash">
          <div className="mod-media">
            <img
              src="https://media.giphy.com/media/nbFu0f51DMsdshaF4U/source.gif"
              width="300"
              className="float"
            />
          </div>
          <h4 className="centertxt">Tu mensaje ha sido enviado</h4>
          <div className="pad" />
        </div>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="inputer smosh">
      <ValidationError prefix="Email" field="replyTo" errors={errors} />
      <p>
        <input
          id="name"
          type="text"
          name="name"
          className="block"
          placeholder="Nombre completo"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </p>
      <p>
        <input
          id="email"
          type="email"
          name="email"
          className="block"
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </p>

      <p>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="block"
          placeholder="Teléfono"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </p>
      <p className="centertxt">
        <button type="submit" className="button-fill" disabled={isSubmitting}>
          Enviar
        </button>
      </p>
    </form>
  );
}

export default ContactForm;
