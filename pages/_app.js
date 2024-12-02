import "../styles/globals.css";
import "../styles/animations.css";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "../ni18n.config";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const locale =
    (typeof window !== "undefined" &&
      window.localStorage.getItem("MY_LANGUAGE")) ||
    "bn";
  useSyncLanguage(locale);
  // const router = useRouter();    //todo

  //loader
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // if (router.pathname === '/404') return <Component {...pageProps} />; //todo
  return (
    <div>
      {loading && (
        <div className="flex h-screen items-center justify-center text-2xl bg-white">
          <div className="loader"></div>
        </div>
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default appWithI18Next(MyApp, ni18nConfig);
