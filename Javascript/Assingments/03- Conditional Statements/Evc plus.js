let code=prompt(" ");
if (code==="*770#"){
  let pin = Number(prompt("faldan geli pin-kaaga"));
  if (pin===1234) {
    let service = prompt("1. itus haraaga \n 2. kaarka hadalka  \n 3. U wareeji AVC Plus \n 4. warbixin kooban \n 5. Salaam  Bank \n 6. Maareynta")
    if (service==1) {
      alert("Haraagaagu waa 1$.")
    }
    if (service==2) {
      let KaarkaHadalka = prompt("1. ku shubo \n 2. ugu shub")
      if  (KaarkaHadalka==1) {
        let lacag = prompt("Fadlan geli lacagta")
        if (lacag) {
          alert("Waxaad ku shubatay " + "$" + lacag + " mahadsanid.")
        }
      }
      if  (KaarkaHadalka==2) {
        let numberQof= prompt("Fadlan geli numberka aad ugu shubayso")
        let lacag = prompt("Fadlan geli lacagta")
        if (lacag) {
          alert("Waxaad ugu shubtay " + "$" + lacag + " " + " lambarka: " + numberQof + "," + " mahadsanid.")
        }
      }
    }
    if (service==3) {
      let numberQof = prompt("Fadlan geli number-ka")
      let lacag = prompt("Fadlan geli lacagta")
        if (lacag) {
          alert("Waxaad " + "$" + lacag + " " + " U wareejisay" + " lambarka: " + numberQof + "," + " mahadsanid.")
        }
    }
    if (service==4) {
      let Warbixin = prompt("Warbixin kooban \n 1. last action \n 2. wareejintii ugu danbaysay \n 3. iibsashadii ugu danbeysay \n 4. Last 3 actions \n 5. Email me my activity")
      if (Warbixin==1){
        alert("Last three actions")
      } 
      if (Warbixin==2){
        alert("Wareejintii ugu danbaysay")
      } 
      if(Warbixin==3){
        alert("Iibsashadii ugu danbaysay")
      } 
      if(Warbixin==4){
        alert("Activity")
      } 
    }
    if (service==5) {
      let salamBank = prompt("Salaam Bank \n 1. Itus haraaga \n 2. Lacag dhigasho \n 3. Lacag qaadasho \n 4. Ka wareeji")
    }
    if (service==6) {
      let Maareynta = prompt("Maareynta \n 1. Bedel lambarka sirta\n 2. Bedel luqadda \n 3. Wargelin mobile lumay \n 4. Lacag xirasho \n 5. U celi lacag qaldantay")
    }
  }
  else {
    alert("Pinka aad gelisay waa qalad")
  }
} 
else {
  alert("Si qaldan ayaad u gelisay, Fadlan isticmaal *770#")
}