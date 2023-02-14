import Section from "@aura-design/system/section";
import Link from "next/link";


const Pagination = ({ archives, path }) => (
  <>
    {archives.total_results_size > archives.results_per_page && (
      <Section container="smosh">
        <ul className="nav-list">
          {archives.prev_page ? (
            <li className="items">
              <Link
                href={
                  archives.page === 2
                    ? `/${path}`
                    : `/${path}/pagina/[page]`
                }
                as={
                  archives.page === 2
                    ? `/${path}`
                    : `/${path}/pagina/${archives.page - 1}`
                }
              >
                <a aria-label="No hay página anterior" className="button-link">
                  <div className="icon arrowLeft"></div>
                </a>
              </Link>
            </li>
          ) : (
            <li className="items">
              <a aria-label="No hay página anterior" className="button-link">
                <div className="icon arrowLeft disabled"></div>
              </a>
            </li>
          )}
          <li className="items">
            <span>{archives.page}</span>
            <span className="wall-pad">de</span>
            <span>{archives.total_pages}</span>
          </li>
          {archives.next_page ? (
            <li className="items">
              <Link
                href={`/${path}/pagina/[page]`}
                as={`/${path}/pagina/${archives.page + 1}`}
              >
                <a aria-label="Página siguiente" className="button-link">
                  <div className="icon arrowRight"></div>
                </a>
              </Link>
            </li>
          ) : (
            <li className="items">
              <a aria-label="No hay página anterior" className="button-link">
                <div className="icon arrowRight disabled"></div>
              </a>
            </li>
          )}
        </ul>
      </Section>
    )}
  </>
);

export default Pagination;
