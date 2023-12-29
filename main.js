var Computer_choice = document.getElementById('Computer_choice')
var Your_choice = document.getElementById('Your_choice')
const Result = document.getElementById('Result')
const allChoice = ['Rock', 'Paper', 'Scissors'];

const userPossibleChoice = document.querySelectorAll("button")


window.addEventListener("load", () => {
    Swal.fire({
        title: "Questo è un gioco di sasso, carta, forbici, Mama Ghazal Mi annoiavo quindi ho fatto un gioco",
        showClass: {
            popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
        },
        hideClass: {
            popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
        }
    });
});


const loseBox = () => {
    Swal.fire({
        title: "👨‍🦲 !",
        text: "hai perso!",
        icon: "error"
    });

}

const winBox = () => {
    Swal.fire({
        title: "Buon lavoro !",
        text: "Hai vinto, mamma Ghazal !",
        icon: "success"
    });
}


userPossibleChoice.forEach(psc => psc.addEventListener('click', (e) => {
    Your_choice.innerHTML = e.target.id
    randomFunc()
    //console.log({ yourChoise: Your_choice.innerHTML, ComputerChoice: Computer_choice.innerHTML })
    loserOrWinner()
}
))



const randomFunc = () => {
    let randomIndex = Math.floor(Math.random() * allChoice.length);
    let randomValue = allChoice[randomIndex];
    Computer_choice.innerHTML = randomValue
}


const loserOrWinner = () => {
    if (Your_choice.innerHTML === Computer_choice.innerHTML) {
        Result.innerHTML = 'Sei uguale, mamma !'
    }

    if (Your_choice.innerHTML === 'Rock' && Computer_choice.innerHTML === 'Paper') {
        Result.innerHTML = 'Hai perso, mamma Ghazal !'
        loseBox()

    }

    if (Your_choice.innerHTML === 'Rock' && Computer_choice.innerHTML === 'Scissors') {
        Result.innerHTML = 'Hai vinto, mamma Ghazal  !'
        winBox()
    }

    if (Your_choice.innerHTML === 'Paper' && Computer_choice.innerHTML === 'Rock') {
        Result.innerHTML = 'Hai vinto, mamma Ghazal  !'
        winBox()
    }
    if (Your_choice.innerHTML === 'Scissors' && Computer_choice.innerHTML === 'Rock') {
        Result.innerHTML = 'Hai perso, mamma Ghazal  !'
        loseBox()
    }
    if (Your_choice.innerHTML === 'Paper' && Computer_choice.innerHTML === 'Scissors') {
        Result.innerHTML = 'Hai perso, mamma Ghazal  !'
        loseBox()
    }

}