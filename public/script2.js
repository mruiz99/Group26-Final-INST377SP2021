async function createNATable() {
  const naTable = document.querySelector('.table')
  const nineties = await fetch('/api/NAnineties');
  const ninetiesData = await nineties.json();
  const twothou = await fetch('/api/NAtwothou');
  const twothouData = await twothou.json();
  const twoten = await fetch('/api/NAtwoten');
  const twotenData = await twoten.json();

  const info = [];
  info.push(ninetiesData);
  info.push(twothouData);
  info.push(twotenData);
  console.log(info);

  let colorCell = (salesAmt) => {
    if (salesAmt < 0.2) {
      return '#ccedbe'
    } else if (salesAmt >= 0.2 & salesAmt < 0.4) {
      return '#b5e6a0'
    } else if (salesAmt >= 0.4 & salesAmt < 0.6) {
      return '#8fdc7c'
    } else if (salesAmt >= 0.6 & salesAmt < .8) {
      return '#65d250'
    } else {
      return '#3ac124'
    }
  }

  const columns = `
      <thead>
        <th>1990s</th>
        <th>2000s</th>
        <th>2010s</th>
      <tbody>
        <tr>
          <td style="background-color:${colorCell(info[0][0]['na_sales'])}">${info[0][0]['genre_name']}</td>
          <td style="background-color:${colorCell(info[1][0]['na_sales'])}">${info[1][0]['genre_name']}</td>
          <td style="background-color:${colorCell(info[2][0]['na_sales'])}">${info[2][0]['genre_name']}</td>
        </tr>
        <tr>
          <td style="background-color:${colorCell(info[0][1]['na_sales'])}">${info[0][1]['genre_name']}</td>
          <td style="background-color:${colorCell(info[1][1]['na_sales'])}">${info[1][1]['genre_name']}</td>
          <td style="background-color:${colorCell(info[2][1]['na_sales'])}">${info[2][1]['genre_name']}</td>
        </tr>
        <tr>
          <td style="background-color:${colorCell(info[0][2]['na_sales'])}">${info[0][2]['genre_name']}</td>
          <td style="background-color:${colorCell(info[1][2]['na_sales'])}">${info[1][2]['genre_name']}</td>
          <td style="background-color:${colorCell(info[2][2]['na_sales'])}">${info[2][2]['genre_name']}</td>
        </tr>
        <tr>
          <td style="background-color:${colorCell(info[0][3]['na_sales'])}">${info[0][3]['genre_name']}</td>
          <td style="background-color:${colorCell(info[1][3]['na_sales'])}">${info[1][3]['genre_name']}</td>
          <td style="background-color:${colorCell(info[2][3]['na_sales'])}">${info[2][3]['genre_name']}</td>
        </tr>
        <tr>
          <td style="background-color:${colorCell(info[0][4]['na_sales'])}">${info[0][4]['genre_name']}</td>
          <td style="background-color:${colorCell(info[1][4]['na_sales'])}">${info[1][4]['genre_name']}</td>
          <td style="background-color:${colorCell(info[2][4]['na_sales'])}">${info[2][4]['genre_name']}</td>
        </tr>
      </tbody>
    </thead>`;
  naTable.innerHTML = columns;
}


  
async function windowOnload() {
  createNATable();
}
  
window.onload = windowOnload;