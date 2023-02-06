class Paddle {

    constructor(x, y, w, h) {
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
        this.score = 0;
    }

    move(amt) {
        this.pos.y += amt;
        // this.pos.y = map(p1_pot, 0, 1023, 0, HEIGHT - 1);
        this.pos.y = constrain(this.pos.y, 10, height - 10 - this.h);
    }

    show() {
        noStroke();
        fill(255);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }

    grow() {
        if (this.h < 225) {
            this.h += 3;
        }
    }

    shrink() {
        if (this.h > 15) {
            this.h -= 3;
        }
    }
}