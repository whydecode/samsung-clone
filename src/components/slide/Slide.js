import ImageGallery from "react-image-gallery";
import "./Slide.css";
const images = [
  { original: require("../../assets/image1.webp") },
  { original: require("../../assets/image2.jpg") },
  { original: require("../../assets/image3.webp") },
  { original: require("../../assets/image4.webp") },
  { original: require("../../assets/image5.webp") },
  { original: require("../../assets/image6.jpg") },
  { original: require("../../assets/image7.jpg") },
];
const Slide = () => {
  return (
    <div className="slide">
      <ImageGallery
      showBullets={true}
      slideInterval={5000}
      slideDuration={300}
        items={images}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default Slide;
