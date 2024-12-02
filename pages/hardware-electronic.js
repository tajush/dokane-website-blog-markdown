import React from 'react'
import ServiceHeader from '../components/common/ServiceHeader'
import ServiceFeature from '../components/common/SeviceFeature'
import ServicePayment from '../components/common/ServicePayment'
import ServiceCard from '../components/common/ServiceCard'
import Reviews from '../components/Reviews'
import Free from '../components/Free'
import Head from 'next/head'

function HardwareElectronic() {
    let header = {
      img: "/images/services/electronic-hero.png",
        headerTitle: "Hardware electronic software",
        headerSubTitle: "We prioritize the security and confidentiality of your business data. Our software incorporates robust security measures, including user access controls, data encryption, and regular backups.",
        headerText: "Experience"
    }

    let payment ={
      img: "/images/services/electronic-payment.png",
      paymentTitle: "Why Should You Get Our Hardware POS Software?",
      paymentSubTitle:"Streamline your operations, optimize inventory management, and gain valuable insights to drive the success of your hardware and electronics retail store. Contact us today to schedule a demo and discover how our software can transform your shop management."
  }

  let card = {
    cardTitle1: "Inventory Management",
    cardSubTitle1: "Take control of your hardware and electronics inventory with ease. Our software enables you to track stock levels, manage product variations, monitor serial numbers, and generate alerts for low stock or discontinued items. This ensures that you have the right products in stock, minimizes stockouts, and reduces carrying costs.",
    cardTitle2: "Product Catalog and Pricing",
    cardSubTitle2: " Easily manage your extensive range of hardware and electronics products. Our DokanE software allows you to organize products by categories, brands, and specifications. You can update product information, set pricing rules, and apply bulk price changes. This ensures consistency and accuracy across your entire product range.",
    cardTitle3: "Point of Sale (POS)",
    cardSubTitle3: "Streamline the checkout process and provide a seamless shopping experience for your customers. Our POS module integrates with barcode scanners, receipt printers, and payment terminals, allowing for fast and accurate transactions. It handles multiple payment methods, discounts, and promotions, simplifying the sales process for your staff and customers.",
    cardTitle4: "Customer Management",
    cardSubTitle4: "Build strong relationships with your customers and enhance their experience. Our software helps you maintain detailed customer profiles, track purchase history, and manage loyalty programs. You can personalize interactions, offer targeted promotions, and provide excellent customer service based on individual preferences and needs.",
    cardTitle5: "Purchase and Supplier Management",
    cardSubTitle5: "Streamline your procurement process and maintain strong relationships with suppliers. Our software facilitates the management of purchase orders, tracks deliveries, handles returns, and ensures timely replenishment. You can also maintain a supplier database, negotiate pricing, and monitor supplier performance to optimize your supply chain.",
    cardTitle6: "Reporting and Analytics",
    cardSubTitle6: "Make data-driven decisions with comprehensive reporting and analytics capabilities. Our software generates reports on sales, inventory, profitability, customer behavior, and more. These insights help you identify trends, analyze product performance, optimize pricing strategies, and make informed business decisions.",
  }
  const words= ["efficiency", "accuracy","privacy"]
  return (
    <div>
      <Head>
        <title>Best POS software for hardware & electronic Shop | DokanE</title>
        <meta
          name="description"
          content="Discover DokanE POS software for hardware and electronic shops. Get real-time analytics, inventory tracking, and more with our top-rated POS software."
          key="desc"
        />
        <link rel="canonical" href="https://dokanepos.com/hardware-electronic" key="canonical" />
        <meta property="og:site_name" content="DokanE POS" />
        <meta property="og:title" content="Best POS software for hardware & electronic Shop | DokanE" />
        <meta property="og:url" content="https://dokanepos.com/hardware-electronic.html" />
        <meta property="og:image" content="https://dokanepos.com/images/link-img/electronic-hero.png" />
        <meta property="og:image:width" content="138" />
        <meta property="og:image:height" content="60" />
        <meta property="og:image:alt" content="Dokane POS" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Discover DokanE POS software for hardware and electronic shops. Get real-time analytics, inventory tracking, and more with our top-rated POS software." />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DokanEPOS" />
        <meta name="twitter:title" content="Best POS software for hardware & electronic Shop | DokanE" />
        <meta name="twitter:description" content="Discover DokanE POS software for hardware and electronic shops. Get real-time analytics, inventory tracking, and more with our top-rated POS software." />
        <meta name="twitter:image" content="https://dokanepos.com/images/link-img/electronic-hero.png" />
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

export default HardwareElectronic
