import axios from 'axios'

export async function getData(url, limit = '') {
    console.log(`starting fetch request on ${url}`)

    try {
        const { data } = await axios.get(url)

        if (limit !== '') {
            console.log('limit')
            const limited = data.slice(0, limit)
            return limited
        }

        return data
    } catch (error) {
        throw Error(error)
    }
}

