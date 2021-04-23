const contains = document.getElementById("toadd");
const herokuAPI = `https://destapi.herokuapp.com/`;

/// when data loads display that data
fetch(herokuAPI)
  .then((res) => res.json())
  .then((data) => displayDest(data));

//displayDest funct
function displayDest(data) {
  for (let i = 0; i < data.length; i++) {
    let name = data[i].name;
    let location = data[i].location;
    let description = data[i].description;
    let nphoto = data[i].photo;
    console.log(data[i].name);

    let nameElement = document.createElement("h1");
    let locationElement = document.createElement("p");
    let descriptionElement = document.createElement("p");
    let nphotoElement = document.createElement("img");
    let staticContainer = document.createElement("div");
    let innerOneContainer = document.createElement("div");
    let innertwoContainer = document.createElement("div");
    let innerthreeContainer = document.createElement("div");

    let edit = document.createElement("button");
    edit.setAttribute("class", "btn btn-warning");
    edit.innerHTML = "edit";

    let remove = document.createElement("button");
    remove.setAttribute("class", "btn btn-danger");
    remove.innerHTML = "remove";

    innerOneContainer.setAttribute("class", "inner height");
    staticContainer.setAttribute("id", "outer");
    nphotoElement.setAttribute("src", nphoto);

    nameElement.innerHTML = name;
    locationElement.innerHTML = location;
    descriptionElement.innerHTML = description;

    innerOneContainer.appendChild(nameElement);
    innerOneContainer.appendChild(locationElement);

    innertwoContainer.appendChild(descriptionElement);

    innerthreeContainer.appendChild(edit);
    innerthreeContainer.appendChild(remove);

    staticContainer.appendChild(nphotoElement);
    staticContainer.appendChild(innerOneContainer);
    staticContainer.appendChild(innertwoContainer);
    staticContainer.appendChild(innerthreeContainer);

    contains.appendChild(staticContainer);
  }
}
//add event listner to form on submit
document.getElementById("info").addEventListener("submit", handleSum);

function getApi() {
  let destination = document.getElementById("dest").value;
  if (destination.length <= 0) {
    destination = "cat";
  }
  let API = `https://api.unsplash.com/search/photos?client_id=O1CcoG842k4QrdW3z9oSbnxL9wOPaMOx0LXopCuZ8us&query=${destination}`;

  fetch(API)
    .then((resp) => resp.json())
    .then((data) => display(data));
}
function display(data) {
  //from handle function
  let destination = document.getElementById("dest").value;
  //take dest and sent to get api function
  let location = document.getElementById("Location").innerHTML;

  let description = document.getElementById("Description").innerHTML;

  let unsplash = data.results[0].urls.small;
  ///default img

  let img = document.createElement("img"); // <img />

  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11Te4EqTBLfu_84WL9o_mJ7ZPlXyxRmsQAg&usqp=CAU";
  let man = `<img id="defualt" src="${img.src}" class="img-thumbnail">`;

  //given image
  contains.innerHTML = "";
  /// html element to be displayed
  contains.innerHTML += `<div id="outer" >
  <img id="defualt" src=${unsplash}>
  <hr>
  <div class="inner height">
  <p id="dandl">you chose ${destination} - located in ${location}</p>
  </div>
  <div class="text-muted daTop">
  <p id="des">Description: ${description}</p>
  </div>
  <hr>
  <div class="inner">
  <button id="edit" class="btn btn-warning">edit</button><span><button id="remove" class="btn btn-danger">remove</button>
  </div>
  </div>
  `;
  document.getElementById("edit").addEventListener("click", editCard);
  document.getElementById("remove").addEventListener("click", remDel);
}

//delete card
function remDel() {
  let toTarget = document.getElementById("outer");
  toTarget.remove();
}

//edit event to prompt and change card
function editCard() {
  const newDestination = prompt("please enter destination name");
  const newLocation = prompt("please enter location name");
  const newdescription = prompt("please enter description");

  let API = `https://api.unsplash.com/search/photos?client_id=O1CcoG842k4QrdW3z9oSbnxL9wOPaMOx0LXopCuZ8us&query=cat`;
  // console.log(API);
  fetch(API)
    .then((resp) => resp.json())
    .then((data) => display(data));

  let API2 = `https://api.unsplash.com/search/photos?client_id=O1CcoG842k4QrdW3z9oSbnxL9wOPaMOx0LXopCuZ8us&query=${newDestination}`;
  // console.log(API);
  fetch(API2)
    .then((resp) => resp.json())
    .then((data2) => display(data2));

  let landing = data.results[0].urls.small;
  let landing2 = data2.results[0].urls.small;

  if (newDestination.length <= 0) {
    document.getElementById("defualt").src = landing;
    document.getElementById("dandl").innerHTML =
      "you now chose" + newDestination + " - " + newLocation;
  } else {
    document.getElementById("defualt").src = landing2;
    document.getElementById("dandl").innerHTML =
      "you now chose" + newDestination + " - " + newLocation;
  }
  document.getElementById("des").innerHTML = newdescription;
}

//sumbt event to display card
function handleSum(evt) {
  evt.preventDefault();
  getApi();
}
