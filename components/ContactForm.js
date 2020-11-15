import React, { useState } from "react";
import { Button, Input } from "aura-design-system";

import { sendContactForm } from "services/contact";
import { useForm, useFormReset, useFormIsValid } from "aura-design-system";
import { contactFormSchema } from "lib/validation-schema";

function Contact() {
  const data = useForm({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    wait: false,
    submited: false,
    info: { error: false, msg: null },
  });
  const isValid = useFormIsValid(data, contactFormSchema);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, wait: true }));

    const res = await sendContactForm({
      email: data.email.input.value,
      message: data.message.input.value,
    });

    const text = await res.text();

    handleResponse(res, text);
  };

  const handleResponse = (res, msg) => {
    if (res.status === 200) {
      setStatus({
        wait: false,
        submited: true,
        info: { error: false, msg: msg },
      });
      useFormReset(data);
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  return (
    <div className="smosh pad">
      <form onSubmit={handleOnSubmit}>
        <Input
          id="email"
          type="email"
          placeholder="Correo electrónico"
          dialog={data.email.error && data.email.touch && data.email.error}
          {...data.email.input}
        />
        <div className="inputer">
          <textarea
            id="message"
            placeholder="Mensaje"
            {...data.message.input}
          />
          {data.message.error && data.message.touch && data.message.error}
        </div>
        <Button
          mode="fill"
          type="submit"
          disabled={!isValid}
          label={!status.wait ? "Enviar" : "Enviando..."}
          fluid
        />
      </form>

      <>
        {status.info.error && (
          <div className="mod wall-pad orange centertxt">{status.info.msg}</div>
        )}
      </>
      <div className="mod wall-pad blue centertxt">{status.info.msg}</div>
    </div>
  );
}

export default Contact;
