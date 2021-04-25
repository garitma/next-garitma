import { useLayoutEffect, useRef } from "react";
import Section from "aura-design/section";
import { ReactCusdis } from "react-cusdis";

import { useScript } from "@utils/useScript";

const ArticleComment = ({ title, id, uid, path }) => {
  useScript("https://cusdis.com/js/widget/lang/es.js");

  return (
    <Section container="smash">
      <h3>Cajita de comentarios</h3>
      <ReactCusdis
        attrs={{
          host: "https://cusdis.com",
          appId: "29de8be7-c3b2-4a70-8554-2e32de338327",
          pageId: id,
          pageTitle: uid,
          pageUrl: `https://garitma.com/${path}/${uid}`,
        }}
      />
    </Section>
  );
};

export default ArticleComment;
