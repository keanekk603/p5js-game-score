var cols, rows;
var w = 20;
var grid = [];
var walls = [];
var startCell, endCell, playerCell, oldCell;
var score = 0;

function setup() {
    createCanvas(400, 400);
    cols = floor(width / w);
    rows = floor(height / w);
    
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    for (var i = 0; i < grid.length; i++){
        var cell = grid[i];

        var rightNeighbour = grid[index(cell.i + 1, cell.j)];
        if(rightNeighbour){
            walls.push([cell, rightNeighbour, "horizontal"]);
        }
        var bottomNeighbour = grid[index(cell.i, cell.j + 1)];
        if (bottomNeighbour) {
            walls.push([cell, bottomNeighbour, "vertical"])
        }
    }
    startCell = grid[0];
    playerCell = startCell;
    endCell = grid[grid.length - 1];
}

function draw() {
    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }

    fill(0, 255, 0, 100)
    noStroke();
    rect(startCell.i * w, startCell.j * w, w, w)
    
    fill(255, 0, 0, 100);
    noStroke();
    rect(endCell.i * w, endCell.j * w, w, w)

    fill(0, 100, 255);
    noStroke();
    circle(playerCell.i * w + w / 2, playerCell.j * w + w / 2, w * 0.6);

    fill(255);
    noStroke();
    textSize(16);
    textAlign(LEFT, TOP);
    text("Score: " + score)

    if (walls.length > 0) {
        random_index = floor(random(0, walls.length - 1));
        current_wall = walls[random_index];
        CellA = current_wall[0];
        CellB = current_wall[1];
        if (CellA.id != CellB.id) {
            if (current_wall[2] === "horizontal") {
                CellA.walls[1] = false;
                CellB.walls[3] = false;
            } else {
                CellA.walls[2] = false;
                CellB.walls[0] = false;
            }
            var oldId = CellB.id
            for (var i = 0; i < grid.length; i++) {
                if (grid[i].id === oldId) {
                    grid[i].id = CellA.id;
                }
            }
        }
        walls.splice(random_index, 1);
    }
    if (playerCell === endCell) {
        score += 1;
        console.log("You've WON");
        grid = [];
        walls = [];
        setup();
    }
}

function keyPressed() {
    if (walls.length > 0) {
        return;
    }
    if (key === "w" || key === "W") {
        if (playerCell.walls[0] === false) {// check to see if the top wall is mising
            var nextIndex = index(playerCell.i, playerCell.j - 1); //get the top grid
            if(nextIndex != -1){playerCell = grid[nextIndex]} //moves up
        }
    }
    else if (key === "s" || key === "S") {
        if (playerCell.walls[2] === false) {// check to see if the bottom wall is mising
            var nextIndex = index(playerCell.i, playerCell.j + 1); //get the bottom grid
            if(nextIndex != -1){playerCell = grid[nextIndex]} //moves up
        }
    }
    else if (key === "A" || key === "a") {
        if (playerCell.walls[3] === false) {// check to see if the left wall is mising
            var nextIndex = index(playerCell.i-1, playerCell.j); //get the left grid
            if(nextIndex != -1){playerCell = grid[nextIndex]} //moves up
        }
    }
    else if (key === "d" || key === "D") {
        if (playerCell.walls[1] === false) {// check to see if the right wall is mising
            var nextIndex = index(playerCell.i + 1, playerCell.j); //get the right grid
            if(nextIndex != -1){playerCell = grid[nextIndex]} //moves up
        }
    }
}

function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + (j * cols);
}

function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.id = index(i, j);
    this.walls = [true, true, true, true];

    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        if (this.walls[0]) { line(x, y, x + w, y); }
        if (this.walls[1]) { line(x + w, y, x + w, y + w); }
        if (this.walls[2]) { line(x + w, y + w, x, y + w); }
        if (this.walls[3]) { line(x, y + w, x, y); } 
    }
}