import React from 'react'
import ServiceHeader from '../components/common/ServiceHeader'
import ServiceFeature from '../components/common/SeviceFeature'
import ServicePayment from '../components/common/ServicePayment'
import ServiceCard from '../components/common/ServiceCard'
import Reviews from '../components/Reviews'
import Free from '../components/Free'
import Head from 'next/head'

function Ecommerce() {
    let header = {
      img: "/images/services/ecommerce-hero.png",
        headerTitle: "e-commerce software",
        headerSubTitle: "By integrating your POS system with your e-commerce platform, you can create a unified and efficient retail ecosystem.",
        headerText: "It"
    }

    let payment ={
      img: "/images/services/ecommerce-payment.png",
      paymentTitle: "Why Should You Get Our E-commerce POS Software?",
      paymentSubTitle:"POS integration provides a scalable solution that can accommodate the growth of your business. As you expand your online presence or open additional physical stores, the integration ensures seamless data flow, centralized management, and consistent customer experiences across all channels."
  }

  let card = {
    cardTitle1: "Inventory Synchronization",
    cardSubTitle1: "Integration ensures that your inventory levels are accurately synchronized between your physical store and online store. When a product is sold in-store or online, the inventory is automatically updated in real-time, preventing overselling and stockouts. This helps provide a consistent shopping experience for customers across all channels.",
    cardTitle2: "Unified Product Catalog",
    cardSubTitle2: " With POS integration, you can manage a single product catalog that is shared across your physical store and online store. Any changes to product details, pricing, or availability are reflected instantly across both platforms. This eliminates the need for manual updates and reduces the risk of discrepancies or errors.",
    cardTitle3: "Centralized Order Management",
    cardSubTitle3: "Orders placed through your e-commerce platform are seamlessly integrated into your POS system. This allows you to manage and fulfill online orders using the same processes and resources as your in-store sales. It streamlines order processing, reduces duplication of efforts, and ensures efficient order fulfillment.",
    cardTitle4: "Simplified Reporting and Analytics",
    cardSubTitle4: "POS integration provides comprehensive reporting and analytics by consolidating data from both online and offline sales channels. You can analyze sales performance, customer behavior, and inventory insights across all channels in one centralized system. This helps you make data-driven decisions and identify opportunities for growth.",
    cardTitle5: "Streamlined Inventory Management",
    cardSubTitle5: "Integration simplifies inventory management by automatically updating stock levels when a sale is made, regardless of the sales channel. It eliminates the need for manual adjustments and provides accurate and up-to-date information about product availability. This reduces the risk of overselling or disappointing customers with out-of-stock items.",
    cardTitle6: "Efficient Order Fulfillment",
    cardSubTitle6: "Integration enables efficient order fulfillment by automatically routing online orders to the nearest store with available stock. This allows for faster delivery or in-store pickup options, reducing shipping costs and delivery times. It optimizes inventory utilization across multiple locations and enhances customer satisfaction.",
  }
  const words= ["improves inventory management", "enhances customer experiences","enables data-driven decision",]
  return (
    <div>
      <Head>
        <title>Best inventory management software for ecommerce | DokanE</title>
        <meta
          name="description"
          content="Keep your online store running like a well-oiled machine with the help of one of the best ecommerce inventory management software. Stay ahead of the competition"
          key="desc"
        />
        <link rel="canonical" href="https://dokanepos.com/e-commerce" key="canonical" />
        <meta property="og:site_name" content="DokanE POS" />
        <meta property="og:title" content="Best inventory management software for ecommerce | DokanE" />
        <meta property="og:url" content="https://dokanepos.com/e-commerce.html" />
        <meta property="og:image" content="https://dokanepos.com/images/link-img/ecommerce-hero.png" />
        <meta property="og:image:width" content="138" />
        <meta property="og:image:height" content="60" />
        <meta property="og:image:alt" content="Dokane POS" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Keep your online store running like a well-oiled machine with the help of one of the best ecommerce inventory management software. Stay ahead of the competition" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DokanEPOS" />
        <meta name="twitter:title" content="Best inventory management software for ecommerce | DokanE" />
        <meta name="twitter:description" content="Keep your online store running like a well-oiled machine with the help of one of the best ecommerce inventory management software. Stay ahead of the competition" />
        <meta name="twitter:image" content="https://dokanepos.com/images/link-img/ecommerce-hero.png" />
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

export default Ecommerce
