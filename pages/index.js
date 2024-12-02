import React, { useEffect, useState } from "react";
import Description from "../components/Description";
import DashboardFeature from "../components/DashboardFeature";
import Payment from "../components/Payment";
import CardSection from "../components/CardSection";
import PricingPlan from "../components/PricingPlan";
import EnhanceBuisness from "../components/EnhanceBuisness";
import Faq from "../components/Faq";
import Free from "../components/Free";
import Head from "next/head";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Best POS Software in Bangladesh for Retail Business | DokanE
        </title>
        <link rel="canonical" href="https://dokanepos.com" key="canonical" />
        
        
        <meta
          name="description"
          content="DokanE is point of sale software crafted for your restaurant, retail store, cafe, cake, bakery, coffee shop, grocery, salon, spa, car wash, food & pizzeria."
          key="desc"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="p:domain_verify"
          content="73bbb502f124e55a0171fe88a9448add"
        />
        <meta
          name="facebook-domain-verification"
          content="l8r2575xjwnbdz9bnxb4luuupo4ayn"
        />
        <meta
          property="og:title"
          content="Best POS Software in Bangladesh for Retail Business | DokanE"
        />
        <meta property="og:url" content="https://dokanepos.com/" />
        <meta
          property="og:image"
          content="https://dokanepos.com/images/fb-open-graph.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="DokanE is point of sale software crafted for your restaurant, retail store, cafe, cake, bakery, coffee shop, grocery, salon, spa, car wash, food & pizzeria."
        />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <div className="overflow-x-hidden">
        <>
          <Description />
          <DashboardFeature />
          <Payment />
          <CardSection />
          <EnhanceBuisness />
          <Reviews />
          <PricingPlan />
          <Faq />
          <Free />

          {/* Blog Section */}
          {/* <section>
            <h2>Blog</h2>
            <ul>
    {allPostsData.map(({ id, title, date }) => (
      <li key={id}>
        <Link href={`/posts/${id}`}>
          {title}
        </Link>
        <br />
        <small>{date}</small>
      </li>
    ))}
  </ul>
          </section> */}
        </>
      </div>
    </>
  );
}
