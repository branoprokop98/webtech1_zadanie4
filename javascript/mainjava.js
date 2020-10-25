function generateTable() {
    document.getElementById('layer').style.display = 'block';
    let table = document.getElementById('table');
    let count = 1;

    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            td.innerText = count + '.';
            count++;
            tr.append(td);
        }
        table.append(tr);
    }
}


function closeWindow() {
    document.getElementById('layer').style.display = 'none';
    var elmtTable = document.getElementById('table');
    var tableRows = elmtTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    for (var x = rowCount - 1; x > 0; x--) {
        elmtTable.removeChild(tableRows[x]);
    }
}