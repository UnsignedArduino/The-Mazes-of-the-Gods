enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Help = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
d d f f f f f f f f f f f f f f 
d d d d d f f f f f f f f f f f 
d f f f f f f f f f f f f f f f 
d d f f f f f f f f f f f f f f 
d f f f f f f f f f f f f f f f 
d f f f f f f f f f f f f f f f 
d d d f f f f f f f f f f f f f 
d d f f f f f f f f f f f f f f 
d f f f f f f f f f f f f f f f 
d d d d d f f f f f f f f f f f 
d d d f f f f f f f f f f f f f 
d d d d f f f f f f f f f f f f 
d d f f f f f f f f f f f f f f 
d f f f f f f f f f f f f f f f 
d d f f f f f f f f f f f f f f 
d d d d f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 7 7 7 7 7 a a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 a a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 a a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 a a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 a a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 a a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 a a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 a a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 a a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 a a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a a a 7 7 7 7 a a a a 7 7 
7 7 a a a a 7 7 7 7 a a a a 7 7 
7 7 a a 7 7 a a a a 7 7 a a 7 7 
7 7 a a 7 7 a a a a 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 7 7 7 7 7 7 7 7 7 a a a 7 7 
7 7 7 7 7 7 7 7 7 a a a a a 7 7 
7 7 7 7 7 7 7 7 a a a a a 7 7 7 
7 7 7 7 7 7 a a a a a 7 7 7 7 7 
7 7 7 7 7 a a a a a 7 7 7 7 7 7 
7 7 7 a a a a a 7 7 7 7 7 7 7 7 
7 7 a a a a a 7 7 7 7 7 7 7 7 7 
7 7 a a a 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile10 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 a a a a a a a a a a 7 7 
7 7 7 7 a a a a a a a a a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 a a a a a a a a 7 7 7 7 
7 7 7 7 a a a a a a a a 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 a a 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 a a 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 a a 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a a a a a a a a a 7 7 7 7 
7 7 a a a a a a a a a a 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 a a a a a a a a 7 7 7 7 
7 7 7 7 a a a a a a a a 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 a a 7 7 
7 7 7 7 a a a a a a a a 7 7 7 7 
7 7 7 7 a a a a a a a a 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile12 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a a a a a a a a a a a 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 a a 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile13 = img`
7 d d d d d d d d d d d d d d d 
7 7 d d d d d d d d d d d d d d 
7 d a a d d d d d d d d a a d d 
7 7 a a d d d d d d d d a a d d 
7 d a a d d d d d d d d a a d d 
7 7 a a d d d d d d d d a a d d 
7 7 a a d d d d d d d d a a d d 
7 7 a a a a a a a a a a a a d d 
7 d a a a a a a a a a a a a d d 
7 d a a d d d d d d d d a a d d 
7 7 a a d d d d d d d d a a d d 
7 7 a a d d d d d d d d a a d d 
7 7 a a d d d d d d d d a a d d 
7 d a a d d d d d d d d a a d d 
7 7 d d d d d d d d d d d d d d 
7 d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile14 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d a a a a a a a a a a a a d d 
d d a a a a a a a a a a a a d d 
d d a a d d d d d d d d d d d d 
d d a a d d d d d d d d d d d d 
d d a a d d d d d d d d d d d d 
d d a a a a a a a a a a a a d d 
d d a a a a a a a a a a a a d d 
d d a a d d d d d d d d d d d d 
d d a a d d d d d d d d d d d d 
d d a a d d d d d d d d d d d d 
d d a a a a a a a a a a a a d d 
d d a a a a a a a a a a a a d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile15 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d a a a a a a a a a a d d 
d d d d a a a a a a a a a a d d 
d d a a d d d d d d d d d d d d 
d d a a d d d d d d d d d d d d 
d d a a d d d d d d d d d d d d 
d d a a d d d d d d d d d d d d 
d d a a d d d d d d a a d d d d 
d d a a d d d d d d a a d d d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d d d a a a a a a a a a a d d 
d d d d a a a a a a a a a a d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile16 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d a a a a a a a a d d d d 
d d d d a a a a a a a a d d d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d d d a a a a a a a a d d d d 
d d d d a a a a a a a a d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile17 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d a a a a a a a a a a d d d d 
d d a a a a a a a a a a d d d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a d d d d d d d d a a d d 
d d a a a a a a a a a a d d d d 
d d a a a a a a a a a a d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile18 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d a a a a a a a a a a d d 
d d d d a a a a a a a a a a d d 
d d a a d d d d d d d d d d d d 
d d a a d d d d d d d d d d d d 
d d a a d d d d d d d d d d d d 
d d d d a a a a a a a a d d d d 
d d d d a a a a a a a a d d d d 
d d d d d d d d d d d d a a d d 
d d d d d d d d d d d d a a d d 
d d d d d d d d d d d d a a d d 
d d d d d d d d d d d d a a d d 
d d a a a a a a a a a a d d d d 
d d a a a a a a a a a a d d d d 
d d d d d d d d d d d d d d d d 
`
}
function start_loading () {
    scene.setBackgroundImage(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 3 3 3 9 3 9 9 9 3 3 3 9 3 3 3 9 3 3 3 9 3 3 3 9 9 9 3 9 3 9 3 9 3 3 3 9 3 3 3 9 3 3 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5 5 9 9 9 9 9 9 
9 9 9 9 3 9 3 9 3 9 9 9 3 9 9 9 3 9 3 9 3 9 9 9 3 9 9 9 9 9 3 9 3 9 3 9 3 9 3 9 9 3 9 9 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5 5 5 5 9 9 9 9 9 
9 9 9 9 3 3 3 9 3 9 9 9 3 3 3 9 3 3 3 9 3 3 3 9 3 3 3 9 9 9 3 9 3 9 3 9 3 3 3 9 9 3 9 9 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5 5 5 5 9 9 9 9 9 
9 9 9 9 3 9 9 9 3 9 9 9 3 9 9 9 3 9 3 9 9 9 3 9 3 9 9 9 9 9 3 3 3 3 3 9 3 9 3 9 9 3 9 9 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5 5 5 5 9 9 9 9 9 
9 9 9 9 3 9 9 9 3 3 3 9 3 3 3 9 3 9 3 9 3 3 3 9 3 3 3 9 9 9 9 3 9 3 9 9 3 9 3 9 3 3 3 9 9 3 9 9 3 9 3 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5 5 5 5 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5 5 5 5 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 5 5 5 5 5 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 9 7 9 7 9 7 7 7 9 9 9 7 9 9 9 7 9 7 7 7 9 7 7 7 7 9 7 7 7 9 9 7 7 7 9 9 9 9 7 7 9 9 7 7 7 9 9 9 7 7 7 7 7 9 7 9 7 9 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 9 9 9 7 9 7 9 7 9 9 9 9 9 7 7 9 7 7 9 7 9 7 9 9 9 9 7 9 7 9 9 9 7 9 9 9 9 9 9 7 9 9 7 9 7 9 9 9 9 9 9 9 7 9 9 9 7 9 7 9 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 9 9 9 7 7 7 9 7 7 7 9 9 9 7 9 7 9 7 9 7 7 7 9 9 9 7 9 9 7 7 7 9 9 7 7 9 9 9 9 7 9 9 7 9 7 7 7 9 9 9 9 9 7 9 9 9 7 7 7 9 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 9 9 9 7 9 7 9 7 9 9 9 9 9 7 9 9 9 7 9 7 9 7 9 9 7 9 9 9 7 9 9 9 9 9 9 7 9 9 9 7 9 9 7 9 7 9 9 9 9 9 9 9 7 9 9 9 7 9 7 9 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 9 9 9 7 9 7 9 7 7 7 9 9 9 7 9 9 9 7 9 7 9 7 9 7 7 7 7 9 7 7 7 9 7 7 7 9 9 9 9 9 7 7 9 9 7 9 9 9 9 9 9 9 7 9 9 9 7 9 7 9 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 9 9 9 9 7 7 7 7 9 9 9 9 7 7 7 7 9 9 9 9 9 9 7 7 7 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 9 9 9 9 7 7 7 7 9 9 9 9 7 7 7 7 9 9 9 9 9 9 7 7 7 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 9 9 9 9 9 9 9 9 7 7 9 9 9 9 7 7 9 9 7 7 9 9 7 7 9 9 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 9 9 9 9 9 9 9 9 7 7 9 9 9 9 7 7 9 9 7 7 9 9 7 7 9 9 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 9 9 7 7 9 9 9 9 7 7 9 9 9 9 7 7 9 9 7 7 9 9 7 7 9 9 9 9 7 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 9 9 7 7 9 9 9 9 7 7 9 9 9 9 7 7 9 9 7 7 9 9 7 7 9 9 9 9 7 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 9 9 9 9 7 7 9 9 7 7 9 9 9 9 7 7 9 9 7 7 9 9 7 7 9 9 9 9 9 9 9 9 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 9 9 9 9 7 7 9 9 7 7 9 9 9 9 7 7 9 9 7 7 9 9 7 7 9 9 9 9 9 9 9 9 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 9 9 9 9 7 7 7 7 9 9 9 9 7 7 7 7 9 9 9 9 7 7 7 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 9 9 9 9 7 7 7 7 9 9 9 9 7 7 7 7 9 9 9 9 7 7 7 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 d d d d 9 9 9 d d d 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 d d d d 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 d d 9 9 d d d 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 d d d 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 3 3 3 3 3 9 9 3 3 3 9 9 9 3 9 9 9 9 3 3 9 9 3 3 3 9 3 3 9 9 3 3 3 9 3 9 9 3 9 9 3 3 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 d d d d d 9 9 d d d d 9 9 9 9 9 9 9 d d d d d 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 3 9 9 9 3 9 9 9 9 9 9 3 9 9 9 3 9 9 3 9 3 9 3 9 3 9 3 9 9 3 9 9 3 3 9 3 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d 9 9 9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 3 9 9 9 9 3 3 9 9 9 9 3 9 9 9 3 9 9 3 9 3 3 3 9 3 9 3 9 9 3 9 9 3 9 3 3 9 3 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 3 9 9 9 9 9 9 3 9 9 9 3 9 9 9 3 9 9 3 9 3 9 3 9 3 9 3 9 9 3 9 9 3 9 9 3 9 3 9 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 3 3 3 3 3 9 3 3 3 9 9 9 9 3 3 3 9 9 3 3 9 9 3 9 3 9 3 3 9 9 3 3 3 9 3 9 9 3 9 9 3 3 3 9 3 9 3 9 3 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 d d d d 9 d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 d d d d 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 d d 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 d d d d 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 d d 9 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 d d d d d d d d d 9 9 9 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 d d d d d d 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 d d d d 9 9 9 d d 9 9 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 d d d d 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 d d d d d 9 9 d 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 d d d d d 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d 9 d 9 9 9 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 d d d d d d d d 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d 9 9 9 9 d d d d 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 d d d d d d d d d d 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 9 9 d d d d d 9 9 d d d d d d d d d d d d d 9 9 9 d d d 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 d d d d 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d 9 9 d d d d d 9 9 9 9 9 
9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 d d d d d d 9 9 d d d 9 9 9 9 9 9 9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 
9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 d 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 
9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 
9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 
9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 d d d d 9 d 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 
9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 
d d d d 3 d 3 d 3 d 3 d 3 d 3 3 3 d 3 d d d 3 3 3 d d d 3 d d d d 3 3 d d 3 3 3 d 3 3 d d 3 3 3 d 3 d d 3 d d 3 3 3 d d d d d d d d d d 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d 3 d 3 d 3 d 3 d d 3 d d 3 d d d 3 d d d d d 3 d d d 3 d d 3 d 3 d 3 d 3 d 3 d d 3 d d 3 3 d 3 d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d 3 d 3 d 3 3 3 d d 3 d d 3 d d d 3 3 3 d d d 3 d d d 3 d d 3 d 3 3 3 d 3 d 3 d d 3 d d 3 d 3 3 d 3 d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d 3 d 3 d 3 d 3 d d 3 d d 3 d d d 3 d d d d d 3 d d d 3 d d 3 d 3 d 3 d 3 d 3 d d 3 d d 3 d d 3 d 3 d d 3 d 3 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d 3 d 3 d d 3 d 3 d 3 3 3 d 3 3 3 d 3 3 3 d d d 3 3 3 d d 3 3 d d 3 d 3 d 3 3 d d 3 3 3 d 3 d d 3 d d 3 3 3 d 3 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 9 9 9 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d 3 d d 3 3 d d 3 d 3 d d d 3 d d d 3 d 3 3 3 d 3 d 3 d d d d 3 3 3 d 3 3 3 d 3 3 3 d d d d 3 3 3 d d 3 3 d d 3 d d d 3 d 3 3 3 d d d d 3 3 3 d 3 3 3 d 3 3 3 d 3 3 3 d 3 d d 3 d d 3 3 3 d 3 3 3 d d d 3 3 3 d 3 3 3 d 3 3 3 d 3 3 3 d 3 d 3 d 3 3 3 d 3 3 3 d 3 d 3 d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d 3 d 3 d d 3 d 3 d 3 d d d 3 3 d 3 3 d 3 d 3 d 3 d 3 d d d 3 d d d d 3 d d d 3 d d d d d 3 d d d d 3 d d 3 d 3 3 d 3 3 d 3 d d d d d 3 d d d d d 3 d d 3 d 3 d 3 d 3 d 3 3 d 3 d 3 d d d d 3 d d d d d 3 d 3 d 3 d d d d 3 d d d 3 d d 3 d 3 d d 3 d d d 3 d d 3 d 3 d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 3 3 d 3 d d 3 d 3 d 3 d d d 3 d 3 d 3 d 3 3 3 d 3 3 3 d d d d 3 3 d d 3 3 3 d 3 3 3 d d d d 3 3 d d 3 d d 3 d 3 d 3 d 3 d 3 3 3 d d d d 3 3 d d d 3 d d 3 3 d d 3 3 3 d 3 d 3 3 d 3 d 3 d d 3 3 3 d d d 3 3 3 d 3 d d d d 3 d d d 3 d d 3 d 3 d d 3 d d d 3 d d 3 3 3 d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d 3 d d 3 d d 3 d 3 d 3 d d d 3 d d d 3 d 3 d 3 d d 3 d d d d d d d 3 d 3 d d d 3 d d d d d d d d 3 d 3 d d 3 d 3 d d d 3 d 3 d d d d d d d d 3 d d 3 d d 3 d 3 d 3 d 3 d 3 d d 3 d 3 d d 3 d 3 d d d d d 3 d 3 d 3 d d d d 3 d d d 3 d d 3 d 3 d d 3 d d d 3 d d d 3 d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d 3 d d d 3 3 d d d 3 d d d d 3 d d d 3 d 3 d 3 d d 3 d d d d 3 3 3 d d 3 3 3 d 3 3 3 d d d 3 3 3 d d d 3 3 d d 3 d d d 3 d 3 3 3 d d d 3 3 3 d d d 3 d d 3 d 3 d 3 d 3 d 3 d d 3 d d 3 3 3 d 3 3 3 d d d 3 d 3 d 3 3 3 d d 3 d d 3 3 3 d d 3 d d 3 3 3 d d 3 d d d 3 d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d 3 d 3 3 3 d 3 3 3 d 3 3 3 d 3 3 3 d 3 d d 3 d 3 3 3 d 3 d d 3 d d 3 3 3 d d d d d d 3 3 3 3 3 d 3 d 3 d 3 3 3 d d 3 3 3 d d d 3 3 3 d d 3 3 3 d d d 3 d d 3 d d 3 3 d d 3 3 3 d 3 d d d 3 d 3 3 3 d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d 3 d 3 d 3 d 3 d 3 d 3 d 3 d 3 d d d 3 3 d 3 d d 3 d d 3 3 d 3 d 3 d d d d d d d d d d d 3 d d d 3 d 3 d d 3 d d 3 d d d d d d d 3 d d 3 d d d d d d 3 3 d 3 d 3 d d 3 d 3 d 3 d 3 3 d 3 3 d 3 d 3 d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 3 3 d 3 3 3 d 3 3 3 d 3 3 3 d 3 3 3 d 3 d 3 3 d d 3 d d 3 d 3 3 d 3 d 3 d d d d d d d d d 3 d d d 3 3 3 d d 3 d d d 3 3 d d d d d 3 d d d 3 3 d d d d 3 d 3 3 d 3 d d 3 d 3 3 d d 3 d 3 d 3 d 3 3 3 d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d 3 d 3 d 3 d 3 d d d 3 d d d 3 d d d 3 d d 3 d d 3 d d 3 d d 3 d 3 d d 3 d 3 3 d d d d d 3 d d d 3 d 3 d d 3 d d d d d 3 d d d d 3 d d d d d 3 d d d 3 d d 3 d 3 d d 3 d 3 d 3 d 3 d d d 3 d 3 d 3 d 3 d d d 3 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d 3 d 3 d 3 d 3 d d d 3 d d d 3 3 3 d 3 d d 3 d 3 3 3 d 3 d d 3 d d 3 3 3 d 3 3 d d d d d 3 d d d 3 d 3 d 3 3 3 d 3 3 3 d d d d 3 3 3 d 3 3 3 d d d d 3 d d 3 d d 3 3 d d 3 d 3 d 3 d d d 3 d 3 d 3 d 3 3 3 d 3 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 7 d d d 7 d 7 7 7 d 7 7 d d 7 7 7 d d d 7 7 7 d 7 d d 7 d d d 9 d d d 9 d 9 9 9 d 9 d 9 d 9 9 9 d 9 9 9 d d 9 9 d d 9 9 d d 9 9 9 d d d 9 9 9 d 9 9 9 d 9 9 9 d 9 9 9 d 9 9 d d 9 9 9 d d d 7 7 d d 7 d 7 d d d 7 7 7 d 7 d 7 d 7 7 7 d 7 d d 7 d d 7 7 7 d d d 7 d 7 d 7 7 7 d 7 d d 7 d d d d d d d d d d d d d d d d 
d d d d 7 7 d 7 7 d 7 d 7 d 7 d 7 d 7 d d d d d d 7 d d 7 7 d 7 d d d 9 9 d 9 9 d 9 d 9 d 9 d 9 d 9 d d d 9 d d d 9 d d 9 d 9 d 9 d 9 d d d d d 9 d 9 d 9 d 9 d 9 d d d 9 d 9 d 9 d 9 d 9 d d d d d 7 d 7 d 7 d 7 d d d 7 d d d 7 d 7 d 7 d 7 d 7 d d 7 d 7 d d d d d d 7 d 7 d d 7 d d 7 d d 7 d d d d d d d d d d d d d d d d 
d d d d 7 d 7 d 7 d 7 7 7 d 7 d 7 d 7 7 7 d d d d 7 d d 7 d 7 7 d d d 9 d 9 d 9 d 9 9 9 d 9 9 d d 9 9 9 d 9 d d d 9 d d 9 d 9 d 9 d 9 9 9 d d d 9 9 9 d 9 9 d d 9 d d d 9 9 9 d 9 d 9 d 9 9 9 d d d 7 7 d d 7 7 7 d d d 7 d d d 7 7 7 d 7 7 d d 7 d d 7 d d 7 7 d d d d 7 7 7 d d 7 d d 7 d d 7 d d d d d d d d d d d d d d d d 
d d d d 7 d d d 7 d 7 d 7 d 7 d 7 d 7 d d d d d d 7 d d 7 d d 7 d d d 9 d d d 9 d 9 d 9 d 9 d 9 d 9 d d d 9 d d d 9 d d 9 d 9 d 9 d 9 d d d d d 9 d 9 d 9 d 9 d 9 d d d 9 d 9 d 9 d 9 d 9 d d d d d 7 d 7 d d 7 d d d d 7 d d d d 7 d d 7 d 7 d 7 d d 7 d d d d 7 d d d d 7 d d d 7 d d 7 d d 7 d d d d d d d d d d d d d d d d 
d d d d 7 d d d 7 d 7 d 7 d 7 7 d d 7 7 7 d d d 7 7 7 d 7 d d 7 d d d 9 d d d 9 d 9 d 9 d 9 d 9 d 9 9 9 d 9 9 9 d d 9 9 d d 9 9 d d 9 9 9 d d d 9 d 9 d 9 d 9 d 9 9 9 d 9 d 9 d 9 9 d d 9 9 9 d d d 7 7 d d d 7 d d d d 7 7 7 d d 7 d d 7 d 7 d d 7 7 d d 7 7 7 d d d d d 7 d d 7 7 7 d d 7 7 d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 3 d d d d d d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 3 d d 3 3 3 3 d d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 3 3 d d 3 3 d d 3 3 3 d 3 d 3 d 3 3 3 d 3 3 3 d d 3 3 3 d 3 d 3 d 3 3 3 d 3 d d 3 d d d d 3 d d 3 d d d 3 3 3 3 3 d 3 3 3 d 3 d d 3 d 3 d d 3 d 3 3 3 d 3 3 3 d 3 d 3 d d d d 3 3 d d d 3 3 d d d 3 3 d d d 3 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d d d 3 d d 3 d 3 d 3 d 3 d 3 d 3 d 3 d d 3 d d 3 d d d d 3 d 3 d d 3 d d 3 d d 3 d 3 3 d 3 d d 3 d d d d d 3 d d d 3 d 3 d 3 3 d 3 d 3 d d 3 d 3 d 3 d 3 d 3 d 3 d 3 d d d 3 d d 3 d 3 d d 3 d 3 d d 3 d 3 d d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d d d 3 d d 3 d 3 3 3 d 3 3 3 d 3 3 d d d 3 d d 3 d 3 d d 3 3 3 d d 3 d d 3 d d 3 d 3 d d 3 d d 3 d d d d d 3 d d d 3 3 3 d 3 d 3 3 d 3 d d 3 d 3 3 3 d 3 3 d d 3 3 3 d d d d d 3 d d 3 d d 3 d d d 3 d d 3 d d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 d d d 3 d d 3 d 3 d d d d 3 d d 3 d 3 d d 3 d d 3 d d 3 d 3 d 3 d d 3 d d 3 d d 3 d 3 3 d 3 d d 3 d d d 3 d 3 d d d 3 d 3 d 3 d d 3 d 3 d d 3 d 3 d 3 d 3 d 3 d d 3 d d d d d 3 d d d 3 d d 3 d d 3 d d d 3 d d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 3 3 3 d d 3 3 d d 3 d d d d 3 d d 3 d 3 d 3 3 3 d d 3 3 3 d 3 d 3 d d 3 d d 3 d d 3 d d d d 3 d d 3 d d d d 3 d d d d 3 d 3 d 3 d d 3 d d 3 3 d d 3 d 3 d 3 d 3 d d 3 d d d d 3 3 3 3 d d 3 3 d d 3 3 3 3 d d 3 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 3 d d 3 3 3 3 d d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 3 d d d d d d 3 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Cat, 200, 200)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Cat, 100, 100)
})
let Cat: Sprite = null
start_loading()
pause(2000)
Cat = sprites.create(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d d d d d d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`, SpriteKind.Player)
controller.moveSprite(Cat, 100, 100)
Cat.setFlag(SpriteFlag.StayInScreen, true)
let CatAnimIdle = animation.createAnimation(ActionKind.Idle, 500)
let CatAnimWalk = animation.createAnimation(ActionKind.Walking, 200)
for (let index = 0; index < 4; index++) {
    CatAnimIdle.addAnimationFrame(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d d d d d d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`)
}
for (let Indexer = 0; Indexer <= 5; Indexer++) {
    if (Indexer == 5) {
        CatAnimWalk.addAnimationFrame(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d d d d d d d d e . b f b 
f d d d d d d d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`)
    } else {
        CatAnimWalk.addAnimationFrame(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d d d d d d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`)
    }
    CatAnimWalk.addAnimationFrame(img`
. . . . . . . . . . . . . . 
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e b f b . 
f d d d d d d d d f f d f . 
f b d d b b d d 2 b f d f . 
. f 2 2 2 2 2 2 d b d b f . 
. f d d d d d d d f f f . . 
. f d b d f f f d f . . . . 
. . f f f f . . f f . . . . 
`)
}
CatAnimIdle.addAnimationFrame(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d d d d d d d d e . b f b 
f d d d d d d d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`)
animation.attachAnimation(Cat, CatAnimIdle)
animation.attachAnimation(Cat, CatAnimWalk)
scene.setBackgroundImage(img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`)
tiles.setTilemap(tiles.createTilemap(
            hex`3000180001010101010101080c01010101010101080d0d0d0d0d120d0d120d0d0d0d0d0d1717171717171e29292317171717171701010101010301080c01020101040101080d0d120d0d120d0d120d0d0d0d120d1717171717171e29292317171717171701020101040101080c01010101010101080d0d0d0d0d120d0d120d0d0d0d0d0d2d17171717171929292317171717171701010101010101080c01010103010101080d0d0d0d0d120d0d120d120d0d0d0d2d17171717171e29291d17171717171701010101010102080c01010101010101080d120d0d0d120d0d120d0d0d0d0d0d2d17171717171929291d17171717171701010401010101080c01040101010101080d0d0d0d0d120d0d120d0d0d120d0d2d17171717171929291d17171717171701010101010101080c01010101010401080d0d0d120d120d0d120d0d0d0d0d0d2d17171717171929291d17171717171701010101010301080c01010102010101080d0d0d0d0d120d0d120d0d0d0d0d0d2d17171717171e29291d17171717171701010101040101080c01010101010103080d0d0d0d0d0f0d0d0f0d0d0d0d0d0d2d17171717171e29291d17171717171703010101010101080c0301010104010108100d0d0d0d0f0d0d0f0d100d0d0d0d2d17171717171e29292317171717171701010201010101080c01010201010101080d0d0d0d0d0f0d0d0f0d0d0d0d0d0d2d17171717171e29292317171717171701010101030101080c01010101010101080d0d0d100d0f0d0d0f0d0d0d0d100d2d17171717171e29291d17171717171704010101010101080c01010301010104080d0d0d0d0d0f0d0d0f0d100d0d0d0d2d17171717171e29291d17171717171701010201010102080c03010101010201080d100d0d0d0f0d0d0f0d0d0d0d100d2d17171717171e29291d17171717171701010101040101080c01010101010101080d0d0d0d0d0f0d0d0f0d0d0d0d0d0d2d17171717171929291d17171717171701010101010101080c010104010101020f0f0f0f0f0f0f0d0d0f120f0f0f0f0f1a1b251b1b2225292925221b1b25221c01090a0a0a0a0a0d0d0a0a0a0a0a0b010f0d0d0d0d0d0d0d0d0d0d0d0d0d0d0f1929292929292929292929292929292301080d070d0d0d0d0d0d0d0d070d0d0a0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d1829292929292929292929292929291d01080c15080d0d0d0d0d0d0c15080d0d0d0d0d100d0d0d0d0d0d0d0d100d0d0d1829292529292929292929292529292701080d0a0d0d0d0d0d0d0d0d0a0d0d070d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d18292929292929292929292929292923010507070707070707070707070706010f0d0d0d0d0d0d0d0d0d0d0d0d0d0d0f1e29292929292929292929292929291d010201010101030101040101010102010f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f1f20262020202624202620202026202101010101010401010101010101010401080d0d0d0d0d0d0f0d0d0d0d0d0d0d0d2d17171717171717171717171717171704010102010101010102010101010101080f0d0d0d0d0d0d0d0d0d0d0f0d0d0d2d171717171717171717171717171717`,
            img`
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . 2 . . . . . . . . 2 . . . . . . 2 . . . . . . . . 2 . . . . . . 2 . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.saplingPine,sprites.builtin.coral5,sprites.builtin.coral0,sprites.builtin.coral1,sprites.builtin.coral2,sprites.builtin.forestTiles0,sprites.builtin.forestTiles22,sprites.castle.tileDarkGrass2,sprites.builtin.coral4,myTiles.tile2,sprites.dungeon.stairWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorLockedNorth,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundSouthWest1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18],
            TileScale.Sixteen
        ))
tiles.placeOnTile(Cat, tiles.getTileLocation(5, 18))
scene.cameraFollowSprite(Cat)
game.onUpdateInterval(100, function () {
    if (Cat.vx != 0) {
        animation.setAction(Cat, ActionKind.Walking)
    } else if (Cat.vy != 0) {
        animation.setAction(Cat, ActionKind.Walking)
    } else {
        animation.setAction(Cat, ActionKind.Idle)
    }
})
