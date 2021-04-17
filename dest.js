document.getElementById("info").addEventListener("submit", handleSum);

document.getElementById("info").addEventListener("submit", handleSum);

function handleSum(evt) {
  evt.preventDefault();
  // console.log("itworked");
  // console.log(evt);

  //   const FULLNAME = document.getElementById("name").value;
  //   const FULLNAME = document.getElementById("name").value;
  //   const FULLNAME = document.getElementById("name").value;
  //   const FULLNAME = document.getElementById("name").value;
  // evt.target.name.value
  //   alert(evt.target.name.value);
  const destination = evt.target.dest.value;
  const location = evt.target.Location.value;
  let oto = evt.target.Photo.value;

  const description = evt.target.Description.value;

  let img = document.createElement("img");
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEjaLquQ38Bmm-2W_Pgu1q6PXB7sC32impg&usqp=CAU";
  let man = `<img src="${img.src}">`;

  photo = document.createElement("img");
  photo.src = evt.target.Photo.value;
  let man2 = `<img src="${photo.src}">`;

  let pic;

  const contains = document.getElementById("toadd");
  const myDiv = document.createElement("div");
  if (oto.length === 0) {
    pic = man;
  } else {
    pic = man2;
  }
  myDiv.innerHTML = `
  <div>
  ${pic}
  <p>you chose ${destination} - located in ${location}</p>
  <p>${description}</p>
  <button>edit</button><span><button>remove</button>
  </div>
  `;
  contains.appendChild(myDiv);
}
