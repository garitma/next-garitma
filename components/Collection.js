import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import moment from "moment";

import GLOBAL from "garitmic.config.json";

const Collection = ({ title, featured_img, date, slug }) => (
  <div className="halo mod">
    <div className="layer small-4">
      <Link href="/poemas/[uid]" as={`/poemas/${slug}`}>
        <a aria-label={featured_img.alt}>
          <div className="mod zoom halo">
            <Image
              alt={featured_img.alt}
              src={featured_img.url}
              height={570}
              width={1140}
            />
          </div>
        </a>
      </Link>
    </div>
    <div className="layer small-8">
      <div className="aura halo">
        <Link href="/poemas/[uid]" as={`/poemas/${slug}`}>
          <a className="h6 layer">{RichText.asText(title)}</a>
        </Link>
        <time className="layer">
          <small>
            {moment(date)
              .locale(`${GLOBAL.lang}`)
              .format(`${GLOBAL.dateFormat}`)}
          </small>
        </time>
      </div>
    </div>
  </div>
);

export default Collection;
