
import template from "../navbar/navbar.component.html";
import "./navbar.component.css"

export class NavbarComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = template;
  
    }
  }

