import { RichText } from 'prismic-reactjs'


export default class SliceCarousel extends React.Component {

    render() {

        const { slice, children } = this.props

        return (
            <section className={slice.color_class}>
                <div className="halo">
                    <div className="layer">
                        <div className="pad centertxt">
                            <h2 className="h1 light mt0">
                                {RichText.asText(slice.headline)}
                            </h2>
                            <div className="aureole field feature-first">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}