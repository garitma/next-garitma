import Link from 'next/link'

export default class ModMedia extends React.Component {
    render() {

        const { document } = this.props

        return (
            <Link href="/[uid]" as={`/${document.uid}`}>
                <a>
                    <div className="mod-media zoom">
                        <img alt={document.data.featured_img.alt} srcSet={`${document.data.featured_img.url}&w=640 640w,${document.data.featured_img.url}&w=750 750w, ${document.data.featured_img.url} 1080w`} src={document.data.featured_img.url} />
                    </div>
                </a>
            </Link>
        )
    }
}