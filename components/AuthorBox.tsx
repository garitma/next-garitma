import Section from "@aura-design/system/section";
import Image from "next/image";

const AuthorBox = ({ avatar, name, description }) => (
  <div className="pad teal-green">
    <div className="halo">
      <div className=" small-4">
        <div className="centertxt">
          <Image
            width={90}
            height={90}
            alt={name || "Pablopvsky"}
            src={
              avatar ||
              "https://images.prismic.io/garitma/ce06af7b-7602-4be4-84fc-60598bbee530_2022.jpg?auto=compress,format&w=180&h=180&fit=crop"
            }
          />
        </div>
      </div>
      <div className=" small-8 valign">
        <div className="wall-pad">
          <h3 className="mb0 mt0 h5">
            Por: <span itemProp="author">{name || "Pablopvsky"}</span>
          </h3>
          <p>{description || "El mundo no es tan teso"}</p>
        </div>
      </div>
    </div>
  </div>
);

export default AuthorBox;
