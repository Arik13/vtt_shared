"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = exports.getDirectory = exports.isAncestor = exports.moveDirectory = exports.DIRECTORY_EVENT_NAME = exports.ROOT_NAME = void 0;
var ROOT_NAME;
(function (ROOT_NAME) {
    ROOT_NAME[ROOT_NAME["IMAGE"] = 0] = "IMAGE";
    ROOT_NAME[ROOT_NAME["LOCATION"] = 1] = "LOCATION";
})(ROOT_NAME = exports.ROOT_NAME || (exports.ROOT_NAME = {}));
var Names_1 = require("./Names");
Object.defineProperty(exports, "DIRECTORY_EVENT_NAME", { enumerable: true, get: function () { return Names_1.DIRECTORY_EVENT_NAME; } });
exports.moveDirectory = function (moveDir, targetDir) {
    var insertionIndex = 0;
    if (targetDir.itemID) {
        insertionIndex = targetDir.parent.children.findIndex(function (node) {
            return node.id == targetDir.id;
        }) + 1;
        targetDir = targetDir.parent;
    }
    if (exports.isAncestor(moveDir, targetDir)) {
        return false;
    }
    ;
    var moveParent = moveDir.parent;
    var dragIndex = moveParent.children.findIndex(function (dropNode) {
        return dropNode.id == moveDir.id;
    });
    moveParent.children.splice(dragIndex, 1);
    targetDir.children.splice(insertionIndex, 0, moveDir);
    moveDir.parent = targetDir;
    return true;
};
exports.isAncestor = function (superNode, subNode) {
    if (superNode.id == subNode.id)
        return true;
    if (!subNode.parent)
        return false;
    return exports.isAncestor(superNode, subNode.parent);
};
exports.getDirectory = function (id, dir) {
    console.log(id, " :", dir.id, " : ", id == dir.id);
    if (dir.id == id)
        return dir;
    // if (rootDir.children.length == 0) return null;
    for (var i = 0; i < dir.children.length; i++) {
        // let subDir = dir.children[i];
        var foundDir = exports.getDirectory(id, dir.children[i]);
        if (foundDir)
            return foundDir;
    }
};
exports.traverse = function (dir, visit) {
    visit(dir);
    dir.children.forEach(function (subDir) {
        visit(subDir);
        exports.traverse(subDir, visit);
    });
};
//# sourceMappingURL=Directory.js.map