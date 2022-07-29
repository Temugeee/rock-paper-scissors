function getComputerChoice() {
    let choices = ['чулуу', 'даавуу', 'хайч']
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === 'чулуу') {
        switch(computerSelection) {
            case 'чулуу':
                return "Тэнцлээ!";
                break;
            case 'даавуу':
                return "Ялагдлаа! Даавуу Чулуугаа дийлдэг";
                break;
            case 'хайч':
                return 'Хожлоо! Чулуу нь Хайчийг дийлдэг';
                break;
        };
    } else if (playerSelection.toLowerCase() === 'хайч') {
        switch(computerSelection) {
            case 'чулуу':
                return "Ялагдлаа! Чулуу нь Хайчийг дийлдэг";
                break;
            case 'даавуу':
                return "Хожлоо! Хайч нь Даавууг дийлдэг";
                break;
            case 'хайч':
                return 'Тэнцлээ!';
                break;
        };
    } else if (playerSelection.toLowerCase() === 'даавуу'){
        switch(computerSelection) {
            case 'чулуу':
                return "Хожлоо! Даавуу Чулуугаа дийлдэг";
                break;
            case 'даавуу':
                return "Тэнцлээ!";
                break;
            case 'хайч':
                return 'Ялагдлаа! Хайч нь Даавуугаа дийлдэг';
                break;
        };
    }
}

function winner(a,b){
    if(a > b) console.log('5 үе тоглосны үр дүнд та хожлоо баяр хүргэе!');
    else if(a < b) console.log('5 үе тоглосны үр дүнд та хожигдлоо!');
    else console.log('5 үе тоглосны үр дүнд тэнцлээ!');
}

function game() {
    var me = 0;
    var com = 0;
    for(let i = 0; i < 5; i++) {
        let a = prompt();
        let b = getComputerChoice();
        let hariu = playRound(a,b)
        console.log(hariu);
        switch (hariu) {
            case 'Хожлоо! Даавуу Чулуугаа дийлдэг':
                me = me + 1;
                break;
            case 'Хожлоо! Хайч нь Даавууг дийлдэг':
                me = me + 1;
                break;
            case 'Хожлоо! Чулуу нь Хайчийг дийлдэг':
                me = me + 1;
                break;
            case 'Ялагдлаа! Хайч нь Даавуугаа дийлдэг':
                com = com + 1;
                break;
            case 'Ялагдлаа! Чулуу нь Хайчийг дийлдэг':
                com = com + 1;
                break;
            case 'Ялагдлаа! Даавуу Чулуугаа дийлдэг':
                com = com + 1;
                break;
            
        }
    }
    winner(me,com);
}

setTimeout(game, 10000);