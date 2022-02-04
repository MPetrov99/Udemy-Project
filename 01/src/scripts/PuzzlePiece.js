import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class PuzzlePiece extends PIXI.utils.EventEmitter {
    constructor(id, field) {
        super();

        this.sprite = new PIXI.Sprite(Globals.resources[`puzzle${id}`].texture);

        this.field = field;

        this.reset();

        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(0.5);

        this.setInteractivity();
    }

    setInteractivity() {
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.sprite.on("pointerdown", this.onTouchStart, this);
        this.sprite.on("pointermove", this.onTouchMove, this);
        this.sprite.on("pointerup", this.onRelease, this);
    }

    onTouchStart(event) {
        this.touchPostion = { x: event.data.global.x, y: event.data.global.y };
        this.dragging = true;
        this.sprite.zIndex = 1;
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
        this.sprite.zIndex = 0;
        this.emit("dragend")
    }

    reset() {
        this.sprite.x = this.field.x;
        this.sprite.y = this.field.y;
    }
}