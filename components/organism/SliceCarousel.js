import CarouselSingle from '../molecules/CarouselSingle'
import { RichText } from 'prismic-reactjs'


export default class SliceCarousel extends React.Component {

    render() {

        const { slice, children } = this.props

        return (
            <section className={slice.color_class}>
                <div className="halo">
                    <div className="layer">
                        <div className="wall-pad centertxt">
                            <h2 className="h3">
                                {RichText.asText(slice.headline)}
                            </h2>
                        </div>
                    </div>
                </div>
                <CarouselSingle>
                    {children}
                </CarouselSingle>
            </section >
        )
    }
}