import React from 'react'
import ServiceHeader from '../components/common/ServiceHeader'
import ServiceFeature from '../components/common/SeviceFeature';
import ServicePayment from '../components/common/ServicePayment';
import ServiceCard from '../components/common/ServiceCard';
import Reviews from '../components/Reviews';
import Free from '../components/Free';
import Head from 'next/head';

function DepartmentalGrocery() {
    let header = {
      img: "/images/services/departmental-hero.png",
        headerTitle: "grocery management software",
        headerSubTitle:"Optimize your operations, improve inventory management, enhance the customer experience, and make data-driven decisions.",
        headerText: "It simplifies"
    };

    let payment ={
      img: "/images/services/departmental-payment.png",
      paymentTitle: "Why Should You Get Our Departmental POS Software?",
      paymentSubTitle:"Take control of your inventory with ease. The DokanE software provides real-time visibility into stock levels, automates replenishment, tracks product movements, and generates comprehensive reports. This ensures that you have the right products in stock at the right time, minimizing stockouts and overstock situations."
  }

  let card = {
    cardTitle1: "Point of Sale (POS)",
    cardSubTitle1: "Simplify your checkout process and enhance the customer experience. The software's POS module enables fast and accurate transactions, supports multiple payment options, handles discounts and promotions, and generates detailed sales reports. It also integrates seamlessly with barcode scanners, receipt printers, and cash drawers for seamless operations.",
    cardTitle2: "Sales and Customer Management",
    cardSubTitle2: "Gain valuable insights into your sales performance and customer behavior. Track sales trends, identify top-selling products, and analyze customer preferences to make informed business decisions. The software also allows you to manage customer information, loyalty programs, and targeted marketing campaigns to enhance customer satisfaction and loyalty.",
    cardTitle3: "Purchase and Supplier Management",
    cardSubTitle3: "Streamline your procurement process and maintain strong relationships with suppliers. The software helps you manage purchase orders, track deliveries, handle returns, and ensure timely replenishment. You can also maintain a supplier database, negotiate pricing, and monitor supplier performance to optimize your supply chain.",
    cardTitle4: "Reporting and Analytics",
    cardSubTitle4: "Make data-driven decisions with comprehensive reporting and analytics capabilities. The software generates customizable reports on sales, inventory, profitability, and more. Access real-time insights to identify areas for improvement, monitor key performance indicators, and track the success of your business strategies.",
    cardTitle5: "Employee Management",
    cardSubTitle5: "Efficiently manage your workforce with features like employee scheduling, time tracking, and performance monitoring. The software enables you to assign roles and permissions, track attendance, generate payroll reports, and optimize staffing levels to maximize productivity.",
    cardTitle6: "Integration and Scalability",
    cardSubTitle6: "Departmental Store Management Software is highly flexible and scalable. It can be seamlessly integrated with other business systems such as accounting software, e-commerce platforms, and CRM tools, allowing for a unified and connected business environment. It can adapt to the growth of your business and accommodate additional features and functionalities as needed.",
  }
  const words= ["complex calculations", "checkout processes","complex processes"]
  return (
    <div>
      <Head>
        <title>Best pos software for grocery store in Bangladesh | DokanE</title>
        <meta
          name="description"
          content="DokanE grocery management software helps grocery or departmental stores manage inventory, sales, customer data, enabling tracking of sales and stock levels."
          key="desc"
        />
        <link rel="canonical" href="https://dokanepos.com/departmental-grocery" key="canonical" />
        <meta property="og:site_name" content="DokanE POS" />
        <meta property="og:title" content="Best pos software for grocery store in Bangladesh | DokanE" />
        <meta property="og:url" content="https://dokanepos.com/departmental-grocery.html" />
        <meta property="og:image" content="https://dokanepos.com/images/link-img/departmental-hero.png" />
        <meta property="og:image:width" content="138" />
        <meta property="og:image:height" content="60" />
        <meta property="og:image:alt" content="Dokane POS" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="DokanE grocery management software helps grocery or departmental stores manage inventory, sales, customer data, enabling tracking of sales and stock levels." />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DokanEPOS" />
        <meta name="twitter:title" content="Best pos software for grocery store in Bangladesh | DokanE" />
        <meta name="twitter:description" content="DokanE grocery management software helps grocery or departmental stores manage inventory, sales, customer data, enabling tracking of sales and stock levels." />
        <meta name="twitter:image" content="https://dokanepos.com/images/link-img/departmental-hero.png" />
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

export default DepartmentalGrocery
