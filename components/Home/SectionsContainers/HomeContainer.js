export default class HomeContainer extends React.Component {
    render() {
        const { children, name } = this.props
        return (
            <ul className={name}>
                <div className="coat pad">
                    {children}
                </div>
            </ul>
        )
    }
}