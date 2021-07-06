import { createEffect, createSignal, onCleanup } from "solid-js";
import cc from "classcat";

import { Hero } from "../hero";
import { WaveFooter } from "../wave-footer";
import { WaveHeader } from "../wave-header";
import { NavLink } from "../nav-link";

export default function Home() {
  const [scrolled, setScrolled] = createSignal(false);

  const onScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  createEffect(() => {
    window.addEventListener("scroll", onScroll);
    onCleanup(() => window.removeEventListener("scroll", onScroll));
  });

  return (
    <div class="leading-normal tracking-normal text-white bg-gradient">
      <div
        id="header"
        class={cc([
          "fixed w-full z-30 top-0 transition-colors",
          scrolled() ? "shadow-md bg-white text-black" : "text-white",
        ])}
      >
        <div
          class={
            "px-3 lg:px-20 w-full container mx-auto flex flex-wrap " +
            "items-center justify-between mt-0 py-2"
          }
        >
          <div class="flex items-center">
            <a
              class={
                "uppercase no-underline hover:no-underline font-bold " +
                "text-2xl lg:text-3xl"
              }
              href="#"
            >
              Solid DnD
            </a>
          </div>
          <div class="block md:hidden pr-4">
            <button
              id="nav-toggle"
              class={
                "flex items-center p-1 text-pink-800 hover:text-gray-900 " +
                "focus:outline-none focus:shadow-outline " +
                "transform transition hover:scale-105 duration-300 ease-in-out"
              }
            >
              <svg
                class="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <nav
            class={
              "w-full flex-grow justify-end md:flex md:items-center " +
              "md:w-auto hidden mt-2 md:mt-0 bg-white md:bg-transparent " +
              "p-4 md:p-0 z-20"
            }
            id="nav-content"
          >
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Examples</NavLink>
            <NavLink href="#">Code</NavLink>
          </nav>
        </div>
        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
      </div>
      <Hero />
      <div class="relative -mt-2 lg:-mt-6">
        <WaveHeader />
      </div>
      <section class="bg-white border-b py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h1
            class={
              "w-full my-2 text-5xl font-bold leading-tight text-center " +
              "text-gray-800"
            }
          >
            Features
          </h1>
          <div class="w-full mb-4">
            <div
              class={
                "h-1 mx-auto bg-gradient w-64 opacity-25 my-0 py-0 rounded-t"
              }
            />
          </div>
          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
                Images from:
                <a class="text-pink-500 underline" href="https://undraw.co/">
                  undraw.co
                </a>
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">DEMO</div>
          </div>
          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/2 p-6 mt-6">DEMO</div>
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Lorem ipsum dolor sit amet
                </h3>
                <p class="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  <br />
                  <br />
                  Images from:
                  <a class="text-pink-500 underline" href="https://undraw.co/">
                    undraw.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1
            class={
              "w-full my-2 text-5xl font-bold leading-tight text-center " +
              "text-gray-800"
            }
          >
            Title
          </h1>
          <div class="w-full mb-4">
            <div
              class={
                "h-1 mx-auto bg-gradient w-64 opacity-25 my-0 py-0 rounded-t"
              }
            />
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div
              class={
                "flex-1 bg-white rounded-t rounded-b-none " +
                "overflow-hidden shadow"
              }
            >
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div
              class={
                "flex-none mt-auto bg-white rounded-b rounded-t-none " +
                "overflow-hidden shadow p-6"
              }
            >
              <div class="flex items-center justify-start">
                <button
                  class={
                    "mx-auto lg:mx-0 hover:underline bg-gradient text-white " +
                    "font-bold rounded-full my-6 py-4 px-8 shadow-lg " +
                    "focus:outline-none focus:shadow-outline transform " +
                    "transition hover:scale-105 duration-300 ease-in-out"
                  }
                >
                  Action
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow p-6">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <p class="w-full text-gray-600 text-xs md:text-sm">
                  GETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-center">
                <button class="mx-auto lg:mx-0 hover:underline bg-gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-end">
                <button class="mx-auto lg:mx-0 hover:underline bg-gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-gray-100 py-8">
        <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Pricing
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto bg-gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div class="p-8 text-3xl font-bold text-center border-b-4">
                  Free
                </div>
                <ul class="w-full text-center text-sm">
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                </ul>
              </div>
              <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  £0
                  <span class="text-base">for one user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="mx-auto lg:mx-0 hover:underline bg-gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
              <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div class="w-full p-8 text-3xl font-bold text-center">
                  Basic
                </div>
                <div class="h-1 w-full bg-gradient my-0 py-0 rounded-t" />
                <ul class="w-full text-center text-base font-bold">
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                </ul>
              </div>
              <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-4xl font-bold text-center">
                  £x.99
                  <span class="text-base">/ per user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="mx-auto lg:mx-0 hover:underline bg-gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div class="p-8 text-3xl font-bold text-center border-b-4">
                  Pro
                </div>
                <ul class="w-full text-center text-sm">
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                  <li class="border-b py-4">Thing</li>
                </ul>
              </div>
              <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  £x.99
                  <span class="text-base">/ per user</span>
                </div>
                <div class="flex items-center justify-center">
                  <button class="mx-auto lg:mx-0 hover:underline bg-gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WaveFooter />
      <section class="container mx-auto text-center py-6 mb-12">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Call to Action
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <h3 class="my-4 text-3xl leading-tight">
          Main Hero Message to sell yourself!
        </h3>
        <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Action!
        </button>
      </section>

      <footer class="bg-white">
        <div class="container mx-auto px-8">
          <div class="w-full flex flex-col md:flex-row py-6">
            <div class="flex-1 mb-6 text-black">
              <a
                class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                Solid DnD
              </a>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Links</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    FAQ
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Help
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Legal</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Terms
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Social</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Facebook
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Linkedin
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Company</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Official Blog
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    About Us
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    class="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a
          href="https://www.freepik.com/free-photos-vectors/background"
          class="text-gray-500"
        >
          Background vector created by freepik - www.freepik.com
        </a>
      </footer>
    </div>
  );
}
