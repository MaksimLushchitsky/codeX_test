import createCanvas from "./createCanvas";
import createLine from "./createLine";
import createRectangle from "./createRectangle";
import draw from "./draw";
import filling from "./filling";

function executeCommands(input) {
    let commands = input.split('\n');
    let isCanvasCreated = false;
    let first_line = commands[0].split(' ');
    let w = Number(first_line[1]);
    let h = Number(first_line[2]);
    let canvas = [];
    let result = '';
    let copy;

    for (let i = 0; i < commands.length; i++) {
        switch (commands[i][0]) {
            case "C":
                isCanvasCreated = true;
                canvas = createCanvas(w, h);
                result += draw(canvas);
                break;
            case 'L':
                copy = canvas.concat();
                canvas = (isCanvasCreated) ? createLine(commands[i], canvas.concat()) : 'Canvas does not created\n';
                result += draw(canvas);
                canvas = copy;
                break;
            case 'R':
                copy = canvas.concat();
                canvas = (isCanvasCreated) ? createRectangle(commands[i], canvas) : 'Canvas does not created\n';
                result += draw(canvas);
                canvas = copy;
                break;
            case 'B':
                copy = canvas.concat();
                canvas = (isCanvasCreated) ? filling(commands[i], canvas) : 'Canvas does not created\n';
                result += draw(canvas);
                canvas = copy;
                break;
            default:
                result = 'Canvas does not created\n';
                break;

        }
    }

    return result.split(',').join('');
}

export default executeCommands;