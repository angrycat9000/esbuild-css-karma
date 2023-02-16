import { render } from "./component";

function run() {
  document.body.appendChild(render());
}

if (document.readyState === "loading") {
  window.document.addEventListener("DOMContentLoaded", run);
} else {
  run();
}
