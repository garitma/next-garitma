import Button from "aura-design/button";

const ActionBar = () => {
  return (
    <div className="teal-green aura">
      <div className="smush">
        <p className="mb0 mt0 centertxt">
          <span className="wall-pad info-text info">Nuevo</span> • Ya está
          disponible en Colombia Garitmática, la tienda oficial de Gartima 🇨🇴
          <Button mode="link" href="https://garitmatica.com" target="_blank">
            Conocer
          </Button>
        </p>
      </div>
    </div>
  );
};

export default ActionBar;
