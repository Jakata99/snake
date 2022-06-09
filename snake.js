//------------------------------Importing-stuff------------------------------------
import {getDirections} from "./input.js"



//----------------------------------Functions--------------------------------------
export function update() {

    const direction = getDirections()
    newHead = {
        x: snakeBody[0].x + direction.x,
        y: snakeBody[0].y + direction.y
    }

    snakeBody.splice(0, 0, newHead)
    removedTail = snakeBody.pop()
    snakeMoved = true
}

export function draw(gameBoard) {
    snakeBody.forEach(element => {
        const snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = element.y
        snakeElement.style.gridColumnStart = element.x
        snakeElement.classList.add("snake")
        gameBoard.appendChild(snakeElement)
    snakeMoved = false
    });
}


export function snakeDetect(value) { 
    snakeMoved = value
}


//------------------------------Global-Variables-----------------------------------
export const snakeSpeed = 7
export let snakeBody = [
    {x: 5, y: 12},
    {x: 4, y: 12},
    {x: 3, y: 12}
]
export let newHead = {x: null, y: null}
export let removedTail = null
export let snakeMoved = false