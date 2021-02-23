"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TextureComponent_1 = require("../GameEngine/TextureComponent");
var flappy_bird_png_1 = require("./GameAssets/flappy-bird.png");


function TheBird() {
    var _a = react_1.useState(0), x = _a[0], setX = _a[1];
    var _b = react_1.useState(0), y = _b[0], setY = _b[1];
    TextureComponent_1["default"](flappy_bird_png_1["default"], x, y, 50, 50);
}


exports["default"] = TheBird;
