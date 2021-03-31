import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

const ModuleQuote = ({ document }) => {
  return (
    <div className="mod aura valign centertxt">
      <blockquote>{RichText.asText(document.data.title)}</blockquote>
    </div>
  );
};

export default ModuleQuote;
