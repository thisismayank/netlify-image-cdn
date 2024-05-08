import React, { useState } from "react";

function ImageCarousel() {
  const images = [
    { url: "/ronaldo-3.jpeg", alt: "Ronaldo" },
    { url: "/ronaldo-2.jpeg", alt: "UEFA" },
    { url: "/ozil.jpeg", alt: "Ozil" },
    { url: "/neymar.jpeg", alt: "Neymar" },
    { url: "/football-1.jpeg", alt: "All" },
    { url: "/messi.jpeg", alt: "Messi" },
    {
      url: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb3RiYWxsfGVufDB8fDB8fHww",
      alt: "football",
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(500);
  const [imageHeight, setImageHeight] = useState(300);
  const [fit, setFit] = useState("contain");
  const [format, setFormat] = useState("webp");

  const baseUrl = "https://mayank-cdn-test.netlify.app/.netlify/images";

  const buildImageUrl = () => {
    const { url } = images[selectedImageIndex];
    return `${baseUrl}?url=${encodeURIComponent(
      url
    )}&w=${imageWidth}&h=${imageHeight}&fit=${fit}&fm=${format}`;
  };

  const handleFitChange = (event) => {
    setFit(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "300px",
          overflow: "hidden",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={buildImageUrl()}
          alt={images[selectedImageIndex].alt}
          style={{
            width: fit === "fill" ? "100%" : "auto",
            height: fit === "fill" ? "100%" : "auto",
            maxWidth: fit === "contain" || fit === "cover" ? "100%" : "none",
            maxHeight: fit === "contain" || fit === "cover" ? "100%" : "none",
            objectFit: fit,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 10,
        }}
      >
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
        <select value={fit} onChange={handleFitChange}>
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
      <div style={{ marginTop: "20px" }}>
        <p>
          Description based on selected fit:{" "}
          {fit === "contain"
            ? "Resizes the image to fit within the given dimension while preserving its aspect ratio."
            : fit === "cover"
            ? "Resizes the image to fill the given dimension while preserving its aspect ratio, but may crop the image."
            : "Stretches the image to fit the content box, regardless of its aspect ratio."}
        </p>
      </div>
    </div>
  );
}

export default ImageCarousel;
