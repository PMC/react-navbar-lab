import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
export const Home = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <main className="container" {...props}>
        <section id="preview">
          <h2>Preview</h2>
          <p>
            Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet
            suscipit sapien. Nulla iaculis eros a elit pharetra egestas.
          </p>
          <form>
            <div className="grid">
              <input
                type="text"
                name="firstname"
                placeholder="First name"
                aria-label="First name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                aria-label="Email address"
                autoComplete="email"
                required
              />
              <button type="submit">Subscribe</button>
            </div>
            <fieldset>
              <label htmlFor="terms">
                <input type="checkbox" role="switch" id="terms" name="terms" />I
                agree to the
              </label>
            </fieldset>
          </form>
        </section>

        <section id="typography">
          <h2>Typography</h2>
          <p>
            Aliquam lobortis vitae nibh nec rhoncus. Morbi mattis neque eget
            efficitur feugiat. Vivamus porta nunc a erat mattis, mattis feugiat
            turpis pretium. Quisque sed tristique felis.
          </p>

          <blockquote>
            "Maecenas vehicula metus tellus, vitae congue turpis hendrerit non.
            Nam at dui sit amet ipsum cursus ornare."
            <footer>
              <cite>- Phasellus eget lacinia</cite>
            </footer>
          </blockquote>

          <h3>Lists</h3>
          <ul>
            <li>Aliquam lobortis lacus eu libero ornare facilisis.</li>
            <li>Nam et magna at libero scelerisque egestas.</li>
            <li>Suspendisse id nisl ut leo finibus vehicula quis eu ex.</li>
            <li>Proin ultricies turpis et volutpat vehicula.</li>
          </ul>

          <h3>Inline text elements</h3>
          <div className="grid">
            <p>
              <a href="#">Primary link</a>
            </p>
            <p>
              <a href="#" className="secondary">
                Secondary link
              </a>
            </p>
            <p>
              <a href="#" className="contrast">
                Contrast link
              </a>
            </p>
          </div>
          <div className="grid">
            <p>
              <strong>Bold</strong>
            </p>
            <p>
              <em>Italic</em>
            </p>
            <p>
              <u>Underline</u>
            </p>
          </div>
          <div className="grid">
            <p>
              <del>Deleted</del>
            </p>
            <p>
              <ins>Inserted</ins>
            </p>
            <p>
              <s>Strikethrough</s>
            </p>
          </div>
          <div className="grid">
            <p>
              <small>Small </small>
            </p>
            <p>
              Text <sub>Sub</sub>
            </p>
            <p>
              Text <sup>Sup</sup>
            </p>
          </div>
          <div className="grid">
            <p>
              <abbr title="Abbreviation" data-tooltip="Abbreviation">
                Abbr.
              </abbr>
            </p>
            <p>
              <kbd>Kbd</kbd>
            </p>
            <p>
              <mark>Highlighted</mark>
            </p>
          </div>
          <h1>Heading 1</h1>
          <p>
            Integer bibendum malesuada libero vel eleifend. Fusce iaculis turpis
            ipsum, at efficitur sem scelerisque vel. Aliquam auctor diam ut
            purus cursus fringilla. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <h2>Heading 2</h2>
          <p>
            Integer bibendum malesuada libero vel eleifend. Fusce iaculis turpis
            ipsum, at efficitur sem scelerisque vel. Aliquam auctor diam ut
            purus cursus fringilla. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </p>

          <h3>Heading 3</h3>
          <p>
            Integer bibendum malesuada libero vel eleifend. Fusce iaculis turpis
            ipsum, at efficitur sem scelerisque vel. Aliquam auctor diam ut
            purus cursus fringilla. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <h4>Heading 4</h4>
          <p>
            Cras fermentum velit vitae auctor aliquet. Nunc non congue urna, at
            blandit nibh. Donec ac fermentum felis. Vivamus tincidunt arcu ut
            lacus hendrerit, eget mattis dui finibus.
          </p>
          <h5>Heading 5</h5>
          <p>
            Donec nec egestas nulla. Sed varius placerat felis eu suscipit.
            Mauris maximus ante in consequat luctus. Morbi euismod sagittis
            efficitur. Aenean non eros orci. Vivamus ut diam sem.
          </p>
          <h6>Heading 6</h6>
          <p>
            Ut sed quam non mauris placerat consequat vitae id risus. Vestibulum
            tincidunt nulla ut tortor posuere, vitae malesuada tortor molestie.
            Sed nec interdum dolor. Vestibulum id auctor nisi, a efficitur sem.
            Aliquam sollicitudin efficitur turpis, sollicitudin hendrerit ligula
            semper id. Nunc risus felis, egestas eu tristique eget, convallis in
            velit.
          </p>

          <figure>
            <img
              src="img/aleksandar-jason-a562ZEFKW8I-unsplash-2000x1000.jpg"
              alt="Minimal landscape"
            />
            <figcaption>
              Image from
              <a href="https://unsplash.com/photos/a562ZEFKW8I" target="_blank">
                unsplash.com
              </a>
            </figcaption>
          </figure>
        </section>

        <section id="buttons">
          <h2>Buttons</h2>
          <p className="grid">
            <button>Primary</button>
            <button className="secondary">Secondary</button>
            <button className="contrast">Contrast</button>
          </p>
          <p className="grid">
            <button className="outline">Primary outline</button>
            <button className="outline secondary">Secondary outline</button>
            <button className="outline contrast">Contrast outline</button>
          </p>
        </section>

        <section id="form">
          <form>
            <h2>Form elements</h2>

            <label htmlFor="search">Search</label>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search"
            />

            <label htmlFor="text">Text</label>
            <input type="text" id="text" name="text" placeholder="Text" />
            <small>Curabitur consequat lacus at lacus porta finibus.</small>

            <label htmlFor="select">Select</label>
            <select id="select" name="select" required>
              <option>Select</option>
              <option>Two</option>
            </select>

            <label htmlFor="file">
              File browser
              <input type="file" id="file" name="file" />
            </label>

            <div className="grid">
              <label htmlFor="valid">
                Valid
                <input
                  type="text"
                  id="valid"
                  name="valid"
                  placeholder="Valid"
                  aria-invalid="false"
                />
              </label>
              <label htmlFor="invalid">
                Invalid
                <input
                  type="text"
                  id="invalid"
                  name="invalid"
                  placeholder="Invalid"
                  aria-invalid="true"
                />
              </label>
              <label htmlFor="disabled">
                Disabled
                <input
                  type="text"
                  id="disabled"
                  name="disabled"
                  placeholder="Disabled"
                  disabled
                />
              </label>
            </div>

            <div className="grid">
              <label htmlFor="date">
                Date
                <input type="date" id="date" name="date" />
              </label>

              <label htmlFor="time">
                Time
                <input type="time" id="time" name="time" />
              </label>

              <label htmlFor="color">
                Color
                <input type="color" id="color" name="color" value="#0eaaaa" />
              </label>
            </div>

            <div className="grid">
              <fieldset>
                <legend>
                  <strong>Checkboxes</strong>
                </legend>
                <label htmlFor="checkbox-1">
                  <input type="checkbox" id="checkbox-1" name="checkbox-1" />
                  Checkbox
                </label>
                <label htmlFor="checkbox-2">
                  <input type="checkbox" id="checkbox-2" name="checkbox-2" />
                  Checkbox
                </label>
              </fieldset>

              <fieldset>
                <legend>
                  <strong>Radio buttons</strong>
                </legend>
                <label htmlFor="radio-1">
                  <input
                    type="radio"
                    id="radio-1"
                    name="radio"
                    value="radio-1"
                  />
                  Radio button
                </label>
                <label htmlFor="radio-2">
                  <input
                    type="radio"
                    id="radio-2"
                    name="radio"
                    value="radio-2"
                  />
                  Radio button
                </label>
              </fieldset>

              <fieldset>
                <legend>
                  <strong>Switches</strong>
                </legend>
                <label htmlFor="switch-1">
                  <input
                    type="checkbox"
                    id="switch-1"
                    name="switch-1"
                    role="switch"
                  />
                  Switch
                </label>
                <label htmlFor="switch-2">
                  <input
                    type="checkbox"
                    id="switch-2"
                    name="switch-2"
                    role="switch"
                  />
                  Switch
                </label>
              </fieldset>
            </div>

            <input type="reset" value="Reset" />
            <input type="submit" value="Submit" />
          </form>
        </section>

        <section id="tables">
          <h2>Tables</h2>
          <div className="overflow-auto">
            <table className="striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="accordions">
          <h2>Accordions</h2>
          <details>
            <summary>Accordion 1</summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque urna diam, tincidunt nec porta sed, auctor id velit.
              Etiam venenatis nisl ut orci consequat, vitae tempus quam commodo.
              Nulla non mauris ipsum. Aliquam eu posuere orci. Nulla convallis
              lectus rutrum quam hendrerit, in facilisis elit sollicitudin.
              Mauris pulvinar pulvinar mi, dictum tristique elit auctor quis.
              Maecenas ac ipsum ultrices, porta turpis sit amet, congue turpis.
            </p>
          </details>
          <details open>
            <summary>Accordion 2</summary>
            <ul>
              <li>Vestibulum id elit quis massa interdum sodales.</li>
              <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
              <li>Quisque sed eros non eros ornare elementum.</li>
              <li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
            </ul>
          </details>
        </section>

        <article id="article">
          <h2>Article</h2>
          <p>
            Nullam dui arcu, malesuada et sodales eu, efficitur vitae dolor. Sed
            ultricies dolor non ante vulputate hendrerit. Vivamus sit amet
            suscipit sapien. Nulla iaculis eros a elit pharetra egestas. Nunc
            placerat facilisis cursus. Sed vestibulum metus eget dolor pharetra
            rutrum.
          </p>
          <footer>
            <small>
              Duis nec elit placerat, suscipit nibh quis, finibus neque.
            </small>
          </footer>
        </article>

        <section id="group">
          <h2>Group</h2>
          <form>
            <fieldset role="group">
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
              <input type="submit" value="Subscribe" />
            </fieldset>
          </form>
        </section>

        <section id="progress">
          <h2>Progress bar</h2>
          <progress id="progress-1" value="25" max="100"></progress>
          <progress id="progress-2"></progress>
        </section>
        <section id="loading">
          <h2>Loading</h2>
          <article aria-busy="true"></article>
          <button aria-busy="true">Please wait</button>
        </section>
      </main>
    </>
  );
};
