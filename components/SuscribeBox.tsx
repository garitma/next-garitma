"use client";
import Section from "@aura-design/system/section";
import Input from "@aura-design/system/input";
import Grid from "@aura-design/system/grid";
import { useStatus, useFormDynamic } from "@aura-design/system/form";
import Button from "@aura-design/system/button";
import { toast } from "sonner";
import {
  ArrowRightIcon,
  SymbolIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";

import { newsletterSchema } from "@/utils/validator-schema";
import { createSubscriber } from "@/utils/web-client";

export default function SuscribeBox() {
  const status = useStatus();
  const formData = useFormDynamic(
    {
      email: "",
    },
    newsletterSchema
  );

  const { email } = formData.getFields();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    status.resetStatus();
    status.setIsLoading(true);
    formData.validateValues();

    if (!formData.isValid) {
      status.setIsError(true);
      status.setIsLoading(false);
      return;
    }

    const res = await createSubscriber({
      email: email.value,
    });

    handleResponse(res);
  };

  const handleResponse = (response) => {
    if (response.status === 200) {
      formData.resetForm();
      status.setSubmited(true);

      // Get the current date
      const date = new Date();

      // Options for formatting the date in Spanish
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long', // 'lunes'
        month: 'long', // 'enero'
        day: 'numeric', // '3'
        hour: 'numeric', // '6' (or '18' for 24-hour format)
        minute: 'numeric', // '00'
        hour12: true, // Use 12-hour format (optional)
      };

      // Format the date in Spanish
      const formattedDate = date.toLocaleDateString('es-ES', options); 

      toast.success('Gracias por suscribirte', {
        description: formattedDate, // Use the formatted date here
      });
    } else {
      status.setIsError(true);
      toast.error("Hubo un error al suscribirte");
    }
    status.setIsLoading(false);
  };



  return (
    <Section className="p-1" passDiv>
      <div className="py-5">
        <div className="px-1">
          <h3 className="mb-1.5">Suscríbete </h3>
        </div>
        <Grid col="two">
          <div>
            <form onSubmit={handleOnSubmit}>
              <div className="relative">
                <Input placeholder="correo electrónico" {...email} />
                <div className="absolute right-1 top-0 bottom-0">
                  <Button
                    mode="link"
                    label={
                      <>
                        <ArrowRightIcon className="icon" />
                      </>
                    }
                    isLoadingText={
                      <>
                        <SymbolIcon className="icon animate-spin" />
                      </>
                    }
                    isLoading={status.state.isLoading}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="px-1">
            <p className="h6 font-bold">
              Suscríbete para recibir mis últimas novedades y poemas
              directamente en tu correo. No envío muchos mensajes, solo cuando
              tengo algo especial que compartir contigo.
            </p>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
