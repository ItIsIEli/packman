enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Looking,
    MoveLeft,
    MoveRight,
    MoveDown
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.MoveDown)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(mySprite, ActionKind.Idle)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.MoveLeft)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(mySprite, ActionKind.Idle)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(mySprite, ActionKind.Idle)
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.MoveRight)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(mySprite, ActionKind.Idle)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.MoveDown)
})
function createPlayer () {
    anim = animation.createAnimation(ActionKind.MoveLeft, 200)
    anim1 = animation.createAnimation(ActionKind.MoveRight, 200)
    anim3 = animation.createAnimation(ActionKind.Idle, 200)
    anim4 = animation.createAnimation(ActionKind.MoveDown, 200)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 f f . 
        f 5 5 f f 5 5 5 5 f f 5 5 5 f . 
        f 5 5 f f 5 5 5 5 f f 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 f 5 5 f . . 
        . f 5 5 5 f f f f f 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . . . . f f f f f . . . . . . 
        `, SpriteKindLegacy.Player)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f f 5 5 5 5 5 5 5 f . . 
        f 5 5 5 f f 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f f f f f f f f f 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 f f . . . . 
        . . . . f f f f f f . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . f f 5 5 5 5 5 5 5 5 5 f f . . 
        . f 5 5 f f 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 f f 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f f f f f f f f f f 5 5 5 5 f . 
        f f f f f f f f f f f 5 5 5 f . 
        . f f f f f f f f f f 5 5 f . . 
        . f f f f f f f f f 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 f f . . . . 
        . . . . f f f f f f . . . . . . 
        `)
    anim1.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 f f 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 f f 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 f f f f f f f f f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 f f . . . . 
        . . . . f f f f f f . . . . . . 
        `)
    anim1.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . f f 5 5 5 5 5 5 5 5 5 f f . . 
        . f 5 5 5 5 5 5 5 f f 5 f f . . 
        f 5 5 5 5 5 5 5 5 f f 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 f f f f f f f f f f . 
        f 5 5 5 f f f f f f f f f f f . 
        . f 5 5 f f f f f f f f f f . . 
        . f 5 5 5 f f f f f f f f f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 f f . . . . 
        . . . . f f f f f f . . . . . . 
        `)
    anim3.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 f f . 
        f 5 5 f f 5 5 5 5 f f 5 5 5 f . 
        f 5 5 f f 5 5 5 5 f f 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 f 5 5 5 5 5 f 5 5 f . . 
        . f 5 5 5 f f f f f 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    anim4.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f f 5 5 5 f f 5 5 f . . 
        f f 5 5 f f 5 5 5 f f 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 f f f f f f f f f 5 5 f . 
        . f 5 f f f f f f f f f 5 f . . 
        . f 5 5 f f f f f f f 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    anim4.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 f f . 
        f 5 5 f f 5 5 5 5 f f 5 5 5 f . 
        f 5 5 f f 5 5 5 5 f f 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 f 5 5 5 5 5 f 5 5 f . . 
        . f 5 5 5 f f f f f 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    animation.attachAnimation(mySprite, anim)
    animation.attachAnimation(mySprite, anim1)
    animation.attachAnimation(mySprite, anim3)
    animation.attachAnimation(mySprite, anim4)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    mySprite.setPosition(128, 128)
}
function createBugs () {
    bug1Direction = 0
    bug2Direction = 0
    bug3Direction = 0
    bug4Direction = 0
    bug5Direction = 0
    bug6Direction = 0
    bug1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 1 1 5 5 5 5 1 1 5 5 5 . . 
        . . 1 1 1 1 5 5 1 1 1 1 5 5 . . 
        . . 8 8 1 1 5 5 8 8 1 1 5 5 . . 
        . 5 8 8 1 1 5 5 8 8 1 1 5 5 5 . 
        . 5 5 1 1 5 5 5 5 1 1 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 . 5 5 5 . . 5 5 5 . 5 5 . 
        . 5 . . . 5 5 . . 5 5 . . . 5 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 1 1 7 7 7 7 1 1 7 7 7 . . 
        . . 1 1 1 1 7 7 1 1 1 1 7 7 . . 
        . . 8 8 1 1 7 7 8 8 1 1 7 7 . . 
        . 7 8 8 1 1 7 7 8 8 1 1 7 7 7 . 
        . 7 7 1 1 7 7 7 7 1 1 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 . 7 7 7 . . 7 7 7 . 7 7 . 
        . 7 . . . 7 7 . . 7 7 . . . 7 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . 3 1 1 3 3 3 3 1 1 3 3 3 . . 
        . . 1 1 1 1 3 3 1 1 1 1 3 3 . . 
        . . 8 8 1 1 3 3 8 8 1 1 3 3 . . 
        . 3 8 8 1 1 3 3 8 8 1 1 3 3 3 . 
        . 3 3 1 1 3 3 3 3 1 1 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 . 3 3 3 . . 3 3 3 . 3 3 . 
        . 3 . . . 3 3 . . 3 3 . . . 3 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a a a a a a a a . . . . 
        . . . a a a a a a a a a a . . . 
        . . a 1 1 a a a a 1 1 a a a . . 
        . . 1 1 1 1 a a 1 1 1 1 a a . . 
        . . 8 8 1 1 a a 8 8 1 1 a a . . 
        . a 8 8 1 1 a a 8 8 1 1 a a a . 
        . a a 1 1 a a a a 1 1 a a a a . 
        . a a a a a a a a a a a a a a . 
        . a a a a a a a a a a a a a a . 
        . a a a a a a a a a a a a a a . 
        . a a . a a a . . a a a . a a . 
        . a . . . a a . . a a . . . a . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . d d d d d d d d d d . . . 
        . . d 1 1 d d d d 1 1 d d d . . 
        . . 1 1 1 1 d d 1 1 1 1 d d . . 
        . . 8 8 1 1 d d 8 8 1 1 d d . . 
        . d 8 8 1 1 d d 8 8 1 1 d d d . 
        . d d 1 1 d d d d 1 1 d d d d . 
        . d d d d d d d d d d d d d d . 
        . d d d d d d d d d d d d d d . 
        . d d d d d d d d d d d d d d . 
        . d d . d d d . . d d d . d d . 
        . d . . . d d . . d d . . . d . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 1 1 2 2 2 2 1 1 2 2 2 . . 
        . . 1 1 1 1 2 2 1 1 1 1 2 2 . . 
        . . 8 8 1 1 2 2 8 8 1 1 2 2 . . 
        . 2 8 8 1 1 2 2 8 8 1 1 2 2 2 . 
        . 2 2 1 1 2 2 2 2 1 1 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 . 
        . 2 . . . 2 2 . . 2 2 . . . 2 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug1.setPosition(150, 32)
    bug2.setPosition(220, 130)
    bug3.setPosition(32, 190)
    bug4.setPosition(128, 32)
    bug5.setPosition(32, 150)
    bug6.setPosition(240, 32)
}
function reset () {
    createPlayer()
    createBugs()
}
let bug6: Sprite = null
let bug5: Sprite = null
let bug4: Sprite = null
let bug3: Sprite = null
let bug2: Sprite = null
let bug1: Sprite = null
let bug6Direction = 0
let bug5Direction = 0
let bug4Direction = 0
let bug3Direction = 0
let bug2Direction = 0
let bug1Direction = 0
let anim4: animation.Animation = null
let anim3: animation.Animation = null
let anim1: animation.Animation = null
let anim: animation.Animation = null
let mySprite: Sprite = null
info.setScore(0)
info.setLife(3)
scene.setTileMap(img`
    88888888888888888888888888888888
    8fffffffffffffff88888ffffffffff8
    8fffffffffffffff88888ffffffffff8
    8ff8888ff88888ff88888888ff888ff8
    8ff8ff8ff8fff8ff88888ff8ff8f8ff8
    8ff8ff8ff8fff8ff888888f8ff8f8ff8
    8ff8888ff88888ff88888888ff888ff8
    8fffffffffffffff888888fffffffff8
    8fffffffffffffff888888fffffffff8
    8ff8888ff88888ff888888f8ff888ff8
    8ff8888ff88888ff888888f8ff888ff8
    8fffffffffffffff888888f8fffffff8
    8fffffffffffffff88888888fffffff8
    888888888888888888888ff8ff888888
    888888888888888888888ff8ff888888
    888888888888888888888fffffffffff
    888888888888888888888fffffffffff
    8888888ff8ff8fffffff8ff8ff888888
    8ffffffff8ff8fffffff8ff8fffffff8
    8ffffffff8ff8fffffff8ff8fffffff8
    8ff8888ff8ff888888888ff8ff888ff8
    8fffff8ff8fffffffffffff8ff8ffff8
    8fffff8fffffffffffffffffff8ffff8
    8888ff8fffff888888888fffff8ff888
    8888ff8ff888888888888888ff8ff888
    8fffffffffffffff8ffffffffffffff8
    8fffffffffffffff8ffffffffffffff8
    8ff88888888888ff8ff8888888888ff8
    8ff88888888888ff8ff8888888888ff8
    8fffffffffffffff8ffffffffffffff8
    8ffffffffffffffffffffffffffffff8
    88888888888888888888888888888888
    `)
scene.setTile(8, img`
    f f f f f f f f f f f f f f f f 
    f 8 8 8 8 8 f 8 8 8 8 8 8 8 8 f 
    f 8 8 8 8 8 f 8 8 8 8 8 8 8 8 f 
    f f f f f f f 8 8 8 8 8 8 8 8 f 
    f 8 8 f 8 8 f f f f f f f f f f 
    f 8 8 f 8 8 8 8 f 8 8 8 8 8 8 f 
    f 8 8 f 8 8 8 8 f 8 8 8 8 8 8 f 
    f f f f f f f f f f f f f f f f 
    f 8 f f 8 8 f 8 8 8 f 8 8 8 8 f 
    f 8 f f 8 8 f 8 8 8 f 8 8 8 8 f 
    f 8 f f f f f 8 8 8 f f f f f f 
    f f f f f 8 f f f f f f 8 8 8 f 
    f 8 8 8 f 8 8 8 8 f f f 8 8 8 f 
    f 8 8 8 f 8 8 8 8 f 8 f 8 8 8 f 
    f 8 8 8 f f f f f f 8 f 8 8 8 f 
    f f f f f f f f f f f f f f f f 
    `, true)
createPlayer()
createBugs()
forever(function () {
    if (bug1.x > 239) {
        bug1Direction = 1
    }
    if (bug1.x < 30) {
        bug1Direction = 0
    }
    if (bug1Direction == 0) {
        bug1.setVelocity(50, 0)
    } else {
        bug1.setVelocity(-50, 0)
    }
    if (bug2.x > 239) {
        bug2Direction = 1
    }
    if (bug2.x < 30) {
        bug2Direction = 0
    }
    if (bug2Direction == 0) {
        bug2.setVelocity(50, 0)
    } else {
        bug2.setVelocity(-50, 0)
    }
    if (bug3.x > 239) {
        bug3Direction = 1
    }
    if (bug3.x < 30) {
        bug3Direction = 0
    }
    if (bug3Direction == 0) {
        bug3.setVelocity(50, 0)
    } else {
        bug3.setVelocity(-50, 0)
    }
    if (bug4.y < 30) {
        bug4Direction = 0
    }
    if (bug4.y > 190) {
        bug4Direction = 1
    }
    if (bug4Direction == 0) {
        bug4.setVelocity(0, 50)
    } else {
        bug4.setVelocity(0, -50)
    }
    if (bug5.y < 30) {
        bug5Direction = 0
    }
    if (bug5.y > 190) {
        bug5Direction = 1
    }
    if (bug5Direction == 0) {
        bug5.setVelocity(0, 50)
    } else {
        bug5.setVelocity(0, -50)
    }
    if (bug6.y < 30) {
        bug6Direction = 0
    }
    if (bug6.y > 190) {
        bug6Direction = 1
    }
    if (bug6Direction == 0) {
        bug6.setVelocity(0, 50)
    } else {
        bug6.setVelocity(0, -50)
    }
})
