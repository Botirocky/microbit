input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        music.play(music.stringPlayable("C5 A F D - - - - ", 130), music.PlaybackMode.UntilDone)
        basic.showString("M")
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            `)
        basic.showString("v")
        basic.pause(2000)
        basic.showLeds(`
            . . # # .
            # # . # #
            . . . # .
            # # . # #
            . . # # .
            `)
        basic.pause(1000)
        basic.showString("kedves utasaink a vonat kesik 5 percet")
    }
    for (let index = 0; index < 1; index++) {
        music.play(music.stringPlayable("C5 A F D - - - - ", 130), music.PlaybackMode.UntilDone)
        basic.showString("M")
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            `)
        basic.showString("v")
        basic.pause(2000)
        basic.showLeds(`
            . . # # .
            # # . # #
            . . . # .
            # # . # #
            . . # # .
            `)
        basic.pause(1000)
        basic.showString("kedves utasaink a vonat kesik 10 percet")
    }
    for (let index = 0; index < 1; index++) {
        music.play(music.stringPlayable("C5 A F D - - - - ", 130), music.PlaybackMode.UntilDone)
        basic.showString("M")
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            `)
        basic.showString("v")
        basic.pause(2000)
        basic.showLeds(`
            . . # # .
            # # . # #
            . . . # .
            # # . # #
            . . # # .
            `)
        basic.pause(1000)
        basic.showString("kedves utasaink a vonat kesik 15 percet")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("the code was made by Boti")
})
let hőmérséklet = 0
let érték = 0
music.play(music.stringPlayable("- - A G F E D - ", 190), music.PlaybackMode.InBackground)
basic.showString("Mr.Robot")
basic.forever(function () {
    if (true) {
        érték = 23
    }
    hőmérséklet += 2
    while (false) {
        music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 500), music.PlaybackMode.UntilDone)
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                # . # . #
                . # . # .
                . . . . .
                . # . # .
                # . # . #
                `)
        }
    }
})
