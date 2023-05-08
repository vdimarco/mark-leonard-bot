import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kram Bot!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <script>
  window.chatbaseConfig = {
    chatbotId: "gMSeV27eEggGqOgifdEwY",
  }
</script>
<script
  src="https://www.chatbase.co/embed.min.js"
  id="gMSeV27eEggGqOgifdEwY"
  defer>
</script>


      </main>

      <Footer />
    </div>
  )
}
