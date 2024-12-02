import React from 'react'
import TermsConditions from '../../components/TermsConditions'
import Head from 'next/head'

const Index = () => {
    return (
        <>
        <Head>
            <title>Terms of use of DokanE POS software</title>
            <meta
            name="description"
            content="Before using DokanE POS software, read through our transparent, concise terms of use to see how we ensure a secure and fair experience for all users."
            key="desc"
            />
           

            <link rel="canonical" href="https://dokanepos.com/terms" key="canonical" />
            <meta property="og:site_name" content="DokanE POS" />
            <meta property="og:title" content="Terms of use of DokanE POS software" />
            <meta property="og:url" content="https://dokanepos.com/terms.html" />
            <meta property="og:image" content="https://dokanepos.com/images/fb-open-graph.png" />
            <meta property="og:image:width" content="138" />
            <meta property="og:image:height" content="60" />
            <meta property="og:image:alt" content="Dokane POS" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Before using DokanE POS software, read through our transparent, concise terms of use to see how we ensure a secure and fair experience for all users." />
            <meta property="og:locale" content="en_GB" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@DokanEPOS" />
            <meta name="twitter:title" content="Terms of use of DokanE POS software" />
            <meta name="twitter:description" content="Before using DokanE POS software, read through our transparent, concise terms of use to see how we ensure a secure and fair experience for all users." />
            <meta name="twitter:image" content="https://dokanepos.com/images/fb-open-graph.png" />
        </Head>
            <TermsConditions />
        </>
    )
}

export default Index
