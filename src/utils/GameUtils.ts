import soundEffect from "../assets/ChocolateRemoved.mp3"

let colors = ["green", "red", "blue"];


export function createGrid() {
  let grid: string[][] = [];

  for (let i = 0; i < 10; i++) {
    grid[i] = [];
    for (let j = 0; j < 10; j++) {
      let random = Math.round(Math.random() * 2);
      grid[i][j] = colors[random];
    }
  }
  return grid;
}

export function isConnectedCandies(grid: string[][], i: number, j: number) {
  let row = 0;
  let column = 0;

  let p = i - 1;
  let q = j;
  let color = grid[i][j];
  while (p >= 0 && grid[p][q] === color) {
    row++;
    p--;
  }
  p = i;
  while (p < 10 && grid[p][q] === color) {
    row++;
    p++;
  }
  p = i;
  q = j - 1;
  while (q >= 0 && grid[p][q] === color) {
    column++;
    q--;
  }
  q = j;
  while (q < 10 && grid[p][q] === color) {
    column++;
    q++;
  }

  return column > 2 || row > 2;
}

export function updateCandies(
  grid: string[][],
  i: number,
  j: number,
  color: string,
  score: { value: number }
) {
  if (i < 0 || j < 0 || i > 9 || j > 9 || grid[i][j] !== color) {
    return grid;
  }
  let random = Math.round(Math.random());
  grid[i][j] = colors.filter((currColor)=>currColor!==color)[random];
  score.value = score.value + 1;
  // To Update Upper Cell
  playAudio()
  updateCandies(grid, i - 1, j, color, score);
  //  To Update Lower Cell
  updateCandies(grid, i + 1, j, color, score);
  // To Update Right Cell
  updateCandies(grid, i, j - 1, color, score);
  // To Update Left Cell
  updateCandies(grid, i, j + 1, color, score);
  return grid;
}

export function copyGrid(grid: string[][]) {
  let newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    newGrid[i] = [...grid[i]];
  }
  return newGrid;
}

export function playAudio(){
  var audio = new Audio(soundEffect);
  audio.volume = 0.5;
  audio.play()
}