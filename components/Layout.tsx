import Header from "@/components/Header";
import Meta from "@/components/Meta";
import type { MetaProps } from "@/components/Meta";

type LayoutProps = {
  children: React.ReactNode;
  seo?: MetaProps;
};

const Layout = ({ children, seo }: LayoutProps) => {
  return (
    <main>
      <div className="page-pancake">
        <Meta {...seo} />
        <Header />
        <div>{children}</div>
        {/* <Footer footer={footer} /> */}
      </div>
    </main>
  );
};

export default Layout;
