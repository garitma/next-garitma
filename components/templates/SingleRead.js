import moment from "moment";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import GaritmicConfig from "../../garitmic.config.json";
import SingleSeo from "../seo/SingleSeo";
import SingleAction from "../molecules/SingleActions";
import SubFooter from "../molecules/SubFooter";
import AuthorBox from "../molecules/AuthorBox";
import GallerySlide from "../molecules/GallerySlide";

export default class SingleRead extends React.Component {
  render() {
    const { document } = this.props;

    return (
      <>
        <SingleSeo document={document} />
        <article
          className="post"
          itemScope
          itemType="http://schema.org/CreativeWork"
        >
          <div className="pad hide-small" />
          <div className="pad-air" />
          <section className="sumary smash">
            <div className="pad">
              <div className="halo">
                <Link href="/[type]" as={`/${document.type}`}>
                  <a itemProp="genre">
                    <div className="halo">
                      <span className="purple wall-pad container">
                        {GaritmicConfig.types[document.type].name}
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
              <time itemProp="datePublished">
                {moment(document.data.date)
                  .locale(`${GaritmicConfig.lang}`)
                  .format(`${GaritmicConfig.dateFormat}`)}
              </time>
              <h1 itemProp="name"> {RichText.asText(document.data.title)}</h1>

              <p itemProp="abstract" className="h5 light">
                {RichText.asText(document.data.excerpt)}
              </p>
            </div>
          </section>
          <section className="feature">
            <div className="block-img smush">
              {document.type != "comics" && (
                <img
                  itemProp="image"
                  alt={document.data.featured_img.alt}
                  srcSet={`${document.data.featured_img.url}&w=640&h=320&dpr=1&fit=crop 640w,${document.data.featured_img.url}&w=750&h=375&dpr=1&fit=crop 750w, ${document.data.featured_img.url}&w=1080&h=540&dpr=1&fit=crop 1080w`}
                  src={`${document.data.featured_img.url}&w=1140&h=570&dpr=1&fit=crop`}
                />
              )}
              <SingleAction document={document} />
            </div>
          </section>
          <section className="content smash">
            <div itemProp="articleBody" className="pad h4 light centertxt">
              {RichText.render(document.data.content)}
              {document.type === "comics" && (
                <GallerySlide>
                  {document.data.gallery.map((document, index) => (
                    <div className="mod" key={index}>
                      <div className="mod-media">
                        <img
                          srcSet={`${document.gallery_image.url}&w=640&dpr=1 640w,${document.gallery_image.url}&w=750&dpr=1 750w, ${document.gallery_image.url}&w=1080&dpr=1 1080w`}
                          src={`${document.gallery_image.url}&w=1140&dpr=1`}
                          alt={document.gallery_image.alt}
                        />
                      </div>
                    </div>
                  ))}
                </GallerySlide>
              )}
              <div data-wio-id={document.id}></div>
            </div>
          </section>
          <section className="wall-pad">
            <AuthorBox />
          </section>
          <div className="pad" />
          <section className="relatedpost white">
            <SubFooter />
          </section>
        </article>

        <style jsx>{`
          .feature,
          .post {
            background-color: ${this.props.document.data.color || "#fafafa"};
          }
        `}</style>
      </>
    );
  }
}
