const list = ["paper.png", "scissors.png", "rock.png"]
const paper = document.getElementById ('paper')
const scissors = document.getElementById ('scissors')
const rock = document.getElementById ('rock')

const computerChoice = document.getElementById('computer-choice')
const resultDiv = document.querySelector('#result')

paper.addEventListener('click', makeYourChoice)
scissors.addEventListener('click', makeYourChoice)
rock.addEventListener('click', makeYourChoice)

function makeYourChoice() {
    const myDecision = this.dataset.id
    const computerDecision = make_a_random_choice()
    let result = ''
    if(myDecision == computerDecision) {
        result = 'Try Again!'
    }
    else if(myDecision == 0 && computerDecision == 1) {
        result = "You lose! Scissors cut paper"
    }

    else if(myDecision == 0 && computerDecision == 2) {
        result = "You win! Bend the paper stone"
    }

    else if(myDecision == 1 && computerDecision == 0) {
        result = "You win!"
    }

    else if(myDecision == 1 && computerDecision == 2) {
        result = "You lose!"
    }

    else if(myDecision == 2 && computerDecision == 0) {
        result = "You lose!"
    }

    else {
        result = "You win!"
    }
    resultDiv.innerText = result 
}

function make_a_random_choice() {
   const number = Math.round(Math.random()*2)
   computerChoice.src = `./images/${list[number]}`
   return number 
}
