
    // Slider Section
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 3000); // Change image every 2 seconds
    }
// Slider section End..

// single collap
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// for card image 
var obj=[
    {
    Image:"https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-ultra-s908-413016-sm-s908edrhinu-530969148?$PD_GALLERY_L_JPG$",
    name:"Galaxy s21 ultra",
    price:21212,
    stockprice:2121,
    buy_best:"buy best at(₹ 121212)",
    cashback:"500 Instant Cashbackk on HDFC",
},
{
    Image:"https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-s901-412948-sm-s901ezgdinu-530964621?$PD_GALLERY_L_JPG$",
    name:"Galaxy s21 ultra",
    price:21212,
    stockprice:2121,
    buy_best:"buy best at(₹ 121212)",
    cashback:"500 Instant Cashbackk on HDFC",
},
{
    Image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-f926bzsdinu/gallery/in-galaxy-z-fold3-f926-5g-396759-sm-f926bzsdinu-522779012?$PD_GALLERY_L_JPG$",
    name:"Galaxy s21 ultra",
    price:21212,
    stockprice:2121,
    buy_best:"buy best at(₹ 121212)",
    cashback:"500 Instant Cashbackk on HDFC",
},
{
    Image:"https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-flip3-f711-5g-sm-f711bzeainu-474119000?$PD_GALLERY_L_JPG$",
    name:"Galaxy s21 ultra",
    price:21212,
    stockprice:2121,
    buy_best:"buy best at(₹ 121212)",
    cashback:"500 Instant Cashbackk on HDFC",
}
]
var data=document.querySelector("#collap").addEventListener("click",myfun);
window.addEventListener("load",myfun)

function myfun(data){
    obj.map(function(ele,i,arr){
        box=document.createElement("div");
        image=document.createElement("img")
        image.src=ele.Image;
        p1=document.createElement("p");
        p1.innerText=ele.name;
        p2=document.createElement("p");
        p2.innerText=ele.price
        st=document.createElement("strike");
        st.innerText=ele.stockprice;
        best=document.createElement("p");
        best.innerText=ele.buy_best;
        cash=document.createElement("p");
        cash.innerText=ele.cashback;
        p2.append(st)
        btn=document.createElement("button");
        btn.textContent="Buy Now"
        btn.addEventListener("click",function(){
          clicked(ele);
        })
        br3=document.createElement("p");
        box.append(image,p1,p2,best,cash,btn,br3)
        box.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px";
        
        document.querySelector("#container1").append(box);
    })
}

// end card image

// Refrigaeator js
var obj2=[
  {
  Image:"https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-ultra-s908-413016-sm-s908edrhinu-530969148?$PD_GALLERY_L_JPG$",
  name:"Galaxy s21 ultra",
  price:21212,
  stockprice:2121,
  buy_best:"buy best at(₹ 121212)",
  cashback:"500 Instant Cashbackk on HDFC",
},
{
  Image:"https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-s901-412948-sm-s901ezgdinu-530964621?$PD_GALLERY_L_JPG$",
  name:"Galaxy s21 ultra",
  price:21212,
  stockprice:2121,
  buy_best:"buy best at(₹ 121212)",
  cashback:"500 Instant Cashbackk on HDFC",
},
{
  Image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-f926bzsdinu/gallery/in-galaxy-z-fold3-f926-5g-396759-sm-f926bzsdinu-522779012?$PD_GALLERY_L_JPG$",
  name:"Galaxy s21 ultra",
  price:21212,
  stockprice:2121,
  buy_best:"buy best at(₹ 121212)",
  cashback:"500 Instant Cashbackk on HDFC",
},
{
  Image:"https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-z-flip3-f711-5g-sm-f711bzeainu-474119000?$PD_GALLERY_L_JPG$",
  name:"Galaxy s21 ultra",
  price:21212,
  stockprice:2121,
  buy_best:"buy best at(₹ 121212)",
  cashback:"500 Instant Cashbackk on HDFC",
}
]
obj2.map(function(ele){
  var div=document.createElement("div");
  var img=document.createElement("img");
  img.src=ele.Image;
  var ptag=document.createElement("p");
  ptag.innerText=ele.name;
  var ptag2=document.createElement("p");
  ptag2.innerText=ele.price;
  var stp=document.createElement("p");
  stp.innerHTML=ele.strikedoffprice;
  var btn=document.createElement("button");
  btn.innerText="Add to Cart"
  btn.addEventListener("click",function(){
      clicked(ele)
  })
  div.append(img,btn,stp,ptag,ptag2)
  document.querySelector("#refrigarator").append(div)
 
})
var cart_data=JSON.parse(localStorage.getItem("cart_ele"))||[];
function clicked(ele){
  event.preventDefault();
  cart_data.push(ele)
 localStorage.setItem("cart_ele",JSON.stringify(cart_data))
 alert("Item add in Cart")
 //window.location.href="cart.html";
}

// Refrigaerator end