import React from 'react'
import ServiceHeader from '../components/common/ServiceHeader'
import ServiceFeature from '../components/common/SeviceFeature'
import ServicePayment from '../components/common/ServicePayment'
import ServiceCard from '../components/common/ServiceCard'
import Reviews from '../components/Reviews'
import Free from '../components/Free'
import Head from 'next/head'

function Jewellery() {
    let header = {
      img: "/images/services/jewellery-hero.png",
        headerTitle: "JEWELLERY POS SOFTWARE",
        headerSubTitle: "Experience the efficiency, accuracy, and improved customer service that our Jewelry Shop POS Software brings to your business. Streamline your sales processes, optimize inventory management, and gain valuable insights to drive the success of your jewellery retail store.",
        headerText: "We prioritize"
    }

    let payment ={
      img: "/images/services/jewellery-payment.png",
      paymentTitle: "Why Should You Get Our Jewellery POS Software?",
      paymentSubTitle:"Introducing our Jewelry Shop POS Software, a comprehensive solution designed specifically for jewelry retailers. Our software is tailored to streamline sales processes, manage inventory effectively, enhance customer service, and drive business growth."
  }

  let card = {
    cardTitle1: "Product Management",
    cardSubTitle1: "Easily manage your jewellery inventory with our software. You can categorize products by type, metal, gemstone, and other attributes. Update product information, track stock levels, and receive alerts for low stock items. This ensures you have the right products available, minimizes stockouts, and reduces carrying costs.",
    cardTitle2: "Point of Sale (POS)",
    cardSubTitle2: "Streamline your sales process with our integrated POS system. Our software supports barcode scanning and item look-up, enabling quick and accurate transactions. You can accept various payment methods, process exchanges and returns, and apply discounts or promotions seamlessly. This provides a smooth and efficient checkout experience for your customers.",
    cardTitle3: "Customer Management:",
    cardSubTitle3: "Build strong relationships with your customers and provide personalized service. Our software helps you maintain detailed customer profiles, track purchase history, and manage loyalty programs. You can offer targeted promotions, send personalized marketing messages, and provide exceptional customer service based on individual preferences and needs.",
    cardTitle4: "Inventory Tracking and Certification",
    cardSubTitle4: "Gain full visibility into your jewellery inventory. Our software tracks stock movements, provides real-time inventory updates, and generates reports on stock levels, sales performance, and product popularity. Additionally, you can manage certifications and documentation associated with specific pieces, ensuring compliance and authenticity.",
    cardTitle5: "Diamond and Gemstone Management",
    cardSubTitle5: " Efficiently manage your diamond and gemstone inventory. Our software allows you to track the 4Cs (carat, cut, color, clarity) for diamonds and the characteristics of different gemstones. You can store certifications, track origins, and provide accurate information to customers, enhancing transparency and trust.",
    cardTitle6: "Repair and Custom Order Management",
    cardSubTitle6: "Streamline your repair and custom order processes. Our software enables you to track repair jobs, manage customer requests, and monitor the status of custom orders. You can provide estimated completion dates, communicate updates to customers, and ensure smooth execution of these specialized services.",
  }
  const words= ["security", "confidentiality","regular backups"]
  return (
    <div>
       <Head>
        <title>Best jewelry Shop POS Software System in Bangladesh | DoaknE</title>
        <meta
          name="description"
          content=" DoaknE offers the best POS software system for jewelry shops in Bangladesh. Keep track of your sales and inventory with ease. Contact us today to start!"
          key="desc"
        />
        <link rel="canonical" href="https://dokanepos.com/jewellery" key="canonical"  />
        <meta property="og:site_name" content="DokanE POS" />
        <meta property="og:title" content="Best jewelry Shop POS Software System in Bangladesh | DoaknE" />
        <meta property="og:url" content="https://dokanepos.com/jewellery.html" />
        <meta property="og:image" content="https://dokanepos.com/images/link-img/jewellery-hero.png" />
        <meta property="og:image:width" content="138" />
        <meta property="og:image:height" content="60" />
        <meta property="og:image:alt" content="Dokane POS" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content=" DoaknE offers the best POS software system for jewelry shops in Bangladesh. Keep track of your sales and inventory with ease. Contact us today to start!" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DokanEPOS" />
        <meta name="twitter:title" content="Best jewelry Shop POS Software System in Bangladesh | DoaknE" />
        <meta name="twitter:description" content="DoaknE offers the best POS software system for jewelry shops in Bangladesh. Keep track of your sales and inventory with ease. Contact us today to start!" />
        <meta name="twitter:image" content="https://dokanepos.com/images/link-img/jewellery-hero.png" />
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

export default Jewellery
