// const bg = require("./sprites/bg.png ");

import { resources } from "pixi.js";

export class Loader {
    constructor(loader) {
        this.loader = loader;
    }

    preload() {
        if (this.loader === undefined) {
            return
        };
        this.loader.add("bg", "../sprites/bg.png")
        this.loader.load((loader, resources) => {
            console.log(resources);
        });
    }
}