class Canvas {
    constructor() {

        document.body.onresize = (e) => {
            this.resize();
            this.update();
        }

        this.DOMElement = document.getElementById('canvas');

        this.context = this.DOMElement.getContext("2d");

        this.DOMElement.width = document.body.clientWidth;
        this.DOMElement.height = document.body.clientHeight;
    }
    
    clear() {
        this.context.clearRect(0, 0, this.DOMElement.width, this.DOMElement.height);
    }

    resize() {
        this.DOMElement.width = document.body.clientWidth;
        this.DOMElement.height = document.body.clientHeight;
    }

    update() {
        this.clear()
        this.context.rect(0, 0, 30, 30);
        this.context.fill();
    }
}

var canvas = new Canvas();
canvas.update();

//startAnimation();
//setInterval(updateCanvas, 17);