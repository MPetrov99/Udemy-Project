import * as PIXI from "pixi.js";
import { Loader } from "./Loader.js"

export class App {
    run() {
        // Create Canvas
        this.app = new PIXI.Application({ resizeTo: window });

        document.body.appendChild(this.app.view);

        // Load Sprites
        this.loader = new Loader(this.app.loade);
        this.loader.preload();
    }
}