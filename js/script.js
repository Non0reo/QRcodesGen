let number = 60;
let starNumber = 1;
let qrFrameSize = 1;
let prefix = "Box";
let borderColor = "#dcdcdc";

async function getData(prefix, i) {
    const response = await fetch("https://chart.apis.google.com/chart?cht=qr&chld=L|" + qrFrameSize + "&chs=85x85&chl=" + prefix + i);
    const data = await response.blob();

    let div = document.createElement('div')
    let img = document.createElement('img')
    let text = document.createElement('p')
    //img.style = 'position:fixed;top:10px;left:10px;width:100px';
    div.id = "qrContainer" + i;
    div.style = 'text-align:center;width: 90px; height 90px;border: 1px solid ' + borderColor + ';float: left;';
    text.textContent = prefix + i;
    text.style = 'font-family: Arial, Helvetica, sans-serif;text-align:center;font-size:20px;display: inline;';
    document.body.append(div);
    document.getElementById("qrContainer" + i).appendChild(img);
    document.getElementById("qrContainer" + i).appendChild(text);

    img.src = URL.createObjectURL(data);
  }

function generate(){
  if(parseInt(document.getElementById("numberBox").value, 10) <
   parseInt(document.getElementById("startNumberBox").value, 10)) return alert("Please enter corect values");

  if(document.getElementById("qrContainer" + starNumber)){
    for (let i = starNumber; i <= number; i++) {
      let div = document.getElementById("qrContainer" + i);
      div.parentElement.removeChild(div);
    }
  }

  number = parseInt(document.getElementById("numberBox").value, 10);
  starNumber = parseInt(document.getElementById("startNumberBox").value, 10);
  qrFrameSize = parseInt(document.getElementById("qrFrameBox").value, 10);
  prefix = document.getElementById("prefixBox").value;
  borderColor = document.getElementById("colorBox").value;
  for (let i = starNumber - 1; i < number; i++) {
    getData(prefix, i + 1); 
  }
}

generate();

