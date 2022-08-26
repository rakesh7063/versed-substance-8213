let navBar = () => {
    return `
       
    <div class="menu-bar">
    
   
    <ul>
        
            <li id="image"><a href="#"><img class="img_lo" src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?dpr=1.0&q=70&w=100"
                        alt="Ketto_logo"></a></li>
        

        <li><a href="#">Browse Fundraisers</a></li>


        <li><a href="#">Fundraise For <i class="fa fa-caret-down" aria-hidden="true"></i></a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">Medical Treatment</a></li>
                    <li><a href="#">NGO / Charity</a></li>
                    <li><a href="#">Other Cause</a></li>

                </ul>

            </div>





        </li>

        <li><a href="#">How It Works</a></li>
        <li><a class="non" href="#">|</a></li>
        <li ><a href="#"><i class="fa fa-search" aria-hidden="true"></i>Search </a></li>
        <li id="whatsapp"><a href="https://wa.me/919770525851" target="_blank"><i class="fa fa-whatsapp"
                    aria-hidden="true"></i>Chat</a></li>

        <li ><a id="fundraiser" href="#">Start a Fundraiser</a></li>
        <li id="signin_page"><a href="#">Sign In</a></li>

    </ul>

   

</div>





<form action="" class="outer_popup">
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
                <button id="user_login">Sign in</button>
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




           

          <form class="outer_popup">
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
                        <button id="signup_btn">Sign up</button>
                    </div>
                   
        
                </div>
            </div>

          </form>






    `
}


let popup = ()=>{
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




let signup_data_array=JSON.parse(localStorage.getItem("Signup_data_array"))||[];

let Signup_data=document.querySelector("#signup_btn");
Signup_data.addEventListener("click",signup)

function signup(){
   console.log("happy")
   
    let name=document.getElementById("name").value;
    let email=document.getElementById("emailCreate").value;
    let password=document.getElementById("Create_password").value;
    let mobile = document.getElementById("mobile").value;

    let s1=new User(name,mobile);
    console.log(email);
    s1.signup(email,password);
    
}
class User{
    
    constructor(name,mobile){
        this.name=name;
        this.mobile = mobile;
       
    }

    signup(email,password){
    
            this.email=email;
            this.password=password;
            
            let ans1=this.validate1(email);
            if(ans1==false){
            alert("User registered successfully");

            signup_data_array.push(this);
            console.log(signup_data_array);
            localStorage.setItem("Signup_data_array",JSON.stringify(signup_data_array));

            document.querySelector(".popup_F").classList.remove("active");
            document.querySelector(".popup").classList.add("active");
           
            }
            else{
                alert("User already exists");
            }
    
    }

    validate1(email){

        let filter1=signup_data_array.filter(function(element){
            return element.email===email;
        });

        if(filter1.length>0){
            return true;
        }
        else{
            return false;
        }
    }
   
}





// login page js






let students=JSON.parse(localStorage.getItem("Signup_data_array"))||[];
let form=document.querySelector("#user_login");
form.addEventListener("click",login)

function login(){
    
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let s2=new User2();
    
    s2.login(email,password);   
}

class User2{
    
    login(email,password){
        this.email=email;
        this.password=password;
        let ans1=this.validate1(email);
        let ans2=this.validate2(password);
        if(ans1==true && ans2==true)
        {
            alert("Login successful!")
            // localStorage.setItem("login", "true");
    document.querySelector(".popup").classList.remove("active");

            window.location.href= "index.html";
        }
        else if(ans1==true && ans2==false){
            alert("Wrong credentials");
        }
        else{
            alert("User doesn't exist, Sign Up");
            document.querySelector(".popup").classList.remove("active");
    document.querySelector(".popup_F").classList.add("active");
        }
    }
    validate1(email){

        let filter1=students.filter(function(element){
            return element.email===email;
        });

        if(filter1.length>0){
            return true;
        }
        else{
            return false;
        }
    }

    validate2(password){

        let filter2=students.filter(function(element){
            return element.password===password;
        })

        if(filter2.length>0){
            return true;
        }
        else{
            return false;
        }
    }
}


// document.getElementById("image").onclick = () =>{

//     window.location.href = "./fundraiser.html"
// }



}





        
        

export {navBar, popup};
// export default navBar;