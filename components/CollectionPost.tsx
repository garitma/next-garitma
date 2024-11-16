import { PrismicNextImage } from "@prismicio/next";
import { isFilled, Content } from "@prismicio/client";

import { PrismicNextLink } from "@prismicio/next";
import { formatDate } from "@/utils/data-view";

type CollectionPostProps = {
  doc: Content.PostDocument;
};

const CollectionPost = ({ doc }: CollectionPostProps) => {
  return (
    <div
      className="relative border border-black/20 border-solid border-t-0 border-l-0 border-r-0 border-b-1"
      {...doc}
    >
      {isFilled.keyText(doc.data.title) && (
        <PrismicNextLink
          href={doc.url}
          className="transform transition duration-500 ease-in-out group flex hover:underline"
        >
          <span className="h6 py-1">{doc.data.title} </span>
          <small className="absolute right-0 top-0 bottom-0 valign">{formatDate(doc.data.date)}</small>
          {isFilled.image(doc.data.image) && (
            <div className="transition duration-500 ease-in-out bg-white opacity-0 group-hover:opacity-100 flex justify-center ml-2">
              <PrismicNextImage
                field={doc.data.image}
                className="inline-block w-auto h-4 px-2" // Image styles
                height={300}
              />
            </div>
          )}
        </PrismicNextLink>
      )}
    </div>
  );
};

export default CollectionPost;
