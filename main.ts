function vie () {
    if (dinosaurex == cactusx && DINOSAUREY == cactusy) {
        game.removeLife(2)
    }
}
function spawn_cactus () {
    cactusx = 4
    cactusy = 4
    led.plot(cactusx, cactusy)
}
function mort () {
	
}
function cactus () {
    basic.pause(500)
    if (cactusx == -1) {
        basic.pause(500)
        spawn_cactus()
        basic.pause(500)
    }
    led.unplot(cactusx, cactusy)
    basic.pause(500)
    cactusx = cactusx - 1
    basic.pause(500)
    led.plot(cactusx, cactusy)
    basic.pause(500)
}
input.onButtonPressed(Button.B, function () {
    dinosaurex = 1
    DINOSAUREY = 1
    led.plot(dinosaurex, DINOSAUREY)
    led.unplot(dinosaurex, DINOSAUREY)
    basic.pause(2000)
    dinosaurex = 1
    DINOSAUREY = 4
    led.plot(dinosaurex, DINOSAUREY)
    game.addScore(1)
})
let cactusy = 0
let cactusx = 0
let DINOSAUREY = 0
let dinosaurex = 0
dinosaurex = 1
DINOSAUREY = 4
spawn_cactus()
basic.forever(function () {
    cactus()
    mort()
    led.plot(dinosaurex, DINOSAUREY)
})
