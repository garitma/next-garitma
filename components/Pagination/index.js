import Link from 'next/link'

export default class Pagination extends React.Component {
    render() {
        const { document, root, string } = this.props
        return (<div className="block">
            <div className="pagination-container">
                <div className="">
                    <ul className="nav-list">
                        <li className="items">
                            {document.prev_page == null &&
                                <a className="button-link">
                                    <div className="glyphsSprite arrowLeft disable" />
                                </a>
                            }
                            {document.prev_page != null && document.page == 2 &&
                                <Link href={`${root}${string}`}>
                                    <a className="button-link">
                                        <div className="glyphsSprite arrowLeft" />
                                    </a>
                                </Link>
                            }

                            {document.prev_page != null && document.page > 2 &&
                                <Link href={`${root}${string}page=${Number(document.page) - 1}`}>
                                    <a className="button-link">
                                        <div className="glyphsSprite arrowLeft" />
                                    </a>
                                </Link>
                            }
                        </li>

                        <li className="items page-numbers">
                            <span>
                                <form method="get" id="paginationform" action={`${root}`}>
                                    <input className="current-page" pattern="[0-9]*" inputMode="numeric" type="number" name="page" placeholder={document.page} min="1" max={document.total_pages} required />
                                </form>
                            </span>
                            <span>de</span> <span>{document.total_pages}</span>

                        </li>
                        <li className="items">
                            {document.next_page == null &&
                                <a className="button-link">
                                    <div className="glyphsSprite arrowRight disable" />
                                </a>
                            }

                            {document.next_page != null &&
                                <Link href={`${root}page=${Number(document.page) + 1} `}>
                                    <a className="button-link">
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