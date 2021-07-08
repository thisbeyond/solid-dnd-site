import cc from "classcat";
import { highlight } from "./highlighter";

export const Example = (props) => {
  return (
    <div>
      <h3 class="text-gray-800 text-3xl font-bold leading-none mb-3">
        {props.title}
      </h3>
      <div
        class={cc([
          "flex flex-wrap text-gray-800 gap-8",
          props.reverse && "flex-row-reverse",
        ])}
      >
        {props.children}
      </div>
    </div>
  );
};

export const ExampleCode = (props) => {
  const highlightedCode = highlight(props.code);
  return (
    <div class="w-full lg:flex-1">
      <pre
        class={
          "text-sm text-white bg-gray-800 rounded-lg p-6 " +
          "whitespace-pre-wrap overflow-auto max-h-175"
        }
      >
        <code class="inline-block min-w-100" innerHTML={highlightedCode} />
      </pre>
    </div>
  );
};

export const ExampleDemo = (props) => {
  return (
    <div
      class={
        "w-full lg:flex-1 flex justify-center items-center overflow-hidden " +
        "border-3 border-dashed rounded-lg p-3"
      }
    >
      {props.children}
    </div>
  );
};