const reviews = [
  {
    id: 1,
    name: "Austin Okebata",
    job: "Web developer",
    img: "images/student4.jpeg",
    text: 
    "Thrive Token aims to revolutionize the way we approach social impact initiatives and community development."
  }, 
  {
    id: 2,
    name: "Gracie Tony ",
    job: "UI designer",
    img: "images/student8.jpg",
    text: 
    "We approach social impact initiatives and community development. Lorem ipsum dolor sit amet consectetur."
  }, 
  {
    id: 3,
    name: "Max Goodwin",
    job: "Cyber security",
    img: "images/student1.jpeg",
    text: 
    "Lorem ipsum dolor sit amet consectetur elit. Thrive Token aims to revolutionize the way we approach social impact."
  }, 
  {
    id: 4,
    name: "Christa Henry",
    job: "Machine Learning",
    img: "images/lady2.jpeg",
    text: 
    "We approach social impact initiatives and community development. Lorem ipsum dolor sit amet consectetur."
  },
  {
    id: 5,
    name: "Wilson Dev",
    job: "Backend Developer",
    img: "images/student5.jpg",
    text: 
    "Lorem ipsum dolor sit amet consectetur elit. Thrive Token aims to revolutionize the way we approach social impact."
  },
]

  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentItem = 0;

  window.addEventListener("DOMContentLoaded", function(){
    reviewContent();
  })

  function reviewContent(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

  prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
      currentItem = reviews.length - 1;
    }
    reviewContent();
  })

  nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
      currentItem = 0;
    }
    reviewContent();
  })