const grid = document.querySelector('#grid');
const block = document.createElement('div');
const a = [];
block.classList.add('grid-item')

//create the grid and allocates the blocks inside a[]
for(i=0; i<256; i++){
    a[i] = block.cloneNode(true);
    grid.append(a[i]);
    a[i].classList.add('grid-item');
}


//create an event listner for each element of a[]
for(j=0; j<a.length; j++){
    a[j].addEventListener('click', function(){
            a[j/*fixed to 256 for some reason*/].classList.add('red')  
    })
}
//there is no fucking reason why this code don't work