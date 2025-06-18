
let turn = 'x';
let title = document.querySelector(".title")
let squares = [];

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML     
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        title.textContent = 'winner...🤩'
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        title.textContent = ' winner...🤩'
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        title.textContent = 'winner...🤩'
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        title.textContent = 'winner...🤩'
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        title.textContent = 'winner...🤩'
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        title.textContent = 'winner...🤩'
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1]!= '' ){
        title.textContent = 'winner...🤩'
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
         title.textContent = 'winner...🤩'

    }
    if (title.textContent === 'winner...🤩') {
        title.style.color = 'green'
        title.fontSize = '22px'
    } else if (turn =='x') {
        title.style.fontSize = '30px'
        title.style.color = 'yellow'
        title.style.fontWeight = '700'

    } else if (turn =='o') {
        title.style.fontSize = '30px'
        title.style.color = 'yellow'
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X'
        title.innerHTML = 'O'
        turn = 'o'
        element.style.color = 'orange'
        element.style.fontSize = '40px'

    } else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O'
        turn = 'x'
        title.innerHTML = 'X'   
        element.style.fontSize = '40px'   
   
    }
    winner()
}
