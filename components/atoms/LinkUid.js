import Link from 'next/link'
import GaritmicConfig from '../../garitmic.config.json'

export default class LinkUid extends React.Component {
    render() {

        const { document } = this.props

        return (
            <Link href="/[uid]" as={`/${document.uid}`}>
                <a className="button-link">
                    {GaritmicConfig.types[document.type].cta}
                </a>
            </Link>
        )
    }
}