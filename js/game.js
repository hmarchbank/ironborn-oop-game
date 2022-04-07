

class Game {
    constructor(create, draw){
        this.player = null
        this.create = create
        this.draw = draw
        this.obstacleArray = []
        this.counter = 0
        this.interval = null
    }

    start(){
        this.player = new Player()
        this.player.domElement = this.create("player")
        this.draw(this.player)

        
        // this.obstacle = new Obstacle()

        this.interval = setInterval( () => {
            this.counter ++
            if (this.counter === 30){
                this.obstacle = new Obstacle()
                this.obstacle.domElement = this.create('obstacle')
                
                this.draw(this.obstacle)
                this.obstacleArray.push(this.obstacle)
                this.counter = Math.floor(Math.random() * 30)
            }
            this.obstacleArray.forEach( element => {
                element.moveDown()
                this.detectCollision(element)
                this.draw(element)
                if (element.positionY <= -10){
                    this.obstacleArray.shift()
                    element.domElement.remove()
                }
            })
        }, 25)
    }

    detectCollision(obstacle){
        if (this.player.positionX < obstacle.positionX + obstacle.width &&
            this.player.positionX + this.player.width > obstacle.positionX &&
            this.player.positionY < obstacle.positionY + obstacle.height &&
            this.player.height + this.player.positionY > obstacle.positionY){
                alert('GAME OVER')
                clearInterval(this.interval)
        }
    }

    movePlayer(direction){
        if(direction === "left" && this.player.positionX > 0){
            this.player.moveLeft()
        } else if (this.player.positionX < 90 && direction === "right"){
            this.player.moveRight()
        }
        this.draw(this.player)
    }
}

class Player {
    constructor() {
        this.positionX = 40
        this.positionY = 0
        this.width = 10
        this.height = 3
        this.domElement = null
    }
    moveLeft() {
        this.positionX -= 8
    }
        
    moveRight() {
        this.positionX += 8    
    }
}

class Obstacle {
    constructor(){
        this.positionX = Math.floor(Math.random() * 80)
        this.positionY = 100
        this.width = Math.floor(Math.random() * 20 + 4)
        this.height = Math.floor(Math.random() * 10 + 4)
        this.domElement = null
    }

    moveDown(){
        this.positionY--
    }

    deleteObstacle(){
        this.obstacleArray.shift()
        document.getElementById('board').removeChild
    }
}