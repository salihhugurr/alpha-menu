import React,{useState,useEffect} from "react";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import {
  urlFor,
  getPosts
} from "../../client";
import { SubHeading } from "../../components";
import "./Gallery.css";
import { Link } from "react-router-dom";


const Gallery = () => {
  const scrollRef = React.useRef(null);
  const [posts, setPosts] = useState([]);
  console.log(posts);
  const getData = async () => {
    let posts = await getPosts();
    setPosts(posts);
  };

  useEffect(() => {
    getData();
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Fotoğraflar</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Instagram'dan paylaştığımız görsellere burdan ulaşabilirsiniz.
        </p>
        {/* <button type="button" className="custom__button">View More</button> */}
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {posts.map((post, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={urlFor(post.image)} alt="gallery_image" />

              <a className="absolute" href={post.url} target="_blank">
                <BsInstagram className="gallery__image-icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
