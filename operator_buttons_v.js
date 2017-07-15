function OperatorButtonsView(display_obj, btn_model_obj)
{
	var table=doc.createElement('table');
	var i = 0, j = 0, count = 0;
	for(i = 0; i < 1; i++)
	{
		count = 0;
		var tr = document.createElement('tr');  
		while(count < 5)
		{
			count++;
			var td = document.createElement('td');
			var button = doc.createElement('input');
			button.type = 'button';
			button.value = btn_model_obj.op_btn_arr[j];
			button.id = j;
			button.addEventListener("click",function()
			{
				//alert("obv after onclick "+btn_model_obj.CurrentValue);
				btn_model_obj.CurrentValue = OperatorButtonController(this, display_obj, btn_model_obj.CurrentValue);
				//alert("obv return of num "+btn_model_obj.CurrentValue);
			});
			td.appendChild(button);
			tr.appendChild(td);
			j++;
		}
		table.appendChild(tr);
	}
	doc.body.appendChild(table);
}