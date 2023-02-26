import axios from 'axios';
export class CheyoApi{
    async getImagePerrito(){
        const {data} = await axios.get('https://dog.ceo/api/breeds/image/random')
        return data.message
    }

}
