sheep = document.getElementsByClassName('bouncing-sheep')[0];
const sheepHeight = sheep.clientHeight;
const sheepWidth = sheep.clientWidth;

position = {x: 1, y: 1};
direction = {x: 1, y: 1};
speed = 3;

function clamp() {
    if (direction.x < -1) direction.x = -1;
    if (direction.y < -1) direction.y = -1;
    if (direction.x > 1) direction.x = 1;
    if (direction.y > 1) direction.y = 1;
}

function handleMovement() {
    const screenHeight = document.body.clientHeight;
    const screenWidth = document.body.clientWidth;

    if (position.y + sheepHeight >= screenHeight || position.y < 0) {
        direction.y *= -1;
    }

    if (position.x + sheepWidth >= screenWidth || position.x < 0) {
        direction.x *= -1;
    }

    clamp();

    position.x += speed * direction.x;
    position.y += speed * direction.y;

    sheep.style.left = position.x + 'px';
    sheep.style.top = position.y + 'px';

    console.log("direction x: " + direction.x + ", direction: y: " + direction.y + ".");
}

function update() {
    handleMovement();
    requestAnimationFrame(update);
}

function start() {
    update();
}

start();