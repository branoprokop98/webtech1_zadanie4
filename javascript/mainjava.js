function generateTable() {
    document.getElementById('layer').style.display = 'block';
    let table = document.getElementById('table');
    let numberOfRow = document.getElementById('rowNumber').value;
    let numberOfCol = document.getElementById('colNumber').value;
    let count = 1;
    let rowCounter = 1;
    let colCounter = 1;

    for (let i = 0; i <= numberOfRow; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j <= numberOfCol; j++) {
            let td = document.createElement('td');
            if(j == 0 && i == 0){
                td.innerText = ' ';
            }
            else if(i == 0){
                td.innerText = 'X = ' + (colCounter);
                colCounter++; 
            }
            else if (j == 0) {
                td.innerText = 'Y = ' + (rowCounter);
                rowCounter++;
            }
            else {
                count = i * j;
                td.innerText = count + '.';
            }
            tr.append(td);
        }
        table.append(tr);
    }
}

function checkValue(id){
    let check = document.getElementById(id).value;
    let elem = document.getElementById(id);

    if(check < 1 || check > 9){
        elem.classList.add('is-invalid');
        return false;
    }
    else if(check == " " || check == null){
        elem.classList.add('is-invalid');
        return false;
    }
    else{
        elem.classList.remove('is-invalid');
        return true;
    }
}

function formCheck(){
    let row = document.getElementById('rowNumber');
    let col = document.getElementById('colNumber');

    if(row.value < 1 || row.value > 9 || col.value < 1 || col.value > 9){
        return false;
    }
    else if(row.value == " " || row.value == null || col.value == " " || col.value == null){
        return false;
    }
    else{
        generateTable();
        return true;
    }
}


function closeWindow() {
    document.getElementById('layer').style.display = 'none';
    var elmtTable = document.getElementById('table');
    var tableRows = elmtTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    for (var x = rowCount - 1; x >= 0; x--) {
        elmtTable.removeChild(tableRows[x]);
    }
}