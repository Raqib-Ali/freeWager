import { useParams } from "react-router";
import "./Ad.css";
import { useEffect, useRef, useState } from "react";
export function Ad() {
  const param = useParams();
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const imagesRef = useRef(0);

  const [ads, setAds] = useState({
    Name: "Raqib Ali",
    Discription: "Best Ac service in the Bareilly",
    Pricing: "$500",
    Image: "../ad-image.png",
    Rating: "5.0",
    ServiceMan: "Yusuf Estes",
    Category: "AC Service",
    Location: "Zakhira, Bareilly 243001",
  });

  useEffect(() => {
    loadData();

    const interval = setInterval(function imageSlider() {
      console.log(imagesRef.current);
      console.log(countRef.current);

      if (imagesRef.current - 1 === countRef.current) {
        countRef.current = 0;
        setCount(0);
      } else {
        setCount((prevCount) => {
          const updatedCount = prevCount + 1;
          countRef.current = updatedCount; // Update the ref
          return updatedCount;
        });
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function loadData() {
    try {
      const response = await fetch(`https://dummyjson.com/product/${param.id}`);
      const data = await response.json();
      setProduct(data);
      setImages(data.images);
      imagesRef.current = data.images.length; // Store images in the ref
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  function handleImages(e) {
    if (e.target.id === "left") {
      if (count >= 1) {
        setCount((prev) => prev - 1);
      } else {
        setCount(images.length - 1);
      }
    } else {
      if (images.length - 1 === count) {
        setCount(0);
      } else {
        setCount((prev) => prev + 1);
      }
    }
  }

  return (
    <div>
      <div className="text-3xl font-semibold mb-2">
        {String(product?.category).toUpperCase()}
      </div>
      <div className="ad-layout">
        <div>
          <div className="relative border-1 rounded-xl">
            <img className="h-[65vh]" src={images[count]} />
            {images.length > 1 ? (
              <div className="next-button">
                <button
                  onClick={(e) => {
                    handleImages(e);
                  }}
                  id="left"
                  className="bi bi-arrow-left rounded-2xl border-1"
                ></button>
                <button
                  onClick={(e) => {
                    handleImages(e);
                  }}
                  className="bi bi-arrow-right rounded-4xl border-1"
                ></button>
              </div>
            ) : null}
          </div>
          <div className="bg discription border-1 rounded-2xl mt-3">
            <div className="text-xl font-semibold p-2">Description</div>
            <div className="p-2">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg pricing border-1 rounded-2xl">
            ${product.price}
          </div>
          <div className=" bg Service-man border-1 rounded-2xl">
            <div className="flex items-center">
              <div className="seller-prof">
                <img className="h-full" src="" alt="" />
              </div>
              <div className="fs-4">{ads.ServiceMan}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
