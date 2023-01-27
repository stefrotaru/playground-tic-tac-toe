const initMainPage = () => {
    let btn = document.createElement('button');
    btn.classList.add('main-btn');
    btn.classList.add('waddap-btn');
    btn.textContent = 'Waddap';
    document.querySelector('body').appendChild(btn)

    let mainBtn = document.querySelector('.main-btn');
    mainBtn.addEventListener('click', initApp);
}

const ticTacToeInit = () => {
    let newMain = document.createElement('main');
    let gameSingleBox = document.createElement('div');
    newMain.classList.add('tic-tac-toe');
    
    for(var i=0; i<9; i++){
        newMain.appendChild(gameSingleBox.cloneNode())
    }
    
    document.querySelector('body').appendChild(newMain);
}

const checkGameStatus = () => {
    let victoryColor = 'rgba(6, 214, 83, .75)'
    let gameBoxes = document.querySelectorAll('div');
    if (gameBoxes[0].textContent == 'X' && gameBoxes[3].textContent == 'X' && gameBoxes[6].textContent == 'X') {
        gameBoxes[0].style.backgroundColor = victoryColor;
        gameBoxes[3].style.backgroundColor = victoryColor;
        gameBoxes[6].style.backgroundColor = victoryColor;
        return 'X Wins';
    } else if (gameBoxes[0].textContent == 'O' && gameBoxes[3].textContent == 'O' && gameBoxes[6].textContent == 'O') {
        gameBoxes[0].style.backgroundColor = victoryColor;
        gameBoxes[3].style.backgroundColor = victoryColor;
        gameBoxes[6].style.backgroundColor = victoryColor;
        return 'O Wins';
    } else if (gameBoxes[1].textContent == 'X' && gameBoxes[4].textContent == 'X' && gameBoxes[7].textContent == 'X') {
        gameBoxes[1].style.backgroundColor = victoryColor;
        gameBoxes[4].style.backgroundColor = victoryColor;
        gameBoxes[7].style.backgroundColor = victoryColor;
        return 'X Wins';
    } else if (gameBoxes[1].textContent == 'O' && gameBoxes[4].textContent == 'O' && gameBoxes[7].textContent == 'O') {
        gameBoxes[1].style.backgroundColor = victoryColor;
        gameBoxes[4].style.backgroundColor = victoryColor;
        gameBoxes[7].style.backgroundColor = victoryColor;
        return 'O Wins';
    } else if (gameBoxes[2].textContent == 'X' && gameBoxes[5].textContent == 'X' && gameBoxes[8].textContent == 'X') {
        gameBoxes[2].style.backgroundColor = victoryColor;
        gameBoxes[5].style.backgroundColor = victoryColor;
        gameBoxes[8].style.backgroundColor = victoryColor;
        return 'X Wins';
    } else if (gameBoxes[2].textContent == 'O' && gameBoxes[5].textContent == 'O' && gameBoxes[8].textContent == 'O') {
        gameBoxes[2].style.backgroundColor = victoryColor;
        gameBoxes[5].style.backgroundColor = victoryColor;
        gameBoxes[8].style.backgroundColor = victoryColor;
        return 'O Wins';
    } else if (gameBoxes[0].textContent == 'X' && gameBoxes[1].textContent == 'X' && gameBoxes[2].textContent == 'X') {
        gameBoxes[0].style.backgroundColor = victoryColor;
        gameBoxes[1].style.backgroundColor = victoryColor;
        gameBoxes[2].style.backgroundColor = victoryColor;
        return 'X Wins';
    } else if (gameBoxes[0].textContent == 'O' && gameBoxes[1].textContent == 'O' && gameBoxes[2].textContent == 'O') {
        gameBoxes[0].style.backgroundColor = victoryColor;
        gameBoxes[1].style.backgroundColor = victoryColor;
        gameBoxes[2].style.backgroundColor = victoryColor;
        return 'O Wins';
    } else if (gameBoxes[3].textContent == 'X' && gameBoxes[4].textContent == 'X' && gameBoxes[5].textContent == 'X') {
        gameBoxes[3].style.backgroundColor = victoryColor;
        gameBoxes[4].style.backgroundColor = victoryColor;
        gameBoxes[5].style.backgroundColor = victoryColor;
        return 'X Wins';
    } else if (gameBoxes[3].textContent == 'O' && gameBoxes[4].textContent == 'O' && gameBoxes[5].textContent == 'O') {
        gameBoxes[3].style.backgroundColor = victoryColor;
        gameBoxes[4].style.backgroundColor = victoryColor;
        gameBoxes[5].style.backgroundColor = victoryColor;
        return 'O Wins';
    } else if (gameBoxes[6].textContent == 'X' && gameBoxes[7].textContent == 'X' && gameBoxes[8].textContent == 'X') {
        gameBoxes[6].style.backgroundColor = victoryColor;
        gameBoxes[7].style.backgroundColor = victoryColor;
        gameBoxes[8].style.backgroundColor = victoryColor;
        return 'X Wins';
    } else if (gameBoxes[6].textContent == 'O' && gameBoxes[7].textContent == 'O' && gameBoxes[8].textContent == 'O') {
        gameBoxes[6].style.backgroundColor = victoryColor;
        gameBoxes[7].style.backgroundColor = victoryColor;
        gameBoxes[8].style.backgroundColor = victoryColor;
        return 'O Wins';
    } else if (gameBoxes[0].textContent == 'X' && gameBoxes[4].textContent == 'X' && gameBoxes[8].textContent == 'X') {
        gameBoxes[0].style.backgroundColor = victoryColor;
        gameBoxes[4].style.backgroundColor = victoryColor;
        gameBoxes[8].style.backgroundColor = victoryColor;
        return 'X Wins';
    } else if (gameBoxes[0].textContent == 'O' && gameBoxes[4].textContent == 'O' && gameBoxes[8].textContent == 'O') {
        gameBoxes[0].style.backgroundColor = victoryColor;
        gameBoxes[4].style.backgroundColor = victoryColor;
        gameBoxes[8].style.backgroundColor = victoryColor;
        return 'O Wins';
    } else if (gameBoxes[2].textContent == 'X' && gameBoxes[4].textContent == 'X' && gameBoxes[6].textContent == 'X') {
        gameBoxes[2].style.backgroundColor = victoryColor;
        gameBoxes[4].style.backgroundColor = victoryColor;
        gameBoxes[6].style.backgroundColor = victoryColor;
        return 'X Wins';
    } else if (gameBoxes[2].textContent == 'O' && gameBoxes[4].textContent == 'O' && gameBoxes[6].textContent == 'O') {
        gameBoxes[2].style.backgroundColor = victoryColor;
        gameBoxes[4].style.backgroundColor = victoryColor;
        gameBoxes[6].style.backgroundColor = victoryColor;
        return 'O Wins';
    }
    return 'No Winner';
}

const addRestartBtnListener = () => {
    document.querySelector('.main-btn').addEventListener('click', () => { restartGame() })
}

const restartGame = () => {
    if (document.querySelector('h1')) {
        document.querySelector('h1').remove();
    };
    document.querySelector('main').remove();
    document.querySelector('button').remove();

    ticTacToeGame();
}

const gameBoxesCheck = () => {
    const gameBoxes = document.querySelectorAll('div');
    let check = false;
    let count = 0;

    gameBoxes.forEach(box => {
        if (box.textContent !== '') {
            count++;
        };
    })

    if (count > 8) {
        check = true;
    }

    return check;
}

const ticTacToeGame = () => {
    ticTacToeInit();
    let gameBoxes = document.querySelectorAll('div');

    let currentGameState = 'x';
    let gameStatus = checkGameStatus();

    gameBoxes.forEach( box => {
        box.addEventListener('click', (e) => {
            if (currentGameState == 'o' && box.innerText == '' && gameStatus == 'No Winner') {
                box.innerText = 'X';
                currentGameState = 'x';
                gameStatus = checkGameStatus();
            } else if (currentGameState == 'x' && box.innerText == '' && gameStatus == 'No Winner') {
                box.innerText = 'O';
                currentGameState = 'o';
                gameStatus = checkGameStatus();
            } else {
                return
            }
            
            if (gameStatus == 'X Wins' || gameStatus == 'O Wins') {
                let announcement = document.createElement('h1');
                let restartBtn = document.createElement('button');
                
                announcement.innerText = '🙌 ' + gameStatus + ' 🙌';
                restartBtn.innerText = 'Restart';
                restartBtn.classList.add('main-btn');

                document.querySelector('body').prepend(announcement);
                document.querySelector('body').append(restartBtn);

                if (document.querySelector('.main-btn') !== null) {
                    addRestartBtnListener()
                }
            }

            if (gameBoxesCheck() && document.querySelector('.main-btn') == null) {
                let announcement = document.createElement('h1');
                let restartBtn = document.createElement('button');

                announcement.innerText = '❌ ' + gameStatus + ' ❌';
                restartBtn.innerText = 'Restart';
                restartBtn.classList.add('main-btn');

                document.querySelector('body').prepend(announcement);
                document.querySelector('body').append(restartBtn);

                if (document.querySelector('.main-btn') !== null) {
                    addRestartBtnListener()
                }
            }
        })
    })
}

const initApp = () => {
    if (document.querySelector('.first-text') === null) {
        let newMain = document.createElement('main');
        document.querySelector('body').appendChild(newMain);
        let firstP = document.createElement('p');
        firstP.classList.add('first-text');
        firstP.innerText = 'Hello there, traveler! 👋';
        document.querySelector('main').appendChild(firstP);
    } else if (document.querySelector('.second-text') === null) {
        let secondP = document.createElement('p');
        secondP.classList.add('second-text');
        secondP.innerText = 'Click again the Waddap button to play tic-tac-toe! 🕹️';
        document.querySelector('main').appendChild(secondP);
    } else {
        while (document.querySelector('body').lastChild == document.querySelector('.main-btn') || document.querySelector('body').lastChild == document.querySelector('main')) {
            document.querySelector('body').lastChild.remove()
        };
        ticTacToeGame();    
    }
}

window.addEventListener('load', initMainPage);