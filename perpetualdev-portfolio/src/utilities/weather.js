export const getWeatherJSON = async (lat, lon) => {
    if(!lat || !lon) return;
    const req = await fetch(`https://api.weather.gov/points/${lat},${lon}`)
    console.log(req)
    const data = req.json();
    if (data.status === "ok") {
        //some Hook to set a new Bookmark
        console.log(data);
        return data;
    } else {
        alert(data);
    }
}

export const getProvidenceWeather = async (lat, lon) => {
    const req = await fetch(`https://api.weather.gov/gridpoints/BOX/64,64/forecast`)
    const data = req.json();
    if (req.ok) {
        return data;
    } else {
        alert(data);
    }
}

export const getCurrentWeather = async ( ) => {
    const weatherJson = await getProvidenceWeather();
    console.log(weatherJson.properties.periods[0])

}