let hőmérséklet = 0
let érték = 0
music.play(music.stringPlayable("- - A G F E D - ", 190), music.PlaybackMode.InBackground)
basic.showString("Mr.Robot")
basic.forever(function on_forever() {
    
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
