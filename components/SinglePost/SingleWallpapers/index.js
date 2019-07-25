import moment from 'moment'
import Link from 'next/link'

import { RichText } from 'prismic-reactjs'


export default class SingleWallpapers extends React.Component {
    render() {
        const { document } = this.props
        return (
            <div className='SingleWallpapers'>

                <div className='module' style={{ background: `${document.data.color}` }} >
                    <div className='module-img smush'>
                        <img className='responsive-image' src={document.data.featured_img.url} />
                    </div>
                </div>

                <div className='smash'>
                    <div className='download-module pad'>
                        <div className='download-header'>
                            <h1 className='download-module-title'>{RichText.asText(document.data.title)}</h1>


                            <div className='single-post-autor-date'>
                                <span>{moment(document.date).locale("es").format('LL')}</span>
                            </div>
                        </div>
                        <div className='download-module-content'>
                            <div className='coat'>
                                <div className='block small-12 medium-5 module-img-container'>
                                    <a href={document.data.download} target="_bank">
                                        <img className='responsive-image' src={document.data.featured_img.square.url} />
                                    </a>
                                </div>
                                <div className='block small-12 medium-7 download-info'>
                                    <div className='inside-pad'>

                                        <div className='module-description'>
                                            {RichText.render(document.data.content)}
                                        </div>

                                        <a href={document.data.download} target="_bank" className='button cta-download' >
                                            Descargar
                                    </a>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>



            </div>
        )
    }
}
