const employee = {John: "12840"}

function updateEmployeeWithKeyAndValue(employee, key,value){const nEWeMPLOYEE = {...employee};
    nEWeMPLOYEE[key]=value;
    return nEWeMPLOYEE;}


    function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
        employee[key]=value;
        return employee;
    }
function deleteFromEmployeeByKey(employee,key,value){const nEWeMPLOYEE = {...employee};
delete nEWeMPLOYEE[key];
return nEWeMPLOYEE;
}

function destructivelyDeleteFromEmployeeByKey(employee,key,value){
delete employee[key];
return employee;
}


