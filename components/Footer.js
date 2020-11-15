import Link from "next/link";
import { Footer, Grid, Icon } from "aura-design-system";

const MyFooter = ({ data }) => {
  return (
    <Footer>
      <Grid col="two">
        <div className="one smosh">
          <div className="centertxt-small">
            <Icon className={data?.footer_logo} />
            <div className="">
              <Icon className={data?.footer_secondary_logo} />
            </div>
          </div>
          <p className="centertxt-small">{data?.copy_right[0].text}</p>
          <ul className="nav-list">
            {data?.footer_menu.map((item, index) => {
              return (
                <li key={index} className="item">
                  <Link href={`/${item.footer_menu_link_item._meta.uid}`}>
                    <a>{item.footer_link_menu_text[0].text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="two smosh">
          <ul className="nav-list halign">
            {data?.footer_follow_menu.map((item, index) => {
              return (
                <li className="item" key={index}>
                  <a
                    href={item?.footer_follow_link.url}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Open ${item?.footer_follow_icon}`}
                  >
                    <Icon sprite={item?.footer_follow_icon} />
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="nav-list halign">
            <li className="item">
              <Link href="/contacto">
                <a>Información de contacto</a>
              </Link>
            </li>
          </ul>
        </div>
      </Grid>
    </Footer>
  );
};

export default MyFooter;
