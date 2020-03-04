import Link from 'next/link'

export default class ModalClose extends React.Component {
    render() {
        const { onClose } = this.props


        return (
            <div className="navbar">
                <div className="nav-wrapper">
                    <ul className="nav-list">
                        <li className="item logo">
                                <Link href='/' as="/">
                                    <a onClick={onClose} aria-label="Logo Garitma">
                                        <div className="glyphsSprite logo" />
                                    </a>
                                </Link>
                        </li>
                        <li className="item">
                            {onClose &&
                                <a onClick={onClose}><div className="glyphsSprite close point pin" /></a>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}