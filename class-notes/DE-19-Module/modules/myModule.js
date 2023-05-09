console.log("module den selamlar");

export const CALISMA_SAATI = 40

export function topla(s1, s2) {
    return s1 + s2
}

let counter = 0

const inc = (miktar) => {
    counter += miktar
    return counter
}

const dec = (miktar) => {
    counter -= miktar;
    console.log(counter);
};

const benimAdim = "Ashley"

export { inc, dec, benimAdim }

//?1 sayfada sadece 1 tane export default yazılabilir
export default function ugurla() {

    console.log("Elveda JS Hosgeldin React");
}


