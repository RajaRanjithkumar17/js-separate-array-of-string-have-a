var arr = ["cat","wet","set","apple"]
var letter = "a"
var res = arr.map((index) =>{

    var spil=index.split("")

    for(i=0;i<spil.length;i++){

        if(spil[i]==letter){

            console.log(index);
        }

    }

   
  
})
