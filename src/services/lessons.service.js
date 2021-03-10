import axios from "axios";

class LessonsService {
  constructor() {
    this.lessons = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  getAllLessons = async () => {
    try {
      let response = await this.lessons.get("/api/lessons");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  getOneLesson = async (id) => {
    try {
      let response = await this.lessons.get(`/api/lessons/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  getOneQuiz = async (id) => {
    try {
      let response = await this.lessons.get(`/api/lessons/${id}/quiz`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
}

const lessonsService = new LessonsService();

export default lessonsService;
