// theme white
document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");

// Fetch , load and catagories

// crate catagoris
const loadCatg = () => {
  fetch(" https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displatCatg(data.categories))
    .catch((error) => console.log(error));
};

const displatCatg = (dataCtg) => {
  const ctgCont = document.getElementById("catG");
  dataCtg.forEach((element) => {
    // console.log(element);
    // crate button
    const btn = document.createElement("button");
    btn.classList = "btn";
    btn.innerText = element.category;
    ctgCont.append(btn);
  });
};

loadCatg();
// Videos
const loadVedio = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displatVedio(data.videos))
    .catch((error) => console.log(error));
};

const displatVedio = (dataVedio) => {
  const vedioCont = document.getElementById("vedio");
  dataVedio.forEach((element) => {
    // crate button
    console.log(element);
    const card = document.createElement("div");
    card.classList = 'card card-compact'
    card.innerHTML = `
    <figure>
    <img
      src= ${element.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>  
    `;
    vedioCont.append(card);
  });
};

loadVedio();

// GET: Video based on Catagory [ params ]

// Endpoint : https://openapi.programming-hero.com/api/phero-tube/category/categoryId
// Example: https://openapi.programming-hero.com/api/phero-tube/category/1001

// GET: Video based on Title [ Query ]

// Endpoint : https://openapi.programming-hero.com/api/phero-tube/videos?title=videoTitle
// Example: https://openapi.programming-hero.com/api/phero-tube/videos?title=shape

// GET: Video Details by video_id [ Query ]

// Endpoint : https://openapi.programming-hero.com/api/phero-tube/video/video_id
// Example: https://openapi.programming-hero.com/api/phero-tube/video/aaac
