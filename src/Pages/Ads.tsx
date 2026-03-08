import { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import "./Ads.css";

export function Ads() {
  const [categories, setCategories] = useState([
    "AC Services",
    "Refrigerator Repair",
    "Painter",
    "Construction",
  ]);
  const [ads, setAds] = useState(null);
  const [loading, setLoading] = useState(false);
  function loadData() {
    setLoading(true);
    fetch("https://dummyjson.com/products?skip=30")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAds(data.products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <nav className="cat-nav border border-1">
        {categories.map((category) => (
          <div className="">{category}</div>
        ))}
      </nav>
      <div className="text-3xl font-semibold mb-2">Ac Services</div>
      <div className="card-wraper">
        {ads && ads.length > 0
          ? ads.map((adDetails) => <Card data={adDetails} />)
          : null}
      </div>
    </div>
  );
}
