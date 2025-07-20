// Juan Rodriguez, July 19th, 2025
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let shapes = [];

// This function help generate random colors
function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 70%)`;
}

// This is the first event, which allows the mouse click to add random shapes
canvas.addEventListener("click", addShape);
function addShape(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    const size = Math.floor(Math.random() * 40 + 10);
    const color = getRandomColor();
    // This allow certain shapes to be pasted either circles or squares.
    const type = Math.random() > 0.5 ? "circle" : "square";

    shapes.push({ x, y, size, color, type });
    renderShapes();
}

// This is the 2nd event with each (Enter Key Use) deletes the previous shape that was made
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        removeLastShape();
    } else if (e.key === " ") {
        randomizeColors();
    }
});

function removeLastShape() {
    shapes.pop(); // this here removes the last shape
    renderShapes();
}

// This is the 3rd event where each time the space key is hit the color changes for all the shapes on the screen.
function randomizeColors() {
    for (let shape of shapes) {
        shape.color = getRandomColor();
    }
    renderShapes();
}

// This function helps redraw all shapes on the screen
function renderShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let shape of shapes) {
        ctx.fillStyle = shape.color;
        if (shape.type === "circle") {
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.size / 2, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.fillRect(shape.x - shape.size / 2, shape.y - shape.size / 2, shape.size, shape.size);
        }
    }
}