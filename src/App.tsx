import React from "react";
import { Searchbox } from "./components/Searchbox";

function App() {
  return (
    <div>
      <h1 className="text-3xl mt-12 font-bold">
        👋🏻 Hey, I'm Nathaniel Richards
      </h1>
      <p className="mt-8">
        This site is about all things code. I am a software engineer and
        lifelong learner. The official use of this site is as a journal and
        digital vault for all things me <span>(Nathaniel Richards)</span> , and
        engineering projects / endeavors.
      </p>
      <p className="mt-8">
        I am more than a web developer. I am an engineer that is passionate
        about designing, developing, and shipping production quality technology.
        I strive to bring ideas to life! I am based out of Muskegon, Michigan
        and yes, it is cold. I have been programming and designing games, apps,
        and programs since I was 14 and have a strong passion about all things
        tech.
      </p>
      <h2 className="font-bold my-8 text-2xl">Where Can You Find Me?</h2>
      <div className="flex flex-col">
        <a
          href="https://github.com/NateTheDev1"
          target="_blank"
          rel="noreferrer"
          className="my-4"
        >
          Github
        </a>
        <a
          href="https://github.com/NateTheDev1"
          target="_blank"
          rel="noreferrer"
          className="my-4"
        >
          Link
        </a>
        <a
          href="https://github.com/NateTheDev1"
          target="_blank"
          rel="noreferrer"
          className="my-4"
        >
          Link
        </a>
      </div>
      <h2 className="font-bold mt-8 text-2xl">
        Goals I'm Working Towards In 2022-2023:
      </h2>
      <ul className="list-disc">
        <li className="mt-4">
          Learning all about compilers and system development.
        </li>
      </ul>
    </div>
  );
}

export default App;
