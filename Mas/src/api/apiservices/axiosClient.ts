import axios from "axios";

const axiosClient = axios.create({
  baseURL: "mas3/api", //http://192.168.100.7:25555
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJ1c2VyU3RhdGlvbk5vIjoxMCwiaHEiOmZhbHNlLCJzdXBlclVzZXIiOmZhbHNlLCJpc2FjdGl2ZSI6dHJ1ZSwiSXNQb3J0YWwiOmZhbHNlLCJTSVRFX0NPREUiOjEsIkZ1bGxOYW1lIjoiU1lTVEVNIiwiSXNUZXN0ZXIiOmZhbHNlLCJQcmVQcm9kdWN0aW9uIjpmYWxzZSwiVXNlclN0YXRpb25zIjpbMTAsMjAsMzAsNDAsNTAsNjAsNzAsODAsOTBdLCJVc2VyU2l0ZXMiOlsxLDEsMSwxLDEsMSwxLDEsMV0sIlJvbGVzIjp7IjIiOiIyIn0sImV4cCI6MTgwMTU0OTI3OH0.QtzdCzpdt0JAN8bsQpSVyXvdgUEiOiJXi-x0NlS6kvY",
  },
  // timeout: 5000,
});

export default axiosClient;
