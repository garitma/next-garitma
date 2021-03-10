import Link from "next/link";
import Image from "next/image";
import Section from "aura-design-system/core/section";
import Grid from "aura-design-system/core/grid";

const PageBodyIntro = ({ data, ...props }) => {
  return (
    <Section
      container="smesh"
      color={data.primary.column_gallery_color_class}
      {...props}
    >
      <Grid>
        {data.fields.map((item, index) => {
          return (
            <div key={index}>
              <div className="mod zoom">
                <Link href={item?.column_gallery_link_item.url}>
                  <a target={item?.column_gallery_link_item?.target}>
                    <Image
                      src={item.column_gallery_image.url}
                      width={650}
                      height={330}
                      alt={item.column_gallery_image.alt}
                    />
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </Grid>
    </Section>
  );
};

export default PageBodyIntro;
