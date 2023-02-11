const heroColors = [
  '#8a2be2',
  '#6f00ff',
  '#fff0f5',
  '#6a5acd',
  '#6a5acd',
  '#4169e1',
  '#03BFFF',
  '#daa520',
  '#e97451',
  '#f0e130',
  '#9acd32',
  '#32cd32',
  '#008080'
];

let i = 0;
setInterval(() => {
    if (i > heroColors.length) {
        i = 0;
    }
    document.querySelector('.hero-text').style.color = heroColors[i++];
}, 1000);


const skills = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png",
        text: 'Adobe Photoshop'
    }, 
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png',
        text: 'Adobe Illustrator'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/2101px-Adobe_Photoshop_Lightroom_CC_logo.svg.png',
        text: 'Adobe Lightroom'   
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png',
        text: 'HTML'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
        text: 'CSS'
    }, 
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        text: "JavaScript"
    }
];

j = 0;
const skillTxt = document.getElementById('skill-altxt');
skillTxt.innerHTML = `<img src="${skills[0].img}" /> ${skills[0].text}`;
setInterval(() => {
    if (j > skills.length) {
        j = 0;
    }

    let skill = skills[j++];
    skillTxt.innerHTML = `<img src="${skill.img}" /> ${skill.text}`;
}, 5000);
