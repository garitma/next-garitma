import Link from 'next/link'

export default class Pagination extends React.Component {
    render() {
        const { document, root, string } = this.props
        return (
            <div className="">
                <div className="smosh">
                    <div className="">
                        <ul className="nav-list">
                            <li className="items">
                                {document.prev_page == null &&
                                    <a aria-label="No hay página anterior" className="button-link">
                                        <div className="glyphsSprite arrowLeft disable" />
                                    </a>
                                }
                                {document.prev_page != null && document.page == 2 &&
                                    <Link href={`/categorias/[type]${string}page=${Number(document.page) - 1}`} as={`${root}`}>
                                        <a aria-label="Página anterior" className="button-link">
                                            <div className="glyphsSprite arrowLeft" />
                                        </a>
                                    </Link>
                                }

                                {document.prev_page != null && document.page > 2 &&
                                    <Link href={`/categorias/[type]${string}page=${Number(document.page) - 1}`} as={`${root}${string}page=${Number(document.page) - 1}`} >
                                        <a aria-label="Página anterior" className="button-link">
                                            <div className="glyphsSprite arrowLeft" />
                                        </a>
                                    </Link>
                                }
                            </li>

                            <li className="items halo page-numbers">
                                <form method="get" id="paginationform" action={`${root}${string}`}>
                                    <input aria-label="Página actual" className="current-page" pattern="[0-9]*" inputMode="numeric" type="number" name="page" placeholder={document.page} min="1" max={document.total_pages} required />
                                </form> de {document.total_pages}

                            </li>
                            <li className="items">
                                {document.next_page == null &&
                                    <a aria-label="No hay página siguiente" className="button-link">
                                        <div className="glyphsSprite arrowRight disable" />
                                    </a>
                                }

                                {document.next_page != null &&
                                    <Link href={`/categorias/[type]${string}page=${Number(document.page) + 1}`} as={`${root}${string}page=${Number(document.page) + 1} `}>
                                        <a aria-label="Página siguiente" className="button-link">
                                            <div className="glyphsSprite arrowRight" />
                                        </a>
                                    </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}