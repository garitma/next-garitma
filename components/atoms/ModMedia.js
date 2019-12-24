import Link from 'next/link'

export default class ModMedia extends React.Component {
    render() {

        const { document } = this.props

        return (
            <Link href="/[uid]" as={`/${document.uid}`}>
                <a>
                    <div className="mod-media zoom">
                        <img alt={document.data.featured_img.alt} srcSet={`${document.data.featured_img.url}&w=640&dpr=1 640w,${document.data.featured_img.url}&w=750&dpr=1 750w, ${document.data.featured_img.url}&w=1080&dpr=1 1080w`} src={document.data.featured_img.url} />
                    </div>
                </a>
            </Link>
        )
    }
}