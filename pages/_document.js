import React from 'react';

import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return <Html lang='en'>
            <Head>
                <link rel='preload' href='/public/fonts/Pattaya-Regular.ttf' as='font' crossOrigin='anonymous'></link>
            </Head>
            <body>
                <Main></Main>
                <NextScript />
            </body>
        </Html>
    }
}

export default MyDocument