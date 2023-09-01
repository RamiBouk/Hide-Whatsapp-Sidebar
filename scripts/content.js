function getSideBar(){
	return document.querySelector("#side").parentElement;
}
function hideSideBar(){
	getSideBar().style.display="none"
}
function showSideBar(){
	getSideBar().style.display="block"
}
opened=true
function sideBarSwitch() {
	if (opened) {
		hideSideBar()
	document.querySelector("#wa-popovers-bucket").parentNode.style.minWidth="320px"
	}else
	{
		showSideBar()
	document.querySelector("#wa-popovers-bucket").parentNode.style.minWidth="660px"
	}
	opened=!opened

	document.querySelector("#butt_id").style=`transform: scaleX(${opened?1:-1}`
}
function addSideBarMenu(){
	button=document.createElement("button")
	button.id='butt_id'
	src = chrome.runtime.getURL("../images/arroww.png");
	button.innerHTML=
		`<img 
		src=${src}
		alt="open"
		style="transform: scaleX(-1);"
		width="15"
		height="20"
		></img>`
	button.addEventListener("click",sideBarSwitch)
	//add button to next to the parent of the side
	side=document.querySelector('#side').parentElement
	//
	side.parentNode.insertBefore(button, side.nextSibling);

	//

}

async function main() {
	addSideBarMenu()
	document.querySelector("#wa-popovers-bucket").parentNode.style.minWidth="650px"
	document.querySelector("#side").parentNode.style="min-width:335px"
	document.querySelector("#butt_id").nextSibling.style="min-width:50px"
}

var observer = new MutationObserver(function (mutations) {
	i=0
	mutations.forEach(function (mutation) {
		//#initial_startup
		mutation.removedNodes.forEach(node=>{
		})
		mutation.addedNodes.forEach(node=>{
			if(node.id=="wabs"){
				main()
				observer.disconnect()

			}
		}
		)
	});
});

// Config info for the observer.
var config = {
	childList: true, 
	subtree: true
};

// Observe the body (and its descendants) for `childList` changes.

observer.observe(document.body, config);


