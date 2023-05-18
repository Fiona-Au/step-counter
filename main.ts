input.onGesture(Gesture.Shake, function () {
    Steps += 2
    basic.showNumber(Steps)
})
let Steps = 0
basic.showString("Hello! Are you ready to start walking? Let's go!! ")
basic.pause(100)
basic.showString("What is you goal for the day?")
