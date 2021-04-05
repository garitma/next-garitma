import React, { useState } from "react";
import Button from "aura-design/button";
import Input from "aura-design/input";

import { sendContactForm } from "@utils/contact";
import {
  useForm,
  useFormReset,
  useFormIsValid,
} from "aura-design/utils/useForm";
import { contactFormSchema } from "@utils/validation-schema";

function Contact() {
  const { email, message } = useForm({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    wait: false,
    submited: false,
    info: { error: false, msg: null },
  });
  const isValid = useFormIsValid({ email, message }, contactFormSchema);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, wait: true }));

    const res = await sendContactForm({
      email: email.value,
      message: message.value,
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
          type="email"
          placeholder="Correo electrónico"
          isHelping={email.error && email.touch ? true : false}
          isLabelable={true}
          helpMode="info"
          helpText={email.error}
          autoComplete="email"
          onChange={email.onChange}
          value={email.value}
        />
        <div className="inputer">
          <textarea
            id="message"
            placeholder="Mensaje"
            onChange={message.onChange}
            value={message.value}
          />
          {message.error && message.touch && message.error}
        </div>
        <Button
          mode="fill"
          type="submit"
          disabled={!isValid}
          label={!status.wait ? "Enviar" : "Enviando..."}
          isFluid
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
