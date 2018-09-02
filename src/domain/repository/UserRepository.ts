/**
 * Repository domain for the user.
 */
import axios from 'axios'

import { User } from '../model/User'
import * as Config from '../../constants/config'

export default {

  createUser: async (email: string, password: string, name: string, description: string): Promise<any> => {

    const response = await axios.post(Config.USER_ENDPOINT, {
      email: email,
      password: password,
      name: name,
      description: description,
    })

    return response
  },

  getUser: async (id: string) => {

    const response = await axios.get(`${Config.USER_ENDPOINT}/${id}`)

    return response
  },

  editUser: async (id: string, edittedUser: User) => {

    const response = await axios.put(`${Config.USER_ENDPOINT}/${id}`, {
      email: edittedUser.email,
      name: edittedUser.name,
      description: edittedUser.description,
    }, Config.HEADER)

    return response
  },

}