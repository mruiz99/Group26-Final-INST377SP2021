async function createNATable() {
  const naTable = document.querySelector('.table')
  const eighties = await fetch('/api/NAeighties');
  const eightiesData = await eighties.json();
  const nineties = await fetch('/api/NAnineties');
  const ninetiesData = await nineties.json();
  const twothou = await fetch('/api/NAtwothou');
  const twothouData = await twothou.json();
  const twoten = await fetch('/api/NAtwoten');
  const twotenData = await twoten.json();

  const info = [];
  info.push(eightiesData);
  info.push(ninetiesData);
  info.push(twothouData);
  info.push(twotenData);
  console.log(info);

  const columns = ` <thead>
        <tr>
            <th>1980s</th>
            <th>1990s</th>
            <th>2000s</th>
            <th>2010s</th>
            <tbody>
            <tr>
                <td>${info[0][0]['genre_name']}</td>
                <td>${info[1][0]['genre_name']}</td>
                <td>${info[2][0]['genre_name']}</td>
                <td>${info[3][0]['genre_name']}</td>
            </tr>
            <tr>
                <td>${info[0][1]['genre_name']}</td>
                <td>${info[1][1]['genre_name']}</td>
                <td>${info[2][1]['genre_name']}</td>
                <td>${info[3][1]['genre_name']}</td>
            </tr>
            <tr>
                <td>${info[0][2]['genre_name']}</td>
                <td>${info[1][2]['genre_name']}</td>
                <td>${info[2][2]['genre_name']}</td>
                <td>${info[3][2]['genre_name']}</td>
            </tr>
        </thead>`;
  naTable.innerHTML = columns;
}
  
async function windowOnload() {
  createNATable();
}
  
window.onload = windowOnload;