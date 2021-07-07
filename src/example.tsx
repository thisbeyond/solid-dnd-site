import cc from "classcat";
import { highlight } from "./highlighter";

export const Example = (props) => {
  return (
    <div
      class={cc([
        "flex flex-wrap text-gray-800 ",
        props.reverse && "flex-row-reverse",
      ])}
    >
      {props.children}
    </div>
  );
};

export const ExampleCode = (props) => {
  const highlightedCode = highlight(props.code);
  return (
    <div class="w-full lg:w-1/2">
      <h3 class="text-3xl font-bold leading-none mb-3">{props.title}</h3>
      <pre
        class={
          "text-sm md:text-base text-white bg-gray-800 mb-8 rounded-lg p-6 " +
          "whitespace-pre-wrap overflow-auto"
        }
      >
        <code class="inline-block min-w-100" innerHTML={highlightedCode} />
      </pre>
    </div>
  );
};

export const ExampleDemo = (props) => {
  return <div class="w-full lg:w-1/2 p-3">{props.children}</div>;
};
