
export default class SubHeroContainer extends React.Component {

    render() {
        const { children } = this.props
        return (
            <li className='block small-12 medium-6 large-3'>
                <div className='coat inside-pad'>
                    {children}
                </div>
            </li>
        )
    }
}