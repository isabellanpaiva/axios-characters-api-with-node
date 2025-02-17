const axios = require('axios')

class CharactersAPIHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://ih-crud-api.herokuapp.com'
        })
    }

    getAllCharacters() {
        return this.axiosApp.get('/characters')
    }

    getOneCharacter(character_id) {
        return this.axiosApp.get(`/characters/${character_id}`)
    }

    createCharacter(character_data) {
        return this.axiosApp.post(`/characters`, character_data)
    }

    updateCharacter(character_id, character_data) {
        return this.axiosApp.put(`/characters/${character_id}`, character_data)
    }

    deleteCharacter(character_id) {
        return this.axiosApp.delete(`/characters/${character_id}`)
    }

}

const charactersAPI = new CharactersAPIHandler()

module.exports = charactersAPI