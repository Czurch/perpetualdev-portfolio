import { useState, useEffect, Suspense } from "react";
import "./App.css";
import ThreeCanvas from "./components/ThreeCanvas";
import TabbedContent from "./components/TabbedContent";
import coffeeLoop from "./assets/img/coffee-loop.gif";
import OfficeCanvas from "./components/Office";

function App() {
  const [tabIndex, setTabIndex] = useState(2);

  useEffect(() => {
    console.log(`Tab has changed: ${tabIndex}`);
  }, [tabIndex]);
  const hdrTextureURL = new URL(
    "./assets/img/brown_photostudio_180_4k.hdr",
    import.meta.url
  );

  return (
    <div className="App">
      <ThreeCanvas
        hdr={hdrTextureURL}
        model="./src/assets/models/portfolio-office-v4.glb"
        camIndex={tabIndex}
      />
      <OfficeCanvas />
      <TabbedContent
        onTabChange={(t) => {
          setTabIndex(t);
        }}
      ></TabbedContent>
    </div>
  );
}

export default App;
