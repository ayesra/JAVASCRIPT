//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).

const yas=25;
console.log(yas);
console.log(typeof yas);

// yas=30
// !hata: const ile tanimlanan degisken degistirilemez

// const pi;
// !hata: const degiskenine baslangic atamasi yapmak yorunlu, yani once deger atamasi yapip sonra cagiririz

const isTrue=true;
console.log(typeof isTrue);

const dolar=1.5;
console.log(typeof dolar);

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil="javascript";
dil="java";
console.log(dil);

dil=true;
console.log(typeof dil);

let sayi=5;
console.log(7+sayi);

let sayi1="5";
console.log(7+sayi1);
//* 5i tirnakla yazinca string olarak algiladi o yüzden toplama isaretini saglikli yapmadi iki kelimeyi birlestirdi yani sayilari yanyana yazdirdi


isim="esra";
console.log(typeof isim);
//! otomatik olarak "var" olarak tanimlar


// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.

var sayi2=5;

sayi2=10;
console.log(sayi2);



console.log("**************************") 

var ilk="GLOBAL";
console.log(ilk);

{

    console.log(ilk);
    ilk="degistim"
    console.log(ilk);
    var ikinci="naber"
}

console.log(ilk);
console.log(ikinci);

//* var keyword ü kullanilinca block({}) icerisinde ve disarisinda erisebiliriz, block icinde tanimlanan degiskene disardan da erisebiliriz
console.log("*********************")


let first="osman";
console.log(first);

{
    console.log(first);

    first="hüseyin"
    console.log(first);
    let second="halit"
    console.log(second);
}
// console.log(second);--block da ki elemana disaridan erisemeyiz
console.log(first);

//! disarda yazdigimiz hersey baskalari tarafindan degistirilebilir-bozulabilir***ama süslü nün(blok) icinde yazdiklarimiz erisilemez

//! LET TEKI AYNI ISLEMLERI CONST ICIN DE YAPTIK

const erste="nihal"
console.log(erste);

{
    console.log(erste);
    // const erste="irfan"--tekrar tanimlanamaz
    const zweite="özlem"
    console.log(zweite);
}
// console.log(zweite);
//! const ve let icin scope(süslü{}) icinde olan scope icinde kalir, icerde atadigimiz degeri disarida yazdirmaz

