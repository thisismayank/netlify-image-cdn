import React, { useState } from "react";

function ImageCarousel() {
  // List of images
  const images = [
    {
      url: "https://frontofficesports.com/wp-content/uploads/2023/10/USATSI_19520555_168393969_lowres-scaled-e1697215176168.jpg?quality=100",
      alt: "Image 1",
    },
    {
      url: "https://imageio.forbes.com/specials-images/imageserve/5f5be112e7f395dc08ef8e58/Lionel-Messi-celebrating-scoring-a-goal-in-the-2019-20-UEFA-Champions-League/1960x0.jpg?format=jpg&width=960",
      alt: "Image 2",
    },
    {
      url: "https://wallpapers.com/images/featured/soccer-players-rcbotqi1fdibr8r1.jpg",
      alt: "Image 3",
    },
  ];

  // State to keep track of the selected image and its attributes
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(500); // Default width
  const [imageHeight, setImageHeight] = useState(300); // Default height

  // Handlers for image attribute changes
  const handleWidthChange = (event) => setImageWidth(event.target.value);
  const handleHeightChange = (event) => setImageHeight(event.target.value);

  return (
    <div>
      <div>
        <img
          src={images[selectedImageIndex].url}
          alt={images[selectedImageIndex].alt}
          width={imageWidth}
          height={imageHeight}
          style={{ display: "block", margin: "auto" }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          position: "absolute",
          bottom: 10,
        }}
      >
        {images.map((img, index) => (
          <button
            key={index}
            style={{ border: 0 }}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={img.url}
              alt={img.alt}
              width={100}
              height={100}
              style={{ display: "block", margin: "auto" }}
            />
          </button>
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "right", marginTop: "20px" }}
      >
        <div>
          <label>Width: </label>
          <input
            type="number"
            value={imageWidth}
            onChange={handleWidthChange}
          />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <label>Height: </label>
          <input
            type="number"
            value={imageHeight}
            onChange={handleHeightChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
