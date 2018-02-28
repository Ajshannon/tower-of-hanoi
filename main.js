let col1 = document.getElementById("tower-1");
let col2 = document.getElementById("tower-2");
let col3 = document.getElementById("tower-3");
let hiddenVariable = document.getElementById("hidden-div");
let columns = document.getElementsByClassName("tower-class");
for (let column of columns) {
    column.addEventListener('click', handleClick);
}
let click = 1;

function checkWin () {
if (col3.childElementCount === 4) {
    alert("You Win!")
}
}

function handleClick(event) {
    let disc = event.currentTarget;
    // let taco = hiddenVariable.lastchild.id
    console.log(hiddenVariable.lastElementChild)

    if (click === 1) {
        hiddenVariable.appendChild(disc.lastElementChild);
        click = 2;
        // console.log(click)
    } else if (click === 2 ) {
        if (disc.childElementCount === 0){
        disc.appendChild(hiddenVariable.lastElementChild);
        click = 1;

        } else if (hiddenVariable.lastElementChild.id[5] < disc.lastElementChild.id[5]) {
        console.log(hiddenVariable.lastElementChild.id[5]);
        disc.appendChild(hiddenVariable.lastElementChild);
        click = 1;
    }
}
    checkWin ()
}
// if (click === 1) {
//     hiddenVariable.appendChild(disc.lastElementChild);
//     click = 2;
//     // console.log(click)
// } else if (click === 2 && disc.childElementCount === 0) {
//     disc.appendChild(hiddenVariable.lastChild);
//     click = 1;
// } else if (click === 2 && hiddenVariable.lastChild.id[5] < disc.lastChild.id[5]) {
//     console.log(hiddenVariable.lastChild.id[5]);
//     disc.appendChild(hiddenVariable.lastChild);
//     click = 1;
// }
