
const input = document.querySelector('.game-text');
const imageBox = document.querySelector('.game-raw-wrapper');
const techImg = document.querySelector('.game-img');
const techLine = document.querySelector('.tech-list');

const techBlock = `
    
`


let techniques = [];

const techList = {
    1: {
        name: 'Raikiri',
        tech: [68, 86, 70, 32], //d, v, f (Raikiri)
        img: 'https://jut.su/uploads/posts/2012-01/1326558182_chidori.jpg'
    },
    2: {
        name: 'Dragon flame',
        tech: [69, 65, 86, 88, 32], // e, a, v, x (Dragon Flame)
        img: 'https://jut.su/uploads/posts/2012-04/1333274203_simple-dragon-flame.jpg' 
    },
    3: {
        name: 'Dragon Ball',
        tech: [82, 86, 69, 90, 81, 83, 88, 32], // r, v, e, z, q, s, x (Dragon Ball)
        img: 'https://jut.su/uploads/posts/2012-01/1326457761_untitled_000009.jpeg'
    },
    4: {
        name: 'Summoning Jutsu',
        tech: [82, 81, 90, 70, 87, 32], // r, q, z, f, w
        img: 'https://jut.su/uploads/posts/2012-01/1326723521_frog.jpg'
    }
}

const handTechSound = new Audio();
const createTechSound = new Audio();
handTechSound.src = 'audio/hand-seal.wav';
createTechSound.src = 'audio/seal-done.wav'



function createTechnique(){
    const entries = Object.entries(techList);
    console.log(entries);
    entries.forEach(item => {
        console.log(item[1].tech);
        if(JSON.stringify(techniques) === JSON.stringify(item[1].tech)){
            techImg.src = item[1].img
        } else {console.log('no');}
    })
    
}

document.addEventListener('keydown', (e) => {
    const key = e.keyCode;
    console.log(key);

    techniquesArr = techniques.push(key);
    
    switch(key){
        case 81: 
            input.innerHTML = 'I(Pig)';
            imageBox.style.left = '0px';
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;
        case 87:
            input.innerHTML = 'Hitsuji(Sheep)';
            imageBox.style.left = '-150px';
            
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;
        case 69:
            input.innerHTML = 'Mi(Snake)';
            imageBox.style.left = '-300px';
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;
        case 82:
            input.innerHTML = 'Inu(Dog)';
            imageBox.style.left = '-450px';
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;


        case 65:
            input.innerHTML = 'Tatsu(Dragon)';
            imageBox.style.left = '-600px';
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;
        case 83:
            input.innerHTML = 'Uma(Horse)';
            imageBox.style.left = '-750px';
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;
        case 68:
            input.innerHTML = 'Ushi(Ox)';
            imageBox.style.left = '-900px';
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;
        case 70:
            input.innerHTML = 'Saru(Monkey)';
            imageBox.style.left = '-1050px';
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;


        case 90:
            input.innerHTML = 'Tori(Bird)';
            imageBox.style.left = '-1200px';
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;
        case 88:
            input.innerHTML = 'Tora(Tiger)';
            imageBox.style.left = '-1350px';
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;
        case 67:
            input.innerHTML = 'Ne(Rat)';
            imageBox.style.left = '-1500px';
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;
        case 86:
            input.innerHTML = 'U(Rabbit)';
            imageBox.style.left = '-1650px';
            handTechSound.currentTime = 0;
            handTechSound.play();
            break;


        case 32:
            createTechSound.play();
            createTechnique();
            return techniques = [];
            
    }
})