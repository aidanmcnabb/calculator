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

    function calcEntrance() {
        calculatorContainer.animate([
            {opacity: '0', transform: 'scale(.9) translateY(100px)'},
            {opacity: '1'}
        ], {
            duration: 850,
            delay: 2000,
            easing: 'ease-in-out',
            fill: 'forwards'
        })
        calcBorder.animate([
            {opacity: '0'},
            {opacity: '1'}
        ], {
            duration: 2000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }) 
    }
    calcEntrance()

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
    // All containers and added classes for style

    for(i = 1; i < 6; i++) {
        const batteryTick = document.createElement('div')
        batteryTick.id = `batteryTick${i}`
        batteryTick.classList.add('grey-tick')
        batteryContainer.appendChild(batteryTick)
    }
    // Adding battery container with battery ticks

    const keypadContainer = document.createElement('div')
    keypadContainer.classList.add('keypad-container')
    calculatorContainer.appendChild(keypadContainer)
    // Where all buttons will be located and referenced to through querySelectAll & .forEach() to populate the divs / add eventlisteners.

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
    // Loop to create circle buttons and give each a seperate id to call if I need. Styling through setAttribute & animate.

    circleButton1.textContent = 'ON'
    circleButton2.textContent = 'AC'
    circleButton3.textContent = 'M+'
    circleButton3.classList.add('m+')
    circleButton4.textContent = 'M-'
    circleButton4.classList.add('m-')
    circleButton5.textContent = 'MR'
    circleButton5.classList.add('mr')
    circleButton6.textContent = 'MC'
    circleButton6.classList.add('mc')
    circleButton7.textContent = 'GT'
    circleButton7.classList.add('gt')

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
    // The square button containers are seperated into 3 seperate containers. I could have done it with 1 but I wanted more specificity. More styling and animating.

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

    squareButton12.classList.add('decimal')

    // Square button container 2

    squareButton13.textContent = '←'
    squareButton14.textContent = '→'
    squareButton15.textContent = 'DEL'
    squareButton16.textContent = '√'
    squareButton17.textContent = '%'
    squareButton18.textContent = '^'

    squareButton13.classList.add('left')
    squareButton14.classList.add('right')
    squareButton15.classList.add('delete')
    squareButton16.classList.add('sqrt')
    squareButton17.classList.add('modulus')
    squareButton18.classList.add('pow')
    //Adding classes for querySelect later.
    
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
    //Equals button has its own seperate container.

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
    //Square container 3.

    squareButton19.textContent = '-'
    squareButton20.textContent = 'x'
    squareButton21.textContent = '÷'
    squareButton22.textContent = '+'

    squareButton19.classList.add('subtract')
    squareButton20.classList.add('multiply')
    squareButton21.classList.add('divide')
    squareButton22.classList.add('add')

    let ON = false //for niche use in a couple places. 
    const digitalScreenInput = document.createElement('div')

    function backgroundBatteryAni() {
        giantShadow.animate([
            {boxShadow: 'inset 0px 0px 600px 300px'}
        ], {
            duration: 3050,
            easing: 'ease-in-out',
            fill: 'forwards'
        })
        
        //battery turns yellow and then turns green once its ready
    }

    circleButton1.addEventListener('mousedown', () => {
        digitalScreenInput.classList.add('digital-screen-input')
        digitalScreen.appendChild(digitalScreenInput)
        digitalScreenInput.textContent = ''
        backgroundBatteryAni()
        setTimeout(() => {
            digitalScreenInput.textContent = '***********'
            setTimeout(() => {
                digitalScreenInput.textContent = ''
                setTimeout(() => {
                    digitalScreenInput.textContent = '***********'
                    setTimeout(() => {
                        digitalScreenInput.textContent = ''
                    },100)
                },100)
            },100)
        },150)
        setTimeout(() => {
            digitalScreenInput.textContent = '**LOADING**'
            batteryTick5.classList.add('yellow-tick')
            setTimeout(() => {
                digitalScreenInput.textContent = ''
                batteryTick4.classList.add('yellow-tick')
                setTimeout(() => {
                    digitalScreenInput.textContent = '**LOADING**'
                    batteryTick3.classList.add('yellow-tick')
                    setTimeout(() => {
                        batteryTick3.classList.remove('yellow-tick')
                        batteryTick4.classList.remove('yellow-tick')
                        batteryTick5.classList.remove('yellow-tick')
                        
                        batteryTick3.classList.add('green-tick')
                        batteryTick4.classList.add('green-tick')
                        batteryTick5.classList.add('green-tick')

                        digitalScreenInput.textContent = ''
                        digitalScreenInput.setAttribute('style', 'color:rgba(37, 37, 37, 0.64);')
                        ON = true
                        calculatorLogic()
                    },700)
                },700)
            },700)
        },550)
    }, {once: true})
    //Calculator animation for turning on.

    function calculatorLogic() {

        let stringActive = false //if an active string is being typed
        let resultFilled = false //if result is filled from last calculation
        let operationInProgress = false //if operation is in progress 

        let a = undefined
        let b = undefined
        
        circleButton2.addEventListener('mousedown', () => {
            digitalScreenInput.textContent = ''
            stringActive = false
            memoryMode = false
            a = undefined
            b = undefined
            digitalScreenOperator.textContent = ''
            memText.textContent = ''
            memText2.textContent = ''
            memText3.textContent = ''
            result = undefined
            notation = false
            operationInProgress = false
            resultFilled = false
            currentOperator = ''
        })

        //AC button

        function negativePossible() { //even if a current operation is in progress, negative is possible
            return currentOperator === 'sqrt' || currentOperator === 'modulus' || currentOperator === 'pow' || currentOperator === 'subtract' || currentOperator === 'multiply' || currentOperator === 'divide' || currentOperator === 'add'
        }

        const squareButtonsInput = squareContainer.querySelectorAll('.square')
        squareButtonsInput.forEach(square => {
            square.addEventListener('mousedown', () => {
            if (resultFilled) { //if result from last operation is filled, temporarily erase input field on next number button press
                if (negativePossible()) {} else { // preventing negative sign from being erased on number button press if result was already filled
                        digitalScreenInput.textContent = ''
                    }
                resultFilled = false //result no longer filled
            }
            if (square.classList.contains('decimal')) {
                if (!digitalScreenInput.textContent.includes('.')) {
                    digitalScreenInput.textContent += square.textContent
                } 
            } else {digitalScreenInput.textContent += square.textContent}
            if (operationInProgress) { 
                b = digitalScreenInput.textContent
            }
            stringActive = true //string is now active on number button press
            memText.textContent = ''
            memText2.textContent = ''
            memText3.textContent = ''
            })
        })

        let tempSlice = undefined

        const deleteButton = squareContainer2.querySelector('.delete')
        deleteButton.addEventListener('mousedown', () => {
            if (stringActive) {
                if (digitalScreenInput.textContent.length > 0) {
                    tempSlice = digitalScreenInput.textContent.slice(0, -1)
                    digitalScreenInput.textContent = tempSlice
                    b = digitalScreenInput.textContent
                    console.log(tempSlice)
                }
            }
        })

        let result = undefined
        let currentOperator = ''

        function add(a, b) {
            a = Number(a)
            return result = a + b
        }
        function subtract(a, b) {
            return result = a - b
        }
        function multiply(a, b) {
            return result = a * b
        }
        function divide(a, b) {
            return result = a / b
        }
        function sqrt(a) {
            return result = Math.sqrt(a)
        }
        function modulus(a, b) {
            return result = a % b
        }
        function pow(a, pow) {
            return result = a ** pow
        }

        function operationCallback(callback) {
            callback()
        }
        //calculations and callback function to call them

        function digitalInputReset() {
            stringActive = false
            a = digitalScreenInput.textContent
            digitalScreenInput.textContent = ''
            if (currentOperator === 'sqrt') { // sqrt doesn't need operationInProgress, instant evaluation.
                operationInProgress = false
            } else {
                operationInProgress = true
            }
        }

        function digitalMemInputReset() {
            memText.textContent = ''
            memText2.textContent = ''
            memText3.textContent = ''
            memoryMode = false
        }

        const squareOperatorsInput1 = keypadContainer.querySelectorAll('.square')
        squareOperatorsInput1.forEach(square => {
            if (square.classList.contains('sqrt')) {
                square.addEventListener('mousedown', () => {
                    if ((stringActive && currentOperator === '') || (memoryMode && currentOperator === '')) { //if string is active & there is no operator, prepare for calculation. prevents premptive operation / multiple operators.
                        currentOperator = 'sqrt' //sends current operator to evaluation
                        digitalInputReset()
                        evaluate()
                        digitalMemInputReset()
                    }
                })
            } else if (square.classList.contains('modulus')) {
                square.addEventListener('mousedown', () => {
                    if ((stringActive && currentOperator === '') || (memoryMode && currentOperator === '')) {
                        currentOperator = 'modulus'
                        digitalInputReset()
                        visualOperator()
                        digitalMemInputReset()
                    }
                })
            } else if (square.classList.contains('pow')) {
                square.addEventListener('mousedown', () => {
                    if ((stringActive && currentOperator === '') || (memoryMode && currentOperator === '')) {
                        currentOperator = 'pow'
                        digitalInputReset()
                        visualOperator()
                        digitalMemInputReset()
                    }
                })
            } else if (square.classList.contains('multiply')) {
                square.addEventListener('mousedown', () => {
                    if ((stringActive && currentOperator === '') || (memoryMode && currentOperator === '')) {
                        currentOperator = 'multiply'
                        digitalInputReset()
                        visualOperator()
                        digitalMemInputReset()
                    }
                })
            } else if (square.classList.contains('subtract')) {
                square.addEventListener('mousedown', () => {
                    if ((ON && digitalScreenInput.textContent === '') || negativePossible()) { //prevents premptive negative / allows initial negative & checks if negative is possible
                            if (!digitalScreenInput.textContent.includes('-')) { //prevents multiple negative symbols
                                if (digitalScreenInput.textContent.length > 0) {} else {
                                    digitalScreenInput.textContent += '-'
                                    memText.textContent = ''
                                    memText2.textContent = ''
                                    memText3.textContent = ''
                                }
                            }
                        }
                    if ((stringActive && currentOperator === '') || (memoryMode && currentOperator === '')) {
                        currentOperator = 'subtract'
                        digitalInputReset()
                        visualOperator()
                        digitalMemInputReset()
                    }
                })
            } else if (square.classList.contains('add')) {
                square.addEventListener('mousedown', () => {
                    if ((stringActive && currentOperator === '') || (memoryMode && currentOperator === '')) {
                        currentOperator = 'add'
                        digitalInputReset()
                        visualOperator()
                        digitalMemInputReset()
                    }
                })
            } else if (square.classList.contains('divide')) {
                square.addEventListener('mousedown', () => {
                    if ((stringActive && currentOperator === '') || (memoryMode && currentOperator === '')) {
                        currentOperator = 'divide'
                        digitalInputReset()
                        visualOperator()
                        digitalMemInputReset()
                    }
                })
            }
        })

        const digitalScreenOperator = document.createElement('div')
        digitalScreenOperator.classList.add('visual-operator')
        digitalScreen.appendChild(digitalScreenOperator)

        function visualOperator() {
            if (currentOperator === 'sqrt') {
                digitalScreenOperator.textContent = '√'
            } else if (currentOperator === 'modulus') {
                digitalScreenOperator.textContent = '%'
            } else if (currentOperator === 'pow') {
                digitalScreenOperator.textContent = 'xˣ'
            } else if (currentOperator === 'multiply') {
                digitalScreenOperator.textContent = 'x'
            } else if (currentOperator === 'subtract') {
                digitalScreenOperator.textContent = '-'
            } else if (currentOperator === 'add') {
                digitalScreenOperator.textContent = '+'
            } else if (currentOperator === 'divide') {
                digitalScreenOperator.textContent = '÷'
            }
        }
        //keypad operator logic 

        function evaluate() {
            stringActive = true
            if (currentOperator === 'sqrt') {
                operationCallback(function() {sqrt(a)})
            } else if (currentOperator === 'modulus') {
                b = Number(b)
                operationCallback(function() {modulus(a, b)})
            } else if (currentOperator === 'pow') {
                b = Number(b)
                operationCallback(function() {pow(a, b)})
            } else if (currentOperator === 'multiply') {
                b = Number(b)
                operationCallback(function() {multiply(a, b)})
            } else if (currentOperator === 'subtract') {
                b = Number(b)
                operationCallback(function() {subtract(a, b)})
            } else if (currentOperator === 'add') {
                b = Number(b)
                operationCallback(function() {add(a, b)})
            } else if (currentOperator === 'divide') {
                b = Number(b)
                operationCallback(function() {divide(a, b)})
            }
            reduceResult() //deals with notations, floats, NaN
            digitalScreenInput.textContent = result
            resultFilled = true
            operationInProgress = false
            currentOperator = '' //reset psuedo switch statement
            digitalScreenOperator.textContent = ''
            memText2.textContent = ''
            b = 0
        }

        let notation = false

        function isFloat(num) {
            return num % 1 !== 0;
        }

        function reduceResult() {
            notation = false
            if (isFloat(result)) {
                result = result.toFixed(2)
            }
            if (result > 999999999 || result < -999999999) {
                if (isFloat(result)) {
                    result = result.toString()
                    result = result.slice(0, -2) //remove decimals points for toExponential()
                    result = Number(result)
                }
                result = result.toExponential(2) //notation
                notation = true
            }
            if (!notation) {
                result = Number(result)
            }
            if (result === 'NaN' || result !== result) {
                result = 'Infinity?'
            }
            console.log(result)
        }

        equalsButton.addEventListener('mousedown', () => {
            if (currentOperator === '') {} else {
                evaluate()
            }
        })

        let calcMemoryArray = []
        let memoryMode = false
        let grandTotal = 0
        
        const memText = document.createElement('div')
        memText.classList.add('mem-text')
        digitalScreen.appendChild(memText)

        const memText2 = document.createElement('div')
        memText2.classList.add('mem-text2')
        digitalScreen.appendChild(memText2)

        const memText3 = document.createElement('div')
        memText3.classList.add('mem-text3')
        digitalScreen.appendChild(memText3)

        const circleButtonOperations = keypadContainer.querySelectorAll('.circle-button')
        circleButtonOperations.forEach(circle => {
            if (circle.classList.contains('m+')) {
                circle.addEventListener('mousedown', () => {
                    if (stringActive && currentOperator === '') {
                        calcMemoryArray.push(digitalScreenInput.textContent)
                        memText.textContent = `MEM${calcMemoryArray.length} Filled`
                        console.log(calcMemoryArray)
                    } else if (!stringActive && currentOperator === '') {
                        memText2.textContent = 'Input Empty'
                    } else {
                        memText2.textContent = 'Finish Operation'
                    }
                })
            } else if (circle.classList.contains('m-')) {
                circle.addEventListener('mousedown', () => {
                    if (currentOperator === '' && !operationInProgress) {
                        if (memoryMode) {
                            memDelete()
                        } else {} 
                    }
                })
            } else if (circle.classList.contains('mr')) {
                circle.addEventListener('mousedown', () => {
                    if (currentOperator === '' && !operationInProgress) {
                        if (!memoryMode && calcMemoryArray.length > 0) {
                            enterMemoryMode()
                        }
                    } else {memText2.textContent = 'Finish Operation'}
                })
            } else if (circle.classList.contains('mc')) {
                circle.addEventListener('mousedown', () => {
                    if (currentOperator === '' && !operationInProgress) {
                        if (calcMemoryArray.length > 0) {
                            calcMemoryArray = []
                            memText.textContent = 'MEM Cleared'
                            memText2.textContent = ''
                            memText3.textContent = ''
                        } else {
                            memText.textContent = 'MEM Empty'
                        }
                    }
                })
            } else if (circle.classList.contains('gt')) {
                circle.addEventListener('mousedown', () => {
                    if (currentOperator === '' && !operationInProgress) {
                        digitalMemInputReset()
                        if (calcMemoryArray.length > 0) {
                            grandTotal = calcMemoryArray.reduce((total, current) => {
                            total = Number(total)
                            current = Number(current)
                            return total + current;
                            }, 0)
                        digitalScreenInput.textContent = grandTotal
                        memText.textContent = 'Grand Total'
                        stringActive = true
                        } else {
                            memText.textContent = 'MEM Empty'
                        }
                    }
                })
            }
        })

        let calcMemoryArrayCounter = 0
        let firstArrow = true

        const arrowKeys = squareContainer2.querySelectorAll('.square')
        arrowKeys.forEach(square => {
            if (square.classList.contains('square')) {
                if (square.classList.contains('left')) {
                    square.addEventListener('mousedown', () => {
                        if (memoryMode && calcMemoryArrayCounter > 0) {
                            calcMemoryArrayCounter--
                            memNav()
                        } else if (memoryMode && calcMemoryArray.length === 0) {
                            memText2.textContent = 'MEM Empty'
                        }
                    })
                } else if (square.classList.contains('right')) {
                    square.addEventListener('mousedown', () => {
                        if (memoryMode && calcMemoryArrayCounter < calcMemoryArray.length - 1) {
                            calcMemoryArrayCounter++
                            memNav()
                        } else if (memoryMode && calcMemoryArray.length === 0) {
                            memText2.textContent = 'MEM Empty'
                        }
                    })
                }
            }
        })

        function enterMemoryMode() {
            memoryMode = true
            firstArrow = true
            memText2.textContent = 'MEM Mode'
            memText3.textContent = 'Use Arrows'
            calcMemoryArrayCounter = 0
            memNav()
        }

        function memNav() {
            memText.textContent = `MEM SLOT ${(calcMemoryArray.indexOf(calcMemoryArray[calcMemoryArrayCounter])) + 1}`
            digitalScreenInput.textContent = `${calcMemoryArray[calcMemoryArrayCounter]}`
        }

        function memDelete() {
            memText3.textContent = `SLOT ${(calcMemoryArray.indexOf(calcMemoryArray[calcMemoryArrayCounter])) + 1} Erased`
            if (calcMemoryArrayCounter === 0) {
                calcMemoryArray.splice(calcMemoryArrayCounter, 1)
            } else {
                calcMemoryArray.splice(calcMemoryArrayCounter, 1)
                calcMemoryArrayCounter--
            }
            if (calcMemoryArray.length > 0) {
                memText.textContent = `MEM SLOT ${(calcMemoryArray.indexOf(calcMemoryArray[calcMemoryArrayCounter])) + 1}`
                digitalScreenInput.textContent = `${calcMemoryArray[calcMemoryArrayCounter]}`
                console.log(calcMemoryArray)
            } else {
                memText.textContent = 'MEM Empty'
                memText2.textContent = ''
            }
            
        }

    }
}
initiateCalculator()

/*
if (firstArrow) {
    calcMemoryArrayCounter = 0
}
firstArrow = false
*/

//if two memory slots are the same value they duplicate index

//I want to animate stars on the edges of the screen, as well as the hue in the middle of the background changing.

//add keyboard support