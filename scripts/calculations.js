function areaCalculation(){
    // const dropDownElement = document.getElementById('sistemas');
    const systemObject = systemInfo[dropDownElement.value];
    console.log(systemObject)
    const width = document.getElementById('unit-width').value;
    const height = document.getElementById('unit-height').value;
    const ventHeight = ventHeightTextbox.value;
    const configuration = systemObject.configurations[configurationDropdown.value];
    console.log(configuration)
    const widthClearOp = (width/configuration.widthDivider) - configuration.widthDiscount;
    const heightClearOp = (height/configuration.heightDivider) - configuration.heightDiscount;
    let egressArea = 0;

    if(orielCheckbox.checked && configurationDropdown.value==='standardSill'){
        egressArea = (widthClearOp * (ventHeight - systemObject.configurations.oriel.sSillDiscount))/144;
        console.log(widthClearOp)
        console.log(ventHeight - systemObject.configurations.oriel.sSillDiscount)
    } else if (orielCheckbox.checked && configurationDropdown.value==='highSill'){
        egressArea = (widthClearOp * (ventHeight - systemObject.configurations.oriel.hSillDiscount))/144;
        console.log(widthClearOp)
        console.log(ventHeight - systemObject.configurations.oriel.hSillDiscount)

    }
    else {
        egressArea = (widthClearOp * heightClearOp)/144;
        console.log(widthClearOp)
        console.log(heightClearOp)
    }
    
    return egressArea;
    
   
}






