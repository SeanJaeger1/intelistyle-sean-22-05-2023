import React, { useState } from "react"
import axios from "axios"
import { Box, TextField, Button } from "@mui/material"
import GarmentList from "./GarmentList"

const Search = () => {
  const [term, setTerm] = useState("")
  const [garments, setGarments] = useState([])
  const [error, setError] = useState("")

  const searchGarments = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/search?q=${term}`)
      setGarments(response.data)
      setError("")
    } catch (err) {
      setError("An error occurred while searching. Please try again.")
    }
  }

  return (
    <Box
      m={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{ paddingTop: "48px" }}
    >
      <TextField
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        label="Search for garments"
        variant="outlined"
        style={{ marginBottom: "16px", width: 360 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={searchGarments}
        disabled={Boolean(!term)}
        style={{ marginBottom: "16px", width: 360 }}
      >
        Search
      </Button>
      {error && <p>{error}</p>}
      <GarmentList garments={garments} />
    </Box>
  )
}

export default Search
