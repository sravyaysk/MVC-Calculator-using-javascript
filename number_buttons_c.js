function NumberButtonController(btn_obj, display_obj, CurrentValue)
{
	//alert(btn_obj.value);
	this.btn_obj = btn_obj;
	this.display_obj = display_obj;
	this.CurrentValue = CurrentValue;
	var btn_c_obj = new ButtonController(this.btn_obj, this.display_obj, this.CurrentValue);
	return btn_c_obj.CurrentValue;
}