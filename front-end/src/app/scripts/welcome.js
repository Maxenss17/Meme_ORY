// TODO #import-html: use ES default imports to import welcome.html as template
// TODO #export-functions: remove the IIFE
import template from "../views/welcome.html";

  // TODO #export-functions: export function WelcomeComponent
  // TODO #class: use the ES6 class keyword
  /* class WelcomeComponent constructor  */
  export function WelcomeComponent() {
    // TODO #extends: call super(template)
    // TODO #import-html: assign template to this.template
    this.template = template;
  }
  // TODO #export-functions: remove this line
  // put component in global scope, to be runnable right from the HTML.
  window.WelcomeComponent = WelcomeComponent;
  // TODO #class: turn function into a method of WelcomeComponent
  /* method WelcomeComponent.init */
  WelcomeComponent.prototype.init = function init() {
    const form = document.querySelector("form.form-signin");

    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          const name = event.srcElement.querySelector("#nickname").value;
          const size = parseInt(event.srcElement.querySelector("#size").value);
          _startGame(name, size);
        }
      },
      false
    );

    return this;
  };

  // TODO #class: turn function into a method of WelcomeComponent
  function _startGame(name, size) {
    // TODO #spa: replace with './#game'
    const gamePage = "./#game";
    window.location = `${gamePage}?name=${name}&size=${size}`;
  }
