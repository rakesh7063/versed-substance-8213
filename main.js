

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

document.querySelector("#Updates").addEventListener("click", ()=> Updates())
let Updates = () => {

    document.querySelector(".append").innerHTML=null

    let div1 = document.createElement("div")
    div1.setAttribute("class","div1")

    let text = document.createElement("p")
    text.innerText = "Feel free to ask Family Friends for a new update on this Fundraiser."
    
    let pooja = document.createElement("button")
    pooja.innerText="Ask for update"
    
    let span = document.createElement("span")
    span.append(pooja)

    div1.append(text,span)

    let div2 = document.createElement("div")
    div2.setAttribute("class","div2")

    let head2 = document.createElement("h2")
    head2.innerText="Latest Update"

    div2.append(head2)

    let div3 = document.createElement("div")
    div3.setAttribute("class","div3")

    let text2 = document.createElement("p")
    text2.innerText="Abir, now 13 years of age, with his second time relapse with Cancer his journey has been long and tough along with the ongoing treatment After recovering from Covid -19 recently and being affected by the virus for the third time due to his weak immune system it has been a tough time on him, Continuous infections and transfusions with side effects of High fevers with chills & body aches have kept him from leading a regular life of kids of his age, long hospital stays/Visits on a regular basis with countless poking & tests have now become a part of his daily life. His overall health condition is being watched very closely. Putting on weight due to the chemotherapy & steroids to hair fall, not being able to move out of bed due to weakness are some of the lesser side reactions & complications of CAR T-cell therapy. Missing school or not having friends adds to this pain and suffering yet he finds small things to keep himself happy, the anxiety of hospital and the poking scares him now, As getting the IV into the vein sometimes is very painful especially if poked multiple times. He is a true fighter and fights with all his strength. Your kind souls have donated generously and continue to do so. Abir strongly believes that his angels will come to his rescue and save him. My heartfelt gratitude to everyone who supported and still continues to support Abir through his journey. I hope you will continue to support Abir and be with him at every step. Requesting everyone to kindly share our fundraiser. Thank you once again."

    div3.append(text2)

    let div4 = document.createElement("div")
    div4.setAttribute("class","div4")

    let text3 = document.createElement("p")
    text3.innerText="Did you know that every FB share gets 1 more donation. Help spread the word!"

    let i = document.createElement("i")
    i.setAttribute("class","fa-brands fa-facebook-f")

    let p = document.createElement("p")
    p.innerText="Spread the word"
    let spread = document.createElement("button")

    spread.append(i,p)

    let span2 = document.createElement("span")
    span2.append(spread)
    div4.append(text3,span2)

    document.querySelector(".append").append(div1,div2,div3,div4)
}


let 