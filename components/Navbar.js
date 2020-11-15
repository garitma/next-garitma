import Link from "next/link";
import { Navbar, Header, Menu, Icon, Button } from "aura-design-system";

const MyNavbar = ({ text, data }) => {
  return (
    <>
      <Navbar>
        <ul className="nav-list">
          <li className="item logo">
            <Link href="/">
              <a aria-label="Logo">
                <Icon className={data?.logo} />
              </a>
            </Link>
          </li>
          <li className="item"></li>
        </ul>
      </Navbar>
      <Header
        text={text}
        style={{ backgroundImage: `url(${data?.subheader_cover?.url})` }}
      >
        <Menu container="flowx wall-pad">
          {data?.header_menu.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={
                    (item.header_link_menu_pathname && {
                      pathname: item.header_link_menu_pathname,
                      query: { uid: item.header_menu_link_item?._meta?.uid },
                    }) ||
                    (item.header_menu_link_item?.__typename ===
                      "_ExternalLink" &&
                      item.header_menu_link_item?.url) ||
                    `/${item.header_menu_link_item?._meta?.uid}` ||
                    "/"
                  }
                  passHref
                >
                  <Button
                    mode="menu"
                    target={item.header_menu_link_item?.target}
                    rel={
                      item.header_menu_link_item?.__typename === "_ExternalLink"
                        ? "noopener"
                        : ""
                    }
                    label
                    link
                  >
                    {item.header_link_menu_text}
                  </Button>
                </Link>
              </li>
            );
          })}
        </Menu>
      </Header>
    </>
  );
};

export default MyNavbar;
