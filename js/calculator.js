// ==================  01. Triangle Card ================
// ==================  01. Triangle Card ================
function calculateTriangleArea(){
    const base = getInputField ('triangle-base');
    const height = getInputField ('triangle-hight');
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number');
        return;
    }

    const area = 0.5* base * height;
    const areaTwoDecimal = area.toFixed(2)
    setElementInnerText('triangle-area',areaTwoDecimal )

    addToCalculationEntry(' Triangle :', areaTwoDecimal);

}

// ==================== 02. Rectangle Card ====================
// ==================== 02. Rectangle Card ====================

 function calculateRectangleArea(){
    const width = getInputField('rectangle-width');
    const length = getInputField('rectangle-length');

    if(isNaN (width) || isNaN(length)){
        alert('Please insert number');
        return;
    }
    const area = width * length;
    const areaTwoDecimal = area.toFixed(2);

    setElementInnerText('rectangle-area', areaTwoDecimal);

    addToCalculationEntry ('Rectangle', areaTwoDecimal);
    
 }

// ==================== 03. Parallelogram Card ====================
// ==================== 03. Parallelogram Card ====================

function calculateParallelogramArea(){

    console.log('hsdfsdf')

}

// Get All Input Field Function 
function getInputField(inputField){
   const inputFieldId = document.getElementById(inputField);
   const inputFieldText = inputFieldId.value;
   const value = parseFloat(inputFieldText);
   return value;
}

// Set Result on Area Element Section ( Area: 00 cm2 )

function setElementInnerText(textElementId, areaResult ){
    const element = document.getElementById(textElementId);
    element.innerText = areaResult;
}

// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create an element you want to add
 * 3. if needed add some class
 * 4. set inner HTML. it could be dynamic Template string 
 * 5. append the created element as a child of the parent
 */

function addToCalculationEntry(areaType, area){
    
    const calculateArea = document.getElementById('calculator-entry')
    const p = document.createElement('p');

    const count =calculateArea.childElementCount;
    p.classList.add('pt-4', 'font-semibold')
    p.innerHTML = `${count + 1 }. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculateArea.appendChild(p);

}