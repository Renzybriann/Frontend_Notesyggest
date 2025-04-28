// src/api.js

// Replace this with your actual Railway deployed backend URL
const BASE_URL = 'https://backendnotesyggest-production.up.railway.app';  // Update this URL

export const getNotes = async () => {
  const response = await fetch(`${BASE_URL}/notes`);
  if (!response.ok) {
    throw new Error('Failed to fetch notes');
  }
  return await response.json();
};

export const createNote = async (content) => {
  const response = await fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),  // Sending only content as per your backend
  });

  if (!response.ok) {
    throw new Error('Failed to create note');
  }

  return await response.json();
};

export const deleteNote = async (noteId) => {
  const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete note');
  }

  return await response.json();
};