let number = 60;
let prefix = "Box";

async function getData(prefix, i) {
    const response = await fetch("https://chart.apis.google.com/chart?cht=qr&chs=85x85&chl=" + prefix + i);
    const data = await response.blob();

    let div = document.createElement('div')
    let img = document.createElement('img')
    let text = document.createElement('p')
    //img.style = 'position:fixed;top:10px;left:10px;width:100px';
    div.id = "qrContainer" + i;
    div.style = 'text-align:center;width: 90px; height 90px;border: 1px solid #000;float: left;';
    text.textContent = prefix + i;
    text.style = 'font-family: Arial, Helvetica, sans-serif;text-align:center;font-size:20px;display: inline;';
    document.body.append(div);
    document.getElementById("qrContainer" + i).appendChild(img);
    document.getElementById("qrContainer" + i).appendChild(text);

    img.src = URL.createObjectURL(data);
  }

function generate(){
  if(document.getElementById("qrContainer1")){
    for (let i = 0; i < number; i++) {
      let div = document.getElementById("qrContainer" + (i + 1));
      div.parentElement.removeChild(div);
    }
  }

  number = document.getElementById("numberBox").value;
  prefix = document.getElementById("prefixBox").value;
  for (let i = 0; i < number; i++) {
    getData(prefix, i + 1); 
  }
}

generate();

