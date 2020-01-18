/* This JavaScript file is used by both the left frame (leftFrame.html) and right frame (rightFrame.html) of the PerformanceQuiz5.html document */
/* PLEASE NOTE: This functionality will not work in Chrome when the documents are hosted on the user's machine; the error "Blocked a frame with origin 'null' from accessing a cross-origin frame." appears because Chrome does not allow separate locally-hosted documents to reference each other by default. It does work in other browsers when the documents are hosted locally and in all browsers when they are hosted on a web server */

function changeSelection(selectOrRadio, selection) {
/* The changeSelection function is activated when the element in one frame is used, and selects the corresponding option in the other frame. The function has two arguments: selectOrRadio is either the text "select" (passed by the select element in the left frame) or the text "radio" (passed by one of the radio button elements in the right frame). The selection argument is either the selectedIndex of whichever option is selected in the select element (if using the left frame) or the ID of the radio button that is selected (if using the right frame) */
	var elementToSelect = "";
	// Declare and set the elementToSelect variable as blank. This will contain the ID of the element that will be selected in the opposite frame
	switch (selectOrRadio) {
	// Determine which type of element was used and perform the approprate action
		case "radio":
			elementToSelect = "radio";
			// If a radio button was selected, begin elementToSelect with the text "radio", because all of the options in the select element have a value starting with "radio" 
			elementToSelect += selection.charAt(selection.length-1);
			// selection contains the ID of the radio button that was pressed in this case, and they are numbered 1 through 5. Get the last character and add it to the end of elementToSelect. Afterward, elementToSelect will be in the format "radioX"
			parent.frames[0].document.getElementById("selectElement").value = elementToSelect;
			// Reference the parent.frames[0] object to get to the left frame in the DOM (the parent is PerformanceQuiz5.html and the first frame specified in that document is leftFrame). Then reference selectElement and set its selected value to "radioX"
			break;
		case "select":
			elementToSelect = "radioButton";
			// If the select element was used by the user, begin elementToSelect with "radioButton", because the ID's of all the radio buttons begin with the text "radioButton"
			elementToSelect += selection;
			// In this case, selection contains the selectedIndex from the selectElement in the left frame (a number from 0 to 5). Add this to the end of elementToSelect. Afterward, elementToSelect will be in the format "radioButtonX"
			parent.frames[1].document.getElementById(elementToSelect).checked = true;
			// Reference the parent.frames[1] object to get to the right frame in the DOM (the parent is PerformanceQuiz5.html and the second frame specified in that document (index 1 in the frames Array) is rightFrame). Then identify elementToSelect (in the format radioButtonX) as the ID of the element to work with and set its checked value to true
			break;
		default:
			alert("Whoops!");
			// Just in case selectOrRadio is somehow not the text "select" or "radio", alert the user that something went wrong
			break;
	}
}