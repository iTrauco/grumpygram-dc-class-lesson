const targetElements = document.querySelectorAll("[data-target]"); // const is a "constant" variable which means that it cannot be reassigned 

// when we click any picture-frame class we seen an enlarged version of image inside of .picture-frame
//

function respondToClick(event) {
    console.log('test click line 1');
   
    event.target.parentElement.classList.toggle("big");
}
function attachClickHandler(oneElement) {
    oneElement.addEventListener("click", respondToClick);
}
// this is how to handle one element
//targetElements[0].addEventListener("click", respondToClick);
targetElements.forEach(attachClickHandler);
