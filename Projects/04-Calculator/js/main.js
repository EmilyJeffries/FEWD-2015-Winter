var $display;

$(document).ready(function() {

	$display = $(".display");

	$(".digit, .operator").on("click", onButtonPress);

});

// React to button press
function onButtonPress(e){
	var $button = $(e.currentTarget),
		 action = $button.data("action"), //look for data-action="..."
		  value = $display.val();

	if (value === "0") {
		value = action;
	}	else {
			value += action;
	}  

	updateDisplay(value);
}

//Evaluate the user input

//Update display
function updateDisplay(value) {
		$display.val(value);

}

//Clear the current input

//