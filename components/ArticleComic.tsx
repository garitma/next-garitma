import { useState } from "react";
import { RichText, Date } from "prismic-reactjs";
import Button from "aura-design/button";

import Image from "@components/Image";
import { API_LOCALE } from "@utils/constants";

const ArticleComic = ({ doc }) => {
  const [step, setStep] = useState(0);

  const hasNextStep = step < doc.gallery.length - 1;
  const hasPrevStep = step > 0;

  const handleOnNext = () => {
    setStep(step + 1);
  };
  const handleOnPrev = () => {
    setStep(step - 1);
  };

  return (
    <article>
      <div className="smash">
        <h2 className=" mounted">{RichText.asText(doc?.title || [])}</h2>
        <time itemProp="datePublished">
          {Intl.DateTimeFormat(API_LOCALE, {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(Date(doc.date))}
        </time>
        <div className="anchor">
          <Image
            src={doc.gallery[step].gallery_image.url}
            alt={doc.gallery[step].gallery_image.alt}
            aspectRatio="1:1"
            width={1140}
          />
          <div className=" aura">
            <Button
              mode="pill"
              isDisabled={!hasPrevStep}
              onClick={handleOnPrev}
            >
              <i className="icon arrowLeft" />
            </Button>
            <span className="aura" />
            <Button
              mode="pill"
              isDisabled={!hasNextStep}
              onClick={handleOnNext}
            >
              <i className="icon arrowRight" />
            </Button>
          </div>
        </div>
        <div className="aureole five fixed">
          {doc.gallery.map((item, index) => (
            <div className="pre-disabled zoom" key={index}>
              <a onClick={() => setStep(index)}>
                <Image
                  src={item.gallery_image.url}
                  alt={item.gallery_image.alt}
                  width={1140}
                  aspectRatio="1:1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ArticleComic;
