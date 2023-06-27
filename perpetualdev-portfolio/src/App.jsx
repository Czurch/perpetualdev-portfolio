import { useState, useEffect, Suspense } from "react";
import "./App.css";
import ThreeCanvas from "./components/ThreeCanvas";
import TabbedContent from "./components/TabbedContent";
import coffeeLoop from "./assets/img/coffee-loop.gif";
import CoffeeLoader from "./components/CoffeeLoader";
import DevInProgress from "./components/DevInProgress";
import OfficeCanvas from "./components/OfficeCanvas";
import * as weather from "./utilities/weather";

function App() {
  const [tabIndex, setTabIndex] = useState(2);
  const [weatherCondition, setWeatherCondition] = useState({
    time: "day",
    weatherStatus: "clear",
  });

  useEffect(() => {
    weather.getCurrentWeather().then((w) => {
      setWeatherCondition(w);
      console.log(weatherCondition);
    });
  }, []);

  useEffect(() => {
    console.log(`Tab has changed: ${tabIndex}`);
  }, [tabIndex]);
  const hdrTextureURL = new URL(
    "./assets/img/brown_photostudio_180_4k.hdr",
    import.meta.url
  );

  return (
    <div className="App">
      <OfficeCanvas camIndex={tabIndex} weather={weatherCondition} />
      <TabbedContent
        onTabChange={(t) => {
          setTabIndex(t);
        }}
        weatherCondition={weatherCondition}
      ></TabbedContent>
    </div>
  );
}

export default App;
