const NavLink = (props) => {
  return (
    <a class="p-4 hover:text-blue-500 font-normal text-xl" href={props.href}>
      {props.children}
    </a>
  );
};

export default function Home() {
  return (
    <div class="min-h-screen">
      <div class="container mx-auto p-8 max-w-screen-xl mb-8">
        <nav class="flex justify-end mb-4">
          <NavLink href="">About</NavLink>
          <NavLink href="">Examples</NavLink>
          <NavLink href="">Github</NavLink>
        </nav>
        <div class="py-10 flex flex-col lg:flex-row lg:space-x-20">
          <header class="">
            <h1 class="text-8xl font-black uppercase mb-2 whitespace-nowrap">
              Solid DnD
            </h1>
            <h2 class="text-2xl font-light leading-loose mb-10">
              A lightweight drag and drop toolkit for&nbsp;
              <a href="https://solidjs.com/">Solid</a>.
            </h2>
            <div class="flex space-x-6">
              <button class="rounded bg-blue-500 text-white px-6 py-3 font-medium text-xl whitespace-nowrap">
                Get started
              </button>
              <button class="rounded border border-cool-gray-200 bg-cool-gray-50 text-gray-900 px-6 py-3 whitespace-nowrap">
                npm install @thisbeyond/solid-dnd
              </button>
            </div>
          </header>
          <div class="pr-10">
            <Demo />
          </div>
        </div>
      </div>
      <main>
        <section class="bg-cool-gray-50 py-20">
          <div class="container mx-auto p-8 max-w-screen-xl flex flex-col lg:flex-row lg:space-x-20">
            <div>x</div>
            <div>y</div>
          </div>
        </section>
      </main>
    </div>
  );
}
