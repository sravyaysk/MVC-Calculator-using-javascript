function ButtonController(btn_obj, display_obj, CurrentValue)
{
	//alert("bc "+CurrentValue);
	if(btn_obj.value == '=')
		CurrentValue = PerformCalculation(display_obj, CurrentValue);
	else
		CurrentValue = PushOpcode(btn_obj.value, display_obj, CurrentValue);
	DisplayResult(display_obj, CurrentValue);
	this.CurrentValue = CurrentValue;
}