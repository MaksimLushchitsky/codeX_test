function draw(array) {
    return array.map(element => {
        return element.join('') + '\n';
    })
}

export default draw;