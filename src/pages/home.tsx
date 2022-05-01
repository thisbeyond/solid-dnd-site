import { createSignal, Match, Switch } from "solid-js";
import { Select, createOptions } from "@thisbeyond/solid-select";

import { WaveFooter } from "../wave-footer";
import { Header } from "../header";
import { FeatureCard } from "../feature-card";
import { SectionHeading } from "../section-heading";
import { Example, ExampleCode, ExampleDemo } from "../example";
import { DragAndDropExample } from "../examples/drag-and-drop-example";
import { DragOverlayExample } from "../examples/drag-overlay-example";
import { SortableVerticalListExample } from "../examples/sortable-vertical-list-example";
import { SortableHorizontalListExample } from "../examples/sortable-horizontal-list-example";
import { MultipleListsExample } from "../examples/multiple-lists-example";
import { ConditionalDropExample } from "../examples/conditional-drop-example";
import { FineGrainedExample } from "../examples/fine-grained-example";
import { BoardExample } from "../examples/board-example";
import dragAndDropString from "../examples/drag-and-drop-example?raw";
import dragOverlayString from "../examples/drag-overlay-example?raw";
import conditionalDropString from "../examples/conditional-drop-example?raw";
import sortableVerticalListString from "../examples/sortable-vertical-list-example?raw";
import sortableHorizontalListString from "../examples/sortable-horizontal-list-example?raw";
import multipleListsString from "../examples/multiple-lists-example?raw";
import fineGrainedString from "../examples/fine-grained-example?raw";
import boardString from "../examples/board-example?raw";
import { InstallButton } from "../install-button";

import "./home.css";

const Home = () => {
  const [example, setExample] = createSignal();
  const examples = [
    "Basic drag & drop",
    "Drag overlay",
    "Conditional drop",
    "Fine grained / drag handle",
    "Sortable list (vertical)",
    "Sortable list (horizontal)",
    "Multiple lists",
    "Board",
  ];
  const selectProps = createOptions(examples);

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
          <Select
            class="home"
            placeholder="Select example..."
            onChange={(value) => setExample(value)}
            {...selectProps}
          />
          <Switch
            fallback={
              <Example>
                <ExampleDemo />
                <ExampleCode code="\nSelect an example to see the related code.\n " />
              </Example>
            }
          >
            <Match when={example() === "Basic drag & drop"}>
              <Example>
                <ExampleDemo>
                  <DragAndDropExample />
                </ExampleDemo>
                <ExampleCode code={dragAndDropString} />
              </Example>
            </Match>
            <Match when={example() === "Drag overlay"}>
              <Example>
                <ExampleDemo>
                  <DragOverlayExample />
                </ExampleDemo>
                <ExampleCode code={dragOverlayString} />
              </Example>
            </Match>
            <Match when={example() === "Conditional drop"}>
              <Example>
                <ExampleDemo>
                  <ConditionalDropExample />
                </ExampleDemo>
                <ExampleCode code={conditionalDropString} />
              </Example>
            </Match>
            <Match when={example() === "Fine grained / drag handle"}>
              <Example>
                <ExampleDemo>
                  <FineGrainedExample />
                </ExampleDemo>
                <ExampleCode code={fineGrainedString} />
              </Example>
            </Match>
            <Match when={example() === "Sortable list (vertical)"}>
              <Example>
                <ExampleDemo>
                  <SortableVerticalListExample />
                </ExampleDemo>
                <ExampleCode code={sortableVerticalListString} />
              </Example>
            </Match>
            <Match when={example() === "Sortable list (horizontal)"}>
              <Example>
                <ExampleDemo>
                  <SortableHorizontalListExample />
                </ExampleDemo>
                <ExampleCode code={sortableHorizontalListString} />
              </Example>
            </Match>
            <Match when={example() === "Multiple lists"}>
              <Example>
                <ExampleDemo>
                  <MultipleListsExample />
                </ExampleDemo>
                <ExampleCode code={multipleListsString} />
              </Example>
            </Match>
            <Match when={example() === "Board"}>
              <Example>
                <ExampleDemo>
                  <BoardExample />
                </ExampleDemo>
                <ExampleCode code={boardString} />
              </Example>
            </Match>
          </Switch>
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
