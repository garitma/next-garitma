import Link from 'next/link'

export default class ModMedia extends React.Component {
    render() {

        const { document } = this.props

        return (
            <Link href="/[uid]" as={`/${document.uid}`}><a>
                <div className="mod-media zoom">
                    <img alt={document.data.featured_img.alt} srcSet={`${document.data.featured_img.url}&w=640&h=320&dpr=1&fit=crop 640w,${document.data.featured_img.url}&w=750&h=375&dpr=1&fit=crop 750w, ${document.data.featured_img.url}&w=1080&h=540&dpr=1&fit=crop 1080w`} src={`${document.data.featured_img.url}&w=1140&h=570&dpr=1&fit=crop`} />
                </div>
            </a></Link>
        )
    }
}