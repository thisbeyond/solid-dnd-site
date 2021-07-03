import "windi.css";

import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import { routes } from "./routes";
import Site from "./site";

render(
  () => (
    <Router routes={routes}>
      <Site />
    </Router>
  ),
  document.getElementById("root")
);
