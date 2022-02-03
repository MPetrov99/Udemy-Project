import { LoaderConfig } from "./LoaderConfig";

export class Loader {
    constructor(loader) {
        this.loader = loader;
        this.resources = LoaderConfig;
    }

    preload() {
        return new Promise(resolve => {
            // if (this.loader === undefined) {
            //     return
            // };
            for (let key in this.resources) {
                this.loader.add(key, this.resources[key]);
            }
            this.loader.load((loader, resources) => {
                console.log("Resources Loaded!", resources);
                resolve();
            });
        });
    }
}