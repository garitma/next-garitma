import PageBodyIntro from "@slices/PageBodyIntro";
import PageBodyImage_gallery from "@slices/PageBodyImage_gallery";
import PageBodyBanner_note from "@slices/PageBodyBanner_note";
import PageBodySlide from "@slices/PageBodySlide";
import PageBodyHero_one from "@slices/PageBodyHero_one";
import PageBodyText from "@slices/PageBodyText";

const PageTemplate = ({ page }) => {
  return (
    <>
      {page.body.map((slice, index) => {
        switch (slice.__typename) {
          case "PageBodyImage_gallery":
            return <PageBodyImage_gallery data={slice} key={index} />;
          case "PageBodyIntro":
            return <PageBodyIntro key={index} data={slice} />;
          case "PageBodyHero_one":
            return <PageBodyHero_one key={index} data={slice} />;
          case "PageBodySlide":
            return <PageBodySlide key={index} data={slice} />;
          case "PageBodyBanner_note":
            return <PageBodyBanner_note key={index} data={slice} />;
          case "PageBodyText":
            return <PageBodyText key={index} data={slice} />;
          default:
            return;
        }
      })}
    </>
  );
};

export default PageTemplate;
