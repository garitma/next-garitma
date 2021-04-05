import Section from "aura-design/section";
import Image from "next/image";

const AuthorBox = ({ avatar, name, description }) => (
  <Section space="wall-pad">
    <div className="pad mod">
      <div className="halo">
        <div className="layer small-4">
          <div className="halo halign">
            <div className="mod halo">
              <Image
                width={90}
                height={90}
                alt={name || "Pablopvsky"}
                src={
                  avatar ||
                  "https://images.prismic.io/garitma/2114bcaa-f7e0-4bb1-8039-fac166f00fd9_2020-2.jpg?auto=compress,format"
                }
              />
            </div>
          </div>
        </div>
        <div className="layer small-8">
          <div className="wall-pad">
            <h3 className="mb0 mt0 h5">
              Por: <span itemProp="author">{name || "Pablopvsky"}</span>
            </h3>
            <p>{description || "El mundo no es tan teso"}</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default AuthorBox;
