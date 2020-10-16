// modules
import * as api from './modules/api'
// style
import './style/main.scss';

console.log('index.js is being loaded');

const retrieveImages = async () =>{
    
    
    try {
        const images = await api.getData('https://jsonplaceholder.typicode.com/photos', 50)

        const cont = document.querySelector('main')
        for (let image of images) {
            let img = document.createElement('img')
            img.src = image.thumbnailUrl
            cont.appendChild(img)
        }
        
    } catch (error) {
        console.log('error', error)
    }
        
    }


retrieveImages()



console.log
