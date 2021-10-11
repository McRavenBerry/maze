namespace SpriteKind {
    export const Child = SpriteKind.create()
}
function player_animations () {
    characterAnimations.loopFrames(
    mouse,
    [img`
        . . . . . . . 3 3 . . . 
        . . . . . . 3 . . . . . 
        . . . . . 3 . . . . . . 
        . . . 3 . 1 1 . 3 . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . 3 1 1 1 1 3 . . . 
        . . . . . 1 1 . . . . . 
        . . . . 1 1 1 d . . . . 
        . . . 3 3 1 1 3 3 . . . 
        . . . . f 1 1 f . . . . 
        . . . . . 2 2 . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mouse,
    [img`
        . . . . . 2 2 . . . . . 
        . . . . f 1 1 f . . . . 
        . . . 3 3 1 1 3 3 . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . . 1 1 . . . . . 
        . . . 3 1 1 1 1 3 . . . 
        . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . . . 
        . . . 3 . 1 1 . 3 . . . 
        . . . . . 3 . . . . . . 
        . . . . . . 3 . . . . . 
        . . . . . . . 3 3 . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mouse,
    [img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 3 . . 3 . . 3 . . 
        . . . . 1 1 1 . 1 3 f . 
        . . 3 1 1 1 1 1 1 1 1 2 
        . 3 . 1 1 1 1 1 1 1 1 2 
        3 . . . 1 1 1 . 1 3 f . 
        3 . . 3 . . 3 . . 3 . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mouse,
    [img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . 3 . . 3 . . 3 . . . 
        . f 3 1 . 1 1 1 . . . . 
        2 1 1 1 1 1 1 1 1 3 . . 
        2 1 1 1 1 1 1 1 1 . 3 . 
        . f 3 1 . 1 1 1 . . . 3 
        . . 3 . . 3 . . 3 . . 3 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
sprites.onCreated(SpriteKind.Child, function (sprite) {
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . 3 . 3 . 3 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . 3 1 1 1 3 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . 3 f 1 f 3 . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    child_animations(sprite)
    multilights.addLightSource(sprite, 4)
})
function child_animations (mySprite: Sprite) {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . 3 . . . . . 
        . . . . . 3 . . . . . . 
        . . . 3 . 3 . 3 . . . . 
        . . . . 1 1 1 . . . . . 
        . . . 3 1 1 1 3 . . . . 
        . . . . 1 1 1 . . . . . 
        . . . 3 f 1 f 3 . . . . 
        . . . . . 2 . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . 2 . . . . . . 
        . . . 3 f 1 f 3 . . . . 
        . . . . 1 1 1 . . . . . 
        . . . 3 1 1 1 3 . . . . 
        . . . . 1 1 1 . . . . . 
        . . . 3 . 3 . 3 . . . . 
        . . . . . 3 . . . . . . 
        . . . . . . 3 . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . 3 . 3 . 3 . . . 
        . . . . . 1 1 1 f . . . 
        . . . 3 3 1 1 1 1 2 . . 
        . . 3 . . 1 1 1 f . . . 
        . . . . 3 . 3 . 3 . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . 3 . 3 . 3 . . . . 
        . . . f 1 1 1 . . . . . 
        . . 2 1 1 1 1 3 3 . . . 
        . . . f 1 1 1 . . 3 . . 
        . . . 3 . 3 . 3 . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
sprites.onOverlap(SpriteKind.Child, SpriteKind.Child, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Child, function (sprite, otherSprite) {
    pause(300)
    otherSprite.follow(sprite, randint(25, 65))
    otherSprite.setBounceOnWall(true)
})
function place_children () {
    tiles.createSpritesOnTiles(assets.tile`myTile`, SpriteKind.Child)
    tiles.replaceAllTiles(assets.tile`myTile`, assets.tile`transparency16`)
}
scene.onOverlapTile(SpriteKind.Child, assets.tile`start`, function (sprite, location) {
    sprite.destroy()
    info.changeScoreBy(1)
})
let mouse: Sprite = null
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level1`)
multilights.toggleLighting(true)
mouse = sprites.create(img`
    . . . . . . . 3 3 . . . 
    . . . . . . 3 . . . . . 
    . . . . . 3 . . . . . . 
    . . . 3 . 1 1 . 3 . . . 
    . . . . 1 1 1 1 . . . . 
    . . . . 1 1 1 1 . . . . 
    . . . 3 1 1 1 1 3 . . . 
    . . . . . 1 1 . . . . . 
    . . . . 1 1 1 1 . . . . 
    . . . 3 3 1 1 3 3 . . . 
    . . . . f 1 1 f . . . . 
    . . . . . 2 2 . . . . . 
    `, SpriteKind.Player)
let bad_guy = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(bad_guy, assets.tile`finish`)
tiles.placeOnRandomTile(mouse, assets.tile`start`)
scene.cameraFollowSprite(mouse)
controller.moveSprite(mouse)
player_animations()
let starting_score = info.score()
game.splash("Mother Mouse", "By Mr. McGarrah")
game.showLongText("Find your babies and bring them home. ", DialogLayout.Bottom)
game.showLongText("Be careful though... ", DialogLayout.Bottom)
game.showLongText("There is a cat on the prowl!", DialogLayout.Bottom)
multilights.addLightSource(mouse, 10)
place_children()
info.startCountdown(90)
game.onUpdateInterval(1000, function () {
    if (sprites.allOfKind(SpriteKind.Child).length == 0) {
        if (starting_score < info.score()) {
            game.over(true)
        } else {
            game.over(false)
        }
    }
})
game.onUpdateInterval(1000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Child)) {
        if (spriteutils.distanceBetween(mouse, value) > 30) {
            value.follow(null, 0)
            value.setVelocity(randint(-25, 25), randint(-25, 25))
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (spriteutils.distanceBetween(mouse, value) < 50) {
            value.follow(mouse, 50)
        } else {
            value.follow(mouse, 0)
        }
    }
})
