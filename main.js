document.querySelector("#about").addEventListener("click", ()=> aboutOn())
let aboutOn = () =>{
    let about = document.querySelector("#about")
    about.classList.toggle(".krKeDekho")

    document.querySelector(".append").innerHTML=null
    let details = document.createElement("div")
    details.classList="clickAbout"

    let h2 =document.createElement("h2")
    h2.classList="h2"
    h2.innerText = "About the Fundraiser"

    let p = document.createElement("p")
    p.classList="p1"
    p.innerText = "As the country heals, it still feels like we're lagging where hunger still remains an urgency even if the pandemic is not.If it was bad, it's becoming even worseThe people have suffered for nearly 2 years now, and very soon, we will reach to point of HUNGER CRISIS; they will die of HUNGER before the virus hits them Who are we? Feeding From Far is an initiative that has been feeding the poor and unemployed who are struggling to feed themselves during the lockdown. We managed to distribute over 30 lakh meals to the needy since the first lockdown hit through cooked meals and ration kits."

    let img = document.createElement("img");
    img.classList="img1"
    img.src = "https://kettocdn.gumlet.io/media/campaign/180000/180773/image/607c8f9aadc90.jpeg?w=700&dpr=1.0";

    let read = document.createElement("button");
    read.classlist="read-btn1"
    read.onclick = ()=>readMore()
    read.innerText = "Read more"

    details.append(h2,p,img,read)
    document.querySelector(".append").append(details)

}
let readMore = ()=> {
    
}
