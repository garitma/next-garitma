import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

const QuoteModule = ({ item }) => {
  return (
    <div className="mod aura valign centertxt">
      <blockquote>{RichText.asText(item.data.title)}</blockquote>
    </div>
  );
};

export default QuoteModule;
