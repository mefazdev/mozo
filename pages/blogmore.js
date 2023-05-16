import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import cookies from "js-cookie";
import axios from "axios";
import moment from "moment";
import { parseCookies } from "./api/parseCookies";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Seo from "../components/Seo";
import Pixel from "../components/pixel";
import Head from "next/head";
export default function BlogMore({ initailValue }) {
  const slug = initailValue;
  const [blog, setBlog] = useState([]);
  const [similarBlog, setSimilarBlog] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [state, setState] = useState(false);

  const fetchData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?slug=${slug}`)

      .then((response) => {
        setBlog(response.data[0]);
      });

    setState(true);
  };

  const handleClick = async (id) => {
    await cookies.set("blogId", id);
    axios
      .get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?slug=${slug}`)
      .then((response) => {
        setBlog(response.data[0]);
      });
  };
  const fetchSimilarBlog = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?_sort=published_at:desc`
      )

      .then((response) => {
        setSimilarBlog(response.data);
      });
  };

  useEffect(() => {
    fetchData();

    fetchSimilarBlog();
  }, []);

  return (
    <>
      {" "}
      <Head>
        <title>Blog </title>
        <meta property="og:title" content="Blog" key="title" />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <Seo
        title={blog.seo ? blog.seo.metaTtile : ""}
        description={blog.seo ? blog.seo.metaDescription : ""}
        url={
          state
            ? blog.seo.shareImage.media.url
            : ""
        }
        shareImage={blog.seo ? blog.seo.shareImage.alt : ""}
        keywords={blog.seo ? blog.keywords : ""}
        preventIndexing={blog.preventIndexing}
      />
      <div className="blogMore">
        <div className="blog__header">
          <Header />
          <h1>BLOG</h1>
          <h3>Our services make us the real KINGS</h3>
        </div>
        
        <div className="blogMore__content container">
          <h2>{blog.title}</h2>
          <span
            className="flex"
            style={{ justifyContent: "center", marginTop: "10px" }}
          >
            <h6>{moment(blog.date).format("MMM DD YYYY")}</h6>
            <h5 className="pl-2 pr-2" style={{ color: "#8D8D8D" }}>
              |
            </h5>
            <h6>{blog.author}</h6>
          </span>
          <div className="blogMore__img">
            <img
              src={
                blog.image
                  ? blog.image[0].url
                  : ""
              }
            />
          </div>
         
          <p>
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </p>
        </div>

        <div className="similar__post container">
          <h6 className="pl-10 ">Similar Posts</h6>
          {similarBlog.map((data, index) => {
            const date = moment(data.date).format("MMM DD YYYY");
            const content = data.content.slice(0, 500);
            if (index <= 1) {
              return (
                <div key={index} className="blog_row">
                  <div className="blog__box pl-5 pr-5 grid grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="blog__img">
                      <img
                        src={data.thumbnail[0].url}
                      />
                    </div>
                    <div className="blog__box__right lg:col-span-2">
                      <h3>{data.title}</h3>
                      <span className="flex">
                        <h5>{date}</h5>
                        <p
                          className="pl-1 pr-1"
                          style={{ color: "gray", marginTop: "5px" }}
                        >
                          |
                        </p>
                        <h5>{data.author}</h5>
                      </span>
                      <p>
                        <ReactMarkdown>{content}</ReactMarkdown>
                      </p>
                      <Link href="/blogmore">
                        <button
                          value={data.slug}
                          onClick={(e) => handleClick(e.target.value)}
                        >
                          READ MORE
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <Footer />
      </div>
    </>
  );
}

BlogMore.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);
  return {
    initailValue: cookies.blogId,
  };
};
