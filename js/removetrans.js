export default function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  this.classList.remove("playing");
}
