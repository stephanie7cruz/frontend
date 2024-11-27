import axios from 'axios';

const API_URL = 'https://api.tuservicio.com';  // URL de tu API

export const createReservation = async (reservation) => {
  const response = await axios.post(`${API_URL}/reservations`, reservation);
  return response.data;
};

export const getReservationById = async (id) => {
  const response = await axios.get(`${API_URL}/reservations/${id}`);
  return response.data;
};

export const updateReservation = async (reservation) => {
  const response = await axios.put(`${API_URL}/reservations/${reservation.id}`, reservation);
  return response.data;
};

export const deleteReservation = async (id) => {
  const response = await axios.delete(`${API_URL}/reservations/${id}`);
  return response.data;
};

export const getReservations = async (filters) => {
  const response = await axios.get(`${API_URL}/reservations`, { params: filters });
  return response.data;
};
