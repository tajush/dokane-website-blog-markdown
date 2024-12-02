import React, { useEffect, useState } from "react";
import Faq from "../components/Faq";
import Head from "next/head";


export default function features() {
  return (
    <>
      <Head>
        <title>
          Frequently Asked Questions | DokanE
        </title>
        <link rel="canonical" href="https://dokanepos.com/faq" key="canonical" />
        <meta
          name="description"
          content="Find answers to frequently asked questions about DokanE POS software for restaurants, retail stores, cafes, and more."
          key="desc"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="p:domain_verify" content="73bbb502f124e55a0171fe88a9448add" />
        <meta name="facebook-domain-verification" content="l8r2575xjwnbdz9bnxb4luuupo4ayn" />
        <meta property="og:title" content="Best POS Software in Bangladesh for features | DokanE" />
        <meta property="og:url" content="https://dokanepos.com/faq.html" />
        <meta property="og:image" content="https://dokanepos.com/images/fb-open-graph.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="DokanE is point of sale software crafted for your restaurant, retail store, cafe, cake, bakery, coffee shop, grocery, salon, spa, car wash, food & pizzeria." />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <div className="overflow-x-hidden">
        <section className="mb-[50px]">
          <Faq />
        </section>
      </div>

    </>
  )
}

