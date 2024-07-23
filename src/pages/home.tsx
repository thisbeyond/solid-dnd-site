import { createSignal, Match, onMount, Switch } from "solid-js";
import { useSearchParams } from "@solidjs/router";
import { Select, createOptions } from "@thisbeyond/solid-select";

import { WaveFooter } from "../wave-footer";
import { Header } from "../header";
import { FeatureCard } from "../feature-card";
import { SectionHeading } from "../section-heading";
import { Example, ExampleCode, ExampleDemo } from "../example";
import { DragAndDropExample } from "../examples/drag-and-drop-example";
import { MobileExample } from "../examples/mobile-example";
import { DragOverlayExample } from "../examples/drag-overlay-example";
import { ConstrainAxisExample } from "../examples/constrain-axis-example";
import { DragMoveExample } from "../examples/drag-move-example";
import { SortableVerticalListExample } from "../examples/sortable-vertical-list-example";
import { SortableHorizontalListExample } from "../examples/sortable-horizontal-list-example";
import { MultipleListsExample } from "../examples/multiple-lists-example";
import { ConditionalDropExample } from "../examples/conditional-drop-example";
import { FineGrainedExample } from "../examples/fine-grained-example";
import { BoardExample } from "../examples/board-example";
import { DebuggerExample } from "../examples/debugger-example";
import { CustomTransformExample } from "../examples/custom-transform";
import dragAndDropString from "../examples/drag-and-drop-example?raw";
import mobileString from "../examples/mobile-example?raw";
import dragOverlayString from "../examples/drag-overlay-example?raw";
import constrainAxisString from "../examples/constrain-axis-example?raw";
import dragMoveString from "../examples/drag-move-example?raw";
import conditionalDropString from "../examples/conditional-drop-example?raw";
import sortableVerticalListString from "../examples/sortable-vertical-list-example?raw";
import sortableHorizontalListString from "../examples/sortable-horizontal-list-example?raw";
import multipleListsString from "../examples/multiple-lists-example?raw";
import fineGrainedString from "../examples/fine-grained-example?raw";
import boardString from "../examples/board-example?raw";
import debuggerString from "../examples/debugger-example?raw";
import customTransformString from "../examples/custom-transform?raw";
import { InstallButton } from "../install-button";

import "./home.css";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [example, setExample] = createSignal();
  let examplesRef;

  onMount(() => {
    if (searchParams.example) {
      setExample(decodeURIComponent(searchParams.example));
      setTimeout(() => examplesRef.scrollIntoView({ behavior: "smooth" }), 250);
    }
  });

  const examples = [
    "Basic drag & drop",
    "Mobile support",
    "Drag overlay",
    "Conditional drop",
    "Fine grained / drag handle",
    "Custom transform (rotate on drag)",
    "Custom transformer (limit x-axis)",
    "Arbitrary drag move",
    "Sortable list (vertical)",
    "Sortable list (horizontal)",
    "Multiple lists",
    "Board",
    "Debugger",
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
      <section id="examples" class="bg-gray-100 py-8" ref={examplesRef}>
        <div class="container mx-auto pt-4 pb-12 px-8 sm:px-20">
          <SectionHeading>Examples</SectionHeading>
          <Select
            class="home"
            placeholder="Select example..."
            initialValue={example()}
            onChange={(value) => {
              setExample(value);
              setSearchParams({ example: encodeURIComponent(value) });
            }}
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
            <Match when={example() === "Mobile support"}>
              <Example>
                <ExampleDemo>
                  <MobileExample />
                </ExampleDemo>
                <ExampleCode code={mobileString} />
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
            <Match when={example() === "Custom transform (rotate on drag)"}>
              <Example>
                <ExampleDemo>
                  <CustomTransformExample />
                </ExampleDemo>
                <ExampleCode code={customTransformString} />
              </Example>
            </Match>
            <Match when={example() === "Custom transformer (limit x-axis)"}>
              <Example>
                <ExampleDemo>
                  <ConstrainAxisExample />
                </ExampleDemo>
                <ExampleCode code={constrainAxisString} />
              </Example>
            </Match>
            <Match when={example() === "Arbitrary drag move"}>
              <Example>
                <ExampleDemo>
                  <DragMoveExample />
                </ExampleDemo>
                <ExampleCode code={dragMoveString} />
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
            <Match when={example() === "Debugger"}>
              <Example>
                <ExampleDemo>
                  <DebuggerExample />
                </ExampleDemo>
                <ExampleCode code={debuggerString} />
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
