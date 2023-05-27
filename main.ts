input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(9)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(8)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(7)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
})
radio.setGroup(7)
basic.forever(function () {
	
})
