let code= prompt("")
if (code=="*127#"){
    let Anfac=prompt("1. Adeega anfac")
    if (Anfac==1){
    let AnfacServices= prompt("--Anfac-- \n 1. ANFAC gudaha \n 2.ANFAC gudaha iyo dibadda \n 3. ANFAC dibada 31 dal \n 4. ANFAC SMS \n 0.Back" )
    if (AnfacServices==1){
        let AnfacGudaha= prompt("--Anfac-- \n 1. $1=80 daqiiqo \n  2. $5=400 daqiiqo \n 3. $10=800 daqiiqo \n 4. $20=1600 daqiiqo \n 5. $50=4000 daqiiqo \n 0.Back")
    }
    if (AnfacServices==2){
        let AnfaGudahacDibada= prompt("--Anfac--  \n  1. $5=300 daqiiqo, 200sms, 6daqiiqo dibadda, 25SMS  \n  2. $10=600 daqiiqo, 400sms, 200SMS, 18daqiiqo oo dibadda, 5SMS  \n  0.Back")
    }
    if (AnfacServices==3){
        let AnfacDibada= prompt("--Anfac-- \n 1. $5= 30 daqiiqo \n  2. $10= 60 daqiiqo \n 3. $20=120 daqiiqo \n 4. $20=1600 daqiiqo \n 5. $50=300 daqiiqo \n 0.Back")
    }
    if (AnfacServices==4){
        let AnfacSMS= prompt("--Anfac-- \n 1. $0.5= 80 SMS \n  2. $1=200 SMS  \n 3. $1=20 SMS dibada  \n 0.Back")
    }
} else {
    alert("Invalid menu option")
}
} else{
    alert("Invalid code")
}