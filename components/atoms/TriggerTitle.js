import Link from "next/link";
import { RichText } from "prismic-reactjs";

export default class TriggerTitle extends React.Component {
  render() {
    const { document } = this.props;

    return (
      <Link href="/[type]/[uid]" as={`/${document.type}/${document.uid}`}>
        <a className="mod-title valign interactive">
          {RichText.asText(document.data.title)}
        </a>
      </Link>
    );
  }
}
