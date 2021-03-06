import Head from "next/head";
import Layout from "../../components/Blogs-layout";
import Link from "next/link";
import { getPost, getSlugs } from "../../api/post";
import remark from "remark";
import html from "remark-html";
import { useRouter } from "next/router";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { useState, useEffect } from "react";

export default function Blog(props) {
  const [fullUrl, setFullUrl] = useState("");
  const post = props.postData;
  const router = useRouter();

  let htmlContent;
  remark()
    .use(html)
    .process(post.html, function (err, file) {
      htmlContent = String(file);
    });

  useEffect(() => {
    setFullUrl(window.location.href);
  }, []);
  return (
    <Layout>
      <Head>
        <title>Men &amp; Mice - {post.title}</title>
        <style>{"body { background-color: #221f20; }"}</style>
      </Head>
      <div className="blog">
        <div className="body">
          <div className="head">
            <div className="wrapper">
              <a
                className="back f-ap-b"
                onClick={(e) => {
                  e.preventDefault();
                  router.back();
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25 11.7502L2 6.50024L7.25 1.25024"
                    stroke="#FFDB00"
                    strokeWidth="2"
                  />
                </svg>
                Articles
              </a>

              <div className="tags d-flex">
                {post.tags.map((tag) => {
                  return (
                    <Link
                      href={{ pathname: "/blogs", query: { id: tag.id } }}
                      as="/blogs"
                      key={tag.id}
                    >
                      <a className="f-ap-b">{tag.name}</a>
                    </Link>
                  );
                })}
              </div>
              <h1 className="f-ap-b">{post.title}</h1>
              <p className="f-cap-r">{post.excerpt}</p>
              <img src={post.feature_image} className="post-image" alt="" />
            </div>
            {/* .wrapper */}
          </div>
          {/* .head */}
          <div className="content">
            <div className="wrapper">
              <div className="social-media">
                <span className="icon">
                  <FacebookShareButton
                    quote={`Share ${post.title} on Facebook`}
                    url={fullUrl}
                  >
                    <img src="/img/facebook.svg" alt="" />
                  </FacebookShareButton>
                </span>
                <span className="icon">
                  <TwitterShareButton
                    quote={`Share ${post.title} on Twitter`}
                    url={fullUrl}
                  >
                    <img src="/img/twitter.svg" alt="" />
                  </TwitterShareButton>
                </span>
                <span className="icon">
                  <LinkedinShareButton
                    quote={`Share ${post.title} on Twitter`}
                    url={fullUrl}
                  >
                    <img src="/img/linked-in.svg" alt="" />
                  </LinkedinShareButton>
                </span>
              </div>
              <div
                className="html-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              ></div>
              <div className="d-flex tags">
                {post.tags.map((tag) => {
                  return (
                    <Link
                      href={{ pathname: "/blogs", query: { id: tag.id } }}
                      as="/blogs"
                      key={tag.id}
                      passHref
                    >
                      <a className="f-ab-r">{tag.name}</a>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* .wrapper */}
          </div>
          {/* content */}
          <div className="footer">
            <div className="wrapper">
              <h3 className="f-ap-b">Enjoyed the article?</h3>
              <button className="read-more f-ap-m">
                READ MORE <img src="/img/caret-right-black.png" alt="" />
              </button>
              <h4 className="f-ap-r">Share on Social Media</h4>
              <div className="social-icons d-flex">
                <span className="icon">
                  <FacebookShareButton
                    quote={`Share ${post.title} on Facebook`}
                    url={fullUrl}
                  >
                    <img src="/img/facebook.svg" width="20" alt="" />
                  </FacebookShareButton>
                </span>
                <span className="icon">
                  <TwitterShareButton
                    quote={`Share ${post.title} on Twitter`}
                    url={fullUrl}
                  >
                    <img src="/img/twitter.svg" width="20" alt="" />
                  </TwitterShareButton>
                </span>
                <span className="icon">
                  <LinkedinShareButton
                    quote={`Share ${post.title} on LinkedIn`}
                    url={fullUrl}
                  >
                    <img src="/img/Linked-in.svg" width="20" alt="" />
                  </LinkedinShareButton>
                </span>
              </div>
            </div>
            {/* .wrapper */}
          </div>
          {/* .footer */}
        </div>
        {/* .body */}
      </div>
      <style jsx>{`
        .body {
          .head,
          .content,
          .footer {
            .wrapper {
              width: calc(100vw - 60px);
              max-width: 680px;
              margin: 0 auto;
            }
          }
          .head {
            background: transparent;
            padding: 100px 0 150px 0;
            position: relative;
            .wrapper {
              a {
                font-size: 12px;
                color: #ffdb00;
                text-transform: uppercase;
                margin: 0 25px 20px 0;
                cursor: pointer;
                text-decoration: none;
                -webkit-transition: all 0.2s;
                -moz-transition: all 0.2s;
                -ms-transition: all 0.2s;
                -o-transition: all 0.2s;
                transition: all 0.2s;
                &:hover {
                  opacity: 0.6;
                }
              }
              a.back {
                font-size: 18px;
                color: #ffffff;
                text-transform: capitalize;
                margin-bottom: 70px;
                svg {
                  margin-right: 12px;
                }
              }
              .tags {
                margin-top: 70px;
              }
              h1 {
                font-size: 48px;
                color: #ffffff;
                margin-bottom: 35px;
                @media (max-width: 768px) {
                  font-size: 36px;
                }
              }
              p {
                font-size: 20px;
                color: #ffffff;
              }
            }
            .post-image {
              position: absolute;
              left: 50%;
              bottom: 0;
              -webkit-transform: translate(-50%, 50%);
              -moz-transform: translate(-50%, 50%);
              -ms-transform: translate(-50%, 50%);
              -o-transform: translate(-50%, 50%);
              transform: translate(-50%, 50%);
              width: 100%;
              max-width: 680px;
              max-height: 250px;
              object-fit: contain;
              @media (max-width: 768px) {
                max-width: 160px;
                max-height: 250px;
              }
            }
          }
          .content {
            background: #ffffff;
            border: none !important;
            .wrapper {
              color: #221f20;
              padding: 155px 0;
              position: relative;
              .social-media {
                position: absolute;
                left: -120px;
                @media (max-width: 992px) {
                  display: none;
                }
                .icon {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 40px;
                  height: 40px;
                  border: 1px solid #dfdfdf;
                  margin-bottom: 12px;
                  -webkit-border-radius: 20px;
                  -moz-border-radius: 20px;
                  border-radius: 20px;
                  img {
                    margin-top: -3px;
                  }
                }
              }
              .html-content {
                p {
                  font-family: "Capitolium Regular";
                  font-size: 200px;
                  opacity: 0 !important;
                }
                h4 {
                  font-family: "Apercu Bold";
                  font-size: 26px;
                  margin-top: 70px;
                  margin-bottom: 40px;
                }
                code {
                  display: flex;
                  margin: 70px 0;
                  width: 100%;
                  overflow-x: scroll;
                  background: #f2f2f2;
                }
                ol {
                  padding: 25px;
                  list-style: none;
                  counter-reset: li;
                  li {
                    font-size: 16px;
                    color: #221f20;
                    padding-left: 25px;
                    counter-increment: li;
                    &::before {
                      content: counter(li, decimal-leading-zero);
                      color: #8e8e8e;
                      margin-right: 25px;
                    }
                  }
                }
              }
              .tags {
                margin-top: 70px;
              }
              ul {
                li {
                  a {
                    font-size: 14px;
                    color: #442acc;
                    margin-right: 35px;
                    text-transform: uppercase;
                    text-decoration: none;
                    position: relative;
                    &:after {
                      content: "";
                      position: absolute;
                      left: 0;
                      bottom: -4px;
                      width: 0;
                      height: 2px;
                      background: #442acc;
                      -webkit-transition: all 0.5s;
                      -moz-transition: all 0.5s;
                      -ms-transition: all 0.5s;
                      -o-transition: all 0.5s;
                      transition: all 0.5s;
                    }
                    &:hover:after {
                      width: 100%;
                    }
                  }
                }
              }
              .tags {
                a {
                  font-size: 14px;
                  color: #442acc;
                  margin-right: 35px;
                  text-transform: uppercase;
                  cursor: pointer;
                  text-decoration: none;
                  -webkit-transition: all 0.2s;
                  -moz-transition: all 0.2s;
                  -ms-transition: all 0.2s;
                  -o-transition: all 0.2s;
                  transition: all 0.2s;
                  &:hover {
                    opacity: 0.6;
                  }
                }
              }
            }
          }
          .footer {
            background: #ffffff;
            text-align: center;
            border: none !important;
            h3 {
              font-size: 36px;
              margin-bottom: 30px;
            }
            button {
              font-size: 18px;
              width: 190px;
              height: 75px;
              border: none;
              padding-top: 5px;
              background: #ffdb00;
              img {
                margin-left: 15px;
              }
            }
            h4 {
              font-size: 16px;
              opacity: 0.6;
              margin: 68px 0 20px 0;
            }
            .social-icons {
              display: flex;
              justify-content: center;
              padding-bottom: 110px;
              .icon {
                width: 40px;
                height: 40px;
                -webkit-border-radius: 20px;
                -moz-border-radius: 20px;
                border-radius: 20px;
                border: 1px solid #dfdfdf;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 12px;
                img {
                  margin-top: -3px;
                }
              }
            }
          }
        }
      `}</style>
      <style jsx global>{`
        .html * {
          font-size: 200px;
        }
        .html-content img {
          max-width: 100%;
        }
        .html-content code {
          display: flex;
          margin: 70px 0;
          width: 100%;
          overflow-x: auto;
          color: #221f20;
          font-size: 16px;
          background: #f2f2f2;
          padding: 30px;
        }
        .html-content a {
          text-decoration: none;
          color: #3377ff;
        }
        .html-content a:hover {
          color: #003399;
        }
        .html-content p {
          font-family: "Capitolium Regular";
          font-size: 20px;
        }
        .html-content h1,
        .html-content h2,
        .html-content h3,
        .html-content h4,
        .html-content h5,
        .html-content h6 {
          font-family: "Apercu Bold";
          font-size: 26px;
          margin-top: 70px;
          margin-bottom: 40px;
        }
        .html-content > code {
          display: flex;
          margin: 70px 0;
          width: 100%;
          overflow-x: auto;
          background: #f2f2f2;
          padding: 20px;
        }
        .html-content li code {
          margin: 70px 0;
          width: 100%;
          overflow-x: auto;
          background: #f2f2f2;
          padding: 0 4px;
        }
        .html-content blockquote {
          font-family: "Capitolium Regular";
          font-size: 24px;
          font-style: italic;
          color: #221f20;
          padding-left: 25px;
          border-left: 4px solid blue;
          margin: 50px 0;
        }
        .html-content ol,
        .html-content ul {
          padding: 25px;
          list-style: none;
          counter-reset: li;
        }
        .html-content ol li,
        .html-content ul li {
          font-family: "Capitolium Regular";
          font-size: 18px;
          color: #221f20;
          padding: 0 0 20px 25px;
          counter-increment: li;
          text-indent: -45px;
        }
        .html-content ol li::before {
          content: counter(li, decimal-leading-zero);
          color: #8e8e8e;
          margin-right: 25px;
        }
        .html-content ul li::before {
          content: "•";
          font-size: 22px;
          line-height: 1em;
          color: #8e8e8e;
          margin-right: 25px;
        }
      `}</style>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const paths = await getSlugs();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const postData = await getPost(params.slug);
//   return {
//     props: {
//       postData,
//     },
//   };
// }

export async function getServerSideProps({ params }) {
  const postData = await getPost(params.slug);
  return {
    props: {
      postData,
    },
  };
}
