input.onButtonPressed(Button.A, function () {
    colour = 1
    basic.showLeds(`
        # # # # .
        # . . . .
        # . # # .
        # . . # .
        # # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    colour = 2
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . # . .
        # . . # .
        `)
})
let colour = 0
let strip = neopixel.create(DigitalPin.P0, 58, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
    if (colour == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (colour == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    strip.show()
    strip.rotate(1)
    basic.pause(100)
})
