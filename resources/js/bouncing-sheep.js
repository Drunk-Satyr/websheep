sheep = document.getElementsByClassName('bouncing-sheep')[0];
const sheepHeight = sheep.clientHeight;
const sheepWidth = sheep.clientWidth;

position = {x: 1, y: 1};
direction = {x: 1, y: 1};
speed = 3;

function handleMovement() {
    const screenHeight = document.body.clientHeight;
    const screenWidth = document.body.clientWidth;

    // bounce along top or bottom
    if (position.y + sheepHeight >= screenHeight || position.y < 0) {
        direction.y *= -1;
    }

    // bounce along left or right
    if (position.x + sheepWidth >= screenWidth || position.x < 0) {
        direction.x *= -1;
    }

    // push back in bounds if it gets caught outside
    if (position.y + sheepHeight > screenHeight) position.y = screenHeight - 1;
    if (position.x + sheepWidth > screenWidth) position.x = screenWidth - 1;
    if (position.y < 0) position.y = 0;
    if (position.x < 0) position.x = 0;

    // clamps direction to [-1,1]
    if (direction.x < -1) direction.x = -1;
    if (direction.y < -1) direction.y = -1;
    if (direction.x > 1) direction.x = 1;
    if (direction.y > 1) direction.y = 1;

    // calculates new position
    position.x += speed * direction.x;
    position.y += speed * direction.y;

    // updates element's style to update position
    sheep.style.left = position.x + 'px';
    sheep.style.top = position.y + 'px';
}

function update() {
    handleMovement();
    requestAnimationFrame(update);
}

function start() {
    update();
}

start();