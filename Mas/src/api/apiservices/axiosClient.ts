import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.100.7:25555/api", //http://192.168.100.7:25555  http://172.16.17.21:25555  mas3
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJ1c2VyU3RhdGlvbk5vIjo5MywiaHEiOmZhbHNlLCJzdXBlclVzZXIiOmZhbHNlLCJpc2FjdGl2ZSI6dHJ1ZSwiSXNQb3J0YWwiOmZhbHNlLCJTSVRFX0NPREUiOjEsIkZ1bGxOYW1lIjoiU1lTVEVNIiwiSXNUZXN0ZXIiOmZhbHNlLCJQcmVQcm9kdWN0aW9uIjpmYWxzZSwiVXNlclN0YXRpb25zIjpbMCwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMiwyMyw1MSw2MSw5MSw5Miw5Myw5NCw5NSw5Niw5Nyw5OCw5OV0sIlVzZXJTaXRlcyI6WzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLCJSb2xlcyI6eyIyIjoiMiIsIjcxIjoiNzEiLCI3NiI6Ijc2In0sImV4cCI6MTgwMzI3ODIwOH0.-nucfZmPCyCEBZhxheCTEKN7X7DZ0X73z86fTpIrlY4",
  },
  // timeout: 5000,
});

export default axiosClient;
