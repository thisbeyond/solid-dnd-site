import cc from "classcat";
import { NavLink } from "./nav-link";
import { Hero } from "./hero";
import { WaveHeader } from "./wave-header";
import { createEffect, createSignal, onCleanup } from "solid-js";

function NavMenuButton() {
  return (
    <button
      class={
        "block md:hidden flex items-center py-1 px-3 " +
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
  );
}

function Nav() {
  return (
    <nav
      class={
        "w-full flex-grow justify-end md:flex md:items-center " +
        "md:w-auto hidden mt-2 md:mt-0 bg-white md:bg-transparent " +
        "p-4 md:p-0 z-20"
      }
    >
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#examples">Examples</NavLink>
      <NavLink href="#get-it">Get it</NavLink>
    </nav>
  );
}

export function Header() {
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
    <header class="bg-gradient">
      <div
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
          <a class="uppercase font-bold text-2xl lg:text-3xl" href="#">
            Solid DnD
          </a>
          <NavMenuButton />
          <Nav />
        </div>
        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
      </div>
      <Hero />
      <div class="relative -mt-2 lg:-mt-6">
        <WaveHeader />
      </div>
    </header>
  );
}
