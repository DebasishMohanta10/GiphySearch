var btn = document.querySelector('.js-go');

// Grab the Input
btn.addEventListener('click',function(){
    var usrInput = document.querySelector('.js-userinput');
    search(usrInput.value);
});


document.querySelector('.js-userinput').addEventListener('keyup',function(e){
    var usrInput = document.querySelector('.js-userinput');
    // if enter key pressed
    if(e.which ===  13){
        search(usrInput.value);
    }
});

// Do the data stuff with the API


function search(term){
    // Giphy GIFs APIs
    var url = "https://api.giphy.com/v1/gifs/search?q="+term+"&api_key=oZLLsD1fofmGs6r96vYTtmuTq46ToWDt";

    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET',url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e){
        var data = e.target.response;
        pushToDOM(data);
    })

}

// Show me the GIFs

function pushToDOM(input){
    var response = JSON.parse(input);
    var imageUrls = response.data;
    var container = document.querySelector('.js-container');
    console.log(imageUrls);
    container.innerHTML = "";
    imageUrls.forEach(image => {
        var src = image.images.fixed_height.url;
        console.log(src);
        container.innerHTML +=`<img src="${src}" class="container-image">`;        
    });


}