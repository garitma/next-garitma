import Module from '../molecules/Module'

export default class SmartModule extends React.Component {

    render() {
        const { document } = this.props

        if (document.type === 'frases') {
            return (
                <div className="smartmodule mod valign">
                    <Module document={document} modquote="true" modtitle="false" modmedia="false" modtitle="false" linkuid="false" linktype="false" />
                    <div data-wio-id={document.id} />
                </div>
            )
        }

        return (
            <div className="smartmodule mod">
                <Module document={document} linkuid="false" linktype="false" />
                <div data-wio-id={document.id} />
            </div>
        )
    }
}