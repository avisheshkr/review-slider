import "./App.css";
import SingleReview from "./components/SingleReview";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import reviews from "./assets/data";
import { useEffect, useState } from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevSlide = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const showNextSlide = () => {
    setActiveIndex((prev) => prev + 1);
  };

  useEffect(() => {
    activeIndex < 0 && setActiveIndex(reviews.length - 1);
    activeIndex > reviews.length - 1 && setActiveIndex(0);
  }, [activeIndex]);

  useEffect(() => {
    const slide = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(slide);
  }, [activeIndex]);

  return (
    <div className="App">
      <h1>
        <span style={{ color: "orange" }}>/</span> Review Slider
      </h1>
      <div className="reviews">
        {reviews.map((review, index) => {
          let position = "nextSlide";

          index === activeIndex
            ? (position = "activeSlide")
            : index === activeIndex - 1 ||
              (activeIndex === 0 && index === reviews.length - 1)
            ? (position = "lastSlide")
            : (position = "nextSlide");

          return (
            <div>
              <SingleReview key={index} review={review} position={position} />
            </div>
          );
        })}
        <span className="prev-container" onClick={showPrevSlide}>
          <FaChevronLeft className="prev" />
        </span>
        <span className="next-container" onClick={showNextSlide}>
          <FaChevronRight className="next" />
        </span>
        <div className="dot-container">
          {reviews.map((review, index) => {
            let color = "inactive";
            if (index === activeIndex) {
              color = "active";
            }
            return (
              <GoPrimitiveDot
                className={`dot ${color}`}
                onClick={() => setActiveIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
