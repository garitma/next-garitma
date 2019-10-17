import Carousel from 'react-multi-carousel';


export default class CarouselSingle extends React.Component {
    render() {

        const { children } = this.props

        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
                partialVisibilityGutter: 26
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                partialVisibilityGutter: 26
            },
            tablet: {
                breakpoint: { max: 1155, min: 767 },
                items: 2,
                partialVisibilityGutter: 26
            },
            mobile: {
                breakpoint: { max: 767, min: 0 },
                items: 1,
                partialVisibilityGutter: 26
            },
        };

        return (
            <Carousel
                responsive={responsive}
                ssr={true}
                partialVisbile={true}
                draggable={true}
                swipeable={true}
            >
                {children}
            </Carousel>
        )
    }
}