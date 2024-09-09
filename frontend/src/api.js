
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 

export const fetchQuestions = async (language, difficulty) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions`, {
      params: { language, difficulty },
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};
