import Layout from '../../../components/Main-layout'
import Hero from '../../../components/heros/text-right'
import CourseList from '../../../components/training/courses/course-list'
import GetInTouch from '../../../components/training/get-in-touch'

const Courses = (props) => {
  return (
    <Layout>
      <Hero
        hero="Available courses"
        para="On four continents, we’ve taught private courses for ccTLD registry operators, world-wide DNS registrars, governments, and private companies in a wide array of businesses."
        image="/img/training.svg"
        tags={['Products', 'Training', 'Courses']}
      />
      <CourseList
        title="Our course selection"
        tags={['All', 'Online', 'Copenhagen', 'USA']}
        courses={[
          {
            location: 'Online',
            days: '3',
            title: 'DNS & BIND Jump Start',
            excerpt:
              'DNS & BIND Jump Start is a new course, held completely online and designed to give a concise introduction into running a BIND 9 domain name server. ',
            link: {
              name: 'View program',
              url: '/',
            },
          },
          {
            location: 'Copenhagen',
            days: '2',
            title: 'DNS & BIND Week',
            excerpt:
              'DNS & BIND Week is our most popular course. It is ideal for anyone starting out. It is most commonly attended by those with previous DNS knowledge, and by administrators with BIND experience. ',
            link: {
              name: 'View program',
              url: '/',
            },
          },
          {
            location: 'Online',
            days: '4',
            title: 'DNS & BIND Fundamentals',
            excerpt:
              'DNS & BIND Fundamentals is a comprehensive introduction to DNS and BIND. In-d epth lectures cover DNS concepts in detail, as well as how DNS is implemented in today’s Internet.',
            link: {
              name: 'View program',
              url: '/',
            },
          },
          {
            location: 'Switzerland',
            days: '1',
            title: 'DNS & BIND Advanced',
            excerpt:
              'DNS & BIND Jump Start is a new course, held completely online and designed to give a concise introduction into running a BIND 9 domain name server.',
            link: {
              name: 'View program',
              url: '/',
            },
          },
        ]}
      />
      <GetInTouch
        title="Dont hestiate to shoot us a Question"
        button={{ text: 'Get in touch', url: '/' }}
      />
    </Layout>
  )
}

export default Courses
