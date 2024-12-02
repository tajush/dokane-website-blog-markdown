
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en bn">
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-W4P4X6W');`,
                        }} defer
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W4P4X6W"
                            height="0" width="0" style="display:none;visibility:hidden" />`,
                        }}
                    />
                    <script dangerouslySetInnerHTML={{    //may be used for further
                        __html: `type="text/javascript"`
                    }}>
                    </script>
                    <div id="fb-root"></div>
                    <div id="fb-customer-chat" className="fb-customerchat">
                    </div>

                    <script dangerouslySetInnerHTML={{
                        __html: ` var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "1047348352054066");
        chatbox.setAttribute("attribution", "biz_inbox");`
                    }}>
                    </script>

                    <script strategy="lazyOnload" dangerouslySetInnerHTML={{
                        __html: `window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v15.0'
            });
          };
    
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));`
                    }}>
                    </script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
