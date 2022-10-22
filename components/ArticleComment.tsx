import { useEffect, useRef } from "react";
import Section from "aura-design/section";
import { useScript } from "@utils/script";

declare global {
  interface Window {
    renderCusdis: any;
  }
}

const ArticleComment = ({ title, id, path }) => {
  const { loaded, error } = useScript("https://cusdis.com/js/cusdis.es.js");
  useScript("https://cusdis.com/js/widget/lang/es.js");
  const cudis = useRef(null);

  useEffect(() => {
    if (loaded) {
      cudis.current.innerHTML = "";
      window.renderCusdis(cudis.current);
    }
  }, [id, loaded]);

  if (error) {
    return <></>;
  }

  return (
    <div className="">
    <div
      id="cusdis_thread"
      data-host="https://cusdis.com"
      data-app-id="29de8be7-c3b2-4a70-8554-2e32de338327"
      data-page-id={id}
      data-page-url={path}
      data-page-title={title}
      ref={cudis}
      data-theme="lightc"
    />
    </div>
  );
};

export default ArticleComment;
