import blackLine from "../public/images/home/black-line.png";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import cookies from "js-cookie";

export default function Blogs() {
  const [blog, setBlog] = useState([]);

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
    <div className="blogs">
      <div className="blogs__head">
        <h1>
          Our thoughts & insights
          <br />
          Follow the magic tech
        </h1>
      
        <div className="blogs__line">
          <Image
            src={blackLine}
            alt="Mobile application development companies in Calicut"
          />
        </div>
      </div>
      <div className="blogs__content__row lg:flex ">
        <div className="blogs__content grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blog.map((data, index) => {
            if (index <= 2) {
              return (
                <Link key={index} href="/blogmore">
                  <div
                    className="blogs__box "
                    onClick={() => cookies.set("blogId", data.slug)}
                  >
                    <div className="blogs__image">
                      <img
                        src={data.thumbnail[0].url}
                       
                        alt="Mobile application development companies in Kerala"
                      />
                 
                    </div>
                    <p className="pt-3">{data.title}</p>
                  </div>
                </Link>
              );
            }
          })}
        </div>
        <Link href="/blog">
          <div className="blogs__arrow  ">
            <span className="rounded-full">
              <ArrowForwardIcon id="blogs__arrow" />
            </span>
            <h5>LOAD MORE</h5>
          </div>
        </Link>
      </div>
    </div>
  );
}
