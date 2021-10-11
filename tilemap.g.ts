// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020101010101010101010101010101010001000000000501000000000000010100010001010101010001010101000101000100000000000100000501000001010001010101010001010101010001010100000000000000010401050100000101010101010101000100010001010001010000000000000001000100000000010100010101010101010001010001000101000000000000000000010000010001010001010101010101000100010100010100000000000000000001000001000101000101010101010101010100010001010001000005010000000101000100010100000001000000010000000001000301010101010101010101010101010101`, img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . . 2 . . . . . . 2 
2 . 2 . 2 2 2 2 2 . 2 2 2 2 . 2 
2 . 2 . . . . . 2 . . . 2 . . 2 
2 . 2 2 2 2 2 . 2 2 2 2 2 . 2 2 
2 . . . . . . . 2 . 2 . 2 . . 2 
2 2 2 2 2 2 2 . 2 . 2 . 2 2 . 2 
2 . . . . . . . 2 . 2 . . . . 2 
2 . 2 2 2 2 2 2 2 . 2 2 . 2 . 2 
2 . . . . . . . . . 2 . . 2 . 2 
2 . 2 2 2 2 2 2 2 . 2 . 2 2 . 2 
2 . . . . . . . . . 2 . . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 . 2 . . . 2 . . . 2 2 . 2 . 2 
2 . . . 2 . . . 2 . . . . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "cheese":
            case "tile4":return tile4;
            case "myTile":
            case "tile5":return tile5;
            case "wall":
            case "tile1":return tile1;
            case "start":
            case "tile2":return tile2;
            case "finish":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
