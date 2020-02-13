import Module from '../molecules/Module'

export default class SmartModule extends React.Component {

    render() {
        const { document, onClickPost } = this.props

        if (document.type === 'frases') {
            return (
                <>
                    <Module document={document} modtype moddate modquote="true" classModifier="valign vfluid mod centertxt">
                        <div data-wio-id={document.id} />
                    </Module>
                </>
            )
        }

        return (
            <>
                <Module document={document} moddate modtype modcontent triggermedia triggertitle onClickPost={onClickPost}>
                    <div data-wio-id={document.id} />
                </Module>
            </>
        )
    }
}