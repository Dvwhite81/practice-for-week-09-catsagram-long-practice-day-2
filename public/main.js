import { resetScore } from "./score.js";
import { resetComments } from "./comments.js";

export const createMainContent = () => {
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    const img = document.createElement("img");
    img.id = "main-img";

    const newImageBtn = createNewImageButton();

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);
    container.append(newImageBtn);

    fetchImage();
};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;

        kittenImg.addEventListener("load", () => {
            resetScore();
            resetComments();
        });
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};

const createNewImageButton = () => {
    const newBtn = document.createElement("button");
    newBtn.id = "new-image-btn";
    newBtn.classList.add("btn");
    newBtn.innerText = "New Image";

    newBtn.addEventListener("click", fetchImage);

    return newBtn;
};
