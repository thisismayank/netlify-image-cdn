import React, { useState } from "react";

function ImageCarousel() {
  const images = [
    { url: "/ronaldo.jpeg", alt: "Ronaldo" },
    { url: "/uefa.jpeg", alt: "UEFA" },
    { url: "/ozil.jpeg", alt: "Ozil" },
    { url: "/neymar.jpeg", alt: "NEymar" },
    { url: "/all.jpeg", alt: "All" },
    { url: "/messi.jpeg", alt: "Messi" },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(500);
  const [imageHeight, setImageHeight] = useState(300);
  const [fit, setFit] = useState("contain");
  const [format, setFormat] = useState("webp");

  const baseUrl = "https://mysitename.netlify.app/.netlify/images";

  const buildImageUrl = () => {
    const { url } = images[selectedImageIndex];
    return `${baseUrl}?url=${url}&w=${imageWidth}&h=${imageHeight}&fit=${fit}&fm=${format}`;
  };

  return (
    <div>
      <div>
        <img
          src={buildImageUrl()}
          alt={images[selectedImageIndex].alt}
          style={{
            display: "block",
            margin: "auto",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {images.map((img, index) => (
          <button key={index} onClick={() => setSelectedImageIndex(index)}>
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
        <input
          type="number"
          value={imageWidth}
          onChange={(e) => setImageWidth(e.target.value)}
        />
        <input
          type="number"
          value={imageHeight}
          onChange={(e) => setImageHeight(e.target.value)}
        />
        <select value={fit} onChange={(e) => setFit(e.target.value)}>
          <option value="contain">Contain</option>
          <option value="cover">Cover</option>
          <option value="fill">Fill</option>
        </select>
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="webp">WebP</option>
          <option value="jpg">JPG</option>
          <option value="png">PNG</option>
          <option value="avif">AVIF</option>
        </select>
      </div>
    </div>
  );
}

export default ImageCarousel;
