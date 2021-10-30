/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
     let directions = [[-1,0], [1,0], [0,-1], [0,1]];
     var removeLand = (stack) => {
         while (stack.length > 0) {
            let current = stack.pop();
            let [m,n] = current;
            if (grid[m][n] === '0') continue;
            grid[m][n] = '0';
            for (dir of directions) {
                let [x,y] = dir;
                let a = m+x;
                let b = n+y;
                if (!(a < 0 || b < 0 || a >= grid.length || b >= grid[0].length || grid[a][b] === '0')) {
                    stack.push([a,b]);
                }
            }
         }
     }
    let islands = 0;
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] === '1'){
                islands++;
                removeLand([[i,j]])
            }
        }
    }
    return islands; 
};

let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]

console.log(numIslands(grid));