//Action
import React from 'react';
import axios from 'axios';
const baseURL = 'https://jsonplaceholder.typicode.com/users';

const list = [
  {
    id: 1,
    name: 'Marwa',
    email: 'marwa@gamil.com',
  },
  {
    id: 2,
    name: 'Yomna',
    email: 'yomna@gamil.com',
  },
]

export const getUsers = async () => {
  let users = [];
  try {
    const response = await axios.get(baseURL);
    users = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: 'USERS_LIST',
    payload: users,
  };
};

export const getUserDetails = async (id) => {
  let user = {};
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    user = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: 'USERS_DETAILS',
    payload: user,
  };
};

export const clearDetails = () =>{
  return{
    type: 'CLEAR_DETAILS'  
  }
}
