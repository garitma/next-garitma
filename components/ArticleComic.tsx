import { useState } from "react";
import { RichText } from "prismic-reactjs";
import Button from "aura-design/button";

import Image from "@components/Image";

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
        <h2>{RichText.asText(doc?.title || [])}</h2>
        <div className="anchor">
          <Button mode="link" isDisabled={!hasPrevStep} onClick={handleOnPrev}>
            <i className="icon arrowLeft" />
          </Button>
          <Button mode="link" isDisabled={!hasNextStep} onClick={handleOnNext}>
            <i className="icon arrowRight" />
          </Button>
          <Image
            src={doc.gallery[step].gallery_image.url}
            aspectRatio="1:1"
            width={1140}
          />
        </div>
        <div className="aureole five fixed">
          {doc.gallery.map((item, index) => (
            <div className="pre-disabled zoom">
              <a onClick={() => setStep(index)}>
                <Image
                  src={item.gallery_image.url}
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
