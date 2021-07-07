import cc from "classcat";
import { highlight } from "./highlighter";

export const Example = (props) => {
  return (
    <div class={cc(["flex flex-wrap", props.reverse && "flex-row-reverse"])}>
      {props.children}
    </div>
  );
};

export const ExampleCode = (props) => {
  const highlightedCode = highlight(props.code);
  return (
    <div class="w-full lg:w-1/2">
      <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
        {props.title}
      </h3>
      <pre class="text-white bg-gray-800 mb-8 rounded-lg p-6">
        <code innerHTML={highlightedCode} />
      </pre>
    </div>
  );
};

export const ExampleDemo = (props) => {
  return <div class="w-full lg:w-1/2 bg-black">{props.children}</div>;
};
