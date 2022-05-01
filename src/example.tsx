import cc from "classcat";
import { highlight } from "./highlighter";

export const Example = (props) => {
  return (
    <div
      class={cc([
        "flex flex-wrap text-gray-800 gap-8",
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
    <div class="w-full lg:flex-1 lg:max-w-1/2">
      <pre
        class={
          "text-sm text-white bg-gray-800 rounded-lg p-6 " +
          "overflow-auto max-h-[70vh]"
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
        "w-full lg:flex-1 flex flex-col justify-center items-center gap-5 " +
        "overflow-hidden border-3 border-dashed rounded-lg p-6 relative"
      }
    >
      {props.children}
    </div>
  );
};
