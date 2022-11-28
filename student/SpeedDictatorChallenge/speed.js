function getSpeed()  
              {  
                var value = document.form.speed.value
                if(isNaN(value)){
                    return ("input should only include numbers");  
                      return false; 
                      //this will only display numbers
                }
                  if(value.length=="") {  
                      return("textbox is empty");  
                      return false;  
                  }
                  //when there is no message in the text box it will display a empty 
                  if (parseInt(value)<0 || parseInt(value)>100) {
                    alert("values should range between 0 - 100");  
                      return false;
                  }
                  switch (true) {
                    case (value<=70):
                    return"OK"
                        break;
                    default:
                         getDemerits(value);
                        break;
                  }
                  return false;
              } 
             function getDemerits(speed){
                var extra_kmh = parseFloat(speed)-70.0;
                var demerits = extra_kmh/5;
                alert(Math.round(demerits));
                return false;
             }