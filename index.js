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

    const circleButtonsContainer = document.createElement('div')
    circleButtonsContainer.classList.add('circles')
    document.body.appendChild(circleButtonsContainer)
/*
    for(i = 1; i < 8; i++) {

    }
*/
}
initiateCalculator()