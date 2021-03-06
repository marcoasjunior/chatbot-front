import upperFirstLetter from '../../utils/upperFirstLetter'
import api from '../../services/axiosConfig'

export default {

actions: {

    async changeText1a(context, newData) { // NOME

        let data = upperFirstLetter(newData)
  
        context.commit('setUsername', data)
        context.commit('setStep', 2)
  
        return await api.get(`/question/${this.getters.step}`)
  
          .then((response) => {
  
            let question = response.data[0].question           
            let replaced = question.replace('USERNAME', this.getters.username)
            let questionType = response.data[0].type
            context.commit('setType', questionType)
            context.commit('setLoading', false)
            context.commit('setBotText', replaced)
  
          })
          .catch(e => {
            alert(e)
          })
      },
  
    }

}