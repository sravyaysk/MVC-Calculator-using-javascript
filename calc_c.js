function PushOpcode(number, display_object, setCurrentValue)
{
	//alert("cv b4 "+setCurrentValue);
	if(setCurrentValue == '0')
		setCurrentValue = number;
	else
		setCurrentValue = setCurrentValue + number;
	//display_object.setValue(setCurrentValue);
	//alert("cv ltr "+setCurrentValue);
	return setCurrentValue;
}

function PerformCalculation(display_object, setCurrentValue)
{
	//alert(setCurrentValue);
	setCurrentValue = eval(setCurrentValue);
	//display_object.setValue(setCurrentValue);
	return setCurrentValue;
}
