import React from 'react'
import { useState } from 'react'
import { styled } from "@mui/system"
import ThemeProvider from "../Theme"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import { platformsDict, categoryList, platformsList } from '../src/static/StaticVariables'
import { useFiltersCategoriesContext, useFiltersPlatformsContext, useFiltersContextUpdate } from './ContextProvider'

const Wrapper = styled("div")(({ theme }) => ({ width: "100%", padding: "0rem 1rem" }));
const FiltersContainer = styled("div")(({ theme }) => ({ margin: "0.6rem 0rem", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center" }));
const FilterButton = styled(Button)(({ theme }) => ({ color: "white", backgroundColor: "#21172a", fontSize: "clamp(8px, 1vw, 14px)", padding: '0px 10px', borderRadius: '7px', marginRight: '10px', height: "2.5em", maxWidth: "fit-content", minWidth: "fit-content", "&:hover": { color: "#dd00ff", backgroundColor: "#21172a" } }));
const DropdownContainer = styled("div")(({ theme }) => ({ margin: "0.6rem 0rem", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center", width: "100%", overflow: "auto", msOverflowStyle: "none", scrollbarWidth: "none", '&::-webkit-scrollbar': { display: "none", width: 0 } }));
const ClearFilterButton = styled(Button)(({ theme }) => ({ color: "white", backgroundColor: "#21172a", fontSize: "clamp(8px, 1vw, 14px)", padding: '0px 10px', borderRadius: '7px', marginRight: '10px', height: "2.5em", width: "11em", "&:hover": { color: "#dd00ff", backgroundColor: "#21172a" } }));

export default function FiltersDropdown() {
  const [filterShown, setfilterShown] = useState({ Platform: false, Category: false })
  const filtersPlatormsContext = useFiltersPlatformsContext()
  const filtersCategoriesContext = useFiltersCategoriesContext()
  const filtersContextUpdate = useFiltersContextUpdate()

  const handleClickPlatform = plat => {
    if (filtersPlatormsContext && filtersPlatormsContext.includes(plat)) { filtersContextUpdate.updatePlatform(filtersPlatormsContext.filter(i => i !== plat)) }
    else if (filtersPlatormsContext) { filtersContextUpdate.updatePlatform(filtersPlatormsContext.concat(plat)) }
  }

  const handleClickCategory = cat => {
    if (filtersCategoriesContext && filtersCategoriesContext.includes(cat)) { filtersContextUpdate.updateCategory(filtersCategoriesContext.filter(i => i !== cat)) }
    else if (filtersCategoriesContext) { filtersContextUpdate.updateCategory(filtersCategoriesContext.concat(cat)) }
  }
 
  const stylePlatformButton = plat => { return (filtersPlatormsContext && filtersPlatormsContext.includes(plat)) ? { color: "#dd00ff" } : { color: "white" } }
  const styleCategoryButton = cat => { return (filtersCategoriesContext && filtersCategoriesContext.includes(cat)) ? { color: "#dd00ff" } : { color: "white" } }

  const handleClick = filterType => {
    if (filterType === "Platform") {
      setfilterShown(currentState => { return { Platform: !currentState.Platform, Category: false } })
    } else if (filterType === "Category") {
      setfilterShown(currentState => { return { Platform: false, Category: !currentState.Category } })
    }
  };

  const plaftformDropdown =
    <DropdownContainer>
      {platformsList.map((plat, index) => (
        <FilterButton key={index} onClick={() => handleClickPlatform(plat)} style={stylePlatformButton(plat)}>
          {platformsDict[plat]}
        </FilterButton>
      ))}
    </DropdownContainer>

  const categoryDropdown =
    <DropdownContainer>
      {categoryList.map((cat, index) => (
        <FilterButton key={index} onClick={() => handleClickCategory(cat)} style={styleCategoryButton(cat)}>
          {cat}
        </FilterButton>
      ))}
    </DropdownContainer>

  return (
    <ThemeProvider>
      <Wrapper>
        <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
        <FiltersContainer>
          {Object.keys(filterShown).map((filter, index) => (
            <FilterButton key={index} onClick={() => handleClick(filter)} sx={{ color: filterShown[filter] ? (theme) => theme.palette.button.hovertext : (theme) => theme.palette.button.text, width: "11em", maxWidth: "11em", minWidth: "11em" }}>
              {filter}
            </FilterButton>
          ))}
          <ClearFilterButton>Clear Filters</ClearFilterButton>
        </FiltersContainer>
        {(filterShown.Platform || filterShown.Category) && <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />}
        {filterShown.Category && categoryDropdown}
        {filterShown.Platform && plaftformDropdown}
      </Wrapper>
    </ThemeProvider>
  )
}