import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import { getPost, getSlugs } from "../api/post";
import remark from "remark";
import html from "remark-html";
import { useRouter } from "next/router";

export default function Blog(props) {
  const post = props.postData;
  const router = useRouter();

  let htmlContent;
  remark()
    .use(html)
    .process(post.html, function (err, file) {
      htmlContent = String(file);
    });

  return (
    <Layout>
      <Head>
        <title>Men &amp; Mice - blog</title>
      </Head>
      <div className="blog">
        <div className="body">
          <div className="head">
            <div className="wrapper">
              <Link href="/">
                <a href="#" className="text-decoration-none">
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
              </Link>
              <div className="d-flex">
                {post.tags.map((tag) => {
                  return <h2 key={tag.id}>{tag.name}</h2>;
                })}
              </div>
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
              <img src={post.feature_image} className="post-image" alt="" />
            </div>
            {/* .wrapper */}
          </div>
          {/* .head */}
          <div className="content">
            <div className="wrapper">
              <div className="social-media">
                <a href="#" className="icon">
                  <img src="/img/facebook.svg" alt="" />
                </a>
                <a href="#" className="icon">
                  <img src="/img/twitter.svg" alt="" />
                </a>
                <a href="#" className="icon">
                  <img src="/img/linked-in.svg" alt="" />
                </a>
              </div>
              <div
                className="html-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              ></div>
              <div className="d-flex tags">
                {/* {post.tags.map((tag) => {
                  return (
                    <Link href={`/?tag=${tag.id}`} as="/" key={tag.id}>
                      <h2>{tag.name}</h2>
                    </Link>
                  );
                })} */}
              </div>
            </div>
            {/* .wrapper */}
          </div>
          {/* content */}
          <div className="footer">
            <div className="wrapper">
              <h3>Enjoyed the article?</h3>
              <button className="read-more">
                READ MORE <img src="/img/caret-right-black.png" alt="" />
              </button>
              <h4>Share on Social Media</h4>
              <div className="social-icons d-flex">
                <a href="#" className="icon">
                  <img src="/img/facebook.svg" width="20" alt="" />
                </a>
                <a href="#" className="icon">
                  <img src="/img/twitter.svg" width="20" alt="" />
                </a>
                <a href="#" className="icon">
                  <img src="/img/linked-in.svg" width="20" alt="" />
                </a>
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
                font-family: "Apercu Bold";
                font-size: 18px;
                color: #ffffff;
                svg {
                  margin-right: 12px;
                }
              }
              h2 {
                font-family: "Apercu Regular";
                font-size: 12px;
                color: #ffdb00;
                text-transform: uppercase;
                margin: 70px 25px 20px 0;
              }
              h1 {
                font-family: "Apercu Bold";
                font-size: 48px;
                color: #ffffff;
                margin-bottom: 35px;
                @media (max-width: 768px) {
                  font-size: 36px;
                }
              }
              p {
                font-family: "Capitolium Regular";
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
                    font-family: "Apercu Bold";
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
                h2 {
                  font-family: "Apercu Regular";
                  font-size: 14px;
                  color: #442acc;
                  margin-right: 35px;
                  text-transform: uppercase;
                  cursor: pointer;
                  transition: opacity 0.5s;
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
              font-family: "Apercu Bold";
              font-size: 36px;
              margin-bottom: 30px;
            }
            button {
              font-family: "Apercu Medium";
              font-size: 18px;
              width: 190px;
              height: 75px;
              border: none;
              background: #ffdb00;
              img {
                margin-left: 15px;
              }
            }
            h4 {
              font-family: "Apercu Regular";
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
              }
            }
          }
        }
      `}</style>
      <style jsx global>{`
        .html-content img {
          max-width: 100%;
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

export async function getStaticPaths() {
  const paths = await getSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPost(params.slug);
  return {
    props: {
      postData,
    },
  };
}
