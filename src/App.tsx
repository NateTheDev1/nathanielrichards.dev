import React from "react";
import { Searchbox } from "./components/Searchbox";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div
      className="flex justify-between overflow-hidden"
      style={{ height: "90vh" }}
    >
      <Sidebar />
      <main className="px-8 w-3/4 overflow-scroll">
        <h1 className="text-3xl font-bold">👋🏻 Hey, I'm Nathaniel Richards</h1>
        <p className="mt-8">
          This site is about all things code. I am a software engineer and
          lifelong learner. The official use of this site is as a journal and
          digital vault for all things me <span>(Nathaniel Richards)</span> ,
          and engineering projects / endeavors.
        </p>
        <p className="mt-8">
          I am more than a web developer. I am an engineer that is passionate
          about designing, developing, and shipping production quality
          technology. I strive to bring ideas to life! I am based out of
          Muskegon, Michigan and yes, it is cold. I have been programming and
          designing games, apps, and programs since I was 14 and have a strong
          passion about all things tech.
        </p>
        <h2 className="font-bold mt-12 text-2xl">Where Can You Find Me?</h2>
        <p className="my-4">
          To reach me the fastest, reach out to me through LinkedIn or Email *
          For Business Inquires, My Email is also the best way to reach me
        </p>
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
            Twitter
          </a>
          <a
            href="https://github.com/NateTheDev1"
            target="_blank"
            rel="noreferrer"
            className="my-4"
          >
            LinkedIn
          </a>
        </div>
        <h2 className="font-bold mt-8 text-2xl">
          Goals I'm Working Towards In 2022-2023:
        </h2>
        <ul className="list-disc">
          <li className="mt-4">
            Learning all about compilers and system development.
          </li>
          <li className="mt-4">
            Learning all about compilers and system development.
          </li>
          <li className="mt-4">
            Learning all about compilers and system development.
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
