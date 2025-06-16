function initiateCalculator() {
    
    const calculatorContainer = document.createElement('div')
    calculatorContainer.classList.add('calculator-container')
    document.body.appendChild(calculatorContainer)

    const giantShadow = document.createElement('div')
    giantShadow.classList.add('giant-shadow')
    document.body.appendChild(giantShadow)
    
    const calcBorder = document.createElement('div')
    calcBorder.classList.add('calc-border')
    document.body.appendChild(calcBorder)

    const digitalScreen = document.createElement('div')
    digitalScreen.classList.add('digital-screen')
    calculatorContainer.appendChild(digitalScreen)

    const digitalScreenInnerShadow = document.createElement('div')
    digitalScreenInnerShadow.classList.add('inner-shadow')
    calculatorContainer.appendChild(digitalScreenInnerShadow)

    const calcLogo = document.createElement('span')
    calcLogo.textContent = 'TOPCALCUS®'
    calcLogo.classList.add('calc-logo')
    calculatorContainer.appendChild(calcLogo)

    const batteryContainer = document.createElement('div')
    batteryContainer.classList.add('battery')
    calculatorContainer.appendChild(batteryContainer)

    for(i = 1; i < 6; i++) {
        const batteryTick = document.createElement('div')
        if (i <= 2) {
            batteryTick.classList.add('grey-tick')
        } else {
            batteryTick.classList.add('green-tick')
        }
        batteryContainer.appendChild(batteryTick)
    }

    const keypadContainer = document.createElement('div')
    keypadContainer.classList.add('keypad-container')
    calculatorContainer.appendChild(keypadContainer)

    const circleContainer = document.createElement('div')
    circleContainer.classList.add('circles-container')
    keypadContainer.appendChild(circleContainer)

    for(i = 1; i < 8; i++) {
        const circleButton = document.createElement('button')
        circleButton.id = `circleButton${i}`
        circleButton.classList.add('circle-button')
        if (i === 1) {
            circleButton.classList.add('circle-button-red')
            circleButton.addEventListener('mousedown', () => {
            circleButton.animate([
                {transform: 'scale(1)'},
                {transform: 'scale(.8)', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 5px 1px', backgroundImage: 'linear-gradient(to bottom, rgb(102, 18, 18), rgb(143, 26, 26), rgb(196, 37, 37), rgb(218, 114, 114))'},
                {transform: 'scale(1)'}
            ], {
                duration: 150,
                easing: 'ease-in-out'
            });
        })
        } else {
            circleButton.classList.add('circle-button-black')
            circleButton.addEventListener('mousedown', () => {
            circleButton.animate([
                {transform: 'scale(1)'},
                {transform: 'scale(.8)', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 5px 1px', backgroundImage: 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(50,50,50))'},
                {transform: 'scale(1)'}
            ], {
                duration: 150,
                easing: 'ease-in-out'
            });
        })
        }
        circleContainer.appendChild(circleButton)
    }

    circleButton1.textContent = 'ON'
    circleButton2.textContent = 'MC'
    circleButton3.textContent = 'MR'
    circleButton4.textContent = 'M-'
    circleButton5.textContent = 'M+'
    circleButton6.textContent = 'GT'
    circleButton7.textContent = '±'
    circleButton7.setAttribute('style', 'font-size:20px;')

    const squareContainer = document.createElement('div')
    squareContainer.classList.add('squares-container')
    keypadContainer.appendChild(squareContainer)
    
    for(i=1;i<13;i++) {
        const squareButton = document.createElement('button')
        squareButton.classList.add('square')
        squareButton.id = `squareButton${i}`
        if (i < 10) {
            squareButton.textContent = `${i}`
        } else if (i === 10) {
            squareButton.textContent = '0'
        } else if (i === 11) {
            squareButton.textContent = '00'
            squareButton.setAttribute('style', 'display: flex; justify-content: center; align-items: center;')
        } else if (i === 12) {
            squareButton.textContent = '.'
            squareButton.setAttribute('style', 'position:')
        }
        squareContainer.appendChild(squareButton)
        squareButton.addEventListener('mousedown', () => {
            squareButton.animate([
                {transform: 'scale(1)'},
                {transform: 'scale(.8)', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 5px 1px', backgroundImage: 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(50,50,50))'},
                {transform: 'scale(1)'}
            ], {
                duration: 150,
                easing: 'ease-in-out'
            });
        })
    }

    const squareContainer2 = document.createElement('div')
    squareContainer2.classList.add('squares-container2')
    keypadContainer.appendChild(squareContainer2)

    for(i=1;i<7;i++) {
        const squareButton = document.createElement('button')
        squareButton.classList.add('square')
        squareButton.id = `squareButton${i + 12}`
        squareContainer2.appendChild(squareButton)
        if (i === 6) {
            squareButton13.setAttribute('style', 'padding-bottom:8px;')
            squareButton14.setAttribute('style', 'padding-bottom:8px;')
            squareButton15.setAttribute('style', 'font-size:15px; padding-left:8px; padding-top:3px;')
            squareButton16.setAttribute('style', 'font-size:24px;')
            squareButton17.setAttribute('style', 'font-size:26px; padding-right:3px;')
            squareButton18.setAttribute('style', 'padding-top:8px; padding-left:8px; padding-top:14px;')
        }
        squareButton.addEventListener('mousedown', () => {
            squareButton.animate([
                {transform: 'scale(1)'},
                {transform: 'scale(.8)', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 5px 1px', backgroundImage: 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(50,50,50))'},
                {transform: 'scale(1)'}
            ], {
                duration: 150,
                easing: 'ease-in-out'
            });
        })
    }

    squareButton13.textContent = '←'
    squareButton14.textContent = '→'
    squareButton15.textContent = 'DEL'
    squareButton16.textContent = '√'
    squareButton17.textContent = '%'
    squareButton18.textContent = '^'
    
    const equalsContainer = document.createElement('div')
    equalsContainer.classList.add('equals-container')
    keypadContainer.appendChild(equalsContainer)
    const equalsButton = document.createElement('button')
    equalsButton.classList.add('square')
    equalsButton.textContent = '='
    equalsContainer.appendChild(equalsButton)
    equalsButton.setAttribute('style', 'height: 127px')
    equalsButton.addEventListener('mousedown', () => {
            equalsButton.animate([
                {transform: 'scale(1)'},
                {transform: 'scale(.8)', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 5px 1px', backgroundImage: 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(50,50,50))'},
                {transform: 'scale(1)'}
            ], {
                duration: 150,
                easing: 'ease-in-out'
            });
        })

    const squareContainer3 = document.createElement('div')
    squareContainer3.classList.add('squares-container3')
    keypadContainer.appendChild(squareContainer3)
    
    for(i=1;i<5;i++) {
        const squareButton = document.createElement('button')
        squareButton.classList.add('square')
        squareButton.id = `squareButton${i + 18}`
        squareContainer3.appendChild(squareButton)
        if (i === 4) {
            squareButton19.setAttribute('style', 'padding-bottom:3px; padding-right:4px;')
            squareButton20.setAttribute('style', 'padding-bottom:5px; padding-right:4px;')
            squareButton21.setAttribute('style', 'padding-bottom:3px; padding-right:4px;')
            squareButton22.setAttribute('style', 'padding-bottom:3px; padding-right:4px;')
        }
        squareButton.addEventListener('mousedown', () => {
            squareButton.animate([
                {transform: 'scale(1)'},
                {transform: 'scale(.8)', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 5px 1px', backgroundImage: 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(0, 0, 0), rgb(0, 0, 0), rgb(50,50,50))'},
                {transform: 'scale(1)'}
            ], {
                duration: 150,
                easing: 'ease-in-out'
            });
        })
    }

    squareButton19.textContent = '-'
    squareButton20.textContent = 'x'
    squareButton21.textContent = '÷'
    squareButton22.textContent = '+'

    let ON = false

    function calculations() {
        circleButton1.addEventListener('mousedown', () => {
            ON = true
            
            const digitalScreenInput = document.createElement('div')
            digitalScreenInput.classList.add('digital-screen-input')
            digitalScreen.appendChild(digitalScreenInput)
            
            digitalScreenInput.textContent = 0
        })
    }
    calculations()
    
}
initiateCalculator()

// I want to animate stars on the edges of the screen, as well as the hue in the middle of the background changing.

/* 
CHEATSHEET

    circleButton1 = 'ON'
    circleButton2 = 'MC'
    circleButton3 = 'MR'
    circleButton4 = 'M-'
    circleButton5 = 'M+'
    circleButton6 = 'GT'
    circleButton7 = '±'

    squareButton1 = '1'
    squareButton2 = '2'
    squareButton3 = '3'
    squareButton4 = '4'
    squareButton5 = '5'
    squareButton6 = '6'
    squareButton7 = '7'
    squareButton8 = '8'
    squareButton9 = '9'
    squareButton10 = '0'
    squareButton11 = '00'
    squareButton12 = '.'
    squareButton13 = '>'
    squareButton14 = '<'
    squareButton15 = 'del'
    squareButton16 = 'square root'
    squareButton17 = '%'
    squareButton18 = 'pow'
    squareButton19 = '-'
    squareButton20 = 'x'
    squareButton21 = '/'
    squareButton22 = '+'

    equalsButton = '='

CHEATSHEET
*/