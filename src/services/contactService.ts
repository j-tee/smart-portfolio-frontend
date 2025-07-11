import api from './api';

export const fetchContactInfo = async () => {
  const response = await api.get('/api/portfolio/contact/');
  return response.data;
};

export const updateContactInfo = async (id: number, data: any) => {
  const response = await api.put(`/api/portfolio/contact/${id}/`, data);
  return response.data;
};

export const submitContactForm = async (formData: any) => {
  const response = await api.post('/api/portfolio/contact-messages/', formData);
  return response.data;
};
export const fetchContactMessages = async () => {
  const response = await api.get('/api/portfolio/contact-messages/');
  return response.data;
};