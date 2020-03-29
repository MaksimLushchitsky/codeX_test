function createLine(commands, canvas) {
    const coordinates = commands.split(' ');
    let x1 = coordinates[1];
    let y1 = coordinates[2];
    let x2 = coordinates[3];
    let y2 = coordinates[4];
    const cloneCanvas = canvas.concat();

    if (x1 === x2) {
        for (let i = y1; i <= y2; i++) {
            cloneCanvas[i][x1] = 'x';
        }
    }

    if (y1 === y2) {
        for (let i = x1; i <= x2; i++) {
            cloneCanvas[y1][i] = 'x';
        }
    }

    if (x1 !== x2 && y1 !== y2) {
        return 'Error: only straight lines can be used';
    }

    return cloneCanvas;
}

export default createLine;