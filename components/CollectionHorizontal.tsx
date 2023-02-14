import Link from "@/components/Link";
import Image from "@/components/Image";

const CollectionHorizontal = ({ title, excerpt, image, href, ...props }) => {
  return (
    <div className="halo ulinea purple aura" {...props}>
      <div className="small-8 medium-10">
        <Link href={href}>
          <a>
            <h3 className="mb0 h5">{title}</h3>
          </a>
        </Link>
        <p>{excerpt}</p>
      </div>
      <div className="small-4 medium-2 anchor">
        <div className="sticky">
          <Link href="/">
            <a>
              <Image {...image} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionHorizontal;
