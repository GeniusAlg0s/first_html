document.getElementById("info").addEventListener("submit", handleSum);

//delet card
function remDel() {
  let toTarget = document.getElementById("outer");
  toTarget.remove();
}

//edit event to alert and change card
function editCard() {
  const newDestination = prompt("please enter destination name");
  const newLocation = prompt("please enter location name");
  let newOto = prompt("please enter img url");
  const newdescription = prompt("please enter description");

  document.getElementById("dandl").innerHTML =
    "you now chose" + newDestination + " - " + newLocation;
  if (newOto.length <= 0) {
    pic = man;
  } else {
    photo.src = newOto;
    pic = man2;
  }
  document.getElementById("des").innerHTML = newdescription;
}

//sumbt event to displat card
function handleSum(evt) {
  evt.preventDefault();

  let destination = evt.target.dest.value;
  let location = evt.target.Location.value;
  let oto = evt.target.Photo.value;

  let description = evt.target.Description.value;

  let img = document.createElement("img");
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEjaLquQ38Bmm-2W_Pgu1q6PXB7sC32impg&usqp=CAU";
  let man = `<img id="defualt" src="${img.src}" class="img-thumbnail">`;

  photo = document.createElement("img");
  photo.src = evt.target.Photo.value;
  let man2 = `<img id="given" src="${photo.src}" class="img-thumbnail">`;

  let pic;

  const contains = document.getElementById("toadd");
  const myDiv = document.createElement("div");
  if (oto.length === 0) {
    pic = man;
  } else {
    pic = man2;
  }
  myDiv.innerHTML = `
  <div id="outer">
  ${pic}
  <hr>
  <div class="inner height">
  <p id="dandl">you chose ${destination} - located in ${location}</p>
  <p id="des">${description}</p>
  </div>
  <hr>
  <div class="inner">
  <button id="edit" class="btn btn-warning">edit</button><span><button id="remove" class="btn btn-danger">remove</button>
  </div>
  </div>
  `;

  contains.appendChild(myDiv);
  document.getElementById("edit").addEventListener("click", editCard);
  document.getElementById("remove").addEventListener("click", remDel);
}
