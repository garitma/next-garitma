export default class Placeholder extends React.Component {
    render() {
        const { src, height } = this.props
        return (
            <div className='placeholder-image'>
                <img className="block" height={height} src={`${src}&w=60&h=57&fit=crop&crop=faces&blur=50`} />
            </div>
        );
    }

}
