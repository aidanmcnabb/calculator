function initiateCalculator() {
    
    const calculatorContainer = document.createElement('div')
    calculatorContainer.classList.add('calculator-container')
    document.body.appendChild(calculatorContainer)

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
        if (i === 1) {
            circleButton.classList.add('circle-button-red')
        } else {
            circleButton.classList.add('circle-button-black')
        }
        circleButton.id = `circleButton${i}`
        circleContainer.appendChild(circleButton)
    }

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
    }

}
initiateCalculator()