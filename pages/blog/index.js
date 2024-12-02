import React from "react"; 
import Head from "next/head";
import Blog from "../../components/Blog";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";

export async function getStaticProps() {
  const fs = (await import('fs')).promises; // Dynamically import 'fs' on the server side
  
  const postsDirectory = path.join(process.cwd(), 'posts'); // Ensure you have a 'posts' directory with Markdown files
  const filenames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const contentHtml = await remark().process(content);

    return {
      ...data,
      content: contentHtml.toString(),
    };
  }));

  return {
    props: {
      posts,
    },
  };
}

export default function Features({ posts }) {
  return (
    <>
      <Head>
        <title>
          Blog Post
        </title>
        <link rel="canonical" href="https://dokanepos.com/faq" key="canonical" />
        <meta
          name="description"
          content="Find answers to frequently asked questions about DokanE POS software for restaurants, retail stores, cafes, and more."
          key="desc"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
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
          <Blog allPostsData={posts} /> {/* Pass the posts data to Blog component */}
        </section>
      </div>
    </>
  );
}
