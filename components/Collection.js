import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RichText, Date } from "prismic-reactjs";

import GLOBAL from "garitmic.config.json";

const Collection = ({ title, featured_img, date, pathname, slug }) => (
  <div className="halo mod">
    <div className="layer small-4">
      <Link
        href={{
          pathname: pathname,
          query: { uid: slug },
        }}
      >
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
        <Link
          href={{
            pathname: pathname,
            query: { uid: slug },
          }}
        >
          <a className="h6 layer">{RichText.asText(title)}</a>
        </Link>
        <time className="layer">
          <small>
            {Intl.DateTimeFormat(GLOBAL.lang, GLOBAL.dateFormatS).format(
              Date(date)
            )}
          </small>
        </time>
      </div>
    </div>
  </div>
);

export default Collection;
