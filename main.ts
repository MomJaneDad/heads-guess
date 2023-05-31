input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onGesture(Gesture.LogoUp, function () {
    index = randint(0, 문자열_리스트.length - 1)
    basic.showString("" + (문자열_리스트[index]))
})
let index = 0
let 문자열_리스트: string[] = []
문자열_리스트 = ["Push", "fun", "smart"]
game.startCountdown(30000)
