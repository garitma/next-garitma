import Section from "aura-design/section";
import Link from "next/link";

const Pagination = ({ archives, archiveType = "archivos" }) => (
  <>
    {archives.total_results_size > archives.results_per_page && (
      <Section color="accents-1" container="smosh">
        <ul className="nav-list">
          {archives.prev_page ? (
            <li className="items">
              <Link
                href={
                  archives.page === 2
                    ? `/${archiveType}`
                    : `/${archiveType}/pagina/[page]`
                }
                as={
                  archives.page === 2
                    ? `/${archiveType}`
                    : `/${archiveType}/pagina/${archives.page - 1}`
                }
              >
                <a aria-label="No hay página anterior" className="button-link">
                  <div className="glyphsSprite arrowLeft"></div>
                </a>
              </Link>
            </li>
          ) : (
            <li className="items">
              <a aria-label="No hay página anterior" className="button-link">
                <div className="glyphsSprite arrowLeft disabled"></div>
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
                href={`/${archiveType}/pagina/[page]`}
                as={`/${archiveType}/pagina/${archives.page + 1}`}
              >
                <a aria-label="Página siguiente" className="button-link">
                  <div className="glyphsSprite arrowRight"></div>
                </a>
              </Link>
            </li>
          ) : (
            <li className="items">
              <a aria-label="No hay página anterior" className="button-link">
                <div className="glyphsSprite arrowRight disabled"></div>
              </a>
            </li>
          )}
        </ul>
      </Section>
    )}
  </>
);

export default Pagination;
