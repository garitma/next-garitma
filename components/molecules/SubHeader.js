export default class SubHeader extends React.Component {
    render() {
        const { text } = this.props
        return (
            <div className='SubHeader'>
                <div className='halo smash'>
                    <h1 className='content-center centertxt'>{text}</h1>
                </div>
            </div>
        );
    }

}
