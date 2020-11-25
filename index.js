const apiKey ='qsTvsWtgp4FreO8bu8UFwL876rV1-MrKLZTh4Kstgw0';
const getImagen= () => {
    const peticion= fetch(`https://api.unsplash.com/photos?client_id=${apiKey}`);
    peticion
        .then(resp => resp.json())
        .then((data) => {
            data.map((img) => {
                const resultado = ` <article>
                <img src="${img.urls.regular}" />
                </article>`;

                return (document.getElementById('content-img').innerHTML += resultado);
            });
        }
        )
        .catch(err => console.warn(err))
};
const changeImage = (data, item) => {
    addBtn(item);
    document.getElementById('content-img').innerHTML = '';
	const peticion = fetch(`https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${data}`);

    peticion
		.then(resp =>  resp.json())
		.then((data) => {
			data.results.map((img) => {
				let results = `
				<article>
					<img src="${img.urls.regular}" />
				</article>
				`;
				return (document.getElementById('content-img').innerHTML += results);
			});
		})
		.catch((error) => {
			console.log(error);
		});
};
const menu = () => {
	const item = document.querySelectorAll('li.navbar-item');

	for (let i = 0; i < item.length; i++) {
		if (item[i].className.includes('active')) {
			item[i].classList.remove('active');
		} else {
			item[i].className += ' active';
		}
	}
};

const addBtn = (id) => {
    let item = document.querySelectorAll(`li.content-nav-item`);
    let i = 0;
    while ( i < item.length) {
    
		if (item[i].className.includes('btn-content')) {
			item[i].classList.remove('btn-content');
		} else {
			item[id].className += ' btn-content';
        }
        i++;
    }

};
const add = (id) => {
    let item = document.querySelectorAll('li.navbar-item');
    let i = 0;
    while ( i < item.length) {
        
		if (item[i].className.includes('button')) {
			item[i].classList.remove('button');
		} else {
			item[id].className += ' button';
        }
        i++;
        
    }
  
};


getImagen();
