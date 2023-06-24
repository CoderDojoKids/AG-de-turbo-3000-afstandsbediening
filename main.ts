input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(9)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(6)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(7)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(8)
})
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.Tortoise)
    basic.showIcon(IconNames.Sword)
    basic.clearScreen()
}
radio.setGroup(7)
basic.forever(function () {
    basic.showLeds(`
        # . # . #
        # # # # #
        . # # # .
        . # # # .
        # # # # #
        `)
})
