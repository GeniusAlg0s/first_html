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
  let photo = evt.target.Photo.value;

  const description = evt.target.Description.value;

  var img = document.createElement("img");
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEjaLquQ38Bmm-2W_Pgu1q6PXB7sC32impg&usqp=CAU";
  var man = `<img src="${img.src}">`;

  photo = document.createElement("img");
  photo.src = evt.target.Photo.value;
  var man2 = `<img src="${photo.src}">`;

  const contains = document.getElementById("toadd");
  const myDiv = document.createElement("div");
  // if (photo.length === 0) {
  //   photo = man;
  // }
  myDiv.innerHTML = `
  <div>
  ${man2}
  <p>you chose ${destination} - located in ${location}</p>
  <p>${description}</p>
  <button>edit</button><span><button>remove</button>
  </div>
  `;
  contains.appendChild(myDiv);
}
