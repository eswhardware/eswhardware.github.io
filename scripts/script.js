dropDownElement.addEventListener('change', () => {
    const oriel = document.querySelector('.oriel')
    const highsill = document.querySelector('.highsill')
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

        //check if system has high sill property
        if (configurationsObject.highsill){
            highsill.style.display = 'inline'
        }
        else {
            highsill.style.display = 'none';
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
    const area = areaCalculation().toPrecision(4);
    console.log(area)
    if(area > 5.7){
        document.querySelector('h2').textContent = `Area is: ${area} sqft Compliance with Egress`
    }
    else {
        document.querySelector('h2').textContent = `Area is: ${area} sqft NON Compliance with Egress`
    }
})
