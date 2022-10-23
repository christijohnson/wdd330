export function hideComplete() {
    //hide completed tasks
    document.getElementById('showIncomplete').classList.add('filter');
    document.getElementById('showCompleted').classList.remove('filter');
    document.getElementById('showAll').classList.remove('filter');
    document.querySelectorAll('.checked').forEach(li => li.classList.add('hidden'));
    document.querySelectorAll('.unchecked').forEach(li => li.classList.remove('hidden'));
}

export function hideIncomplete() {
    //hide incomplete tasks
    document.getElementById('showIncomplete').classList.remove('filter');
    document.getElementById('showCompleted').classList.add('filter');
    document.getElementById('showAll').classList.remove('filter');
    document.querySelectorAll('.unchecked').forEach(li => li.classList.add('hidden'));
    document.querySelectorAll('.checked').forEach(li => li.classList.remove('hidden'));
}

export function showAll() {
    //show all tasks
    document.getElementById('showIncomplete').classList.remove('filter');
    document.getElementById('showCompleted').classList.remove('filter');
    document.getElementById('showAll').classList.add('filter');
    document.querySelectorAll('.hidden').forEach(li => li.classList.remove('hidden'));
}   

export function countIncomplete() {
    let itemCount = 0;
    let doneCount = 0;
    let incomplete = 0;
    itemCount = document.querySelectorAll("#list li").length;
    doneCount = document.querySelectorAll('.checked').length;
    incomplete = itemCount - doneCount;
    if(incomplete == 1){
        document.querySelector('#incomplete').textContent = incomplete + ' Item to complete';
    } else {
        document.querySelector('#incomplete').textContent = incomplete + ' Items to complete';
    }
    console.log(itemCount);
    console.log(doneCount);
    console.log(incomplete);
}