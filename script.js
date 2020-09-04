let playerTurn = false;
let cellsLeftToFill = 9;
let pickedCells = new Map();

function signSize(tableData) {

    var sign = document.getElementById(tableData).style.fontSize = "xxx-large";

}

function symbol(tableData) {

    if (playerTurn == false) {

        cellsLeftToFill--;
        fullCells();

        var sign = document.getElementById(tableData).innerHTML = "X";
        signSize(tableData);
        sign = document.getElementById(tableData).onclick = null;
        playerTurn = true;
        pickedCells.set(tableData, "X");
        checkPlayerOneForWin();
        checkPlayerTwoForWin();


    } else {

        cellsLeftToFill--;
        fullCells();
        var sign = document.getElementById(tableData).innerHTML = "O";
        signSize(tableData);
        sign = document.getElementById(tableData).onclick = null;
        playerTurn = false;
        pickedCells.set(tableData, "O");
        checkPlayerOneForWin();
        checkPlayerTwoForWin();

    }


}

function fullCells() {

    if (cellsLeftToFill === 0) {

        setTimeout(function() {
            alert("No winner in this round! restarting shortly....");
        }, 0.9);

        setTimeout(function() {
            refreshGrid();
        }, 2500);
    }
}


function checkPlayerOneForWin() {


    if (pickedCells.get("one") == "X" && pickedCells.get("two") == "X" && pickedCells.get("three") == "X") {
        setTimeout(function() {
            alert("Player 1 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("four") == "X" && pickedCells.get("five") == "X" && pickedCells.get("six") == "X") {
        setTimeout(function() {
            alert("Player 1 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("seven") == "X" && pickedCells.get("eight") == "X" && pickedCells.get("nine") == "X") {
        setTimeout(function() {
            alert("Player 1 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("one") == "X" && pickedCells.get("four") == "X" && pickedCells.get("seven") == "X") {
        setTimeout(function() {
            alert("Player 1 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("two") == "X" && pickedCells.get("five") == "X" && pickedCells.get("eight") == "X") {
        setTimeout(function() {
            alert("Player 1 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("three") == "X" && pickedCells.get("six") == "X" && pickedCells.get("nine") == "X") {
        setTimeout(function() {
            alert("Player 1 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("one") == "X" && pickedCells.get("five") == "X" && pickedCells.get("nine") == "X") {
        setTimeout(function() {
            alert("Player 1 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("three") == "X" && pickedCells.get("five") == "X" && pickedCells.get("seven") == "X") {
        setTimeout(function() {
            alert("Player 1 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    }


}

function checkPlayerTwoForWin() {

    if (pickedCells.get("one") == "O" && pickedCells.get("two") == "O" && pickedCells.get("three") == "O") {
        setTimeout(function() {
            alert("Player 2 wins");
        }, 0.1000);

        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("four") == "O" && pickedCells.get("five") == "O" && pickedCells.get("six") == "O") {
        setTimeout(function() {
            alert("Player 2 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("seven") == "O" && pickedCells.get("eight") == "O" && pickedCells.get("nine") == "O") {
        setTimeout(function() {
            alert("Player 2 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("one") == "O" && pickedCells.get("four") == "O" && pickedCells.get("seven") == "O") {
        setTimeout(function() {
            alert("Player 2 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("two") == "O" && pickedCells.get("five") == "O" && pickedCells.get("eight") == "O") {
        setTimeout(function() {
            alert("Player 2 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("three") == "O" && pickedCells.get("six") == "O" && pickedCells.get("nine") == "O") {
        setTimeout(function() {
            alert("Player 2 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("one") == "O" && pickedCells.get("five") == "O" && pickedCells.get("nine") == "O") {
        setTimeout(function() {
            alert("Player 2 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    } else if (pickedCells.get("three") == "O" && pickedCells.get("five") == "O" && pickedCells.get("seven") == "O") {
        setTimeout(function() {
            alert("Player 2 wins");
        }, 0.1000);
        setTimeout(function() {
            refreshGrid();
        }, 1500);
    }






}



function refreshGrid() {
    window.location.reload();

}