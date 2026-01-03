import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex items-center justify-center p-1 border-t border-gray-6 mt-2"
      data-slot="footer"
    >
      <div className="text-center">
        <p className="p text-gray-11">
          © {currentYear}{" "}
          <Link href="/" className="text-gray-12 hover:text-accent-9 transition-colors">
            Garitma
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

