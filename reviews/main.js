const data = [
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    text: "Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    name: "Anna Johnson",
    job: "WEB DESIGNER",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    name: "Bill Anderson",
    job: "THE BOSS",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
  {
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Peter Jones",
    job: "INTERN",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

const reviewCont = document.querySelector(".review-cont");

function getReview() {
  reviewCont.innerHTML = "";
  for (let review of data) {
    let box = `<div class="review-box">
        <img
          width="200px"
          src="${review.img}"
          alt=""
        />
        <h2>${review.name}</h2>
        <h3>${review.job}</h3>
        <p>
        ${review.text}
        </p>
        <button onclick="clickBtn()" class="review-btn">Surprise me</button>
      </div>`;
    reviewCont.innerHTML += box;
  }
}
let randomReview = 0;

getReview();

showReview();

function showReview() {
  let reviews = document.getElementsByClassName("review-box");
  for (let review of reviews) {
    review.style.display = "none";
  }
  reviews[randomReview].style.display = "flex";
}

function clickBtn() {
  randomReview = Math.floor(Math.random() * 4);
  showReview();
}
