import React from 'react'
import MenuBar from './MenuBar'
import Footer from './Footer'
import PageLoader from './PageLoader'



function Layout({ children }) {
    return (
        <>
        {/* <PageLoader /> */}
            <MenuBar />
   
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
