export default class SubHeader extends React.Component {
    render() {
        const { subtitle } = this.props
        return (
            <div className='SubHeader'>
                <div className='coat smash'>
                    <h1 className='content-center SubHeader-title'>{subtitle}</h1>
                </div>
            </div>
        );
    }

}
