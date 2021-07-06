import { WaveFooter } from "../wave-footer";
import { Header } from "../header";

export default function Home() {
  return (
    <div class="leading-normal tracking-normal text-white ">
      <Header />

      <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
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
          </div>
        </div>
      </section>
      <section class="bg-gray-100 py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h1
            class={
              "w-full my-2 text-5xl font-bold leading-tight text-center " +
              "text-gray-800"
            }
          >
            Examples
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
      <footer class="bg-gradient">
        <WaveFooter />
        <section class="container mx-auto text-center p-6">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
            Get it
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <h3 class="my-4 text-2xl leading-tight">
            Install with NPM (or check out the code on{" "}
            <a class="hover:underline" href="">
              Github➔
            </a>
            )
          </h3>
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            npm install @thisbeyond/solid-dnd
          </button>
        </section>
      </footer>
    </div>
  );
}
