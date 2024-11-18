function rollDice(){
    const img1Tag = document.querySelector('.dice .img1');
    const img2Tag = document.querySelector('.dice .img2');
    const h1Tag = document.querySelector('.container h1')

    let randomNumber1 = Math.floor(Math.random()*6) + 1
    console.log(randomNumber1);

    let randomNumber2 = Math.floor(Math.random()*6) + 1
    console.log(randomNumber2);

    let text = "It's a Draw!";
    if(randomNumber1 > randomNumber2){
        text = 'Player 1 Wins!';
    }
    else if (randomNumber1 < randomNumber2){
        text = 'Player 2 Wins!';
    }

    let src1 = `images/dice${randomNumber1}.png`;
    let src2 = `images/dice${randomNumber2}.png`;

    img1Tag.setAttribute('src',src1);
    img2Tag.setAttribute('src',src2);

    h1Tag.textContent = text;
} 