let navBar = () => {
    return `
       
    <div class="menu-bar">
    
   
    <ul>
        
            <li id="image"><a href="#"><img class="img_lo" src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?dpr=1.0&q=70&w=100"
                        alt="Ketto_logo"></a></li>
        

        <li><a href="fundraiser.html">Browse Fundraisers</a></li>


        <li><a href="#">Fundraise For <i class="fa fa-caret-down" aria-hidden="true"></i></a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="/fundraiserform.html">Medical Treatment</a></li>
                    <li><a href="./fundraiserform.html">NGO / Charity</a></li>
                    <li><a href="/fundraiserform.html">Other Cause</a></li>

                </ul>

            </div>





        </li>

        <li><a href="howitwork.html">How It Works</a></li>
        <li><a class="non" href="#">|</a></li>
        <li ><a href="#"><i class="fa fa-search" aria-hidden="true"></i>Search </a></li>
        <li id="whatsapp"><a href="https://wa.me/919770525851" target="_blank"><i class="fa fa-whatsapp"
                    aria-hidden="true"></i>Chat</a></li>

        <li ><a id="fundraiser" href="#">Sign up</a></li>
        <li id="signin_page"><a class="in_href" href="#">Sign In</a></li>

    </ul>

   

</div>





<form id="outer_popup" class="outer_popup">
    <div class="popup">
        <div id="close-btn" class="close_btn">&times;</div>
        <div class="form">
            <h1>Login</h1>
            <div class="form-element">
                <input type="email" required id="email" placeholder=" ">
                <label for="email">Email Address</label>
            </div>
            <div class="form-element">
                <input type="password" required id="password" placeholder=" ">
                <label for="password">Password</label>
            </div>
            <div  class="form-element">
                <button type="submit" id="user_login">Sign in</button>
            </div>
            <div class="form-element">
                <a href="#">Login via OTP</a>
            </div>
            <div class="form-element">
                <p>By continuing you agree to our <span>Terms of Service</span> and <span> Privacy Policy</span></p>
            </div>
            <div class="form-element">
                <h4>Want to start a fundraiser? <span id="click_signup" href="#"> Click here</span></h4>
            </div>

        </div>
    </div>
   
</form>




           

          <form id="outer_popup_F" class="outer_popup">
            <div class="popup_F">
                <div id="close-btn_F" class="close_btn_F">&times;</div>
                <div class="form">
                  
                    <h4>Start your fundraiser</h4>
                    <div class="form-element">
                        <input type="text" required  id="name" placeholder=" ">
                        <label for="name">Name</label>
                    </div>
                    <div class="form-element">
                        <input type="email" required id="emailCreate" placeholder=" ">
                        <label for="email">Email Address</label>
                    </div>
                    <div class="form-element">
                        <input type="password" required id="Create_password" placeholder=" ">
                        <label for="password">Password</label>
                    </div>
                    <div class="form-element">
                        <input type="number" required id="mobile" placeholder=" ">
                        <label for="number">Mobile</label>
                    </div>
                     
                    <div class="form-element">
                        <h4>Already have an account? <span id="fund_login">Login</span></h4>
                    </div>
                    <div class="form-element">
                        <button type="submit"  id="signup_btn">Sign up</button>
                    </div>
                   
        
                </div>
            </div>

          </form>






    `
}


let popup = ()=>{
    let login_status = JSON.parse(localStorage.getItem("login"))
   document.getElementById("signin_page").addEventListener("click",function (){
    document.querySelector(".popup_F").classList.remove("active");
    document.querySelector(".popup").classList.add("active");
})

document.querySelector(".close_btn").addEventListener("click",() => {
    document.querySelector(".popup").classList.remove("active");
 
})

document.getElementById("click_signup").addEventListener("click",function (){
    
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".popup_F").classList.add("active");
})

document.querySelector(".close_btn_F").addEventListener("click",() => {
    document.querySelector(".popup_F").classList.remove("active");
 
})

// fundraiser to login page

document.getElementById("fund_login").addEventListener("click",function (){
    document.querySelector(".popup_F").classList.remove("active");
    document.querySelector(".popup").classList.add("active");
})

document.querySelector(".close_btn").addEventListener("click",() => {
    document.querySelector(".popup").classList.remove("active");
 
})



// fundraiser page js
document.getElementById("fundraiser").addEventListener("click",function (){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".popup_F").classList.add("active");
})

document.querySelector(".close_btn_F").addEventListener("click",() => {
    document.querySelector(".popup_F").classList.remove("active");
 
})





// Signup javascript

let signup_form=document.querySelector("#outer_popup_F")
let userData=JSON.parse(localStorage.getItem("userData")) || [];
signup_form.addEventListener("submit",function(event){
    event.preventDefault();
    let data={
        name:signup_form.name.value,
        email:signup_form.emailCreate.value,
        password:signup_form.Create_password.value,
        mobile:signup_form.mobile.value,
    }
    if(checkEmails(data.email)===true){
        userData.push(data);
        localStorage.setItem("userData",JSON.stringify(userData))
        alert("signup Successfull")


        window.location.reload();

        // signup_form.name.value="";
        // signup_form.emailCreate.value="";
        // signup_form.Create_password.value="";
        // signup_form.mobile.value="";

        // document.querySelector(".popup_F").classList.remove("active");
        document.querySelector(".popup").classList.add("active");


    }else{
        alert("Account Already Exist");
        document.querySelector(".popup_F").classList.remove("active");
        document.querySelector(".popup").classList.add("active");
        return;
    }
   
})

function checkEmails(email){
        let filtered=userData.filter(function(element){
            return email===element.email
        })
        if(filtered.length>0){
            return false;
        }else{
            return true;
        }
    }




document.querySelector('#image').addEventListener("click",function(){
    window.location.href="index.html";
  })




  
   
}



let login = () => {
    let login_form=document.querySelector("#outer_popup");
let userData=JSON.parse(localStorage.getItem("userData")) || [];
console.log(userData)
login_form.addEventListener("submit",function(event){
    event.preventDefault();
    let data={
        email:login_form.email.value,
        password:login_form.password.value,
    }
    console.log(data)
    if(checkSignin(data.email,data.password)==true){
        localStorage.setItem("signin",JSON.stringify(data));
        localStorage.setItem("login",true)
        alert("Sign in Successful");

        // login_form.email.value = ""
        // login_form.password.value = ""


        document.querySelector(".popup").classList.remove("active");
    }else{
       
        alert("Incorrect email or password.")
        window.location.reload();
       
        // login_form.email.value = ""
        // login_form.password.value = ""
    //    document.querySelector(".popup").classList.add("active");

       
        

    }
})
function checkSignin(email,password){
    let filter=userData.filter(function(element){
        return element.email==email && element.password==password;
    })
    if(filter.length>0){
        return true;
    }else{
        return false;
    }
}










   
}


















        
        

export {navBar, popup, login};
// export default navBar;