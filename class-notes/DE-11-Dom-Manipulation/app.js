document.querySelector("h1").style.color = "red"
document.querySelector("h1").style.textAlign = "center"

let resim=document.querySelector(".resim")

let ses1=document.querySelector(".ses1")


//!ara butonu tiklandiginda

document.querySelector(".ara").onclick=()=>{

    resim.src="./img/img.gif"
    //play komutu html de ki audio etiketini js de calistirir
    ses1.play()
    //bu sekilde sesin volümünü 0 ile 1 arasinda bir deger vererek ayarlayabiliriniz
    ses1.volume=0.1

}

//!baglat butonu tiklandiginda

document.querySelector(".baglat").onclick=()=>{

    resim.src="./img/telbagla.gif"
    //pause() komutuyla calan audio nun sesini durdurabilirsiniz
    ses1.pause()

}

//!konus butonu tiklandiginde

document.querySelector(".konus").onclick=()=>{
    resim.src="./img/telefon.gif"
    ses1.pause()
}

//!maus ile resmin üzerine gelince

// resim.onmouseover=()=>{}
resim.addEventListener("mouseover",()=>{

    resim.src="./img/aslan1.jpeg"
   
})

//!maus ile resmin üzerinden ayrilinca

resim.addEventListener("mouseout", () =>{
    
    resim.src="./img/aslan2.jpeg"
})

//!klavyeden input a veri girisi yapilirken elimizi tustan cektigimizde var olan degisiklik

const textInput=document.querySelector(".textbox")
const tikInput=document.querySelector(".checkbox")

//?onkeyup=klavyedeki tustan elini cektiginde

//checked=metodu checkbox inputun tikli olup olmadigini kontrol eder, tiklanmissa true döndürür

textInput.onkeyup=()=>{
   if(tikInput.checked){
    textInput.value=textInput.value.toUpperCase()
   }else{
       textInput.value = textInput.value.toLowerCase()
   }
}

//input a veri girisi yaptigimizda kucuk input tikli ise benim input a girdigim harfleri büyüt, aksi durumda kücült

//! listenin basina "Programlama Dilleri" h1 etiketi eklemek
//!-----UZUN YOL-------//

//?  HTML de H1 elementi olusturmak
const baslik=document.createElement("h1")

//? "baslik2" class ismi atayalim
baslik.className="baslik2"

//?"Programlama Dilleri" seklinde text olusturduk
const yazi=document.createTextNode("Programlama Dilleri")

//? h1 elementi icin olusturulan text'in h1 e child yapilmasi
baslik.appendChild(yazi)

//? input div'in sonrasina h1'i ekledim
document.querySelector(".input-div").after(baslik)

//!-------KISA YOL----------//

const bolum=document.querySelector("section")

bolum.innerHTML=`<h1 class="baslik2 text-center">Programlama Dilleri</h1>` + bolum.innerHTML
//farkli yazim::: bolum.innerHTML=`<h1 class="baslik2 text-center">Programlama Dilleri</h1> ${bolum.innerHTML} `


//! languages input'una girilen degerleri ul'ye eklemek

//!uzun yol

const dil = document.querySelector(".languages");

//* yeni girilen satiri saklamak icin bir li olusturduk.

//  const yeniLi= document.createElement("li")

//* yeni li icin textnode olusturduk
//   const text=document.createTextNode(dil.value)

//*olusturdugumuz texnode'u yeni li'ye bagladik.
// yeniLi.appendChild(text)

//* yeni eklenen satiri var olan listeye (ul) baglayalim.

const liste = document.querySelector(".liste");

//   liste.appendChild(yeniLi)

document.querySelector(".ekle").onclick = () => {
    //?kısayol
    liste.innerHTML += ` <li> ${dil.value} </li>`;

    //*ekle ye basınca input un içi boşalsın
    dil.value = "";
};

//! sil butonuna basılınca ul listesinden li elemanını silmek için removeChild metodunu kullanacağız

document.querySelector(".sil").onclick = () => {
    liste.removeChild(liste.lastElementChild); //ul nin son çocuğunu siler
    //* liste.removeChild(liste.firstElementChild); //ul nin ilk çocuğunu siler
    //* liste.removeChild(liste.children[2]); //ul nin çocuklarından 2 index liyi siler
};

//!klavyedeki keyCodeları kullanarak kod yazma
// dil=input
dil.onkeydown = (tus) => {
    // console.log(tus);event larda alınan parametreler (tus) bize event la ilgili özelliklerin olduğu bir nesne döndürür. burada keyCode property sini kullandık

    //!enter=13 e basılınca
    if (tus.keyCode == 13) {
        document.querySelector(".ekle").click();
    }
    //*eğer delete =46 veya control=17  veya shift=16 tuşuna basılırsa sil butonu tetiklensin
    if (tus.keyCode == 16) {
        document.querySelector(".sil").click()

    }

};







