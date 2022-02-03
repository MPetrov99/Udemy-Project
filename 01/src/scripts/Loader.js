const bg = require("../sprites/bg.png");

export class Loader {
    constructor(loader) {
        this.loader = loader;
    }

    preload() {
        // if (this.loader === undefined) {
        //     return
        // };
        this.loader.add("bg", bg)
        this.loader.load((loader, resources) => {
            console.log(resources);
        });
    }
}