import Head from 'next/head'
import Layout from '../../components/Main-layout'
import Link from 'next/link'
import Hero from '../../components/heros/text-left'
import StartTrialPoints from '../../components/free-trial/start-trial-points'
import Form from '../../components/free-trial/form'

import { freeTrialPoints } from '../../components/free-trial/data'

const FreeTrial = () => {
  return (
    <Layout yellowfooter>
      <Head>
        <title>Men &amp; Mice - Free trial</title>
      </Head>
      <div className="free-trial">
        <div className="body">
          <Hero
            hero="Try our modular overlay solutions for free"
            signup={{ text: 'sign up for a free trial', url: '/' }}
          />

          <StartTrialPoints free-trial-points={freeTrialPoints} />

          <Form />
        </div>
        {/* .body */}
      </div>
    </Layout>
  )
}

export default FreeTrial
