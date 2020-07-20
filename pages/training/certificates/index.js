import Layout from '../../../components/Main-layout'
import Hero from '../../../components/heros/text-right'
import CertificationLevels from '../../../components/training/certificates/certification-leves'
import Fees from '../../../components/training/certificates/fees'
import GetInTouch from '../../../components/training/get-in-touch'
import Link from 'next/link'

const Courses = (props) => {
  return (
    <Layout>
      <Hero
        hero="Available courses"
        para="On four continents, we’ve taught private courses for ccTLD registry operators, world-wide DNS registrars, governments, and private companies in a wide array of businesses."
        image="/img/training.svg"
        tags={['Products', 'Training', 'Certificates']}
        register-exam={{ text: 'register exam', url: '/' }}
      />
      <CertificationLevels />
      <Fees />
      <div className="register">
        <Link href="/" passHref>
          <a className="f-ap-m">
            Register exam
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.53059 4.36839L15.2685 4.3684M15.2685 4.3684L15.2685 13.1063M15.2685 4.3684L5.36844 14.2674"
                stroke="#221F20"
                stroke-width="2"
              />
            </svg>
          </a>
        </Link>
      </div>
      <GetInTouch
        title="Dont hestiate to shoot us a Question"
        button={{ text: 'Get in touch', url: '/' }}
      />
      <style jsx>{`
        .register {
          text-align: center;
          margin-bottom: 170px;
          a {
            color: #221f20;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 17px;
            padding: 38px 42px 33px;
            background: #ffdb00;
            transition: 0.3s;
            svg {
              margin-left: 40px;
              path {
                transition: 0.3s;
              }
            }
            &:hover {
              background: #221f20;
              color: white;
              svg path {
                stroke: white;
              }
            }
          }
        }
      `}</style>
    </Layout>
  )
}

export default Courses
