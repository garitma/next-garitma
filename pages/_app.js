import App, { Container } from 'next/app'
import React from 'react'
import { Client } from '../api/prismic'

export default class extends App {
    static async getInitialProps({ Component, router, ctx, req }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        const layout = await Client(req).getSingle('layout')

        return { pageProps, layout }
    }

    render() {
        const { Component, pageProps, layout } = this.props
        return (
            <Container>
                <Component {...Object.assign(pageProps, { layout })} />
            </Container>
        )
    }
}
