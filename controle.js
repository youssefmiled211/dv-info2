function est_chifre(tel){ 
    i=0;
    test=true;
    while(test==true && i<tel.length){
        if((tel.charAt(i)<"0") || (tel.charAt(i)>"9")){
            test=false
            console.log(tel,test)
        }
        i++;
    }
    return (test);
}
function verif_email(ch)
{
    poseat=ch.indexOf('@');
    popselt=ch.lastIndexOf('@');
    posept=ch.indexOf('.');
    test=true
    if((poseat<1)||(poseat!=popselt)||(posept<=poseat+1)||(posept==(ch.length)-1)){
        test=false;
    }
    return test;
}

function verif()
{
    tel=document.getElementById("num").value;
    liste=document.getElementById("liste").selectedIndex;
    j1=document.getElementById("j1").checked;
    j2=document.getElementById("j2").checked;
    j3=document.getElementById("j3").checked;
    ch=document.getElementById("email").value;
    if(tel.length!=8 ||tel.isNaN || tel[0]=="1"||tel[0]=="0" ||est_chifre(tel)==false){
        alert("verifer");
    }
    if(liste==0)
    {
        alert("choix obligatoir de liste")
    }
    if(j1==0 && j2==0 && j3==0)
    {
        alert("choix  jours obligatoir")
    }
    if (verif_email(ch)==false){
        alert("verifier votre email")
    }
}