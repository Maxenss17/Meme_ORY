// TODO #import-html: use ES default imports to import game.html as template
// TODO #export-functions: remove the IIFE
  // TODO #export-functions: export function ScoreComponent
  // TODO #class: use the ES6 class keyword
  /* class ScoreComponent constructor */

  import { parseUrl } from "../../scripts/utils";
  import { Component } from "../../scripts/component";

  import template from "./score.component.html";
  import "./score.component.css";


  export class ScoreComponent extends Component {
    constructor() {
    // TODO #extends: call super(template)
    super(template)
    this.template = template;

    var params = parseUrl();
    // TODO #import-html: assign template to this.template
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
    window.ScoreComponent = ScoreComponent;

  }

    init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  }
};
