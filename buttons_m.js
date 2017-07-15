function ButtonModel()
{
	var num_btn_obj = new NumberButtonsData();
	this.num_btn_arr = num_btn_obj;
	var op_btn_obj = new OperatorButtonsData();
	this.op_btn_arr = op_btn_obj;
	this.CurrentValue = 0;
}