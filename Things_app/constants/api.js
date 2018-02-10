import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.4:3000/api";

class Api {
  constructor() {
    this.path = axios.defaults.baseURL;
  }

  async createTodo(args) {
    try {
      const res = await axios.post(`${this.path}/todos`, { ...args });
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async fethAllTodos() {
    const { data } = await axios.get(`${this.path}/todos`);
    return data;
  }

  async createSection(args) {
    try {
      const res = await axios.post(`${this.path}/section/new`, { ...args });
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { Api };
