const NavLink = (props) => {
  return (
    <a class="p-4 hover:text-blue-500 font-normal text-xl" href={props.href}>
      {props.children}
    </a>
  );
};

export default function Home() {
  return (
    <div class="min-h-screen container mx-auto p-8 max-w-screen-xl">
      <nav class="flex justify-end">
        <NavLink href="">About</NavLink>
        <NavLink href="">Examples</NavLink>
        <NavLink href="">Github</NavLink>
      </nav>
      <div class="py-20 px-8 lg:px-15 flex flex-col lg:flex-row lg:space-x-32">
        <header class="py-8">
          <h1 class="text-8xl font-black uppercase mb-2">Solid DnD</h1>
          <h2 class="text-2xl font-light leading-loose mb-10">
            A lightweight drag and drop toolkit for&nbsp;
            <a href="https://solidjs.com/">Solid</a>.
          </h2>
          <div class="flex space-x-6">
            <button class="rounded bg-blue-500 text-white px-6 py-3 font-medium text-xl">
              Get started
            </button>
            <button class="rounded border border-cool-gray-200 bg-cool-gray-50 text-gray-900 px-6 py-3">
              npm install @thisbeyond/solid-dnd
            </button>
          </div>
        </header>
      </div>
      <main class="">
        <section class="py-20 px-8 lg:px-15 flex flex-col lg:flex-row lg:space-x-32">
          <div>x</div>
          <div>y</div>
        </section>
      </main>
    </div>
  );
}
