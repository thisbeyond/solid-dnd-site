import { WaveFooter } from "../wave-footer";
import { Header } from "../header";
import { FeatureCard } from "../feature-card";
import { SectionHeading } from "../section-heading";
import { Example, ExampleCode, ExampleDemo } from "../example";
import { SimpleDragAndDrop } from "../examples/simple-drag-and-drop";

import example1String from "../examples/simple-drag-and-drop?raw";

const Home = () => {
  return (
    <div class="leading-normal tracking-normal text-white ">
      <Header />

      <section class="bg-white border-b py-8">
        <div class="container mx-auto pt-4 pb-12 px-8 sm:px-20">
          <SectionHeading>Features</SectionHeading>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8">
            <FeatureCard title="Built for Solid">
              Leverages fine-grained reactivity primitives for coordination.
            </FeatureCard>
            <FeatureCard title="Flexible">
              Supports a wide range of cases, from plain drag and drop to
              sortable lists, multiple containers and more.
            </FeatureCard>
            <FeatureCard title="Extendable">
              Integrate your own sensors, collision detection algorithms and
              presets.
            </FeatureCard>
            <FeatureCard title="Zero dependencies">
              Just pair with Solid and good to go.
            </FeatureCard>
            <FeatureCard title="Performant">
              No component re-rendering paired with CSS transforms for silky
              smooth performance.
            </FeatureCard>
            <FeatureCard title="Adaptable">
              Get started quickly with low friction directives, but access more
              control if needed.
            </FeatureCard>
          </div>
        </div>
      </section>
      <section class="bg-gray-100 py-8">
        <div class="container mx-auto pt-4 pb-12 px-8 sm:px-20">
          <SectionHeading>Examples</SectionHeading>
          <div class="space-y-10">
            <Example title="Simple drag & drop">
              <ExampleDemo>
                <SimpleDragAndDrop />
              </ExampleDemo>
              <ExampleCode code={example1String} />
            </Example>
          </div>
        </div>
      </section>
      <footer class="bg-gradient">
        <WaveFooter />
        <section class="container mx-auto text-center p-6 pb-12">
          <SectionHeading variant="light">Get it</SectionHeading>
          <h3 class="mb-4 text-2xl leading-tight">
            Install with NPM (or check out the code on{" "}
            <a class="hover:underline text-blue-gray-300" href="">
              Github
            </a>
            )
          </h3>
          <button
            class={
              "mx-auto lg:mx-0 hover:underline bg-white text-gray-800 " +
              "font-bold rounded-full my-6 py-4 px-8 shadow-lg " +
              "focus:outline-none focus:shadow-outline transform transition " +
              "hover:scale-105 duration-300 ease-in-out"
            }
          >
            npm install @thisbeyond/solid-dnd
          </button>
        </section>
      </footer>
    </div>
  );
};

export default Home;
