// TODO #import-router: use ES named imports to import the router
// TODO #import-components: use ES named imports to import WelcomeComponent, GameComponent a ScoreComponent
// TODO #import-css: use ES side-effect imports to import styles/style.css

import { Router } from "./app/scripts/router.js";
import { GameComponent } from "./app/components/game/game.component.js";
import { WelcomeComponent } from "./app/components/welcome/welcome.component.js";
import { ScoreComponent } from "./app/components/score/score.component.js";
import { NavbarComponent } from "./app/components/navbar/navbar.component.js";

import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./app/styles/style.css";

customElements.define("my-navbar", NavbarComponent);

const outlet = document.querySelector("#content-outlet");
  const router = new Router(outlet);
  router
    .register("", {
      component: WelcomeComponent,
    })
    .register("welcome", {
      component: WelcomeComponent,
    })
    .register("game", {
      component: GameComponent,
    })
    .register("score", {
      component: ScoreComponent,
    });       

    