//------------------------------Importing-stuff------------------------------------
import {draw as drawSnake, update as updateSnake, snakeSpeed, snakeBody} from "./snake.js"
import {draw as drawFood, update as updateFood} from "./food.js"
import {newHead} from "./snake.js"
import {addKeyEvents} from "./input.js"

//----------------------------------Functions--------------------------------------
function menu () {
    document.body.addEventListener("click", handleClick)
}


function handleClick() {
    document.body.removeEventListener("click", handleClick)
    addKeyEvents()
    window.requestAnimationFrame(mainGame)
}


function mainGame(timeStamp) {

//----------------------------------Game-Over--------------------------------------
    if (gameOver) {
        if(confirm("You lost. Press ok to restart the game.")) {
            window.location.reload();
        }
        return
    }



//-----------------------------------Animate---------------------------------------

    latestTime = timeStamp

    const timePerFrame = 1 / snakeSpeed * 1000
    let timeSinceLastRender = latestTime - previousTime
    
    if (timeSinceLastRender > timePerFrame) {
        

        previousTime = latestTime

        update()
        draw()
        borderCheck(newHead.x, newHead.y)
        snakeCollisionCheck()


    }

    window.requestAnimationFrame(mainGame)
}


function update() {
    
    updateSnake()
    updateFood()

}


function draw() {

    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}


function borderCheck(x, y) {

    if (x > 21 || x < 1 || y > 21 || y < 1) {
        gameOver = true
    } 
}

function snakeCollisionCheck() {
    
    let noHeadSnake = [...snakeBody]
    noHeadSnake.shift()

    noHeadSnake.forEach(bodyPart => {
        if (snakeBody[0].x === bodyPart.x && snakeBody[0].y === bodyPart.y) {
            gameOver = true
        }
    })
}



//------------------------------Global-Variables-----------------------------------
let latestTime = 0
let previousTime = 0
const gameBoard = document.getElementById("game-board")
let gameOver = false
menu()
