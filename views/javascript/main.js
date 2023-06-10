const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("nav");
const background = document.querySelector("section");


hamburger.addEventListener("click", function () {
   this.classList.toggle("is-active");
   background.classList.toggle("modal");
   if(menu.classList.contains("slide")){
      menu.classList.remove("slide");
   }else{
      menu.classList.add("slide");
   }
});

const linksA = document.querySelectorAll(".navbar a")
linksA.forEach(link => {
   link.addEventListener("click",()=>{
      hamburger.classList.remove("is-active")
      menu.classList.toggle("slide")
   })

})


 
const light = document.querySelector(".light")

const modeSwitch = document.querySelector(".circle")
const theSwitch = document.querySelector(".switch")
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const header = document.querySelector('.nav-container');
const home = document.querySelector(".home")
const homeSection = document.querySelector(".home-section")
const logo = document.querySelector(".name")
const socialMedia = document.querySelectorAll(".social-media a svg")
const skillsCards =  document.querySelectorAll(".skills-section > div")

const skillSection =  document.querySelector(".skills-page")
const cardContainer =  document.querySelector(".skills-section")
const card = document.querySelectorAll(".skills-section div")
const description = document.querySelectorAll(".text-box")
const portfolioPage = document.querySelector(".portfolio-page")
const tags = document.querySelectorAll(".tags")
const title = document.querySelectorAll(".title h2")
const cards =  document.querySelectorAll(".card-container")
const cardImage =  document.querySelectorAll(".card-container .img")
const aboutPage = document.querySelector(".about-page")
const aboutParagraph = document.querySelector(".about-page p")




let colorsDarkMode = ["#122c3fcc", "#F3F8F2" , "#EBE9E9" , "#38add1" , "#122C3F" , "#FB9E60"]

moon.addEventListener("click", function(){

   light.style.opacity = 1
   light.classList.add("light-animation")
   modeSwitch.style.transform = "translateX(2.2rem)"
   theSwitch.style.backgroundColor = "#122C3F"


   logo.style.color = "white"
   socialMedia.forEach(icon => {
      icon.style.color = "#EBE9E9"
   })
      
   homeSection.style.backgroundColor = colorsDarkMode[0]
   homeSection.style.color = "#EBE9E9"
   skillsCards.forEach(card =>{
      card.style.backgroundColor = colorsDarkMode[1]
   }) 
   skillSection.style.backgroundColor = colorsDarkMode[0]
   // cardContainer.style.backgroundColor = colorsDarkMode[2]
   card.forEach(card => {
      card.style.backgroundColor = colorsDarkMode[1]
      card.style.color = colorsDarkMode[0]

   })
   description.forEach(description => {

      description.style.backgroundColor = colorsDarkMode[1]
      description.style.color = colorsDarkMode[0]
   })
   portfolioPage.style.backgroundColor = colorsDarkMode[0]
   tags.forEach(tag =>{

      tag.style.color = colorsDarkMode[1]
   })
   title.forEach(title =>{
      title.style.color = colorsDarkMode[1]
   })
   cardImage.forEach(card => {
      card.style.boxShadow = "rgba(0, 0, 0, 0.637) 0px 3px 12px"
   })
   aboutPage.style.backgroundColor = colorsDarkMode[0]
   aboutParagraph.style.color = colorsDarkMode[2]
})
sun.addEventListener("click", function(){
   light.style.opacity = 0
   light.classList.remove("light-animation")
   modeSwitch.style.transform = "translateX(0)"
   theSwitch.style.backgroundColor = "#4c709e"


   logo.style.color = "#38add1"
   homeSection.style.backgroundColor = "white"
   homeSection.style.color = "#122C3F"
   socialMedia.forEach(icon => {
      icon.style.color = "#122C3F"
   })

   skillSection.style.backgroundColor = colorsDarkMode[2]
   


   card.forEach(card => {
      card.style.backgroundColor = colorsDarkMode[4]
      card.style.color = colorsDarkMode[5]
   })

   description.forEach(description => {

      description.style.backgroundColor = colorsDarkMode[4]
      description.style.color = colorsDarkMode[2]
   })
   portfolioPage.style.backgroundColor = colorsDarkMode[2]
   tags.forEach(tag =>{

      tag.style.color = colorsDarkMode[4]
   })
   title.forEach(title =>{
      title.style.color = colorsDarkMode[4]
   })
   cardImage.forEach(card => {
      card.style.boxShadow = "#122C3F 0px 3px 12px"
   })
   aboutPage.style.backgroundColor = colorsDarkMode[2]
   aboutParagraph.style.color = colorsDarkMode[4]
})





const observer = new IntersectionObserver( entries => {
   entries.forEach(entry => {
      entry.target.classList.toggle("go-up", entry.isIntersecting)
    })
},{ rootMargin: '0px',threshold : [0.0, 0.75]})


skillsCards.forEach(skillcard =>{
   console.log(skillcard)
   observer.observe(skillcard)
})

cards.forEach(card => {
   observer.observe(card)
})