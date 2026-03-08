import { Link, useNavigate } from "react-router";
import "./Card.css";

export function Card(prop) {
  const navigate = useNavigate();

  const rating = Number(prop.data.rating);
  const hasHalfStar = rating % 1 >= 0.5;

  if (prop) {
    return (
      <div className="ad-card">
        {prop ? (
          <div
            className="w-full"
            onClick={() => navigate(`/ad/${prop.data.id}`)}
          >
            <img src={prop.data.thumbnail} alt="" />
            <div>
              <div className="text-xl font-semibold">{prop.data.title}</div>
              {prop.data.rating &&
                Array.from({ length: Math.trunc(prop.data.rating) }).map(
                  (star, i) => (
                    <span key={i} className="me-1">
                      ⭐
                    </span>
                  ),
                )}

              {hasHalfStar && (
                <div className="relative inline-block">
                  <span> ⭐</span>
                  <div className="inline-block w-2 h-4 scale-y-125 z-10 ms-[-10px] bg-white absolute top-2"></div>
                </div>
              )}

              <span className="ms-2">{prop.data.rating}</span>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
