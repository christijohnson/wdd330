let page = 1;
const container = document.querySelector("div.data");

const previous = document.querySelector("button.prev");
const next = document.querySelector("button.next");

const getPrevious = (page) => {
  if (page !== 1) {
    return (page -= 1);
  }
  return page;
};

const getNext = (page) => {
  if (page !== 9) {
    return (page += 1);
  }
  return page;
};

previous.onclick = () => {
	container.textContent = "";
	page = getPrevious(page);
	getData();
  };

  next.onclick = () => {
	container.textContent = "";
	page = getNext(page);
	getData();
  };


const getData = () => {
	const url = `https://swapi.dev/api/people/?page=${page}`;
	fetch(url)
    .then((response) => response.json())
    .then((data) => {
		for (character of data.results) {
			const h3 = document.createElement("h3");
			h3.textContent = character.name;
			h3.onclick = () => {
				description.style.display = description.style.display === 'none'? 'block' : 'none';
			}

			const description = document.createElement('ul');
			description.style.display = 'none';

			const height = document.createElement('li');
			height.textContent = `height: ${character.height}`;

			const mass = document.createElement('li');
			mass.textContent = `mass: ${character.mass}`;

			const hair_color = document.createElement('li');
			hair_color.textContent = `hair color: ${character.hair_color}`;

			const eye_color = document.createElement('li');
			eye_color.textContent = `eye color: ${character.eye_color}`;

			description.appendChild(height);
			description.appendChild(mass);
			description.appendChild(hair_color);
			description.appendChild(eye_color);

			container.appendChild(h3);
			container.appendChild(description);
		}
    });
};


getData();
