import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb 2.0 with NextJS</title>
        <link rel="icon" href="/images/airbnb_logo.png" />
        <link rel="stylesheet" href="https://use.typekit.net/cco6klr.css"></link>
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Showcase */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-14">
          <h2 className="text-4xl font-semibold py-3">Explore Nearby</h2>

          {/* Pull in some data from server - API endpoints */}
          {/* {exploreData?.map(({ img, distance, location }) => (
            <SmallCard key={img} img={img} distance={distance} location={location} />
          ))} */}
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SmallCard img="/images/birkenhead.png" distance="20 minutes drive" location="Manchester" />
            <SmallCard img="/images/broadstairs.jpg" distance="105 minutes drive" location="Broadstair" />
            <SmallCard img="/images/exeter.jpg" distance="36 minutes drive" location="Exeter" />
            <SmallCard img="/images/hove.jpg" distance="45 minutes drive" location="Hove" />
            <SmallCard img="/images/leeds.jpg" distance="65 minutes" location="Leeds" />
            <SmallCard img="/images/liverpool.jpg" distance="70 minutes" location="Liverpool" />
            <SmallCard img="/images/scarborough.jpg" distance="3 hour drive" location="Scarborough" />
            <SmallCard img="/images/torquay.jpg" distance="2.5 hour drive" location="Torquay" />
          </article>
        </section>

        <section className="pt-14">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <article className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            <MediumCard img="/images/homes.jpg" title="Entire Homes" />
            <MediumCard img="/images/unique.jpg" title="Unique stays" />
            <MediumCard img="/images/outdoor.jpg" title="Outdoor getaways" />
            <MediumCard img="/images/pets.jpg" title="Pets allowed" />
          </article>
        </section>

        <section className="pt-5">
          <LargeCard
            img="/images/outdoor-experience.jpg"
            title="The Greatest Outdoor Experience"
            description="Olympian & Paralympian Natural Experiences That's Unmatched."
            buttonText="Get Inspired"
          />
        </section>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").
    then(
      (res) => res.json()
    );

  return {
    props: {
      exploreData
    }
  }
}
