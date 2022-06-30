var viz;
var deviceType = "phone";

function startViz()
{
	var url = "https://public.tableau.com/views/WanderlandCH/Erlebnisse?:embed=y&:display_count=no&:showVizHome=no";
	var vizOptions = {
		hideTabs: true,
		hideToolbar: true,
		disableUrlActionsPopups: true,
		device: deviceType
	}; // var vizOptions

	var vizDiv = document.getElementById("vizContainer");
	vizDiv.innerHTML = "";
	viz = new tableau.Viz(vizDiv, url, vizOptions);
}

function setVizSize() {
	// var newHeight = window.innerHeight;
	// var newWidth  = window.innerWidth;
	// if (deviceType === "tablet") {
	// 	newWidth = 1169;
	// 	newHeight = 827;
	// } else { // default, deviceType = desktop
	// 	newHeight -= (portal_header_height ? portal_header_height : 0);
	// 	newWidth -= (portal_header_width ? portal_header_width : 0);
	// }
	// $("#vizContainer").width(newWidth);
	// $("#vizContainer").height(newHeight);
}

function initPage()
{
	console.log("loaded!");
	setVizSize();
	startViz();
}
