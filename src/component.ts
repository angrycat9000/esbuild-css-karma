import style from "./component.module.css";

export function render() {
  const p = document.createElement("p");
  p.innerText = "Paragraph";
  p.className = style.paragraph;
  return p;
}
