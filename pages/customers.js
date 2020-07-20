import Layout from '../components/Main-layout'
import Head from 'next/head'
import Hero from '../components/heros/text-right'
import ChallengesSolutions from '../components/customers/challenges-solutions'
import ReadCaseStudies from '../components/customers/read-case-studies'
import FeatureImageOnRight from '../components/feature-image-on-right'
import BottomPick from '../components/Bottom-pick'
import { caseStudies } from '../components/customers/data'
import { caseStudy } from '../components/index/data'

const Customers = () => {
  return (
    <Layout>
      <Head>
        <title>Men&amp;Mice</title>
      </Head>
      <div className="body">
        <Hero
          hero="We provide for our customers"
          image="/img/customers.svg"
          tags={['Why Us', 'Customers']}
        />

        <ChallengesSolutions />

        <FeatureImageOnRight
          data={{
            primary: {
              description:
                'Knowing who did what, when and where on the network helps network and cyber security teams.',
              link_name: 'professional services',
              url: '/',
              image: {
                url: '/img/feature-1.png',
              },
              title: [{ text: 'Customers first' }],
            },
          }}
        />

        <ReadCaseStudies case-studies={caseStudies} />

        <BottomPick props={caseStudy} />
      </div>
      {/* /.body */}
    </Layout>
  )
}

export default Customers
