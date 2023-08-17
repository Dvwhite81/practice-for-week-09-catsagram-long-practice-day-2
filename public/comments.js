export const createCommentSection = () => {
    const container = document.querySelector(".container");

    const addCommentForm = createAddCommentForm();
    const commentsMadeSection = createCommentsMadeSection();

    container.append(addCommentForm);
    container.append(commentsMadeSection);
};

export const resetComments = () => {
    const commentsMadeSection = document.getElementById("comments-made-section");
    const comments = commentsMadeSection.children;
    for (let comment of comments) {
        comment.remove();
    }
};

const createAddCommentForm = () => {
    const form = document.createElement("form");
    form.classList.add("form");

    const input = createCommentInput();
    const submitBtn = createCommentSubmitBtn();

    form.append(input);
    form.append(submitBtn);

    return form;
};

const createCommentsMadeSection = () => {
    const commentsMadeSection = document.createElement("div");
    commentsMadeSection.id = "comments-made-section";

    return commentsMadeSection;
};

const createCommentInput = () => {
    const inputContainer = document.createElement("div");
    inputContainer.className = "input-container";

    const label = document.createElement("label");
    label.setAttribute("for", "comment-input");
    label.innerText = "Comment: ";

    const input = document.createElement("input");
    input.id = "comment-input";
    input.name = "comment-input";
    input.placeholder = "Add a comment...";
    input.required = true;

    inputContainer.append(label);
    inputContainer.append(input);

    return inputContainer;
};

const createCommentSubmitBtn = () => {
    const btn = document.createElement("button");
    btn.id = "comment-submit";
    btn.type = "submit";
    btn.innerText = "Submit";

    btn.addEventListener("click", addComment);

    return btn;
};


const addComment = (event) => {
    event.preventDefault();

    const input = document.getElementById("comment-input");
    const newComment = input.value;

    makeNewComment(newComment);
    input.value = "";
};

const makeNewComment = (comment) => {
    const newCommentDiv = document.createElement("div");
    newCommentDiv.className = "new-comment-div";

    const commentText = document.createElement("p");
    commentText.innerText = comment;

    const deleteBtn = document.createElement("button");
    deleteBtn.id = "delete-btn";
    deleteBtn.classList.add("btn");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", event => {
        newCommentDiv.remove();
    });

    newCommentDiv.append(commentText);
    newCommentDiv.append(deleteBtn);

    const commentsMadeSection = document.getElementById("comments-made-section");
    commentsMadeSection.append(newCommentDiv);
};
