import { WaveFooter } from "../wave-footer";
import { Header } from "../header";
import { FeatureCard } from "../feature-card";
import { SectionHeading } from "../section-heading";
import { Example, ExampleCode, ExampleDemo } from "../example";
import { DragAndDropExample } from "../examples/drag-and-drop-example";
import { DragOverlayExample } from "../examples/drag-overlay-example";
import { SortableListExample } from "../examples/sortable-list-example";
import { ConditionalDropExample } from "../examples/conditional-drop-example";
import dragAndDropString from "../examples/drag-and-drop-example?raw";
import dragOverlayString from "../examples/drag-overlay-example?raw";
import conditionalDropString from "../examples/conditional-drop-example?raw";
import sortableListString from "../examples/sortable-list-example?raw";
import { InstallButton } from "../install-button";

const Home = () => {
  return (
    <div class="leading-normal tracking-normal text-white ">
      <Header />

      <section id="features" class="bg-white border-b py-8">
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
      <section id="examples" class="bg-gray-100 py-8">
        <div class="container mx-auto pt-4 pb-12 px-8 sm:px-20">
          <SectionHeading>Examples</SectionHeading>
          <div class="space-y-14">
            <Example title="Basic drag & drop">
              <ExampleDemo>
                <DragAndDropExample />
              </ExampleDemo>
              <ExampleCode code={dragAndDropString} />
            </Example>
            <Example title="Drag overlay">
              <ExampleDemo>
                <DragOverlayExample />
              </ExampleDemo>
              <ExampleCode code={dragOverlayString} />
            </Example>
            <Example title="Conditional drop">
              <ExampleDemo>
                <ConditionalDropExample />
              </ExampleDemo>
              <ExampleCode code={conditionalDropString} />
            </Example>
            <Example title="Sortable list">
              <ExampleDemo>
                <SortableListExample />
              </ExampleDemo>
              <ExampleCode code={sortableListString} />
            </Example>
          </div>
        </div>
      </section>
      <footer class="bg-gradient">
        <WaveFooter />
        <section id="get-it" class="container mx-auto text-center p-6 pb-12">
          <SectionHeading variant="light">Get it</SectionHeading>
          <h3 class="mb-4 text-2xl leading-tight">
            Install with NPM (or check out the code on{" "}
            <a
              class="hover:underline text-blue-gray-300"
              href="https://github.com/thisbeyond/solid-dnd"
            >
              Github
            </a>
            )
          </h3>
          <InstallButton />
        </section>
      </footer>
    </div>
  );
};

export default Home;
