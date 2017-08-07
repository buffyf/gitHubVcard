
var itemContainer = document.querySelector(".bodyContainer");

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/buffyf");
req.addEventListener("load", reqListener);
req.send();

function reqListener() {
    let data = JSON.parse(this.responseText);
   
        itemContainer.innerHTML = `
        <div class="mainTitle">
        <h1>${data.name}</h1>
    </div>
    <div class="container">
        <div class="content">
            <h2>The Basics</h2>
            <p><span class = "greenFont">Name:  </span>${data.name}</p>
            <p><span class = "greenFont">Github URL:  </span><a href=${data.html_url}>${data.login}</a></p>
            <p><span class = "greenFont">Email:  </span>${data.email}</p>
            <p><span class = "greenFont">Company:  </span>${data.company}</p>
            <p><span class = "greenFont">Website:  </span><a href=${data.blog}>${data.blog}</a></p>
        </div>
        
        <div class="story">
            <h2>The Story</h2>
            <p class = "verticalLine">${data.bio}</p>
        </div>
        <div>
            <img src=${data.avatar_url}>
        </div>
    </div>`


  
    return itemContainer;
}

    