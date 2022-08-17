class Mindnode {
    
    constructor (parent) {
        this.parent;
        this.children = []; // Holds this node's child nodes.
        this.mainText = "";
        this.relatedLinks = []; // Holds strings. Each is a related url for this node.

        this.x = 0;
        this.y = 0;
        
    }
}