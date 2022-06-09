//------------------------------Importing-stuff------------------------------------
import { removedTail, snakeBody } from "./snake.js"


//----------------------------------Functions--------------------------------------



export function update() {

    onSnakeCheck()

    if (collision) {
        food = generateFood()
        collision = false
        expandSnake()
    }
}


export function draw(gameBoard) {
    
    const foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    
    gameBoard.appendChild(foodElement)

}


function onSnakeCheck() {
    snakeBody.forEach(element => {
        if (element.x === food.x && element.y === food.y) {
            collision = true
        }
    });
}


function generateFood() {
    
    let xCoord = Math.floor(Math.random() * 21)  + 1
    let yCoord = Math.floor(Math.random() * 21)  + 1

    snakeBody.forEach(element => {
        if (element.x === xCoord && element.y === yCoord) {
            generateFood()
        }
    })
    
    return {x: xCoord, y: yCoord}

}


function expandSnake() {
    snakeBody.push(removedTail)
}


//------------------------------Global-Variables-----------------------------------
let food = generateFood()
let collision = false
