import "./App.css";
import SingleReview from "./components/SingleReview";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviews from "./assets/data";
import { useEffect, useState } from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const showNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex < 0) {
      setActiveIndex(reviews.length - 1);
    } else if (activeIndex > reviews.length - 1) {
      setActiveIndex(0);
    }
  }, [activeIndex]);

  return (
    <div className="App">
      <h1>
        <span style={{ color: "orange" }}>/</span> Review Slider
      </h1>
      <div className="reviews">
        {reviews.map((review, index) => {
          let position = "nextSlide";
          if (index === activeIndex) {
            position = "activeSlide";
          } else if (
            index === activeIndex - 1 ||
            (activeIndex === 0 && index === reviews.length - 1)
          ) {
            position = "lastSlide";
          }
          return <SingleReview review={review} position={position} />;
        })}
        <span className="prev-container" onClick={showPrev}>
          <FaChevronLeft className="prev" />
        </span>
        <span className="next-container" onClick={showNext}>
          <FaChevronRight className="next" />
        </span>
      </div>
    </div>
  );
}

export default App;
