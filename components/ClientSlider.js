import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { db } from '../firebase'
import {  collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
export default function clientSlider() {
  const [clients, setClients] = useState([])
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };


  const fetchData = async () => {
    const q = await query(collection(db,'clients'),orderBy('timestamp'))
    onSnapshot(q, (snapshot) => {
      setClients(snapshot.docs.map((doc) => doc))
    })
  }

  useEffect(() =>{
    fetchData();

  },[])

  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={2000}
        customTransition={"ease 2000ms"}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        itemClass="test"
      >
        {clients.map((data,index) =>{
          if(data.data().position == 'First row'){
            return(
              <div key={index} className="client__box">
          <div className="client__img">
            <img src={data.data().image} alt="web development, website design, web design company India"/>
          </div>
        </div>
          )
          }
        
        })} 
      </Carousel>

      {/*  <<<<<<<< SECOND >>>>>>>>>>>>> */}
      <div className="slider__two">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={2000}
          customTransition={"ease 2000ms"}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          itemClass="test"
        >
          {clients.map((data,index) => {
            if(data.data().position == 'Second row'){
              return (
                <div key={index} className="client__box">
                <div className="client__img">
                  <img src={data.data().image} alt=' Ecommerce development in Bangalore' />
                </div>
              </div>
              )
            }
          })}
         
          
        </Carousel>
      </div>

      {/*  <<<<<<<< SECOND >>>>>>>>>>>>> */}
      <div className="slider__two">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={2000}
          customTransition={"ease 2000ms"}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          itemClass="test"
        >

          {clients.map((data,index)=>{
            if(data.data().position == 'Third row'){
              return(
                <div key={index} className="client__box">
                <div className="client__img" id="client__img__9">
                  <img src={data.data().image} alt="Online food delivery app in kerala" />
                </div>
              </div>
              )
            }
          })}
        </Carousel>
      </div>
    </div>
  );
}
