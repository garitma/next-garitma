import { RichText } from 'prismic-reactjs'


export default class Section extends React.Component {

    render() {

        const { slice, children } = this.props

        return (
            <section className={slice.color_class}>
                <div className="smash">
                <div className="halo">
                    <div className="layer">
                        <div className="pad">
                            <div className="aureole one">
                                {children}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}