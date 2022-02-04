import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class PuzzlePiece {
    constructor(id, field) {
        this.sprite = new PIXI.Sprite(Globals.resources[`puzzle${id}`].texture);

        this.sprite.x = field.x;
        this.sprite.y = field.y;

        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(0.5);

        this.field = field;

        this.setInteractivity();
    }

    setInteractivity() {
        this.sprite.interactive = true;
        this.sprite.on("pointerdown", this.onTouchStart, this);
        this.sprite.on("pointermove", this.onTouchMove, this);
        this.sprite.on("pointerup", this.onRelease, this);
    }

    onTouchStart(event) {
        this.touchPostion = { x: event.data.global.x, y: event.data.global.y };
        this.dragging = true;
    }

    onTouchMove(event) {
        if (!this.dragging) {
            return;
        }

        const currentPosition = { x: event.data.global.x, y: event.data.global.y }

        const offsetX = currentPosition.x - this.touchPostion.x;
        const offsetY = currentPosition.y - this.touchPostion.y;

        this.sprite.x = this.field.x + offsetX;
        this.sprite.y = this.field.y + offsetY;
    }

    onRelease() {
        this.dragging = false;
    }
}