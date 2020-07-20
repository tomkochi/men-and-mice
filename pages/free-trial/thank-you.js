import Head from 'next/head'
import Layout from '../../components/Main-layout'
import Hero from '../../components/free-trial-thank-you/hero'
import Steps from '../../components/free-trial-thank-you/steps'

const FreeTrial = () => {
  return (
    <Layout yellowfooter>
      <Head>
        <title>Men &amp; Mice - Thanks!</title>
      </Head>
      <div className="free-trial">
        <div className="body">
          <Hero />
          <Steps />
        </div>
        {/* .body */}
      </div>
    </Layout>
  )
}

export default FreeTrial
