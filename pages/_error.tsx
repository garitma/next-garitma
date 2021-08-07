import Section from "aura-design/section";
import Button from "aura-design/button";
import Head from "next/head";
import Link from "next/link";

type Props = {
  statusCode: string
}

function Error({ statusCode }: Props) {
  return (
    <Section container="smush">
      <Head>
        <title>Error {statusCode} | Garitma</title>
      </Head>
      <div className="aureole two valign" style={{ minHeight: "85vh" }}>
        <div className="one valign">
          <div className="smosh">
            {statusCode == "404" ? (
              <h1 className="centertxt">404 página no encontrada</h1>
            ) : (
              <h1 className="centertxt">
                {statusCode} ha ocurrido un problema
              </h1>
            )}

            <div className="aureole one">
              <Link href="/">
                <Button mode="link">Volver al inicio</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="valign centertxt mod-media">
          <img
            width="500"
            src="https://media.giphy.com/media/1rPoJNeGNTIUuFFnqK/giphy.gif"
            className="container halo"
          />
        </div>
      </div>
    </Section>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
