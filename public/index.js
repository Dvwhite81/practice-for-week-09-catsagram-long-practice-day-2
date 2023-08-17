import { createMainContent } from './main.js';
import { createVoteSection } from './score.js';
import { createCommentSection } from './comments.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    document.body.appendChild(container);
};

window.onload = () => {
    initializePage();
    createMainContent();
    createVoteSection();
    createCommentSection();
};
