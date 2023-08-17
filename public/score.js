export const createVoteSection = () => {
    const container = document.querySelector(".container");

    const voteSection = document.createElement("div");
    voteSection.id = "vote-section";
    voteSection.classList.add("vote-section");

    const scoreSection = createScoreSection();
    const buttonDiv = createButtonSection();

    voteSection.append(scoreSection);
    voteSection.append(buttonDiv);

    container.append(voteSection);
};

const createScoreSection = () => {
    const scoreSection = document.createElement("div");
    scoreSection.id = "score-section";
    scoreSection.classList.add("score-section");

    const scoreText = document.createElement("span");
    scoreText.id = "score-text";
    scoreText.innerText = "Popularity Score: ";

    const scoreSpan = document.createElement("span");
    scoreSpan.id = "score-span";
    scoreSpan.innerText = "0";

    scoreSection.append(scoreText);
    scoreSection.append(scoreSpan);

    return scoreSection;
};

const createButtonSection = () => {
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("div");

    const upVoteBtn = document.createElement("button");
    upVoteBtn.id = "upvote-btn";
    upVoteBtn.classList.add("btn");
    upVoteBtn.innerText = "Upvote";

    const downVoteBtn = document.createElement("button");
    downVoteBtn.id = "downvote-btn";
    downVoteBtn.classList.add("btn");
    downVoteBtn.innerText = "Downvote";

    buttonDiv.append(upVoteBtn);
    buttonDiv.append(downVoteBtn);

    upVoteBtn.addEventListener("click", changeScore);
    downVoteBtn.addEventListener("click", changeScore);

    return buttonDiv;
};

const changeScore = (event) => {
    const scoreSpan = document.getElementById("score-span");
    let currentScore = scoreSpan.innerText;

    const upVoteBtn = document.getElementById("upvote-btn");
    const downVoteBtn = document.getElementById("downvote-btn");

    if (event.target === upVoteBtn) {
        currentScore = parseInt(currentScore) + 1;
    } else if (event.target === downVoteBtn) {
        currentScore = parseInt(currentScore) - 1;
    }

    setNewScore(currentScore);
};

const setNewScore = (score) => {
    const scoreSpan = document.getElementById("score-span");
    scoreSpan.innerText = score;
};

export const resetScore = () => {
    setNewScore(0);
}
