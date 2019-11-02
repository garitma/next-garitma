import Link from 'next/link'
import GaritmicConfig from '../../garitmic.config.json'

export default class ModuleCTA extends React.Component {
    render() {

        const { document } = this.props

        return (
            <div className="mod">
                <div className="mod mod-detail valign vfluid halo">
                    <Link href="/categorias/[type]" as={`/categorias/${document}`}>
                        <a className="button-link h4 container">
                            Ver más
                        </a>
                    </Link>
                </div>
            </div>
        )
    }
}