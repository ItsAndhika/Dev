const canvas = document.getElementsByTagName('canvas')[0]
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        },
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 100,
        this.height = 100
    }
    draw() {
        c.fillStyle = 'crimson'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
    }
}

const player1 = new Player()
player1.update()

function animateLoop() {
    requestAnimationFrame(animateLoop)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player1.update()
}
animateLoop()