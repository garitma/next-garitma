import "@aura-design/system/main.css";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "@/prismicio";
import "@/styles/globals.css";
import "@/styles/main.css";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoiseBackground from "@/components/NoiseBackground";
import { Toaster } from "sonner";

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
          <Toaster position="top-center"  />
        </main>
      </body>
    </html>
  );
}
