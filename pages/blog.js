import Header from "../components/header";
import Footer from "../components/footer";
import moment from "moment";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

import cookies from "js-cookie";
import Pixel from "../components/pixel";
export default function Blog() {
  const [blog, setBlog] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const data = !showMore ? blog.slice(0, 6) : blog;

  const fetchData = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?_sort=published_at:desc`
      )
      .then((response) => {
        setBlog(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Blog </title>
        <meta property="og:title" content="Blog" key="title" />
      </Head>
      <Pixel name="FACEBOOK_PIXEL_1" />

      <div className="blog">
        <div className="blog__header">
          <Header />
          <h1>BLOG</h1>
          <h3>Our services make us the real KINGS</h3>
        </div>
        <div className="blog__content container">
          {data.map((data, index) => {
            const date = moment(data.date).format("MMM DD YYYY");
            const content = data.content.slice(0, 600);
            return (
              <div key={index} className="blog_row">
                <div className="blog__box pl-5 pr-5 grid grid-cols-2 lg:grid-cols-3 gap-10">
                  <div className="blog__img">
                    <img
                      src={data.thumbnail[0].url}
                     
                    />
                  </div>
                  <div className="blog__box__right  lg:col-span-2">
                    <div className="grid grid-cols-1">
                      <h3 className="order-last sm:order-first">
                        {data.title}
                      </h3>
                      <span className="flex ">
                        <h5>{date}</h5>
                        <p
                          className="pl-1 pr-1"
                          style={{ color: "gray", marginTop: "5px" }}
                        >
                          |
                        </p>
                        <h5>{data.author}</h5>
                      </span>
                    </div>

                    <p>{content} </p>

                    <Link href="blogmore">
                      <button
                        onClick={() => cookies.set("blogId", data.slug)}
                        id="blog__list__button"
                      >
                        READ MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="blog__bottom flex container">
            <button onClick={() => setShowMore(!showMore)}>
              {!showMore ? "LOAD MORE" : "LOAD LESS"}{" "}
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
