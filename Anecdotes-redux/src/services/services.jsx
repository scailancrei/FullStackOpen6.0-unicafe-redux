import axios from "axios"

const baseUrl = "http://localhost:3001/anecdotes"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addAnecdote = async (content) => {
  const data = { content, votes: 0 }
  const response = await axios.post(baseUrl, data)
  return response.data
}

const modifyVotes = async (id) => {
  const anecdote = await axios.get(`${baseUrl}/${id}`)

  const response = await axios.patch(`${baseUrl}/${anecdote.data.id}`, {
    votes: anecdote.data.votes + 1,
  })
  console.log(response.data)
  return response.data
}

export default { getAll, addAnecdote, modifyVotes }
