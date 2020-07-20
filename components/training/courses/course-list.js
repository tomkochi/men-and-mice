import Link from 'next/link'
import { useState } from 'react'

const CourseList = ({ title, tags, courses }) => {
  const [selectedTag, setSelectedTag] = useState('All')
  return (
    <>
      <div className="course-list">
        <div className="container">
          <h2 className="f-ap-b">
            {title}
            <span>.</span>
          </h2>
          <div className="tags d-flex">
            {tags.map((t) => {
              return (
                <div
                  className={`tag f-ap-m ${selectedTag === t ? 'active' : ''}`}
                >
                  {t}
                </div>
              )
            })}
          </div>
          {/* .tags */}
          <div className="courses d-flex flex-wrap justify-content-between">
            {courses.map((c) => {
              return (
                <div className="course d-flex">
                  <div className="wrapper d-flex flex-column flex-grow-1">
                    <div className="pills d-flex">
                      <div className="pill f-ap-m">{c.location}</div>
                      <div className="pill f-ap-m">{c.days} days</div>
                    </div>
                    {/* .pills */}
                    <div className="d-flex flex-column flex-grow-1">
                      <div className="flex-grow-1">
                        <h3 className="f-ap-b">{c.title}</h3>
                        <p className="f-ap-l">{c.excerpt}</p>
                      </div>
                      <div>
                        <Link href={c.link.url} passHref>
                          <a className="f-ap-b">{c.link.name}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {/* .courses */}
        </div>
        {/* .container */}
      </div>
      {/* .course-list */}

      <style jsx>{`
        .course-list {
          margin: 120px 0;
          .container {
            h2 {
              font-size: 52px;
              max-width: 350px;
              margin-bottom: 40px;
              line-height: 105%;
              span {
                color: #442acc;
              }
            }
            .tags {
              margin-bottom: 20px;
              .tag {
                font-size: 16px;
                line-height: 170%;
                color: rgba(34, 31, 32, 0.4);
                text-transform: uppercase;
                margin-right: 30px;
                &.active {
                  color: #442acc;
                }
              }
            }
            .courses {
              .course {
                width: calc(100% / 3 - 50px);
                margin-top: 60px;
                .pills {
                  margin-bottom: 30px;
                  .pill {
                    font-size: 14px;
                    color: #221f20;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    border-radius: 40px;
                    padding: 8px 16px 5px;
                    margin-right: 12px;
                  }
                }
                h3 {
                  font-size: 24px;
                  line-height: 110%;
                  color: #221f20;
                  margin-bottom: 18px;
                }
                p {
                  font-size: 15px;
                  line-height: 150%;
                  margin-bottom: 30px;
                }
                a {
                  font-size: 17px;
                  padding-right: 36px;
                  text-transform: uppercase;
                  position: relative;
                  color: #442acc;
                  text-decoration: none;
                  &:after {
                    content: '';
                    position: absolute;
                    width: 18px;
                    height: 18px;
                    right: 0;
                    top: 0;
                    background: url('/img/blue-diagonal-arrow-right-up.svg')
                      no-repeat center;
                  }
                  &:hover {
                    opacity: 0.7;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default CourseList
