import { generatePath } from "react-router-dom";
import axios from "axios";

// THIS IS AN EXAMPLE THAT YOU CAN USE
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS

class PrivateService {
  constructor() {
    // this.api  is a reusable axios request base containing the base url (baseURL)
    // of the API and the Headers options ( `withCredentials: true` )
    this.private = axios.create({
      baseURL: "http://localhost:5000/api/private",
      withCredentials: true,
    });
  }
  getOneUser = (
    username,
    password,
    email,
    bookmarks,
    lessonsCompleted,
    userId
  ) => {
    const pr = this.private
      .get(`/${userId}`, {
        username,
        password,
        email,
        bookmarks,
        lessonsCompleted,
      })
      .then((response) => response.data);
    console.log(pr);
    return pr;
  };

  editProfile = (username, email, password, userId) => {
    console.log(username, email, password, userId)
    const pr = this.private
      .post(generatePath("/:id", {id: userId}), { username, email, password })
      .then((response) => response.data);

    return pr;
  };

  addToBookmarks = (id) => {
    const pr = this.private
      .post(`/${id}/add`, { id })
      .then((response) => response.data);
    return pr;
  };

  deleteFromBookmarks = (id) => {
    const pr = this.private
      .post(`/${id}/delete`, { id })
      .then((response) => response.data);
    return pr;
  };
}

// Create instance (object) containing all axios calls as methods
const privateService = new PrivateService();

export default privateService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.