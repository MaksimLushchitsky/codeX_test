import createLine from "./createLine";

function createRectangle(commands, canvas) {
    const coordinates = commands.split(' ');
    let x1 = coordinates[1];
    let y1 = coordinates[2];
    let x2 = coordinates[3];
    let y2 = coordinates[4];
    let command1 = 'L' + ' ' + x1 + ' ' + y1 + ' ' + x1 + ' ' + y2;
    let command2 = 'L' + ' ' + x2 + ' ' + y1 + ' ' + x2 + ' ' + y2;
    let command3 = 'L' + ' ' + x1 + ' ' + y1 + ' ' + x2 + ' ' + y1;
    let command4 = 'L' + ' ' + x1 + ' ' + y2 + ' ' + x2 + ' ' + y2;

    canvas = createLine(command1, canvas);
    canvas = createLine(command2, canvas);
    canvas = createLine(command3, canvas);
    canvas = createLine(command4, canvas);

    return canvas;
}

export default createRectangle;