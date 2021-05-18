function list(tableName){
    var table= document.getElementById(tableName);
       
       data.characters.forEach(function(value,index,array){
          var row = table.insertRow(index+1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          cell1.innerHTML = value.id; 
          cell2.innerHTML = value.name;
          cell3.innerHTML = value.position;
          cell4.innerHTML = value.salary;
       });
   }
   function sortTable() {
      var n = data.length;
      var swapped=true;
      for(var pass=n-1;pass>=0&&swapped;pass--){
         swapped=false;
          for(var i=0;i<=pass-1;i++){
              if(data[i].id<data[i+1].id){
                  var temp=data[i];
                  data[i]=data[i+1];
                  data[i+1]=temp;
                  swapped=true;
              }
          }
      }
      list("characterListTBL");  
   }
   list("characterListTBL");