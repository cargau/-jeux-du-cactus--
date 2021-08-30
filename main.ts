function vie () {
    if (dinosaurex == cactusx && DINOSAUREY == cactusy) {
        game.removeLife(1)
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
    if (cactusy == 4 && cactusx == 1) {
        game.addScore(1)
    }
    basic.pause(100)
    if (cactusx == -1) {
        basic.pause(100)
        spawn_cactus()
        basic.pause(100)
    }
    led.unplot(cactusx, cactusy)
    basic.pause(100)
    cactusx = cactusx - 1
    basic.pause(100)
    led.plot(cactusx, cactusy)
    basic.pause(100)
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
})
let cactusy = 0
let cactusx = 0
let DINOSAUREY = 0
let dinosaurex = 0
music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Forever)
game.setLife(1)
dinosaurex = 1
DINOSAUREY = 4
spawn_cactus()
basic.forever(function () {
    cactus()
    mort()
    vie()
    led.plot(dinosaurex, DINOSAUREY)
})
