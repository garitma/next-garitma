import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { RichText } from 'prismic-reactjs'

const Post = (props) => {
    const router = useRouter()
    const { uid } = router.query
    const post = props.post

    return <Layout>
        <div className="blog-post-title">
            <h1>Post: {uid}</h1>
        </div>
    </Layout>
}

export default Post


