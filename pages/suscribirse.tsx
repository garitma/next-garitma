import Section from "aura-design/section";

import Layout from "@components/Layout";
import Image from "@components/Image";

const Suscribe = () => {
  return (
    <Layout text="Suscribirse" isSuscribePage seo={{ title: "Suscribirse" }}>
      <Section color="orange-rose" container="smash">
        <div>
          <h2>Mi imaginación Garitmática te espera.</h2>

          <p className="h6">
            La idea de suscribirse en Garitma es tener un contacto directo para
            contarte de vez en cuando cosas que hayan pasado, curiosidades,
            novedades, ideas que esté planeando o proyectos nuevos.
          </p>
        </div>
      </Section>
      <Section color="purple" container="smash">
        <div className="centertxt mod-media">
          <img src="https://media.giphy.com/media/edYNMFY1Fm8JP8eXVs/giphy.gif" />
        </div>
        <div className="smosh pad">
          <div
            dangerouslySetInnerHTML={{
              __html: `<!-- Begin Mailchimp Signup Form -->
                <div id="mc_embed_signup">
                <form action="https://garitma.us12.list-manage.com/subscribe/post?u=83e9146bd7082f64509394a97&amp;id=d6afd7738a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                    <div class="inputer">
                        <div class="mc-field-group inputer-group">
                            <div class="halo">
                                <input type="email" value="" name="EMAIL" class="required email" placeholder="Escribe tu correo electrónico" id="mce-EMAIL">
                                <label for="mce-EMAIL">Email </label>
                            </div>
                        </div>
                </div>
                    <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_83e9146bd7082f64509394a97_d6afd7738a" tabindex="-1" value=""></div>
                    <div class="clear inputer">
                        <button type="submit" id="mc-embedded-subscribe" class="button-fill">Suscribirse</button>
                    </div>
                    <p>
                        Podrás darte de baja en cualqueir momento y nunca, nunca mandaré
                        spam.
                    </p>
                    </div>
                </form>
                </div>
                <!--End mc_embed_signup-->`,
            }}
          />
        
        </div>
      </Section>
    </Layout>
  );
};

export default Suscribe;
