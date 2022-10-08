const grid = document.querySelector('#grid');
const block = document.createElement('div');
let a;
for(i = 0; i<256; i++){
    a = block.cloneNode(true);
    grid.append(a);
    a.classList.add('grid-item');
}
console.log(grid)
