import "./components/PresentationCard";
import "./components/StackCard";
import "./components/CustomButton";
import "./components/AboutMeButton";
import "./components/CustomCard";
import "./components/CustomSpan";

const myStack = document.getElementById('my-stack');
const stackListSection = document.getElementById('stack-list');
const presentationCard = document.getElementById('presentation-card');
const logo = document.getElementById('logo');
const stackContainer = document.querySelector('.stack-container');
const aboutMeBtn = document.getElementById('about-me');
const aboutMeSection = document.getElementById('about-me-section');

const showStackList = () => {
    if (stackListSection.style.display = 'none') {
        presentationCard.style.display = 'none';
        stackListSection.style.display = 'block';
        setTimeout(() => {
            stackContainer.classList.add('show-list');
            stackContainer.style.margin = '0';
        }, 5);
    }
}

const showAboutMe = () => {
    if (aboutMeSection.style.display = 'none') {
        presentationCard.style.display = 'none';
        aboutMeSection.style.display = 'block';
        setTimeout(() => {
            aboutMeSection.classList.add('show-list');
            aboutMeSection.style.margin = '0';
        }, 5);
    }
}

logo.addEventListener('click', () =>{
    if (stackListSection.style.display = 'block') {
        presentationCard.style.display = 'block';
        stackListSection.style.display = 'none';
        aboutMeSection.style.display = 'none';
    }
})

aboutMeBtn.addEventListener('click', showAboutMe);
myStack.addEventListener('click', showStackList);