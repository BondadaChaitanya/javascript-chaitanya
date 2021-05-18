function list(tableName){
 var table= document.getElementById(tableName);
    data.employees.forEach(function(value,index,array){
      if(table.rows[index+1]) 
         table.deleteRow(index+1);
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
   var n = data.employees.length;
   var swapped=true;
   for(var pass=n-1;pass>=0&&swapped;pass--){
      swapped=false;
       for(var i=0;i<=pass-1;i++){
           if(data.employees[i].id<data.employees[i+1].id){
               var temp=data.employees[i];
               data.employees[i]=data.employees[i+1];
               data.employees[i+1]=temp;
               swapped=true;
           }
       }
   }
   list("employeeListTBL");  
}
list("employeeListTBL");