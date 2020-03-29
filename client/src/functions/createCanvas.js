function createCanvas(width, height) {
    const canvas = [];

    for (let i = 0; i < +height + 2; i++) {
        canvas[i] = [];
        for (let j = 0; j < +width + 2; j++) {
            if (!i || i === +height + 1) {
                canvas[i][j] = '-';
            } else if (!j || j === +width + 1) {
                canvas[i][j] = '|'
            } else {
                canvas[i][j] = ' ';
            }
        }
    }

    return canvas;
}

export default createCanvas;