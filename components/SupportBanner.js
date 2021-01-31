import Image from "next/image";

const SupportBanner = () => {
  return (
    <div className="smash">
      <div className="pad">
        <div className="mod  zoom">
          <a
            href="https://www.buymeacoffee.com/garitma"
            aria-label="Donar a Garitma"
            target="_blank"
            rel="noopener"
            className="halo"
          >
            <Image
              src="https://images.prismic.io/garitma/9ea735c5-0748-464f-bc36-88a4697a4136_buymeacoffegaritma.jpg?auto=compress,format"
              width="2000"
              height="928"
            />
          </a>
          <p className="centertxt fluid">
            Buy Me a Coffee es una forma sencilla y significativa de financiar
            nuestro trabajo creativo.{" "}
            <a target="_blank" rel="noopener">
              buymeacoffee.com/garitma
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
