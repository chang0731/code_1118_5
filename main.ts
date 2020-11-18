input.onButtonPressed(Button.A, function () {
    basic.showNumber(answer)
    basic.pause(1000)
    if (answer > 5) {
        basic.showIcon(IconNames.Diamond)
        right += 1
    } else {
        basic.showIcon(IconNames.No)
        wrong += 1
    }
    answer = randint(0, 9)
    basic.pause(1000)
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("right" + right + "wrong" + wrong)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(answer)
    basic.pause(1000)
    if (answer < 5) {
        basic.showIcon(IconNames.Diamond)
        right += 1
    } else {
        basic.showIcon(IconNames.No)
        wrong += 1
    }
    answer = randint(0, 9)
    basic.pause(1000)
    basic.showIcon(IconNames.Ghost)
})
let wrong = 0
let right = 0
let answer = 0
answer = randint(0, 9)
basic.showIcon(IconNames.Ghost)
right = 0
wrong = 0
