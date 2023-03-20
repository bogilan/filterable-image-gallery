const categories = ['all','travel', 'people', 'cars', 'festival'];

const images = [
    {
        url: 'https://images.pexels.com/photos/597049/paris-france-eiffel-tower-597049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'travel, people'
    },
    {
        url: 'https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'cars'
    },
    {
        url: 'https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'people, festival'
    },
    {
        url: 'https://images.pexels.com/photos/1186116/pexels-photo-1186116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'people, festival'
    },
    {
        url: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'travel, people'
    },
    {
        url: 'https://images.pexels.com/photos/849835/pexels-photo-849835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'cars'
    },
    {
        url: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'festival, people'
    },
    {
        url: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'travel'
    },
    {
        url: 'https://images.pexels.com/photos/2127732/pexels-photo-2127732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'cars'
    },
    {
        url: 'https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'travel'
    },
    {
        url: 'https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'travel'
    },
    {
        url: 'https://images.pexels.com/photos/1387577/pexels-photo-1387577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'festival'
    },
    {
        url: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'cars'
    },
    {
        url: 'https://images.pexels.com/photos/1768826/pexels-photo-1768826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'cars'
    },
    {
        url: 'https://images.pexels.com/photos/2918010/pexels-photo-2918010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'travel, people'
    },
    {
        url: 'https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'people, festival'
    },
    {
        url: 'https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'people'
    },
    {
        url: 'https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'people'
    },
]

const gallery = document.querySelector('.gallery-images');
const filters = document.querySelector('.gallery-filter');

showImages(images);

categories.forEach(category => {
    const categoryElement = document.createElement('span');
    categoryElement.classList.add('category');
    categoryElement.textContent = category;
    filters.appendChild(categoryElement);
    categoryElement.addEventListener('click', ()=> {
        if(categoryElement.innerHTML === 'all') {
            showImages(images);
        }
        else {
            filterImages(categoryElement.innerHTML);
        }
    })
})

function filterImages(category) {
    const filteredImages = images.filter(image => image.category.includes(category));
    showImages(filteredImages);
}

function showImages(images) {
    gallery.innerHTML = '';
    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.classList.add('image');
        imageElement.src = image.url;
        gallery.appendChild(imageElement);
    })
}