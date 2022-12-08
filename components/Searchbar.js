import React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useAppContext, useAppContextUpdate } from './ContextProvider';

export default function Searchbar() {
  const updateFilters = useAppContextUpdate()
  const searchFilter = useAppContext().filtersSearch
  const [message, setMessage] = React.useState("")

  const handleSubmit = event => {
    const searchVar = event.target[0].value
    event.preventDefault()
    if ((!searchVar || searchVar.length === 0) && searchFilter.length !== 0) { updateFilters.updateSearch(""); return }
    else if (!searchVar || searchVar.length === 0) { return }
    updateFilters.updateSearch(searchVar.toLowerCase())
  }

  const handleChange = event => {
    if (searchFilter && searchFilter.length !== 0 && event.target.value.length === 0) updateFilters.updateSearch("")
    setMessage(event.target.value)
  }

  React.useEffect(() => {
    if (searchFilter == "") setMessage("")
    return () => { }
  }, [searchFilter])

  return (
    <form onSubmit={handleSubmit}
      style={{ flex: 1, color: "white", fontSize: "clamp(8px, 1vw, 14px)", maxWidth: "400px", marginRight: "10px", paddingLeft: 1.5 }}
    >
      <InputBase
        sx={{ backgroundColor: (theme) => theme.palette.button.main, color: (theme) => theme.palette.button.text, }}
        style={{ width: "100%", height: "2rem", fontSize: "clamp(8px, 1vw, 14px)", paddingLeft: 15, borderRadius: "7px" }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        value={message}
        endAdornment={
          <IconButton type="button" aria-label="search">
            <SearchIcon sx={{ width: '0.6em', height: '0.6em', marginRight: 0.5 }} />
          </IconButton>
        }
      />
    </form>
  );
}