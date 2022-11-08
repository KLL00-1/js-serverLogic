async function getInfo() {
  let responce = await fetch("https://sheetdb.io/api/v1/ouj1wn014t3gv");
  let responceInfo = await responce.json();
  const body = document.querySelector(".container");
  let i;
  for (i = 0; responceInfo.length; i++) {
    body.innerHTML += `
  <h2>${responceInfo[i].nickName}</h2>
      <span>${responceInfo[i].publicKey}</span>
  `;
  }
}
getInfo();
