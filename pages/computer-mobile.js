import React from 'react'
import ServiceHeader from '../components/common/ServiceHeader'
import ServiceFeature from '../components/common/SeviceFeature'
import ServicePayment from '../components/common/ServicePayment'
import ServiceCard from '../components/common/ServiceCard'
import Reviews from '../components/Reviews'
import Free from '../components/Free'
import Head from 'next/head'

function ComputerMobile() {
    let header = {
      img: "/images/services/computer-hero.png",
        headerTitle: "Computer & mobile management",
        headerSubTitle:"Streamline your operations, optimize inventory management, and gain valuable insights to drive the success of your mobile and computer retail stores.",
        headerText: "Experience"
    }

    let payment ={
      img: "/images/services/computer-payment.png",
      paymentTitle: "Why Should You Get Our Computer & Mobile POS Software?",
      paymentSubTitle:"A comprehensive solution designed to streamline and optimize the operations of your mobile and computer retail business whether you run a small independent shop or a chain of electronic stores, our software offers a range of benefits to enhance efficiency, improve customer service, and drive business growth. "
  }

  let card = {
    cardTitle1: "Inventory Management",
    cardSubTitle1: "Take control of your electronics inventory with ease. Our software tracks stock levels, manages product variations, monitors expiration dates, and generates alerts for low stock or discontinued items. This ensures that you have the right products in stock, minimizes stockouts, and reduces carrying costs.",
    cardTitle2: "Point of Sale (POS)",
    cardSubTitle2: "Streamline the checkout process and provide a seamless shopping experience. Our POS module integrates with barcode scanners, receipt printers, and payment terminals, allowing for fast and accurate transactions. It handles multiple payment methods, discounts, and promotions, simplifying the sales process for your staff and customers.",
    cardTitle3: "Product Catalog and Pricing",
    cardSubTitle3: " Easily manage your electronic product catalog and pricing. Our software enables you to organize products by categories, brands, and specifications. You can update product information, set pricing rules, and apply bulk price changes. This ensures consistency and accuracy across your entire product range.",
    cardTitle4: "Customer Management",
    cardSubTitle4: "Build strong relationships with your customers. Our DokanE software helps you maintain detailed customer profiles, track purchase history, and manage loyalty programs. You can also send personalized promotions, track customer preferences, and provide excellent customer service based on individual needs and preferences.",
    cardTitle5: "Repair and Service Management",
    cardSubTitle5: "If your mobile and computer shop offers repair and service facilities, our software can assist you in managing repair requests, tracking service jobs, and scheduling technician appointments. It helps you streamline the repair process, provide timely updates to customers, and maintain service history records.",
    cardTitle6: "Reporting and Analytics",
    cardSubTitle6: "Gain valuable insights into your business performance. Our software generates comprehensive reports on sales, inventory, profitability, customer behavior, and more. These insights help you identify trends, analyze product performance, optimize pricing strategies, and make data-driven business decisions",
  }
  const words= ["efficiency", "accuracy","improved customer service"]
  return (
    <div>
      <Head>
        <title>Best pos software for mobile shop in Bangladesh | DokanE</title>
        <meta
          name="description"
          content="Stay organized and on top of your business with the best mobile and computer shop management software in Bangladesh. Save time and money with DokanE!"
          key="desc"
        />
        <link rel="canonical" href="https://dokanepos.com/computer-mobile" key="canonical" />
        <meta property="og:site_name" content="DokanE POS" />
        <meta property="og:title" content="Best pos software for mobile shop in Bangladesh | DokanE" />
        <meta property="og:url" content="https://dokanepos.com/computer-mobile.html" />
        <meta property="og:image" content="https://dokanepos.com/images/link-img/computer-hero.png" />
        <meta property="og:image:width" content="138" />
        <meta property="og:image:height" content="60" />
        <meta property="og:image:alt" content="Dokane POS" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Stay organized and on top of your business with the best mobile and computer shop management software in Bangladesh. Save time and money with DokanE!" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DokanEPOS" />
        <meta name="twitter:title" content="Best pos software for mobile shop in Bangladesh | DokanE" />
        <meta name="twitter:description" content="Stay organized and on top of your business with the best mobile and computer shop management software in Bangladesh. Save time and money with DokanE!" />
        <meta name="twitter:image" content="https://dokanepos.com/images/link-img/computer-hero.png" />
      </Head>
      <ServiceHeader header={header} words={words} />
      <ServiceFeature />
      <ServicePayment payment={payment} />
      <ServiceCard card={card}/>
      <Reviews />
      <Free />
    </div>
  )
}

export default ComputerMobile
