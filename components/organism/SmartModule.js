import Module from '../molecules/Module'

export default class SmartModule extends React.Component {

    render() {
        const { document, onClickPost } = this.props

        if (document.type === 'frases') {
            return (
                <>
                    <Module document={document} modquote="true" classModifier="valign vfluid mod">
                        <div data-wio-id={document.id} />
                    </Module>
                </>
            )
        }

        return (
            <>
                <Module document={document} modcontent="true" triggermedia="true" triggertitle="true" onClickPost={onClickPost}>
                    <div data-wio-id={document.id} />
                </Module>
            </>
        )
    }
}