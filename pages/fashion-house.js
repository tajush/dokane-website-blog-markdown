import React from 'react'
import ServiceHeader from '../components/common/ServiceHeader'
import ServiceFeature from '../components/common/SeviceFeature'
import ServicePayment from '../components/common/ServicePayment'
import ServiceCard from '../components/common/ServiceCard'
import Reviews from '../components/Reviews'
import Free from '../components/Free'
import Head from 'next/head'

function FashionHouse() {
    let header = {
      img: "/images/services/fashion-hero.png",
        headerTitle: "Fashion house management",
        headerSubTitle: "Experience the efficiency, accuracy, and improved customer service that our Fashion House Management Software brings to your business.",
        headerText: "Our software has"
    }

    let payment ={
      img: "/images/services/fashion-payment.png",
      paymentTitle: "Why Should You Get Our Fashion POS Software?",
      paymentSubTitle:"Our Fashion House POS Software seamlessly integrates with other business systems, such as accounting software, CRM tools, or supplier databases. It is scalable to accommodate the needs of single fashion houses or multiple locations, adapting to the growth of your business."
  }

  let card = {
    cardTitle1: "Effortless Inventory Management",
    cardSubTitle1: "Take control of your fashion house inventory effortlessly. Our software allows you to track stock levels, manage sizes, colors, and styles, and receive alerts for low stock items. This ensures you have the right products available, minimizes stockouts, and reduces carrying costs.",
    cardTitle2: "Simplified Product Catalog and Variations",
    cardSubTitle2: "Easily manage your fashion house product catalog. Our DokanE software enables you to organize products by categories, collections, and seasons. You can track product variations, manage style attributes, and update product information efficiently. This ensures consistency and accuracy across your entire range.",
    cardTitle3: "Streamlined Order Management",
    cardSubTitle3: "Simplify the order management process with our integrated system. Our software enables you to manage incoming orders, track order status, and streamline fulfillment processes. This ensures timely delivery, reduces errors, and enhances customer satisfaction.",
    cardTitle4: "Enhanced Customer Management",
    cardSubTitle4: " Build strong relationships with your customers and provide exceptional service. Our software helps you maintain detailed customer profiles, track purchase history, and manage customer preferences. Personalize interactions, offer tailored recommendations, and provide a seamless shopping experience.",
    cardTitle5: "Inventory Forecasting and Demand Planning",
    cardSubTitle5: "Stay ahead of market trends and optimize your inventory with our forecasting and demand planning features. Our software analyzes historical data, market trends, and customer behavior to help you make informed decisions about inventory replenishment and production.",
    cardTitle6: "Integrated Point of Sale (POS)",
    cardSubTitle6: "Provide a seamless shopping experience for your customers with our integrated POS system. Our software integrates with barcode scanners, receipt printers, and payment terminals, facilitating fast and accurate transactions. It handles multiple payment methods, discounts, and promotions, simplifying the sales process for your staff and customers.",
  }
  const words= ["robust security", "data protection","comprehensive reporting"]
  return (
    <div>
      <Head>
        <title>Best POS Software in Bangladesh for Fashion Houses | DokanE</title>
        <meta
          name="description"
          content="DokanE is the best fashion house POS software in Bangladesh, designed for fashion retailers to manage their business smoothly. Boost your profits in business."
          key="desc"
        />
        <link rel="canonical" href="https://dokanepos.com/fashion-house" key="canonical" />
        <meta property="og:site_name" content="DokanE POS" />
        <meta property="og:title" content="Best POS Software in Bangladesh for Fashion Houses | DokanE" />
        <meta property="og:url" content="https://dokanepos.com/fashion-house.html" />
        <meta property="og:image" content="https://dokanepos.com/images/link-img/fashion-hero.png" />
        <meta property="og:image:width" content="138" />
        <meta property="og:image:height" content="60" />
        <meta property="og:image:alt" content="Dokane POS" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="DokanE is the best fashion house POS software in Bangladesh, designed for fashion retailers to manage their business smoothly. Boost your profits in business." />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DokanEPOS" />
        <meta name="twitter:title" content="Best POS Software in Bangladesh for Fashion Houses | DokanE" />
        <meta name="twitter:description" content="DokanE is the best fashion house POS software in Bangladesh, designed for fashion retailers to manage their business smoothly. Boost your profits in business." />
        <meta name="twitter:image" content="https://dokanepos.com/images/link-img/fashion-hero.png" />
      </Head>
      <ServiceHeader header={header} words={words} />
      <ServiceFeature />
      <ServicePayment payment={payment} />
      <ServiceCard card={card} />
      <Reviews />
      <Free />
    </div>
  )
}

export default FashionHouse
