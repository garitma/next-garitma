import Link from 'next/link'
import GaritmicConfig from '../../garitmic.config.json'

export default class LinkType extends React.Component {
    render() {

        const { document } = this.props

        return (
            <Link href="/categorias/[type]" as={`/categorias/${document.type}`}>
                <a className="button-link">
                    {GaritmicConfig.types[document.type].type}
                </a>
            </Link>
        )
    }
}
