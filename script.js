import playSound from "./js/playsound.js";
import removeTransition from "./js/removetrans.js";

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
