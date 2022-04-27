//where we need to display array
const render_array = document.getElementById('sorting-array');

var arr = [];
//creating new array of 100 length
function initializeArray() {

    for (let i = 0; i < 100; i++) {
        var num = Math.floor((Math.random() * 100) + 1);
        arr.push(num);
    }
    return arr;
}

//creating new elements to display
function addTaskToDom(height) {
    const element = document.createElement('div');
    element.classList.add("bars");
    element.style.height = height + "%";
    return element;
}

//displaying our array on window
function renderingArrays(array) {

    for (let i = 0; i < array.length; i++) {
        var element = addTaskToDom(array[i]);
        render_array.appendChild(element)
    }
}

//removing arrays to create new array
function removeelements() {
    const array = document.querySelectorAll('.bars');
    for (let i = array.length - 1; i >= 0; i--) {
        array[i].remove();
        arr.pop();
    }
}



function handleClickListener(e) {
    const target = e.target;
    console.log(target);
    if (target.id == 'new-array') {
        if (arr.length == 0) {
            const array = initializeArray();
            renderingArrays(array);
            console.log(arr)
            return;
        }
        else {
            removeelements();
            setTimeout(() => {
                const array = initializeArray();
                renderingArrays(array);
            }, 0);
            return;
        }
    }
    else if (target.id == 'bubble-sort') {
        bubbleSort(arr);
        return;
    }
    else if (target.id == 'selection-sort') {
        selectionSort(arr)
        return;
    }

    else if (target.id == 'merge-sort') {
        mergeSort(arr,0,arr.length-1);
        console.log(arr)
        return;
    }
    else if (target.id == 'quick-sort') {
        quickSort(arr,0,arr.length-1);
        console.log(arr)
        return;
    }
    else if (target.id == 'insertion-sort') {
        insertionSort(arr);
        return;
    }
}





function initializeApp() {
    document.addEventListener('click', handleClickListener);
}

//starting the app;
initializeApp();