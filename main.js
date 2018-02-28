let col1 = document.getElementById("tower-1");
let col2 = document.getElementById("tower-2");
let col3 = document.getElementById("tower-3");
let hidden = document.getElementById("hidden");
let columns = document.getElementsByClassName("tower-class");
for (let column of columns) {
    column.addEventListener('click', handleClick);
}

function handleClick(event) {
    let disc = event.currentTarget;
    let click = 1;
    console.log(disc);
    if (click === 1) {
        hidden.appendChild(disc.lastElementChild);
        click = 2;
        console.log(click)
    }
    console.log(click)
    if (click === 2) {
        console.log("true");
        col2.appendChild(hidden.lastChild);
        click = 1;
    }
    console.log(hidden.children);

}