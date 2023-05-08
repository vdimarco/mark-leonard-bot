import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kram Bot!</title>
        <link rel="icon" href="/favicon.ico" />
     <style>
      #main {
        margin-bottom: -250px;
      }
      .footer {background: white;
      }
      
    </style>
      </Head>

      <main>
        <Header title="Welcome!" />
         
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/gMSeV27eEggGqOgifdEwY"
          width="100%"
          height="700"
          frameborder="0"
        ></iframe>
        

      </main>

      <Footer />
    </div>
  )
}
