
  import { parseUrl } from "../../scripts/utils";
  import { Component } from "../../scripts/component";

  import template from "./score.component.html";
  import "./score.component.css";


  export class ScoreComponent extends Component {
    constructor() {
    super(template)
    this.template = template;

    var params = parseUrl();
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
