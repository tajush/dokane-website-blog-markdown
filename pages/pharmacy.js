import React from 'react'
import ServiceHeader from '../components/common/ServiceHeader'
import ServiceFeature from '../components/common/SeviceFeature';
import ServicePayment from '../components/common/ServicePayment';
import ServiceCard from '../components/common/ServiceCard';
import Reviews from '../components/Reviews';
import Free from '../components/Free';
import Head from 'next/head';

function Pharmacy() {
    let header = {
      img: "/images/services/pharmacy-hero.png",
        headerTitle: "PHARMACY MANAGEMENT SOFTWARE",
        headerSubTitle:"Experience the efficiency, accuracy, and improved patient care that our Pharmacy Management Software brings to your pharmacy.",
        headerText: "It improves"
    };

    let payment ={
      img: "/images/services/pharmacy-payment.png",
      paymentTitle: "Why Should You Get Our Medicine shop POS Software?",
      paymentSubTitle:"Implementing DokanE Pharmacy Management Software enables pharmacies to operate more efficiently, provide better patient care, and improve overall business performance. It streamlines operations, reduces errors, optimizes inventory management, and enhances customer experiences."
  }

  let card = {
    cardTitle1: "Improved Inventory Management",
    cardSubTitle1: "With real-time visibility into stock levels, expiration dates, and medication usage, the software helps pharmacies optimize their inventory. This minimizes stockouts, reduces wastage, and ensures the availability of essential medications for patients.",
    cardTitle2: "Accurate Prescription Processing",
    cardSubTitle2: "The software facilitates accurate and efficient prescription processing, reducing the risk of errors. It checks for drug interactions, allergies, and contraindications, ensuring patient safety and preventing medication errors.",
    cardTitle3: "Seamless Point of Sale Experience",
    cardSubTitle3: "The software simplifies the checkout process at the pharmacy counter. It integrates prescription processing, insurance billing, and payment systems, allowing for efficient and accurate transactions. This improves customer satisfaction and reduces waiting times.",
    cardTitle4: "Regulatory Compliance",
    cardSubTitle4: "Pharmacy Management Software helps pharmacies comply with industry regulations and requirements. It assists in maintaining accurate records, tracking controlled substances, and generating reports for audits and regulatory purposes.",
    cardTitle5: "Customer Relationship Management",
    cardSubTitle5: "The software enables pharmacies to provide personalized services to their customers. It maintains customer profiles, tracks medication history, and supports loyalty programs. It also sends reminders for medication refills and facilitates automated communication for prescription pickups.",
    cardTitle6: "Integration with Healthcare Providers",
    cardSubTitle6: "Pharmacy Management Software facilitates seamless communication and collaboration with healthcare providers. It supports electronic prescribing, secure messaging for prescription clarification, and electronic transmission of refill requests and authorizations. This promotes efficient workflows and enhances patient care.",
  }

  const words= ["business performance", "customer experiences","prescription processing"]
  return (
    <div>
      <Head>
        <title>Best pharmacy management software in Bangladesh | DokanE</title>
        <meta
          name="description"
          content="Boost your productivity and customer satisfaction with our complete pharmacy POS software with excellent customer reviews and strong features."
          key="desc"
        />
        <link rel="canonical" href="https://dokanepos.com/pharmacy" key="canonical"  />
        <meta property="og:site_name" content="DokanE POS" />
        <meta property="og:title" content="Best pharmacy management software in Bangladesh | DokanE" />
        <meta property="og:url" content="https://dokanepos.com/pharmacy.html" />
        <meta property="og:image" content="https://dokanepos.com/images/link-img/pharmacy-hero.png" />
        <meta property="og:image:width" content="138" />
        <meta property="og:image:height" content="60" />
        <meta property="og:image:alt" content="Dokane POS" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Boost your productivity and customer satisfaction with our complete pharmacy POS software with excellent customer reviews and strong features." />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DokanEPOS" />
        <meta name="twitter:title" content="Best pharmacy management software in Bangladesh | DokanE" />
        <meta name="twitter:description" content="Boost your productivity and customer satisfaction with our complete pharmacy POS software with excellent customer reviews and strong features." />
        <meta name="twitter:image" content="https://dokanepos.com/images/link-img/pharmacy-hero.png" />
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

export default Pharmacy
