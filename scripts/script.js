dropDownElement.addEventListener('change', () => {
    const oriel = document.querySelector('.oriel')
    const systemObject = systemInfo[dropDownElement.value];
    const configurationsObject = systemObject.configurations;

    try{
        resetDefault(configurationDropdown)
        populateConfigurations(configurationsObject)
        //check if system has oriel property
        if (configurationsObject.oriel){
            oriel.style.display = 'inline';
        } 
        else {
            oriel.style.display = 'none';
        }

        if (systemObject.accessibility){
            document.getElementById('unit-height').disabled = true;
        } 
        else {
            document.getElementById('unit-height').disabled = false;
        }
    } catch(e) {
        console.log(e)
    }

    // //show the minimun width for the selected system
    // document.querySelector('span').textContent = `Min. ${minSystemWidth}"`;
})

orielCheckbox.addEventListener('change', () => {   
    if (orielCheckbox.checked){
        ventHeightTextbox.disabled = false;
    }
    else {
        ventHeightTextbox.disabled = true;
    }
})

calculateButton.addEventListener('click', () => {
    const [widthClearOp, heightClearOp, area] = areaCalculation();
    console.log(area)
    if (!area){
        document.querySelector('#widthClearOpMessage').textContent = (widthClearOp < 32) ?  
        `Does not meet accessibility. Width Clear Opening: ${widthClearOp}"`:`Meets accessibility. Width Clear Opening: ${widthClearOp}"`;
         }
    else if(area > 5.7){
        document.querySelector('h2').textContent = `Area is: ${area} sqft Compliance with Egress`
        document.querySelector('#widthClearOpMessage').textContent = `Width Clear Opening: ${widthClearOp}"`
        document.querySelector('#heightClearOpMessage').textContent = `Height Clear Opening: ${heightClearOp}"`
    }
    else {
        document.querySelector('h2').textContent = `Area is: ${area} sqft NON Compliance with Egress`
        document.querySelector('#widthClearOpMessage').textContent = `Width Clear Opening: ${widthClearOp}"`
        document.querySelector('#heightClearOpMessage').textContent = `Height Clear Opening: ${heightClearOp}"`
    }
    // calculateButton.disabled = true;
    // newCalculationButton.disabled = false;
})

