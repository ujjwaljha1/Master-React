const parentElement=document.getElementById("parent-continer")
const cardConatiner=document.createElement("div");
cardConatiner.classList.add("card-container","d-flex","gap-5rem")


//Creating card image element

const cardImage=document.createElement("img")
cardImage.classList.add("image")

cardImage.setAttribute("src","https://t4.ftcdn.net/jpg/05/76/98/51/240_F_576985183_nfEaQRw64qlH8rqjbLjtMrvkiQfRbagf.jpg")
cardImage.setAttribute("alt","lion")

//Creating card text element
const cardText=document.createElement("span");
cardText.innerText="The lion" 


cardConatiner.appendChild(cardText)

cardConatiner.appendChild(cardImage);

parentElement.appendChild(cardConatiner)