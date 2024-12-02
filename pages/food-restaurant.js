import React from 'react'
import ServiceHeader from '../components/common/ServiceHeader'
import ServiceFeature from '../components/common/SeviceFeature'
import ServicePayment from '../components/common/ServicePayment'
import ServiceCard from '../components/common/ServiceCard'
import Reviews from '../components/Reviews'
import Free from '../components/Free'
import Head from 'next/head'

function FoodRestaurant() {
    let header = {
      img: "/images/services/restuarant-hero.png",
        headerTitle: "food & restaurant management",
        headerSubTitle:"Streamline operations, enhance customer experiences, improve inventory management, and make informed business decisions.",
        headerText:"Boost your"
    }

    let payment ={
      img: "/images/services/restuarant-payment.png",
      paymentTitle: "Why Should You Get Our Restaurant POS Software?",
      paymentSubTitle:"The DokanE software enables you to maintain customer profiles, track order history, and manage loyalty programs. Our software generates reports on sales, inventory, labor costs, customer preferences, and more. Analyzing these insights helps in identifying trends, optimizing operations, and improving overall business performance. It assists in maintaining accurate records, managing allergen information, and ensuring compliance with health and safety guidelines."
  }

  let card = {
    cardTitle1: "Streamlined Operations",
    cardSubTitle1: "The DokanE restaurant management software automates various processes involved in food and restaurant management, including order taking, table management, kitchen communication, inventory tracking, and billing. This streamlines operations, reduces manual effort, and increases overall efficiency.",
    cardTitle2: "Order Management",
    cardSubTitle2: " Efficiently manage orders from multiple channels, such as in-house dining, takeout, delivery, and online ordering platforms. The software centralizes order processing, ensures accurate order routing, and facilitates seamless communication between the front of house and the kitchen.",
    cardTitle3: "Table and Reservation Management",
    cardSubTitle3: "Optimize your table seating and reservations. The software enables efficient table allocation, tracks table availability, manages reservations, and optimizes seating arrangements. This reduces wait times, enhances customer satisfaction, and maximizes table turnover.",
    cardTitle4: "Menu Engineering and Customization",
    cardSubTitle4: "Easily manage and customize your menu offerings. The DokanE food management software allows you to update menus in real-time, showcase specials or promotions, and accommodate customer preferences or dietary restrictions. This flexibility helps you cater to diverse customer needs and improve menu profitability.",
    cardTitle5: "Inventory and Recipe Management",
    cardSubTitle5: "Take control of your inventory and recipe costing. The DokanE software tracks ingredient usage, manages inventory levels, and provides real-time updates on ingredient availability. It also helps in recipe management, ensuring accurate costing and inventory replenishment.",
    cardTitle6: "Point of Sale (POS)",
    cardSubTitle6: "Simplify the checkout process and improve customer service. The DokanE software's POS module enables fast and accurate transactions, handles various payment methods, manages split bills, and generates detailed sales reports. It also integrates with peripheral devices like cash registers, card readers, and printers for seamless operations.",
  }
  const words= ["business efficiency", "customer experience","inventory management"]
  return (
    <div>
      <Head>
        <title>Best pos software for restaurant in Bangladesh | DokanE</title>
        <meta
          name="description"
          content="If you are looking for an efficient and reliable restaurant management software, consider DokanE. It's ideal for any business, large or small!"
          key="desc"
        />
        <link rel="canonical" href="https://dokanepos.com/food-restaurant" key="canonical" />
        <meta property="og:site_name" content="DokanE POS" />
        <meta property="og:title" content="Best pos software for restaurant in Bangladesh | DokanE" />
        <meta property="og:url" content="https://dokanepos.com/food-restaurant.html" />
        <meta property="og:image" content="https://dokanepos.com/images/link-img/restuarant-hero.png" />
        <meta property="og:image:width" content="138" />
        <meta property="og:image:height" content="60" />
        <meta property="og:image:alt" content="Dokane POS" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="If you are looking for an efficient and reliable restaurant management software, consider DokanE. It's ideal for any business, large or small!" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DokanEPOS" />
        <meta name="twitter:title" content="Best pos software for restaurant in Bangladesh | DokanE" />
        <meta name="twitter:description" content="If you are looking for an efficient and reliable restaurant management software, consider DokanE. It's ideal for any business, large or small!" />
        <meta name="twitter:image" content="https://dokanepos.com/images/link-img/restuarant-hero.png" />
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

export default FoodRestaurant
