import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import "../assets/styles/Project.scss";
import { Chip } from "@mui/material";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <header className="flex flex-col items-center text-center">
        <h2 className="font-bold text-5xl mb-12 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
          Technical Projects
        </h2>
      </header>
      <div className="projects-grid">
        <div className="project">
          <div style={{ animationDelay: "0ms" }}>
            <div className="relative overflow-hidden rounded-lg md:rounded-lg lg:rounded-lg shadow-lg shadow-indigo-200/20 cursor-pointer group">
              <img
                src={mock01}
                alt="project_images"
                className="object-cover w-full h-[450px] group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-neutral-900"></div>
              <div className="absolute bottom-3 left-0 lg:px-6 md:px-6 px-4 py-4 w-full">
                <h1 className="mb-5 text-3xl lg:text-4xl md:text-4l font-semibold tracking-tight">
                  BusRadar - Real-time Bus Tracking
                </h1>
                <p className="mb-5 text-[13px] leading-normal">
                  A real-time bus tracking system powered by Java Spring Boot
                  and ReactJS, offering precise arrival predictions and delay
                  forecasts through GPS integration and advanced analytics.
                </p>
                <div className="">
                  <div className="flex flex-wrap lg:gap-1 md:gap-3 gap-2 border-b-[0.5px] border-neutral-50/60 pb-3">
                    <Chip className="chip" label="React" />
                    <Chip className="chip" label="Java Springboot" />
                    <Chip className="chip" label="CSS" />
                    <Chip className="chip" label="MongoDB" />
                    <Chip className="chip" label="Docker" />
                    <Chip className="chip" label="Web Crawling" />
                    <Chip className="chip" label="Redis" />
                  </div>
                  <div className="flex flex-gap mt-4">
                    <div className="mr-3">
                      <a
                        href="https://github.com/tonidevvn/bus-radar"
                        className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Repo</span>
                      </a>
                    </div>
                    <div className="mr-3">
                      <button
                        className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                        rel="noreferrer"
                      >
                        <span>Live</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div style={{ animationDelay: "0ms" }}>
            <div className="relative overflow-hidden rounded-lg md:rounded-lg lg:rounded-lg shadow-lg shadow-indigo-200/20 cursor-pointer group">
              <img
                src={mock02}
                alt="project_images"
                className="object-cover w-full h-[450px] group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-neutral-900"></div>
              <div className="absolute bottom-3 left-0 lg:px-6 md:px-6 px-4 py-4 w-full">
                <h1 className="mb-5 text-3xl lg:text-4xl md:text-4l font-semibold tracking-tight">
                  Favorite Movies Collection
                </h1>
                <p className="mb-5 text-[13px] leading-normal">
                  A favorite movies collection web app, created with React +
                  TypeScript + Vite Using template provides a minimal setup to
                  get React working in Vite with HMR and some ESLint rules.
                </p>
                <div className="">
                  <div className="flex flex-wrap lg:gap-1 md:gap-3 gap-2 border-b-[0.5px] border-neutral-50/60 pb-3">
                    <Chip className="chip" label="React" />
                    <Chip className="chip" label="TypeScript" />
                    <Chip className="chip" label="HTML" />
                    <Chip className="chip" label="CSS" />
                  </div>
                  <div className="flex flex-gap mt-4">
                    <div className="mr-3">
                      <a
                        href="https://github.com/tonidevvn/moviesCollection"
                        className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Repo</span>
                      </a>
                    </div>
                    <div className="mr-3">
                      <a
                        href="https://toni-movies-collection.vercel.app/"
                        className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div style={{ animationDelay: "0ms" }}>
            <div className="relative overflow-hidden rounded-lg md:rounded-lg lg:rounded-lg shadow-lg shadow-indigo-200/20 cursor-pointer group">
              <img
                src={mock03}
                alt="project_images"
                className="object-cover w-full h-[450px] group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-neutral-900"></div>
              <div className="absolute bottom-3 left-0 lg:px-6 md:px-6 px-4 py-4 w-full">
                <h1 className="mb-5 text-3xl lg:text-4xl md:text-4l font-semibold tracking-tight">
                  Food Price Tracker
                </h1>
                <p className="mb-5 text-[13px] leading-normal">
                  A web application that tracks food prices across multiple
                  online stores, featuring real-time data crawling, advanced
                  search capabilities, and data analytics.
                </p>
                <div className="">
                  <div className="flex flex-wrap lg:gap-1 md:gap-3 gap-2 border-b-[0.5px] border-neutral-50/60 pb-3">
                    <Chip className="chip" label="NextJs" />
                    <Chip className="chip" label="Java Springboot" />
                    <Chip className="chip" label="Web Crawling" />
                    <Chip className="chip" label="CSS" />
                    <Chip className="chip" label="Selenium" />
                    <Chip className="chip" label="MySQL" />
                  </div>
                  <div className="flex flex-gap mt-4">
                    <div className="mr-3">
                      <a
                        href="https://github.com/tonidevvn/applied-computing-concepts"
                        className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Repo</span>
                      </a>
                    </div>
                    <div className="mr-3">
                      <button
                        className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                        rel="noreferrer"
                      >
                        <span>Live</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div style={{ animationDelay: "0ms" }}>
            <div className="relative overflow-hidden rounded-lg md:rounded-lg lg:rounded-lg shadow-lg shadow-indigo-200/20 cursor-pointer group">
              <img
                src={mock04}
                alt="project_images"
                className="object-cover w-full h-[450px] group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-neutral-900"></div>
              <div className="absolute bottom-3 left-0 lg:px-6 md:px-6 px-4 py-4 w-full">
                <h1 className="mb-5 text-3xl lg:text-4xl md:text-4l font-semibold tracking-tight">
                  Ecommerce Web App
                </h1>
                <p className="mb-5 text-[13px] leading-normal">
                  An ecommerce web app, created with React.js and Ant Design.
                  This web app uses dummy/fake JSON data to use as placeholder
                  in development or in prototype testing.
                </p>
                <div className="">
                  <div className="flex flex-wrap lg:gap-1 md:gap-3 gap-2 border-b-[0.5px] border-neutral-50/60 pb-3">
                    <Chip className="chip" label="ReactJs" />
                    <Chip className="chip" label="HTML" />
                    <Chip className="chip" label="SASS" />
                    <Chip className="chip" label="Antd" />
                  </div>
                  <div className="flex flex-gap mt-4">
                    <div className="mr-3">
                      <a
                        href="https://github.com/tonidevvn/ecommerce-antd"
                        className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Repo</span>
                      </a>
                    </div>
                    <div className="mr-3">
                      <a
                        href="https://ecommerce-antd.vercel.app/"
                        className="lg:text-base md:text-base text-[10px] transition-all duration-300 border-2 px-3 py-2 lg:px-4 lg:py-2 md:px-4 md:py-2 hover:bg-indigo-600 text-indigo-300 hover:text-white border-indigo-600 rounded font-semibold flex items-center space-x-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
