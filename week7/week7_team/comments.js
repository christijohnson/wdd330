// commentModel code
class commentModel {
    // Build the constructor
    constructor (hikeName, comment) {
        this.name = hikeName;
        this.date = new Date();
        this.content = comment;
      }
    // getComments code
    getComments() {
        return this.comment;
    }
    // addComment code
    addComments(comment) {
        this.content = comment;
    }
}

// writeComments to LS code
function writeComments(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

// readComments from LS code
function readComments(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

// Creating a comment constant for use in the Comments class
const commentUL = `
<div class="addComment">
    <h2>Add a Comment</h2>
    <input type="text" id="commentEntry" />
    <button id="commentSubmit">Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"></ul>
`;

// Render the comment list


// Create the Comments class
class Comments {
    // define the constructor

    // addSubmitListener
    
    // showCommentList
    
}

export default Comments;