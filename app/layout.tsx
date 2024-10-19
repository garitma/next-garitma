import "@aura-design/system/main.css";

import { PrismicPreview } from "@prismicio/next";

import Header from "@/components/Header";
import { repositoryName } from "@/prismicio";
import "@/styles/globals.css";
import "@/styles/main.css";
import HeadContent from "@/components/HeadContent";
import Footer from "@/components/Footer";
import NoiseBackground from "@/components/NoiseBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-co">
      <body>
        <HeadContent />
        <main>
          <NoiseBackground />
          <div className="page-pancake">
            <Header />
            <div>{children}</div>
            <Footer />
            <PrismicPreview repositoryName={repositoryName} />
          </div>
        </main>
      </body>
    </html>
  );
}
