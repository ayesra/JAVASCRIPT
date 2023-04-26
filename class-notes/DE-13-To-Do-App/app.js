let liste = []
//! boş liste hem database işini kolaylaştırır, hem ul ye eklenen verinin aynısı tekrar eklenmesin demek için bütün p leri çağır içeriğinde input.value varsa ekleme, demeli ama p oluşmadan bunu diyemeyiz, bu şekilde liste dizisine eklenen veri globalde old için içeriğine (includes) her yerden bakılabilir

let total = 0;
let completed = 0;

const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");

//!"Add" butonuna basildiginda olacaklar

listeButon.onclick = () => {
    if (!listeInput.value) {
        alert("lütfen bir not giriniz")
        //! input a girilen veri (Add e basınca) daha önce listeye girildiyse, tekrar girilmesin, boş dön, bu kontrolü mesela ekrandaki li leri çekerek yapamayız, çünkü includes yada forEach ler dizi de çalışır
    } else if (liste.includes(listeInput.value)) {
        return;
        //return=if'in icindeki sart true ise hicbirsey yapma, koda alt satirdan devam et
    } else {

        liste.push(listeInput.value);

        total += 1
        //!ekranda listeyi ve total'i göster
        listeUl.innerHTML = `<li>
    <i class="fa fa-check fa-lg"></i>
    <p>${liste[liste.length - 1]}</p>
    <i class="fa fa-trash fa-lg"></i>
    </li>`+ listeUl.innerHTML;
        toplam.textContent = total
        //! 2. p ekrana basma yolu
        // <p>${listeInput.value}</p>

        listeInput.value = ""

        //*"focus":her li girisinde cursor kendiliginden inputta kalsin
        listeInput.focus()
    }

    //!silme metodu, ekrana basildiginda ekrana basildigi süslü de olmali, disarida fa-trash'lara tiklayinca, remove mantikli degil, ortada fa-trash daha olusmadan (add butonuna basilmadan) js ye cagirmak gibi oluyor
    //?trash butonuna tiklaninca
    createSilButon()
    //!check
    createCheckButon()
}

const createSilButon = () => {

    //? ul de ki bütün fa-trash lara ulas
    document.querySelectorAll(".fa-trash").forEach((a) => {

        a.onclick = () => {

            // console.log(a.parentElement);
            //!listeden silme
            //console.log(a.closest("li").querySelector("p").textContent)
            //! closest=herhangi bir elemanın istediğiniz uzaklıktaki parent ına götürür. yani a.parentElement.parentElement.parentElement ile 3. babaya ulaşabilirken closest ile 3. babanın adını yazarak direk ulaşabiliriz

            liste = liste.filter((yapilacak) => yapilacak != a.closest("li").querySelector("p").textContent)
            console.log(liste);

            //!ekrandan silme; sadece ekrandan silersek ve sonrasinda diziyi bastirmaya kalkarsak eleman halen dizide bulundugu icin yanlis cevap aliriz--console da görünmeye devam eder bu sebeple silindi görülen bir deger tekrar eklenildiginde altta zaten mevcut oldugu icin eklemez
            a.parentElement.remove()
            total = total - 1
            toplam.textContent = total;
        }
    })
}


const createCheckButon = () => {
    //! Target özelliği, her zaman olay dinleyicisinin olayı tetiklediği öğeye başvuran currentTarget özelliğinin aksine, olayın orjinal olarak gerçekleştiği öğeyi alır .

    listeUl.onclick = (e) => {
        console.log(e.target.parentElement.classList);

        // if(e.target.parentElement.className=="checked"){
        // e.target.parentElement.className="ayse"

        // }else{e.target.parentElement.className="checked"}

        if (e.target.parentElement.classList.contains("checked")) {
            e.target.parentElement.classList.remove("checked");
            completed=completed-1

        } else {
            e.target.parentElement.classList.add("checked");
            completed=completed +1
        }
        document.querySelector("#tamamlanan").textContent=completed
    }
    // !! classList ve className sonuç istendiğinde aynı sonucu verir tek farkla; classList bir liste, className bir isim şeklinde verir. bunun tek dezavantajı, zaten class ı olan bir elemana className="örnek" şeklinde eleman atamak istersek, varolan elemanları silip sadece örnek class ı nı atar. classList ile toggle ve contains kullanmalıyız, className ile toggle kullanamıyoruz contains yerine includes kullanmalıyız, javascriptte includes tercih edilir
}

 //   //!2.yol
  //  document.querySelectorAll(".fa-check").forEach((a) => {
  //    a.onclick = () => {
 
  //       if (a.parentElement.className=="checked")
  //        {
 
  //         a.parentElement.className=""
  //         completed = completed - 1;
  //       } else {
 
  //         a.parentElement.className = "checked";
  //         completed = completed + 1;
  //       }
  //      document.querySelector("#tamamlanan").textContent = completed;
  //    };
  //  })