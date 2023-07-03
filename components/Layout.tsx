import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <main>
      <div className="page-pancake">
        {/* <Meta {...seo} /> */}
        <Header />
        <div>{children}</div>
        {/* <Footer footer={footer} /> */}
      </div>
    </main>
  );
};

export default Layout;
