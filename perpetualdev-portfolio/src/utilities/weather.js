export const getWeatherJSON = async (lat, lon) => {
  if (!lat || !lon) return;
  const req = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
  console.log(req);
  const data = req.json();
  if (data.status === "ok") {
    //some Hook to set a new Bookmark
    console.log(data);
    return data;
  } else {
    alert(data);
  }
};

export const getProvidenceWeather = async (lat, lon) => {
  const req = await fetch(
    `https://api.weather.gov/gridpoints/BOX/64,64/forecast`
  );
  const data = req.json();
  if (req.ok) {
    return data;
  } else {
    alert(data);
  }
};

export const getCurrentWeather = async () => {
  const weatherJson = await getProvidenceWeather();
  const icon = weatherJson.properties.periods[0].icon.split("/");
  const weatherStatus = getLimitedWeatherStatus(icon[6].split("?")[0]);
  const isDay = icon[5] === "day";
  return {
    time: isDay ? "day" : "night",
    weatherStatus: weatherStatus,
  };
};

const getLimitedWeatherStatus = (status) => {
  switch (status) {
    case "skc":
    case "wind_skc":
    case "hot":
    case "cold":
      return "clear";
    case "few":
    case "sct":
    case "bkn":
    case "ovc":
    case "wind_few":
    case "wind_sct":
    case "wind_bkn":
    case "wind_ovc":
      return "cloudy";
    case "rain":
    case "rain_showers":
    case "rain_showers_hi":
    case "tsra":
    case "tsra_sct":
    case "tsra_hi":
    case "dust":
    case "smoke":
    case "haze":
    case "fog":
      return "raining";
    case "snow":
    case "rain_snow":
    case "rain_sleet":
    case "snow_sleet":
    case "fzra":
    case "rain_fzra":
    case "snow_fzra":
    case "sleet":
      return "raining";
    case "tornado":
    case "hurricane":
    case "tropical_storm":
    case "blizzard":
    default:
      return "raining";
  }
};
