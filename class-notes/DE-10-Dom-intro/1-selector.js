//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================


//*example1 (buton style)

const buton= document.getElementById("btn")
//?her özellik icin böyle uzunca yamak yerine buton degiskenine atiyoruz ("const buton") böylece direk buton yazip cagiracagiz

buton.style.width="200px";
buton.style.height="80px";
buton.style.fontSize="40px";
buton.style.color="yellow";
buton.style.backgroundColor="red";

//*example2 (paragraf style)

const paragraf= document.getElementById("par")

paragraf.style.backgroundColor="gray";
paragraf.style.color="orange";
paragraf.style.fontSize="50px";
paragraf.style.padding="5px";

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
//*================================================

//*example3 (img style)

const resim= document.getElementsByTagName("img")
console.log(resim)//HTML collectionn u döndürdü

resim[0].style.width="300px"
resim[1].style.border="5px solid red"

//* ======================================================
//*               GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================

const baslik= document.getElementsByClassName("H1")

baslik[0].style.color="red";
baslik[1].style.textAlign="center";

//?array i degistirmeyen metodlari kullanabilirsiniz

for(let i=0; i < baslik.length; i++){

    baslik[i].style.color="purple";
    baslik[i].style.fontSize="50px";
 
}
//?tüm basliklara ayni özellikleri vereceksek tek tek yazmak yerine bu sekilde for döngüsüyle tek seferde verilebilir


baslik[0].innerHTML ="<a href='https://www.clarusway.com/'>DOM COK KOLAY</a>"
// baslik[1].innerHTML="NAPIYORSUN" //MERHABA basligini degistirdim
baslik[1].textContent="IYIMISIN"


//! "inner.HTML" ile yazinin kenidisi de yapisini da (basligi link e cevirmek gibi)degistirebilirsiniz ********sadece yaziyi(icerik) degistirmek istiyorsak "textContent" kullanabiliriz**
//! DOM SELECTOR yazan H1 etiketini DOM COK KOLAY yazan a etiketiyle degistirdim

//* ======================================================
//*                  QUERYSELECTOR,QUERYSELECTORALL
//*======================================================

document.querySelector("title").textContent="DOM MANIPULATION 💚"

document.querySelector("#badi").style.backgroundImage="linear-gradient(green,pink)"

document.querySelector(".H2").style.color="pink"

const parag= document.querySelectorAll("p")
console.log(parag);//NodeList i döndürdü 
//? console.log ile bize neyi getirdigini görebiliriz, yani yazdigimiz kodun neyle oynayacagini görmek istedigimizde bu sekilde görebiliriz 

parag[1].style.fontSize="70px";

// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. indeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği (length) vardır.


// HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
//!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.


