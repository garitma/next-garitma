import Link from "next/link";
import Image from "next/image";
import Section from "aura-design/section";
import {AuraColors} from "aura-design/dist/types/global"

type Props = {
  href: string,
  src: string,
  alt: string,
  title: string,
  description: string,
  color?: AuraColors,
  height: number,
  width: number
}

const CollectionModule = ({
  href,
  src,
  alt,
  title,
  description,
  color,
  height,
  width,
}: Props) => {
  return (
    <Link href={href}>
      <a className={color}>
        <Section passDiv>
          <div className="halo halign smosh zoom">
            <Image src={src} height={height} width={width} alt={alt} />
          </div>
          <div className="centertxt">
            <h3 className="h1 mb0">{title}</h3>
            <p>{description}</p>
          </div>
        </Section>
      </a>
    </Link>
  );
};

export default CollectionModule;
