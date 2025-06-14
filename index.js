function initiateCalculator() {
    const calculatorContainer = document.createElement('div')
    calculatorContainer.classList.add('calculator-container')
    document.body.appendChild(calculatorContainer)

    const digitalScreen = document.createElement('div')
    digitalScreen.classList.add('digital-screen')
    calculatorContainer.appendChild(digitalScreen)

    const calcLogo = document.createElement('span')
    calcLogo.textContent = 'TOPCALCUS®'
    calcLogo.classList.add('calc-logo')
    calculatorContainer.appendChild(calcLogo)
}
initiateCalculator()