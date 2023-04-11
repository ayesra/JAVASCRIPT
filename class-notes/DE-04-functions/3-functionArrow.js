// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*Ornek1 3 ün katı mı diye kontrol etme
//************************************ */

const katMi=(sayi)=> sayi%3==0 ? "3 ün katidir" :"3 ün kati degildir"

console.log(katMi(25))

//* Örnek2:Menu fonksiyon
// ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu = () => {
    console.log("===========================");
    console.log("     JAVASCRİPT DERSİ      ");
    console.log("===========================");

}

menu();

//* Örnek3:Yas hesaplama*********************//

 // new Date()= bize şu anın tüm tarihini verir. .getFullYear() bu şekilde . ile istediğimiz tarihi çağırabiliriz (dakika saat gün ay vs)

const yasHesapla=(yil)=> new Date().getFullYear() -yil

 console.log( yasHesapla(1972))

 //   console.log(new Date().getHours());

 //* Örnek4:Silindir hacmi hesaplama************//
// toFixed(a)=virgüllü bir sayıda, virgülden sonra istediğimiz adette (a) rakam görmemizi sağlar
 
const hacimHesapla=(r,h)=> Math.PI*r*r*h

console.log(hacimHesapla(4,5).toFixed(4));

 //* ORNEK5: Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

const fibonacciNumber = (n) => {
    let fiboSol = 1;
    let fiboSag = 1;
    let yeniFibo = 0;
    let toplam = 2;

    for (let i = 1; i < n - 1; i++) {
        yeniFibo = fiboSol + fiboSag;

        fiboSol = fiboSag;

        fiboSag = yeniFibo;
        toplam += fiboSag;
    }
    console.log(toplam);
    return yeniFibo
    // return ` fiboSag: ${fiboSag} toplam: ${toplam}`;
};

alert(fibonacciNumber(8));