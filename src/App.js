import "./App.css";
import CacheControl from "./Components/cachecontrol.component";
import ImageCarousel from "./Components/imagecarousel.component";

function App() {
  return (
    <div className="App">
      <ImageCarousel />
      <CacheControl />
    </div>
  );
}

export default App;
