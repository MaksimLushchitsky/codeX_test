function filling(commands, canvas) {
    let filling_command = commands.split(' ');
    let x = filling_command[2];
    let y = filling_command[1];
    let color = filling_command[3];
    x = Number(x);
    y = Number(y);

    const targetColor = canvas[x][y];

    function bucket(x, y, targetColor, color, canvas) {
        if ((canvas[x][y] === '-' || canvas[x][y] === '|') || canvas[x][y] === color) {
            return;
        }

        if (canvas[x][y] !== targetColor) {
            return;
        }

        canvas[x][y] = color;

        bucket(x + 1, y, targetColor, color, canvas);
        bucket(x - 1, y, targetColor, color, canvas);
        bucket(x, y + 1, targetColor, color, canvas);
        bucket(x, y - 1, targetColor, color, canvas);
    }

    bucket(x, y, targetColor, color, canvas);

    return canvas;
}

export default filling;