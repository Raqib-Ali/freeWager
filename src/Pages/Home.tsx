import { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router";
import { CarouselExample } from "../Components/Carousel";
import { Card } from "../Components/Card";
import Search from "@/Components/Search";

export function Home() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([
    {
      Category: "Ac Services",
      Discription: "Best AC Services near you",
      image: new URL(
        "../assets/pexels-kathleen-austin-kuhn-2152973960-32497161.jpg",
        import.meta.url,
      ).href,
    },
    {
      Category: "Motor Mechanic",
      Discription: "Best Mechanic near you",
      image: new URL("../assets/pexels-maltelu-2244746.jpg", import.meta.url)
        .href,
    },
    {
      Category: "Carpainter",
      Discription: "Find Carpainter near you",
      image: new URL("../assets/pexels-ono-kosuki-5974235.jpg", import.meta.url)
        .href,
    },
    {
      Category: "Electrician",
      Discription: "Best Electrician near you",
      image: new URL(
        "../assets/pexels-ranjeet-860714737-27928762.jpg",
        import.meta.url,
      ).href,
    },
    {
      Category: "Home Service",
      Discription: "Best Home Services near you",
      image: new URL(
        "../assets/pexels-tima-miroshnichenko-6195275.jpg",
        import.meta.url,
      ).href,
    },
  ]);

  const [ads, setAds] = useState([]);

  useEffect(() => {
    if (ads.length === 0) {
      fetch("https://dummyjson.com/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setAds(data.products);
        });
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}

      <div className="hero">
        <div className="col1 rounded-xl md:w-[40%]">
          <div className="title border-bottom shadow bg-amber-50 rounded-xl flex flex-col gap-2">
            <h1 className="leading-10">
              Find a Wager
              <br /> at your Door Step!
            </h1>
            <p className=" text-gray-500">
              Looking for a Wager, Why not Free
              <span className="text-success">Wager</span> today?
            </p>
            <Search />
          </div>
        </div>

        <CarouselExample />
      </div>

      <div className="containers">
        <div>
          <h2 className="h2">Browse Services</h2>
        </div>
        <div className="categories max-w-7xl mx-auto">
          {categories.map((category) => (
            <div
              className="cat-card border rounded-lg shadow-lg cursor-pointer"
              style={{
                backgroundImage: `url(${category.image})`,
              }}
              onClick={() => navigate("/ads/categories")}
            >
              <div className="cat-card__overlay">
                <h3>{category.Category}</h3>
                <p>{category.Discription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="containers mt-20 grid md:grid-cols-2 gap-3.5 h-[500px]">
        <div
          className="h-full rounded-2xl relative"
          style={{
            backgroundImage: `url(${
              new URL("../assets/electrician-2.jpg", import.meta.url).href
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute bg-emerald-500 w-[250px] h-[160px] rounded-2xl bottom-4 right-5 p-4">
            <div className=" flex flex-col gap-2">
              <p className="text-5xl text-white">+25K</p>
              <p className="text-white">Trusted Volunters</p>
              <p>Verified individuals with an eye on promising results</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          <div className="flex-1 bg-gray-600 rounded-2xl text-white px-6 flex items-center">
            <div>
              <h3 className="text-4xl mb-3.5 text-amber-400 font-semibold">
                Customer First, Always
              </h3>
              <p className="text-l">
                We believe home services should be simple, reliable, and
                stress-free. Whether it’s a small repair or a full home
                makeover, we ensure quality work and complete customer
                satisfaction.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-amber-500 rounded-2xl px-6 flex items-center">
            <div className="flex-1">
              <h3 className="text-4xl mb-3.5 text-white text-center font-semibold">
                Your Deserves the Best Care
              </h3>
              <p className="text-l text-gray-700 text-center ">
                Book trusted professionals today and experience seamless service
                like never before.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-bottom containers">
        <h2 className="h2">Recent Services</h2>
        <div className="ads max-w-7xl mx-auto">
          {ads.map((adDetails) => (
            <Card data={adDetails} />
          ))}
        </div>
      </div>
    </div>
  );
}
