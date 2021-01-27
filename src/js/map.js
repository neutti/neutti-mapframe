"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("ol/Map");
var View_1 = require("ol/View");
var Tile_1 = require("ol/layer/Tile");
var XYZ_1 = require("ol/source/XYZ");
new Map_1.default({
    target: 'map',
    layers: [
        new Tile_1.default({
            source: new XYZ_1.default({
                url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        })
    ],
    view: new View_1.default({
        center: [0, 0],
        zoom: 5
    })
});
