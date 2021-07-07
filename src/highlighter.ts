import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-okaidia.css";

export const highlight = (code) =>
  Prism.highlight(code, Prism.languages.jsx, "jsx");
