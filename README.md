Maze generator using Kruskal's algorithm
Video Demo:
Description: https://keanekk603.github.io/p5js-game-score/ (link to my online game). 
1. This maze generator uses the Kruskal's algorithm to generate the maze. I utilised this instead of depth first search alogrithm + backtracking because i feel like this algorithm creates harder mazes as compared to that. moreover, I took inspiration and had to learn multiplie new concepts scuh as object oriented programming. this was inspired by a video from The Coding Train where he uses depth first search and back tracking algorithnm to create the maze. 
2. used an open sourced library p5js to draw grids and circles etc, through this i have learn some basics of object orientated programming. I had to learn the syntax and functionalities of p5js and I feel it is extremely useful for building creative websites and designs as compared to normal java script library and I will definitely explore more. 
4. Moreover, I implemented a game like function where it starts from the top left and ends in teh top right using wasd keys to move around, and resets once it hits the bottom right. 
5. this final project taught me the use of java script and OOP, where I learn the this. function etc. to assign properties to each individual grids.
6. I had to search multiple things up such as how shld i label each grid using a 1 dimensional array which i found on youtube the formula.

Code description:
setup function()
- creates a canva and tells how many cols and rows there are
- calls the Cell function for each and every grid
- each cell has a property, and is pushed into the grid

Cell function() (not really sure what oop is so ill try and explain in my own terms)
- each cell has a property i: the cols, j: the rows, id: index(i, j) which obtains the index in a 1d array, and a .show function where it draws the line of each grid (this show function is called in draw)

draw function()
- loops throguh each cell in the grid and calls the show function so that the lines are drawn
- creates a startcell, endcell and circle where the that is the player

index function()
- gives the index of the cell the id
- 

implementation of algorithm
- first we loop throguh each cell in the grid and check is right neighbour and bottom neighbour, if there is a wall it adds a list of (CellA.id, CellB.id, "horizontal/vertical") to a array called walls =[].
- once the array of walls is done we choose a random wall from that array walls and we remove the wall between cell a and cell b
- once that is done we change the id of cell b to be === cell a. this conditions ensures that the condition if (CellA.id != CellB.id) is not called. we join the cells together essentially, by making the id of cella and cell b the same. then we remove that walls from the array walls= [] throguh the splice. this also ensures that there are no disjointed rooms a bug which i was stuck on for quite a while. it goes throguh every single cell until it at least connected to one another ensuring no disjointed rooms.
- note that in the walls array, the comparison is made for every single wall there is on the map and the index function ensures that there is no cells being found called outside the grid.
- we then repeat this step throguh until wall length = 0 because the draw function is called 60 times per second there is no need to write any loops.
