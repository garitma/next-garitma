import Link from "next/link";
import { Footer, Grid, Icon } from "aura-design-system";
import { RichText } from "prismic-reactjs";

const MyFooter = ({ document }) => {
  return (
    <Footer>
      <Grid col="two">
        <div className="one smosh">
          <div className="centertxt-small">
            <div className="nav-list">
              <div className="item logo">
                <Icon className={document?.secundary_logo} />
              </div>
            </div>
            <span className="aura" />
            <div>
              <Icon className={document?.third_logo} />
            </div>
          </div>
          <p className="centertxt-small">
            {RichText.asText(document?.copy_right)}
          </p>
          {document?.footer_links && (
            <ul className="nav-list">
              {document?.footer_links.map((item, index) => (
                <li key={index} className="item">
                  <a href={item.link.url} target="_blank" rel="noopener">
                    {RichText.asText(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="two smosh">
          {document?.footer_links_rs && (
            <ul className="nav-list halign">
              {document?.footer_links_rs.map((item, index) => (
                <li className="item" key={index}>
                  <a
                    href={item?.link.url}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Abrir ${item?.icon}`}
                  >
                    <Icon sprite={item?.icon} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Grid>
    </Footer>
  );
};

export default MyFooter;
