import Layout from '../components/Main-layout'
import Head from 'next/head'
import Hero from '../components/heros/text-right'
//slice
import Slice from '../components/Slice/slice'
import { Client } from '../prismic-configuration'

const Index = ({ home }) => {
  const { hero, page_category, body } = home.data

  return (
    <Layout>
      <Head>
        <title>Men&amp;Mice</title>
      </Head>
      <div className="body">
        <Hero
          hero={hero}
          tag={page_category}
          image="/img/automation-hero-image.svg"
          tags={['Products', 'Automation']}
        />
        {body.map((element, i) => (
          <Slice props={element} key={i} />
        ))}
      </div>
      {/* /.body */}
    </Layout>
  )
}

export async function getStaticProps(context) {
  const req = context.req
  const home = await Client(req).getSingle('homepage')
  return {
    props: {
      home,
    }, // will be passed to the page component as props
  }
}

export default Index
