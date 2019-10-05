import Carousel from 'react-multi-carousel';


export default class CarouselSingle extends React.Component {
    render() {

        const { children } = this.props

        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
            },
            tablet: {
                breakpoint: { max: 1155, min: 767 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 767, min: 0 },
                items: 1,
            },
        };

        return (
            <Carousel
                responsive={responsive}
                ssr={true}
                centerMode={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {children}
            </Carousel>
        )
    }
}