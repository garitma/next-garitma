export default class SubHeader extends React.Component {
    render() {
        const { text } = this.props
        return (
            <div className='SubHeader'>
                <div className='coat smash'>
                    <h1 className='content-center SubHeader-title'>{text}</h1>
                </div>
            </div>
        );
    }

}
