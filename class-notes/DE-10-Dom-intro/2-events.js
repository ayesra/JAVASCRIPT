//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------

//****/ alttaki satirlari HTML sayfasinda yazdik***//
{/* <h1 onmouseover="style.color='blue'" onmouseout="style.color='red'">JAVASCRIPT TE DOM</h1> */}

//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------


//JAVASCRIPT
const baslik= document.querySelector(".H5")

const yesil=()=>baslik.style.color="green";
//* "yesil" diye bir fonksiyona atadik***"yesil" diye bir fonksiyon cagirildiginda yesil yap***

const kirmizi=()=>baslik.style.color="red";

//*index.html deki kod
//  < !--* javascript dosyasinda belirlenen metodlari html sayfasinda cagirdik-- >
//     <h1 class="H5" onmouseover=yesil() onmouseout = kirmizi() > DOM BASICS</h1 >

//? METHOD-3 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------

//*example1

document.querySelector("#js").onmouseover=()=>{

    document.querySelector("#badi").style.backgroundColor="pink"
}

document.querySelector("#js").onmouseout = () => {

    document.querySelector("#badi").style.backgroundColor = "red"
}

//!!!iki kere ayni islami yazmak yerine const ile isim atayabiliriz*****asagidaki gibi yazabiliriz****
//example1
// const js = document.querySelector("#js");
// const badi = document.querySelector("#badi");
// js.onmouseover = () => {
//     badi.style.backgroundColor = "pink";
// };
// js.onmouseout = () => {
//     badi.style.backgroundColor = "red";
// }; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//*example2 (onclick- ondblclick)

//logo bir ile ikinin tiklandiklarinda yerlerini degistirecegiz
const birinci=document.querySelector(".bir")
const ikinci=document.querySelector(".iki")


birinci.onclick = () => {
    birinci.src = "./img/logo2.png"
    ikinci.src = "./img/js_logo.png";
     
    ikinci.onclick = () => {
    birinci.src = "./img/js_logo.png"
    ikinci.src = "./img/logo2.png"
  }
}
// alternatif yazim sekli: const la da yazilabilir
// birinci.onclick = () => {
//     birinci.src = "./img/logo2.png"
//     ikinci.src = "./img/js_logo.png"
//     icerde()
// }

// const icerde = () => {
//     ikinci.onclick = () => {
//         birinci.src = "./img/js_logo.png"
//         ikinci.src = "./img/logo2.png"
//     }
// }


ikinci.ondblclick=()=>{
    birinci.src = "./img/img1.jpg"
    ikinci.src = "./img/img2.jpg"
}


//*example3
const buton=document.querySelector("#btn")

buton.onclick=()=>{
    badi.style.backgroundImage="linear-gradient(to right, purple, gray)"

    buton.textContent="SEARCH"
    buton.style.fontSize="40px"
    buton.style.color="red"
}

//!aynı element e (merhaba yazısına mouse ile gelince badi renk değiştirdin demiştik) hem onclick hem onmouseover atandığında, önce onmouseover  sonra onclick i çalıştırırsanız sorun olmaz, tersi durumda onclick baskın old için onmouseover çalışmaz



