import Link from 'next/link'
import GaritmicConfig from '../../garitmic.config.json'

export default class TriggerUid extends React.Component {
    render() {

        const { document, onClickPost } = this.props

        return (
            <a href={`/${document.uid}`} className="button-link" onClick={(event) => onClickPost(event, document)}>
                {GaritmicConfig.types[document.type].cta}
            </a>
        )
    }
}