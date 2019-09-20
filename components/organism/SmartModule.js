import Module from '../molecules/Module'

export default class SmartModule extends React.Component {

    render() {
        const { document, onClickPost } = this.props

        if (document.type === 'frases') {
            return (
                <div className="smartmodule mod valign">
                    <Module document={document} modquote="true" />
                    <div data-wio-id={document.id} />
                </div>
            )
        }

        return (
            <div className="smartmodule mod">
                <Module document={document} modcontent="true" triggermedia="true" triggertitle="true" onClickPost={onClickPost} />
                <div data-wio-id={document.id} />
            </div>
        )
    }
}