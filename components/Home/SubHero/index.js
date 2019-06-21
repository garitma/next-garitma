export default class SubHero extends React.Component {

    render() {
        const { children } = this.props
        return (
            <ul className='subhero'>
                <div className='coat pad'>
                    {children}
                </div>
            </ul>
        )
    }
}