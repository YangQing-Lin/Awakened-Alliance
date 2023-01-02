import { AcGameObject } from "./AcGameObject";
import { GameMap } from "./GameMap";
import { Player } from "./Player";

export class PlayGround extends AcGameObject {
    constructor(canvas, ctx, root) {
        super();

        this.canvas = canvas;
        this.ctx = ctx;
        this.root = root;
        this.width = this.root.clientWidth;
        this.height = this.root.clientHeight;
        this.game_map = new GameMap(this);
        this.players = [];
        this.players.push(new Player(this, this.width / 2, this.height / 2, this.height * 0.05, "white", this.height * 0.3, "me"));

        for (let i = 0; i < 10; i++) {
            this.players.push(new Player(this, this.width / 2, this.height / 2, this.height * 0.05, this.get_random_color(), this.height * 0.3, "robot"));
        }
    }

    start() {
        this.update_size();
    }

    append_player() {
        this.players.push(new Player(this, this.width / 2, this.height / 2, this.height * 0.05, this.get_random_color(), this.height * 0.3, "robot"));
    }

    get_random_color() {
        let colors = ["red", "pink", "grey", "green", "lightblue", "lightgreen", "yellow", "orange", "gold"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update_size() {
        this.ctx.canvas.width = this.root.clientWidth;
        this.ctx.canvas.height = this.root.clientHeight;
    }

    win() {

    }

    lose() {

    }

    restart() {

    }

    update() {
        this.render();
    }

    render() {
    }
}