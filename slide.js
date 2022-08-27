import {navBar,popup,login} from "../scripts/navbar.js"
document.getElementById("menu-bar").innerHTML = navBar();
import footer from "../scripts/footer.js"
document.getElementById("footer_append").innerHTML = footer();
popup()
login()


let data = [
    {
      "image": "https://kettocdn.gumlet.io/media/campaign/212000/212655/image/wid1f1a33100b0ce11487774ca00c4341f7d0364e69.jpg?w=300&dpr=1.3",
      "title": "My little boy’s cancer has relapsed twice but I’m helpless. Please save him",
      "avatarname": "FF",
      "name": "by Family Friends",
      "raised": "4,12,02,432",
      "lastdonation": "Last donation an hour ago",
      "items_2": 27,
      "items_4": 21313,
      "avatarimg": "https://kettocdn.gumlet.io/media/individual/3931000/3931537/image/61d01756407c7.jpg?w=50&dpr=1.3",
      "category": "medical",
      "type": "trending",
      "location": "banglore",
      "id": 1
    },
    {
      "image": "https://kettocdn.gumlet.io/media/campaign/180000/180773/image/wid6089ceb85c0bd.jpeg?w=300&dpr=1.3",
      "title": "Feeding From Far-Ration Distribution Amid Lockdown",
      "avatarname": "",
      "name": "by Pooja Reddy",
      "raised": "4,81,33,147",
      "lastdonation": "Last donation 9 hours ago",
      "items_2": 131,
      "items_4": 12541,
      "avatarimg": "https://kettocdn.gumlet.io/media/individual/1463000/1463388/image/62c32feb56031.jpg?w=50&dpr=1.3",
      "category": "medical",
      "type": "taxBenefit",
      "location": "delhi",
      "id": 2
    },
    {
      "image": "https://kettocdn.gumlet.io/media/campaign/218000/218792/image/wid60326899153a5.jpeg?w=300&dpr=1.3",
      "title": "Help father and his 20-year old son, Father-Kidney transplant, Son- Bone marrow transplant. Please save the family",
      "avatarname": "",
      "name": "by Mansi Singh",
      "raised": "1,55,76,807",
      "lastdonation": "Last donation an hour ago",
      "items_2": 39,
      "items_4": 12448,
      "avatarimg": "https://kettocdn.gumlet.io/media/individual/1825000/1825515/image/c245e813135d280903977246f606453166a2762c.jpeg?w=50&dpr=1.3",
      "category": "medical",
      "type": "taxBenefit",
      "location": "pune",
      "id": 3
    },
    {
      "image": "https://kettocdn.gumlet.io/media/campaign/193000/193220/image/wid608d82ab48f8a.png?w=300&dpr=1.3",
      "title": "Enrich Lives Foundation -  Supporting the needy through the COVID-19 crisis!",
      "avatarname": "",
      "name": "by Enrich Lives Foundation",
      "raised": "1,55,25,812",
      "lastdonation": "Last donation 19 hours ago",
      "items_2": 50,
      "items_4": 4674,
      "avatarimg": "https://kettocdn.gumlet.io/media/individual/1562000/1562376/image/63013888dd5da.jpg?w=50&dpr=1.3",
      "category": "education",
      "type": "trending",
      "location": "mumbai",
      "id": 4
    },
    {
      "image": "https://kettocdn.gumlet.io/media/campaign/167000/167947/image/wid57beaf6d360986134ecdbd89657dd6a2b901a548.jpg?w=300&dpr=1.3",
      "title": "Wife Fears She Will Lose The Father Of Their 2-Year-Old Daughter To Brain Haemorrhage. Please Help.",
      "avatarname": "",
      "name": "by Rachit Shrivastava",
      "raised": "1,09,36,155",
      "lastdonation": "Last donation an hour ago",
      "items_2": 39,
      "items_4": 7078,
      "avatarimg": "https://kettocdn.gumlet.io/media/individual/1358000/1358229/image/5e58e4fc7b807.jpg?w=50&dpr=1.3",
      "category": "medical",
      "type": "taxBenefit",
      "location": "delhi",
      "id": 5
    },
    {
      "image": "https://kettocdn.gumlet.io/media/campaign/372000/372126/image/wid01ce2a07f56735f26b62aac7c317696e57f1c3f9.png?w=300&dpr=1.3",
      "title": "Help 7yrs old Paarnikka beat Cancer",
      "avatarname": "",
      "name": "by Rm Agarwal",
      "raised": "1,05,68,319",
      "lastdonation": "Last donation an hour ago",
      "items_2": 39,
      "items_4": 5107,
      "avatarimg": "https://kettocdn.gumlet.io/media/individual/3931000/3931537/image/61d01756407c7.jpg?w=50&dpr=1.3",
      "category": "medical",
      "type": "trending",
      "location": "delhi",
      "id": 6
    },
    {
      "image": "https://kettocdn.gumlet.io/media/campaign/281000/281759/image/wid60211afcc8a19.png?w=300&dpr=1.3",
      "title": "Offer A Helping Hand To Support Rubina Rodgers' Treatment",
      "avatarname": "",
      "name": "by Sabapathy J",
      "raised": "62,18,025",
      "lastdonation": "Last donation 6 hours ago",
      "items_2": 50,
      "items_4": 2202,
      "avatarimg": "https://kettocdn.gumlet.io/media/individual/2197000/2197737/image/5fb377319fef9.jpg?w=50&dpr=1.3",
      "category": "medical",
      "type": "trending",
      "location": "delhi",
      "id": 7
    },
    {
      "image": "https://kettocdn.gumlet.io/media/campaign/277000/277698/image/wid5fa2de60a1557.jpeg?w=300&dpr=1.3",
      "title": "Schooling Special needs Children with Custom Education",
      "avatarname": "",
      "name": "by Nithilyam Spastic Children welfare trust",
      "raised": "48,78,677",
      "lastdonation": "Last donation a day ago",
      "items_2": 7,
      "items_4": 2478,
      "avatarimg": "https://kettocdn.gumlet.io/media/ngo/2169000/2169187/image/607ea638e3612.jpg?w=50&dpr=1.3",
      "category": "education",
      "type": "taxBenefit",
      "location": "mumbai",
      "id": 8
    },
    {
      "image": "https://kettocdn.gumlet.io/images/fundraiser-default-image.jpg?w=300&dpr=1.3",
      "title": "My 9 year only child is suffering From Brain tumor (Gliobastoma WHO Grade IV).",
      "avatarname": "BM",
      "name": "by Bhautik Mehta",
      "raised": "56,44,651",
      "lastdonation": "Last donation 8 hours ago",
      "items_2": 23,
      "items_4": 1518,
      "avatarimg": "https://kettocdn.gumlet.io/media/individual/3931000/3931537/image/61d01756407c7.jpg?w=50&dpr=1.3",
      "category": "medical",
      "type": "trending",
      "location": "delhi",
      "id": 9
    }
  ]



let index = 0;


//   let append = (data) =>{
//     let container = document.getElementById("container");
//     container.innerHTML = null
 
//     data.forEach(({image,title,avatarimg,name,raised,lastdonation,items_2,items_4}) => {
 
//      let img = document.createElement("img");
//      let Title = document.createElement("h3");
//      let aimg = document.createElement("img");
//      let hname = document.createElement("p");
//      let raised_count = document.createElement("h3");
//      let ldonate = document.createElement("h3");
//      let days = document.createElement("h3");
//      let supports = document.createElement("h3");
//      let dayl = document.createElement("p");
//      dayl.innerText = "Days Left";
//      dayl.setAttribute("class","dayl")
//      let supporters = document.createElement("p");
//      supporters.innerText = "Supporters";
//      supporters.setAttribute("class","support")
//      let raisec = document.createElement("p");
//      raisec.innerText = "raised";
//      raisec.setAttribute("class","raisec")
 
//      let bar = document.createElement("hr");
//      bar.setAttribute("class","pbar")
//      img.src = image;
//      Title.innerText = title;
//      Title.setAttribute("class","Title")
//      img.setAttribute("class","main_img");
//      aimg.src = avatarimg;
//      aimg.setAttribute("class","avtar_img")
//      hname.innerText = name;
//      hname.setAttribute("class","helper")
//      raised_count.innerText = `₹ ${raised}`;
//      ldonate.innerText = lastdonation;
//      ldonate.setAttribute("class","donate")
//      days.innerText = `${items_2}`;
//      supports.innerText = `${items_4}`;
 
//      let profile_details = document.createElement("div");
//      profile_details.append(aimg,hname);
//      profile_details.setAttribute("class","profile")
 
//      let count = document.createElement("div");
//      count.append(raised_count,raisec)
//      count.setAttribute("class","count")
 
//      let details_suports = document.createElement("div");
//      details_suports.append(days,dayl,supports,supporters);
//      details_suports.setAttribute("class","details")
 
//      let sub_div = document.createElement("div");
//      sub_div.setAttribute("id","subcont")
//      sub_div.append(img,Title,profile_details,count,ldonate,bar,details_suports);

// // ******


//      container.append(sub_div)
//     });
 
//  }

let sidebar = ()=>{
    let container = document.getElementById("container");
    container.innerHTML = null;
    for(let i = index; i<index+3; i++){
        let img = document.createElement("img");
        let Title = document.createElement("h3");
        let aimg = document.createElement("img");
        let hname = document.createElement("p");
        let raised_count = document.createElement("h3");
        let ldonate = document.createElement("h3");
        let days = document.createElement("h3");
        let supports = document.createElement("h3");
        let dayl = document.createElement("p");
        dayl.innerText = "Days Left";
        dayl.setAttribute("class","dayl")
        let supporters = document.createElement("p");
        supporters.innerText = "Supporters";
        supporters.setAttribute("class","support")
        let raisec = document.createElement("p");
        raisec.innerText = "raised";
        raisec.setAttribute("class","raisec")
    
        let bar = document.createElement("hr");
        bar.setAttribute("class","pbar")
        img.src =data[i].image;
        Title.innerText = data[i].title;
        Title.setAttribute("class","Title")
        img.setAttribute("class","main_img");
        aimg.src =data[i].avatarimg;
        aimg.setAttribute("class","avtar_img")
        hname.innerText =data[i].name;
        hname.setAttribute("class","helper")
        raised_count.innerText = `₹ ${data[i].raised}`;
        ldonate.innerText =data[i].lastdonation;
        ldonate.setAttribute("class","donate")
        days.innerText = `${data[i].items_2}`;
        supports.innerText = `${data[i].items_4}`;
    
        let profile_details = document.createElement("div");
        profile_details.append(aimg,hname);
        profile_details.setAttribute("class","profile")
    
        let count = document.createElement("div");
        count.append(raised_count,raisec)
        count.setAttribute("class","count")
    
        let details_suports = document.createElement("div");
        details_suports.append(days,dayl,supports,supporters);
        details_suports.setAttribute("class","details")
    
        let sub_div = document.createElement("div");
        sub_div.setAttribute("id","subcont")
        let btn_div = document.createElement("div");
        let fb_btn = document.createElement("button");
        let btn_img = document.createElement("img");
        btn_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAXVBMVEU6VZ////82Up5MZKjX2+kuTZuBkL4pSpq+xdsmR5n5+vyrs9Bjdq9dcq0eQpfv8fdTaag/WaFxgbWmr8+wudTm6PHN0uPf4u1pfLMFOJOWoccRPJSNmsNFXaO3vtiq7vThAAABrUlEQVR4nO3Y2ZKCMBAFUCYkhqAsooLC6P9/pvimECADna5Yc+9zqnLMRrdRhCAIgiAIgnxjhC28At3lUVxmoxz5CHlUnWSR/oyTHphWQ+j4fLEAWBUmTqYIbAqhTzMGJoUq5SyCRaEPxTyCQ6GrBQOHQi0j/CtEvLQdHIq8WUZ4VyxcUR6FiG0PNrfCzL2YXAqROS2FZ4XZOyF8KxxuqXeFcHiw/CvcrukrXhX19K9v5Hsyn4qpY1Ffb13+Hp+HU00gWqU8zjqImFDsOz5Dr7hbETLnRPQfEauiYtyOSUURM3diVkXD14fNKCTvUkABBRRQQAHF32ZVn9HWKkdqNQ4hItsN8mtTXIaj+lR062POtkmd0tAVga5NqSUPE4Ki1SEoCAviDYqS8HSuVqT3EBQFmWGLoiZ8tdYrErorskGxD0LRBrEj1yAUlP3zegXdV2SDoriFoJCU/zCtViRB7AjlRV2v2JEq1lZ8hFVnFKldMoxtzmI46EFYXbwY+jPmaFNIMxim/TYo/7k3gwIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiig+F7FE+dvHu3uM7wHAAAAAElFTkSuQmCC";
        let btn_p = document.createElement("p");
        btn_p.innerText = "Share";
        fb_btn.append(btn_img,btn_p);
        fb_btn.id = "fb_btn";
        let don_btn = document.createElement("button");
        don_btn.innerText = "donate";
        don_btn.id = "don_btn"
        btn_div.append(fb_btn,don_btn)
        btn_div.id = "btn_div"
        sub_div.append(img,Title,profile_details,count,ldonate,bar,details_suports,btn_div);   
   
   
   
        container.append(sub_div)
    }
}


let left = () =>{
    index--;
    if(index < 0){
        index = data.length-3
    }
    sidebar()
    console.log(index)
}
let right = ()=>{
    index++;
    if(index == data.length-2){
        index = 0
    }
    sidebar()
     console.log(index)
    
}
sidebar()