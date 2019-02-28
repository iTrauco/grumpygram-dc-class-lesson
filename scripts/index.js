const targetElements = document.querySelectorAll("[data-target]"); // const is a "constant" variable which means that it cannot be reassigned 

// when we click any picture-frame class we seen an enlarged version of image inside of .picture-frame
//
targetElements[0].addEventListener("click", respondToClick); //

function respondToClick() {
    console.log('test');
    console.log('how are you?');
    console.log('I am fine.');
}