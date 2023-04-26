import { useState, useEffect } from "react";
import "./App.css";
import ThreeCanvas from "./components/ThreeCanvas";
import TabbedContent from "./components/TabbedContent";

function App() {
  const [tabIndex, setTabIndex] = useState(3);

  useEffect(() => {
    console.log(`Tab has changed: ${tabIndex}`);
  }, [tabIndex]);
  const hdrTextureURL = new URL(
    "./assets/img/neon_photostudio_4k.hdr",
    import.meta.url
  );

  return (
    <div className="App">
      <ThreeCanvas
        hdr={hdrTextureURL}
        model="./src/assets/models/portfolio-office-v4.glb"
        camIndex={tabIndex}
      />
      <TabbedContent
        onTabChange={(t) => {
          setTabIndex(t);
        }}
      ></TabbedContent>
    </div>
  );
}

export default App;
