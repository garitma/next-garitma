import { useLayoutEffect, useRef } from "react";
import Section from "aura-design/section";
import { useScript } from "@utils/useScript";

const ArticleComment = ({ title, id, uid, path }) => {
  const { loaded, error } = useScript("https://cusdis.com/js/cusdis.es.js");
  const cudis = useRef(null);

  useLayoutEffect(() => {
    if (loaded) {
      cudis.current.innerHTML = "";
      window.renderCusdis(cudis.current);
    }
  }, [id]);

  if (error) {
    return <></>;
  }

  return (
    <Section container="smash">
      <h3>Cajita de comentarios</h3>
      <div
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="29de8be7-c3b2-4a70-8554-2e32de338327"
        data-page-id={id}
        data-page-url={`https://garitma.com/${path}/${uid}`}
        data-page-title={uid}
        ref={cudis}
      />
    </Section>
  );
};

export default ArticleComment;
