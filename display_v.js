function DisplayView()
{
	var text_field = doc.createElement('input');
	text_field.type = 'text';	
	text_field.id = 16;
	this.TextField = text_field;
	//docFrag.appendChild(text_field);
	doc.body.appendChild(text_field);
	doc.body.appendChild(line_break);
}
DisplayView.prototype.setValue = function(value)
{
	this.TextField.value = value;
}