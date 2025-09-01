import React from "react";
import animeClothy from "../assets/animeClothy.png";
import uWeather from "../assets/uWeather.png";

const projects = () => {



  return (
    <>
      <div id="projects" className="projects w-80 m-auto mt-5 ">
        <h2>Projects</h2>
        <div className=" mt-4">
          <div className={`anime-clothy animate w-100 h-30vh bg-primary d-flex justify-content-between align-items-center mb-5`}>
            <div className="anime-left d-flex flex-column justify-content-center px-5 ">
              <h4>1. Anime Clothy</h4>
              <p>
                It's an interactive and visually appealing project that
                showcases key frontend development skills. The website features
                a dynamic user interface with clean navigation, event handling
                for buttons, and interactive components like product display
                cards with ratings. It's designed to simulate a complete online
                store experience, highlighting your ability to create a
                professional and responsive user interface for an e-commerce
                platform.{" "}
                <a
                  className="text-light"
                  href="https://e-commerce25-alpha.vercel.app/"
                >
                  AnimeClothy
                </a>
              </p>
            </div>
            <div className="anime-right">
              <img
                className="right-30px-minus rounded-lg"
                src={animeClothy}
                width={150}
                alt=""
              />
            </div>
          </div>
          <div className={`u-weather animate w-100 h-45vh bg-primary d-flex justify-content-between my-5 align-items-center float-end`}>
            <div className="weather-left ">
              <img
                className="position-relative left-40px-minus"
                src={uWeather}
                width={280}
                alt=""
              />
            </div>
            <div className="weather-right d-flex flex-column justify-content-center px-5 ">
              <h4>2. U Weather</h4>
              <p>
                This is a single-page weather application
                that provides real-time weather information for any city. Built
                with a clean and minimalistic user interface, the app allows
                users to search for a city by name. It fetches and displays key
                weather data, including: Temparature, Humidity, Wind Speed
              </p>
              <p>
                The application leverages a third-party API, specifically
                **RapidAPI**, to fetch the necessary weather data, demonstrating
                your ability to integrate external APIs into your projects. It's
                a functional and user-friendly tool that showcases my skills
                in API integration and data presentation.{" "}
                <a
                  className="text-light"
                  href="https://weather-app-gules-kappa-55.vercel.app/"
                >
                  U Weather
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default projects;
