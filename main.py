hőmérséklet = 0
érték = 0
music.play(music.string_playable("- - A G F E D - ", 190),
    music.PlaybackMode.IN_BACKGROUND)
basic.show_string("Mr.Robot")

def on_forever():
    global érték, hőmérséklet
    if True:
        érték = 23
    hőmérséklet += 2
    while False:
        music.play(music.string_playable("C5 B C5 B C5 B C5 B ", 500),
            music.PlaybackMode.UNTIL_DONE)
        for index in range(4):
            basic.show_leds("""
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                """)
            basic.show_leds("""
                # . # . #
                . # . # .
                . . . . .
                . # . # .
                # . # . #
                """)
basic.forever(on_forever)
