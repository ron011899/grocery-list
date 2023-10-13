const eraser = document.getElementById('eraser');
const inputBox = document.getElementById('inputBox');
const addedItems = document.getElementById('addedItems');

eraser.addEventListener('click', function(){
    addedItems.innerHTML = '';
})

inputBox.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        pushItems();
    }
})

function pushItems(){
    let h2 = document.createElement('h2');
    h2.innerHTML = '- ' + inputBox.value;

    h2.addEventListener('click', function(){
        h2.style.textDecoration = 'line-through';
    })

    addedItems.insertAdjacentElement('beforeend', h2); 

    inputBox.value = '';
}



