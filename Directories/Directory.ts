export interface DirectorySchema {
    id?: string,
    name: string;
    parent: string;
    children: string[];
    itemID: string;
}

export interface Directory {
    id?: string,
    name: string;
    parent: Directory;
    children: Directory[];
    itemID: string;
    isOpen?: boolean;
}

export enum ROOT_NAME {
    IMAGE,
    LOCATION,
}

import {DIRECTORY_EVENT_NAME} from "./Names";
import {DIRECTORY_EVENT_TYPE} from "./Types";

export {
    DIRECTORY_EVENT_NAME,
    DIRECTORY_EVENT_TYPE,
}

export const moveDirectory = (moveDir: Directory, targetDir: Directory) => {
    let insertionIndex = 0;
    if (targetDir.itemID) {
        insertionIndex = targetDir.parent.children.findIndex(node => {
            return node.id == targetDir.id;
        }) + 1;
        targetDir = targetDir.parent;
    }
    if (isAncestor(moveDir, targetDir)) {
        return false;
    };

    let moveParent = moveDir.parent;
    let dragIndex = moveParent.children.findIndex((dropNode: Directory) => {
        return dropNode.id == moveDir.id;
    });
    moveParent.children.splice(dragIndex, 1);
    targetDir.children.splice(insertionIndex, 0, moveDir);
    moveDir.parent = targetDir;
    return true;
}
export const isAncestor = (superNode: Directory, subNode: Directory): boolean => {
    if (superNode.id == subNode.id) return true;
    if (!subNode.parent) return false;
    return isAncestor(superNode, subNode.parent);
}

export const getDirectory = (id: string, dir: Directory): Directory => {
    if (dir.id == id) return dir;
    for (let i = 0; i < dir.children.length; i++) {
        let foundDir = getDirectory(id, dir.children[i]);
        if (foundDir) return foundDir;
    }
}
export const traverse = (dir: Directory, visit: (dir: Directory) => void) => {
    visit(dir);
    dir.children.forEach(subDir => {
        traverse(subDir, visit);
    })
}
export const deleteDirectory = (dir: Directory) => {
    let parent = dir.parent;
    dir.parent = null;
    let childIndex = parent.children.findIndex((subDir: Directory) => {
        if (dir.id == subDir.id) return true;
    });
    parent.children.splice(childIndex, 1);
}