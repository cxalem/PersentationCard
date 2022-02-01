import "./components/PresentationCard";
import "./components/StackCard";
import "./components/CustomButton";
import "./components/AboutMeButton";

const myStack = document.getElementById('my-stack');
const stackList = document.getElementById('stack-list');
const presentationCard = document.getElementById('presentation-card');
const logo = document.getElementById('logo');

const showStackList = () => {
    if (stackList.style.display = 'none') {
        presentationCard.style.display = 'none';
        stackList.style.display = 'grid';
    }
}

logo.addEventListener('click', () =>{
    if (stackList.style.display = 'grid') {
        presentationCard.style.display = 'block';
        stackList.style.display = 'none';
    }
})

myStack.addEventListener('click', showStackList);