function addText() {


    const newElement = document.createElement('div');


    newElement.innerHTML = '<p>♣♣♣행복한 하루되세요♣♣♣</p>';


    const container = document.getElementById('container');


    container.appendChild(newElement);

  }