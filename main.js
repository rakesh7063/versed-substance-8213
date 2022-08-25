let id;


let querydata = async()=>{
    let q = document.getElementById("search").value;

    let res = await fetch(`https://thawing-taiga-91949.herokuapp.com/api/All_Categories?q=${q}`);
    res = await res.json();
    return res;

}

let getdata = async()=>{
    let res = await fetch(`https://thawing-taiga-91949.herokuapp.com/api/All_Categories`);
    res = await res.json();
    append(res);
    console.log(res);
}
getdata();


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
    container.append(sub_div)
   });

}

let edu = async() =>{
    let res = await fetch(`https://thawing-taiga-91949.herokuapp.com/api/education`);
    res = await res.json();
    append(res);
    console.log(res);
}
let medicl = async() =>{
    let res = await fetch(`https://thawing-taiga-91949.herokuapp.com/api/medical`);
    res = await res.json();
    append(res);
    console.log(res);
}

let changecategories = async () =>{
let cat = document.getElementById("categories").value;

let res = await fetch(`https://thawing-taiga-91949.herokuapp.com/api/All_Categories?category=${cat}`);

res = await res.json();
append(res);
}

let changetypes = async() =>{
    let type = document.getElementById("types").value;
    let res = await fetch(`https://thawing-taiga-91949.herokuapp.com/api/All_Categories?type=${type}`);

    res = await res.json();
    append(res);

}

let changelocation = async() =>{
    let location = document.getElementById("locations").value;
    let res = await fetch(`https://thawing-taiga-91949.herokuapp.com/api/All_Categories?location=${location}`);

    res = await res.json();
    append(res);

}

let main = async() =>{
    let res = await querydata();
    append(res);
}

let debouncing = (func,delay) =>{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
        func();
    },delay);
}