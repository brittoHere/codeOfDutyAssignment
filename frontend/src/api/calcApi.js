import axios from "axios";
const apiUrl = "http://localhost:8000/api/calculate";

export function getCalcs() {
  return axios.get(apiUrl);
}

export function addCalc(calc) {
  return axios.post(apiUrl, calc);
}

export function updateCalc(id, calc) {
  return axios.put(apiUrl + "/" + id, calc);
}

export function deleteCalc(id) {
  return axios.delete(apiUrl + "/" + id);
}
