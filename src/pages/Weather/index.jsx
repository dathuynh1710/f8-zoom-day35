import React, { useState } from "react";
import styles from "./Weather.module.scss";

function Weather() {
    const weatherData = {
        hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
        hcm: { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
        danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 },
    };

    const [selectedCity, setSelectedCity] = useState("hanoi");
    const [data, setData] = useState(weatherData);

    const handleChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleRefresh = () => {
        const newData = { ...data };
        Object.keys(newData).forEach((key) => {
            newData[key].temp = newData[key].temp + (Math.floor(Math.random() * 11) - 5);
            newData[key].humidity = newData[key].humidity + (Math.floor(Math.random() * 11) - 5);
        });
        setData(newData);
    };

    const getWeatherIcon = (weather) => {
        if (weather.includes("Nắng")) return "☀️";
        if (weather.includes("Mưa")) return "🌧️";
        if (weather.includes("mây") || weather.includes("Mây")) return "☁️";
        return "🌤️";
    };

    const cityWeather = data[selectedCity];

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Thông tin thời tiết</h2>

            <select className={styles.select} value={selectedCity} onChange={handleChange}>
                <option value="hanoi">Hà Nội</option>
                <option value="hcm">TP.HCM</option>
                <option value="danang">Đà Nẵng</option>
            </select>

            <div className={styles.card}>
                <h3 className={styles.city}>
                    {cityWeather.city} {getWeatherIcon(cityWeather.weather)}
                </h3>
                <p>Nhiệt độ: {cityWeather.temp}°C</p>
                <p>Tình trạng: {cityWeather.weather}</p>
                <p>Độ ẩm: {cityWeather.humidity}%</p>
            </div>

            <button className={styles.btn} onClick={handleRefresh}>
                Làm mới
            </button>
        </div>
    );
}

export default Weather;
