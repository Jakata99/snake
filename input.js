//------------------------------Importing-stuff------------------------------------
import { snakeDetect, snakeMoved } from "./snake.js"


//----------------------------------Functions--------------------------------------
export function getDirections() {
    return baseCoords
}

function keydownHandle(event) {

    let latestKey = event.key
    
    if (snakeMoved === true) {
    } else {
        switch (latestKey) {

            case "w":
                if (baseCoords.y !== 0) {
                } else {
                    baseCoords = {x: 0, y: -1}
                    previousKey = latestKey
                }
            break;
    
            case "s":
                if (baseCoords.y !== 0) {
                } else {
                    baseCoords = {x: 0, y: 1}
                    previousKey = latestKey
    
                }
            break;
    
            case "a":
                if (baseCoords.x !== 0) {
                } else {
                    baseCoords = {x: -1, y: 0}
                    previousKey = latestKey
    
                }
            break;
    
            case "d":
                if (baseCoords.x !== 0) {
                } else {
                    baseCoords = {x: 1, y: 0}
                    previousKey = latestKey
                }
    
            break;
    
            default:
                break;
        }
        snakeDetect(true)
    }


}

export function addKeyEvents() {
    window.addEventListener("keydown", keydownHandle) 
}


//------------------------------Global-Variables-----------------------------------

let baseCoords = {x: 1, y: 0}
let previousKey = "d"

