let page = 1;

let getData = async () =>{
    const uri = `https://peaceful-sierra-35888.herokuapp.com/api/data?_page=${page}&_limit=3`;
    let res = await fetch(uri);
    let data = await res.json();
    append(data)
    console.log(page)
}

  let append = (data) =>{
    let container = document.getElementById("container");
    container.innerHTML = null
 
    data.forEach(({image,title,avatarimg,name,raised,lastdonation,items_2,items_4}) => {
 
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
     img.src = image;
     Title.innerText = title;
     Title.setAttribute("class","Title")
     img.setAttribute("class","main_img");
     aimg.src = avatarimg;
     aimg.setAttribute("class","avtar_img")
     hname.innerText = name;
     hname.setAttribute("class","helper")
     raised_count.innerText = `₹ ${raised}`;
     ldonate.innerText = lastdonation;
     ldonate.setAttribute("class","donate")
     days.innerText = `${items_2}`;
     supports.innerText = `${items_4}`;
 
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
     sub_div.append(img,Title,profile_details,count,ldonate,bar,details_suports);

// ******


     container.append(sub_div)
    });
 
 }
 getData()

let left = () =>{
    page--;
    getData()
    if(page < 0){
        page =data.length-1
    }
    // console.log(page)
}
let right = ()=>{
    page++;
    getData()
    // console.log(page)
    
}