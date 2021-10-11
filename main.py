@namespace
class SpriteKind:
    Child = SpriteKind.create()
def player_animations():
    characterAnimations.loop_frames(mouse,
        [img("""
            . . . . . . . b b . . . 
                    . . . . . . b . . . . . 
                    . . b . . b . . . b . . 
                    . . . b . b b . b . . . 
                    . . . . b b b b . . . . 
                    . . . . b b b b . . . . 
                    . . . b b b b b b . . . 
                    . . b . . b b . . b . . 
                    . . . . b b b b . . . . 
                    . . . b b b b b b . . . 
                    . . . . f b b f . . . . 
                    . . . . . 2 2 . . . . .
        """)],
        500,
        characterAnimations.rule(Predicate.MOVING_DOWN))
    characterAnimations.loop_frames(mouse,
        [img("""
            . . . . . 2 2 . . . . . 
                    . . . . f b b f . . . . 
                    . . . b b b b b b . . . 
                    . . . . b b b b . . . . 
                    . . b . . b b . . b . . 
                    . . . b b b b b b . . . 
                    . . . . b b b b . . . . 
                    . . . . b b b b . . . . 
                    . . . b . b b . b . . . 
                    . . b . . b . . . b . . 
                    . . . . . . b . . . . . 
                    . . . . . . . b b . . .
        """)],
        500,
        characterAnimations.rule(Predicate.MOVING_UP))
    characterAnimations.loop_frames(mouse,
        [img("""
            . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . b . . . . b . . . . 
                    . . . b . . b . . b . . 
                    . . . . b b b . b b f . 
                    . . b b b b b b b b b 2 
                    . b . b b b b b b b b 2 
                    b . . . b b b . b b f . 
                    b . . b . . b . . b . . 
                    . . b . . . . b . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . .
        """)],
        500,
        characterAnimations.rule(Predicate.MOVING_RIGHT))
    characterAnimations.loop_frames(mouse,
        [img("""
            . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . b . . . . b . . 
                    . . b . . b . . b . . . 
                    . f b b . b b b . . . . 
                    2 b b b b b b b b b . . 
                    2 b b b b b b b b . b . 
                    . f b b . b b b . . . b 
                    . . b . . b . . b . . b 
                    . . . . b . . . . b . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . .
        """)],
        500,
        characterAnimations.rule(Predicate.MOVING_LEFT))

def on_on_created(sprite):
    sprite.set_image(img("""
        . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . b . b . b . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . b b b b b . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . b f b f b . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
    child_animations(sprite)
sprites.on_created(SpriteKind.Child, on_on_created)

def child_animations(mySprite: Sprite):
    characterAnimations.loop_frames(mySprite,
        [img("""
            . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . b . . . . . 
                    . . . . . b . . . . . . 
                    . . . b . b . b . . . . 
                    . . . . b b b . . . . . 
                    . . . b b b b b . . . . 
                    . . . . b b b . . . . . 
                    . . . b f b f b . . . . 
                    . . . . . 2 . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . .
        """)],
        500,
        characterAnimations.rule(Predicate.MOVING_DOWN))
    characterAnimations.loop_frames(mySprite,
        [img("""
            . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . 2 . . . . . . 
                    . . . b f b f b . . . . 
                    . . . . b b b . . . . . 
                    . . . b b b b b . . . . 
                    . . . . b b b . . . . . 
                    . . . b . b . b . . . . 
                    . . . . . b . . . . . . 
                    . . . . . . b . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . .
        """)],
        500,
        characterAnimations.rule(Predicate.MOVING_UP))
    characterAnimations.loop_frames(mySprite,
        [img("""
            . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . b . b . b . . . 
                    . . . . . b b b f . . . 
                    . . . b b b b b b 2 . . 
                    . . b . . b b b f . . . 
                    . . . . b . b . b . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . .
        """)],
        500,
        characterAnimations.rule(Predicate.MOVING_RIGHT))
    characterAnimations.loop_frames(mySprite,
        [img("""
            . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . b . b . b . . . . 
                    . . . f b b b . . . . . 
                    . . 2 b b b b b b . . . 
                    . . . f b b b . . b . . 
                    . . . b . b . b . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . .
        """)],
        500,
        characterAnimations.rule(Predicate.MOVING_LEFT))

def on_overlap_tile(sprite2, location):
    sprite2.destroy()
scene.on_overlap_tile(SpriteKind.Child,
    assets.tile("""
        finish
    """),
    on_overlap_tile)

def on_on_overlap(sprite3, otherSprite):
    otherSprite.set_velocity(randint(-30, 30), randint(-30, 30))
sprites.on_overlap(SpriteKind.Child, SpriteKind.Child, on_on_overlap)

def on_on_overlap2(sprite4, otherSprite2):
    otherSprite2.set_velocity(randint(-30, 30), randint(-30, 30))
    otherSprite2.follow(sprite4, randint(30, 45))
    num_children.set_text("1")
sprites.on_overlap(SpriteKind.player, SpriteKind.Child, on_on_overlap2)

def place_children():
    tiles.create_sprites_on_tiles(assets.tile("""
        myTile
    """), SpriteKind.Child)
    tiles.replace_all_tiles(assets.tile("""
            myTile
        """),
        assets.tile("""
            transparency16
        """))
mouse: Sprite = None
num_children: TextSprite = None
scene.set_background_color(7)
tiles.set_tilemap(tilemap("""
    level1
"""))
num_children = textsprite.create("0", 1, 15)
num_children.set_icon(img("""
    1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 b 1 1 1 1 
        1 1 1 1 1 1 b 1 1 1 1 1 
        1 1 1 1 b 1 b 1 b 1 1 1 
        1 1 1 1 1 b b b 1 1 1 1 
        1 1 1 1 b b b b b 1 1 1 
        1 1 1 1 1 b b b 1 1 1 1 
        1 1 1 1 b f b f b 1 1 1 
        1 1 1 1 1 1 2 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1
"""))
place_children()
mouse = sprites.create(img("""
        . . . . . . . b b . . . 
            . . . . . . b . . . . . 
            . . b . . b . . . b . . 
            . . . b . b b . b . . . 
            . . . . b b b b . . . . 
            . . . . b b b b . . . . 
            . . . b b b b b b . . . 
            . . b . . b b . . b . . 
            . . . . b b b b . . . . 
            . . . b b b b b b . . . 
            . . . . 1 b b 1 . . . . 
            . . . . . 2 2 . . . . .
    """),
    SpriteKind.player)
tiles.place_on_random_tile(mouse, assets.tile("""
    start
"""))
scene.camera_follow_sprite(mouse)
controller.move_sprite(mouse)
player_animations()

def on_update_interval():
    if len(sprites.all_of_kind(SpriteKind.Child)) == 0:
        game.over(True)
game.on_update_interval(1000, on_update_interval)
