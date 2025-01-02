import React from "react";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

export const About = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <main className="container" {...props}>
        <section>
          <h1>About page</h1>
        </section>
        <section>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </section>
        <h1>Vite + React</h1>
        <section className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/pages/Home.jsx</code> and save to test HMR
          </p>
        </section>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </>
  );
};
