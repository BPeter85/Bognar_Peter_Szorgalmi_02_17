let aHalmaz = [];
let bHalmaz = [];

for (let i = 0; i < 10; i++) {
  aHalmaz.push(Math.round(Math.random() * 20));
}

for (let i = 0; i < 10; i++) {
  bHalmaz.push(Math.round(Math.random() * 20));
}

document.write("<br>Az A halmaz elemei: ");
for (let i = 0; i < aHalmaz.length; i++) {
  document.write(aHalmaz[i] + ", ");
}

document.write("<br>Az B halmaz elemei: ");
for (let i = 0; i < bHalmaz.length; i++) {
  document.write(bHalmaz[i] + ", ");
}

//////////////////////////////

let kulombsegSzuretlen = [];

for (let i = 0; i < aHalmaz.length; i++) {
  kulombsegSzuretlen.push(aHalmaz[i]);
}

for (let i = 0; i < bHalmaz.length; i++) {
  kulombsegSzuretlen.push(bHalmaz[i]);
}
document.write("<hr>");
document.write("Halmazok elemei szűretlenűl: " + kulombsegSzuretlen);
////////////////////////////////
document.write("<hr>");

let kulmbsegA = (arrayA, arrayB) => {
  let arrayNew = [];
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      if (arrayA[i] === arrayB[j]) {
        arrayNew.push(arrayA[i]);
      }
    }
    let szerepelE = false;
    for (let k = 0; k < arrayNew.length; k++) {
      if (arrayA[i] == arrayNew[k]) {
        szerepelE = true;
      }
    }
    if (szerepelE == false) {
      arrayNew.push(arrayA[i]);
    }
  }

  return arrayNew;
};
document.write("Halmazok elemei szűrve, A tömb (függvényel): " + kulmbsegA(aHalmaz, bHalmaz));


////////////////////
document.write("<hr>");

let kulmbsegB = (arrayA, arrayB) => {
  let arrayNew = [];
  for (let i = 0; i < arrayB.length; i++) {
    for (let j = 0; j < arrayA.length; j++) {
      if (arrayB[i] === arrayA[j]) {
        arrayNew.push(arrayB[i]);
      }
    }
    let szerepelE = false;
    for (let k = 0; k < arrayNew.length; k++) {
      if (arrayB[i] == arrayNew[k]) {
        szerepelE = true;
      }
    }
    if (szerepelE == false) {
      arrayNew.push(arrayB[i]);
    }
  }

  return arrayNew;
};
document.write("Halmazok elemei szűrve, B tömb (függvényel): " + kulmbsegB(aHalmaz, bHalmaz));


////////////////////
document.write("<hr>");
document.write("Halmazműveletek függvény használatával: ");
document.write("<br>UNIO:");

function szurtUnio(tombA, tombB) {
  let unioSzurt = [];
  for (let i = 0; i < tombA.length; i++) {
    let szerepelE = false;
    for (let j = 0; j < unioSzurt.length; j++) {
      if (tombA[i] == unioSzurt[j]) {
        szerepelE = true;
      }
    }
    if (szerepelE == false) {
      unioSzurt.push(tombA[i]);
    }
  }
  for (let i = 0; i < tombB.length; i++) {
    let szerepelE = false;
    for (let j = 0; j < unioSzurt.length; j++) {
      if (tombB[i] == unioSzurt[j]) {
        szerepelE = true;
      }
    }
    if (szerepelE == false) {
      unioSzurt.push(tombB[i]);
    }
  }
  return unioSzurt;
}



document.write("<br>A szűrt UNIO tartalma:" + szurtUnio(aHalmaz, bHalmaz));

document.write("<hr>");
document.write("Metszet:");
function szurtMetszet(tombA, tombB) {
  let metszetSzurt = [];

  for (let i = 0; i < aHalmaz.length; i++) {
    for (let j = 0; j < bHalmaz.length; j++) {
      if (aHalmaz[i] == bHalmaz[j]) {
        let szerepelE = false;

        for (let k = 0; k < metszetSzurt.length; k++) {
          if (aHalmaz[i] == metszetSzurt[k]) {
            szerepelE = true;
          }
        }
        if (szerepelE == false) {
          metszetSzurt.push(aHalmaz[i]);
        }
      }
    }
  }
  return metszetSzurt;
}

document.write("<br>A szűrt METSZET tartalma:" + szurtMetszet(aHalmaz, bHalmaz));
document.write("<hr>");


