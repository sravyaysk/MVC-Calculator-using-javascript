function ButtonView(display_obj)
{
	var btn_model_obj = new ButtonModel();
	new NumberButtonsView(display_obj, btn_model_obj);
	new OperatorButtonsView(display_obj, btn_model_obj);
}