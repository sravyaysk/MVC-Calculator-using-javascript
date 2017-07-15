function OperatorButtonController(op_obj, display_obj, CurrentValue)
{
	//alert(op_obj.value);
	this.op_obj = op_obj;
	this.display_obj = display_obj;
	this.CurrentValue = CurrentValue;
	var btn_c_obj = new ButtonController(this.op_obj, this.display_obj, this.CurrentValue);
	//alert(btn_c_obj.CurrentValue);
	return btn_c_obj.CurrentValue;
}