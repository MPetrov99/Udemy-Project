import * as PIXI from "pixi.js";
import { Loader } from "./Loader.js"
import { MainScene } from "./MainScene.js";

export class App {
    run() {
        // Create Canvas
        this.app = new PIXI.Application({ resizeTo: window });



        document.body.appendChild(this.app.view);

        // Load Sprites
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => this.start());
    }

    start() {
        this.scene = new MainScene();
        this.app.stage.addChild(this.scene.container);
    }
}