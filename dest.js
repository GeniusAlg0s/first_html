const contains = document.getElementById("toadd");

//add event listner to form on submit
document.getElementById("info").addEventListener("submit", handleSum);

function getApi() {
  let destination = document.getElementById("dest").value;
  let API = `https://api.unsplash.com/search/photos?client_id=O1CcoG842k4QrdW3z9oSbnxL9wOPaMOx0LXopCuZ8us&query=${destination}`;
  // console.log(API);
  fetch(API)
    .then((resp) => resp.json())
    .then((data) => display(data));
}
function display(data) {
  //from handle function
  let destination = document.getElementById("dest").value;
  //take dest and sent to get api function
  let location = document.getElementById("Location").innerHTML;
  // let oto = document.getElementById("Photo").innerHTML;
  let description = document.getElementById("Description").innerHTML;
  // console.log(data.results);
  let unsplash = data.results[0].urls.small;

  // unsplash = `https://api.unsplash.com/search/photos?client_id=O1CcoG842k4QrdW3z9oSbnxL9wOPaMOx0LXopCuZ8us&query=${destination}`;

  ///default img
  // <img src="" class="newest" />
  let img = document.createElement("img"); // <img />
  // img.src =
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEjaLquQ38Bmm-2W_Pgu1q6PXB7sC32impg&usqp=CAU";
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11Te4EqTBLfu_84WL9o_mJ7ZPlXyxRmsQAg&usqp=CAU";
  let man = `<img id="defualt" src="${img.src}" class="img-thumbnail">`;

  //given image
  contains.innerHTML = "";
  /// html element to be displayed
  contains.innerHTML += `<div id="outer" >
  <img src=${unsplash}>
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
  let newOto = prompt("please enter img url");
  const newdescription = prompt("please enter description");

  document.getElementById("dandl").innerHTML =
    "you now chose" + newDestination + " - " + newLocation;
  if (newOto.length <= 0) {
    document.getElementById("defualt").setAttribute("src", img.src);
  } else {
    document.getElementById("defualt").setAttribute("src", newOto);
  }
  document.getElementById("des").innerHTML = newdescription;
}

//sumbt event to display card
function handleSum(evt) {
  evt.preventDefault();
  getApi();
}
