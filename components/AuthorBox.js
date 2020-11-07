import { Section } from "aura-design-system";
import Image from "next/image";

const AuthorBox = ({ avatar, name, description }) => (
  <Section space="wall-pad">
    <div className="pad mod">
      <div className="halo">
        <div className="layer small-4">
          <div className="halo halign">
            <div className="mod">
              <Image width={90} height={90} alt={name} src={avatar} />
            </div>
          </div>
        </div>
        <div className="layer small-8">
          <div className="wall-pad">
            <h3 className="mb0 mt0 h5">
              Por: <span itemProp="author">{name}</span>
            </h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default AuthorBox;
