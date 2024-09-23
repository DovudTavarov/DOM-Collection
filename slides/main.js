const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: 1,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1672931453015-cba6713fe785?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: 2,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1713151569892-18a4239b510a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: 3,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1618688749926-c94abd039f88?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: 4,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1695470789140-9bc944de3696?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: 5,
  },
];

const slideCont = document.querySelector(".slide-cont");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

carusel(data);

function carusel(data) {
  slideCont.innerHTML = "";
  for (let item of data) {
    slide = `<div class="slide">
            <img
             width="800px"
             height="500px"
            src="${item.img}"
            alt=""
            />
            <h1>${item.number}</h1>
             </div>
             <div class="slide-btn">

    </div>`;
    slideCont.innerHTML += slide;
  }
}

let counter = 0;

showSlide();

function showSlide() {
  let slides = document.getElementsByClassName("slide");
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[counter].style.display = "flex";
}

nextBtn.addEventListener("click", () => {
  if (counter === data.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  showSlide();
});

prevBtn.addEventListener("click", () => {
  if (counter == 0) {
    counter = data.length - 1;
  } else {
    counter--;
  }
  showSlide();
});
