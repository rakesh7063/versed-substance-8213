import {navBar,popup} from "../scripts/navbar.js"
document.getElementById("menu-bar").innerHTML = navBar();
import footer from "../scripts/footer.js"
document.getElementById("footer_append").innerHTML = footer();
popup()


let fund_data = JSON.parse(localStorage.getItem("total_fund")) || [];

  document.querySelector('#name1').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('#name1').value;
  }

  document.querySelector('#number').oninput = () => {
    document.querySelector('.card_num').innerText = document.querySelector('#number').value;
  }

  document.querySelector('#amount').oninput = () => {
    document.querySelector('.card-number-box').innerText =`Donate amount    ${document.querySelector('#amount').value} only`;
  }

  document.querySelector('#family_members').oninput = () => {
    document.querySelector('.exp-month').innerText = `The Patient is my ${document.querySelector('#family_members').value}`;
  }

  document.querySelector('#hears_about').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('#hears_about').value;
  }

 

 

let fund = document.getElementById("details_form")
fund.addEventListener("submit",()=> {
  fund_people_detail(event)
})


  let fund_people_detail = (event) => {
    event.preventDefault();
    let name = document.getElementById("name1").value;
    let mobile = document.getElementById("number").value;
    let amount = document.getElementById("amount").value;
    let family_members = document.getElementById("family_members").value;
    let hears_about = document.getElementById("hears_about").value;

    let details_obj = { name,mobile,amount, family_members, hears_about };
    console.log(details_obj)
    fund_data.push(details_obj)
    localStorage.setItem("total_fund",JSON.stringify(fund_data))
    setTimeout(function () {
      
      window.location.href="card_detail.html"
    
   }, 2000)
    
  }