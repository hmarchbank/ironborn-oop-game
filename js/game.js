

class Game {
    constructor(create, draw){
        this.player = null
        this.create = create
        this.draw = draw
    }

    start(){
        this.player = new Player()
        this.player.domElement = this.create("player")
        this.draw(this.player)

        
        this.obstacle = new Obstacle()
        this.obstacle.domElement = this.create('obstacle')
        this.draw(this.obstacle)

        let intervalTime = 100
        let interval = setInterval( () => {
            this.obstacle.moveDown()
            console.log(this.obstacle.positionY)
            drawDomElement(this.obstacle)
            if (this.obstacle.positionY <= -10){
                clearInterval(interval)
            }
        }, 100)

        
    }

    movePlayer(direction){
        if(direction === "left" && this.player.positionX > 0){
            this.player.moveLeft()
        } else if (this.player.positionX < 80 && direction === "right"){
            this.player.moveRight()
        }
        this.draw(this.player)
    }
}

class Player {
    constructor() {
        this.positionX = 40
        this.positionY = 0
        this.domElement = null
    }
    moveLeft() {
        this.positionX = this.positionX - 4
    }
        
    moveRight() {
        this.positionX = this.positionX + 4
    }
}

class Obstacle {
    constructor(){
        this.positionX = Math.floor(Math.random() * 81 -1)
        this.positionY = 100
        this.domElement = null
    }

    moveDown(){
        this.positionY--
    }
}