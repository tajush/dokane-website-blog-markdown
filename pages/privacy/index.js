import React from 'react'
import PrivacyPolicy from '../../components/PrivacyPolicy'
import Head from 'next/head'


const Index = () => {
    return (
        <div>
        <Head>
            <title>Privacy policy of DokanE POS software</title>
            <meta
            name="description"
            content=" Our POS software follows strict privacy policies to ensure the confidentiality and security of your personal information. Read more about our privacy policy."
            key="desc"
            />
            <link rel="canonical" href="https://dokanepos.com/privacy" key="canonical" />
            <meta property="og:site_name" content="DokanE POS" />
            <meta property="og:title" content="Privacy policy of DokanE POS software" />
            <meta property="og:url" content="https://dokanepos.com/privacy.html" />
            <meta property="og:image" content="https://dokanepos.com/images/fb-open-graph.png" />
            <meta property="og:image:width" content="138" />
            <meta property="og:image:height" content="60" />
            <meta property="og:image:alt" content="Dokane POS" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Our POS software follows strict privacy policies to ensure the confidentiality and security of your personal information. Read more about our privacy policy." />
            <meta property="og:locale" content="en_GB" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@DokanEPOS" />
            <meta name="twitter:title" content="Privacy policy of DokanE POS software" />
            <meta name="twitter:description" content="Our POS software follows strict privacy policies to ensure the confidentiality and security of your personal information. Read more about our privacy policy." />
            <meta name="twitter:image" content="https://dokanepos.com/images/fb-open-graph.png" />
        </Head>
            <PrivacyPolicy />
        </div>
    )
}

export default Index;
