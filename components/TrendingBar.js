import * as React from 'react';
import Image from 'next/image'
import ThemeProvider from "../Theme"
import { styled } from "@mui/system"
import { Backdrop, Card, CardContent, CardHeader, CssBaseline, Grid, Typography, Box } from "@mui/material";
import { useEventsContext, useAppContext, useAppContextUpdate } from './ContextProvider';
import InfoPane from './InfoPane';
import { animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

const Wrapper = styled("div")(({ theme }) => ({ overflow: "hidden", padding: "0 0", background: "transparent", boxShadow: "3" }));
const Main = styled(Grid)(({ theme }) => ({ color: "#ffffff", justifyContent: "center", alignItems: "top", direction: "row", marginTop: "2px" }));
const BackCard = styled(Card)(({ theme }) => ({ color: "white", padding: "0px 0px", margin: "0px 0px"}));
const TrendingCard = styled(Card)(({ theme }) => ({ color: "white", borderRadius: "10px", background: theme.palette.card.trending, padding: '0px 0px 0px 2px' }));
const currentTime = new Date();

export default function TrendingBar() {
    const filtersCategoriesContext = useAppContext().filtersCategories
    const filtersCreatorsContext = useAppContext().filtersCreators
    const appContextUpdate = useAppContextUpdate()
    const eventsContext = useEventsContext()
    const [infoPaneInfo, setInfoPaneInfo] = React.useState(null)
    const [open, setOpen] = React.useState(false)

    const topEvents = eventsContext.filter(array => { if ((array.dateTimeEnd > currentTime.toISOString()) && (array.dateTimeStart < currentTime.toISOString()) && array.totalAttendees) { return array } })
        .sort((a, b) => a.totalAttendees < b.totalAttendees ? 1 : -1);
    const topCreators = [...new Map(topEvents.filter(array => { if (array.createdByUser && array.createdByUser !== "") return array }).map((m) => [m.createdByUser, m])).values()]

    const handleClose = () => setOpen(false)
    const handelClick = event => {
        setInfoPaneInfo(event)
        setOpen(!open)
    }

    const handleClickCategory = cat => {
        if (filtersCategoriesContext && filtersCategoriesContext.includes(cat)) { appContextUpdate.updateCategory(filtersCategoriesContext.filter(i => i !== cat)) }
        else if (filtersCategoriesContext) { appContextUpdate.updateCategory(filtersCategoriesContext.concat(cat)) }
    }
    const styleCategoryButton = cat => { return (filtersCategoriesContext && filtersCategoriesContext.includes(cat)) ? { color: "#dd00ff" } : { color: "white" } }

    const handleClickCreator = creator => {
        if (filtersCreatorsContext && filtersCreatorsContext.includes(creator)) { appContextUpdate.updateCreators(filtersCreatorsContext.filter(i => i !== creator)) }
        else if (filtersCreatorsContext) { appContextUpdate.updateCreators(filtersCreatorsContext.concat(creator)) }
    }
    const styleCreatorButton = creator => { return (filtersCreatorsContext && filtersCreatorsContext.includes(creator)) ? { color: "#dd00ff", cursor: 'pointer' } : { color: "white", cursor: 'pointer' } }

    const bind = useDrag(({ args: [index], down, movement: [mx, my] }) => { if (mx < -75) handleClose() })

    return (
        <ThemeProvider>
            <CssBaseline />
            <Wrapper sx={{ display: { xs: 'none', sm: 'revert' } }}>
            <BackCard>
                <Main container>
                {/* <Typography sx={{transform: 'rotate(-90deg)', marginLeft: "20px", marginRight: "-90px", fontSize: "clamp(19px, 2vw, 23px)", fontWeight: "800"}}>TRENDING</Typography> */}
                    <Grid item xs flexGrow={1} padding={'0em 0.85em 0em 0.9em'} sx={{ margin: "auto" }} zeroMinWidth>
                        <TrendingCard sx={{ width: 1 }}>
                            <CardHeader sx={{ height: "20px", margin: "4px 0px 4px -2px", cursor: 'default' }}
                                avatar={
                                    <Image src="/trendingevents.svg" alt='Top Events' width="20rem" height="20rem" />
                                }
                                title="Top Events"
                                titleTypographyProps={{ fontSize: 'clamp(12px, 1.45vw, 16px)', fontWeight: '600', color: "#f5f3f7", marginLeft: "-3px" }}
                            // onClick={() => console.log(topEvents)}
                            />
                            {/* <Divider sx={{background:'#40454d'}}/> */}
                            <CardContent>
                                <Grid container marginTop={-2} marginBottom={-1.5} wrap="nowrap">
                                    <Grid item marginRight={1.3}>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" fontWeight="200" color={(theme) => theme.palette.text.label} lineHeight="175%" sx={{cursor: "default"}}>
                                            1<br />2<br />3
                                        </Typography>
                                    </Grid>
                                    {/* <Grid item> */}
                                    <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} lineHeight="175%" width="calc(100% - 22px)">
                                        {eventsContext.length === 0 ? <span>Loading..</span> :
                                            <span>
                                                {
                                                    topEvents.slice(0, 3).map((item, i) => (
                                                        < span key={i} onClick={() => handelClick(item)} style={{ cursor: 'pointer' }}>
                                                            <Box sx={{"&:hover": {backgroundColor: (theme) => theme.palette.button.main}, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", borderRadius: "8px", padding: "0px 2px 0px 6px"}}>
                                                            {item.name} < br />
                                                            </Box>
                                                        </span>
                                                    ))
                                                }
                                            </span>
                                        }
                                    </Typography>
                                    {/* </Grid> */}
                                </Grid>
                            </CardContent>
                        </TrendingCard>
                    </Grid>



                    <Grid item xs flexGrow={1} padding={'0em 0.25em 0em 0.25em'} sx={{ margin: "auto" }}>
                        <TrendingCard sx={{ width: 1 }}>
                            <CardHeader sx={{ height: "20px", margin: "4px 0px 4px -2px", cursor: 'default' }}
                                avatar={
                                    <Image src="/topcategories.svg" alt='Top Categories' width="20rem" height="20rem" />
                                }
                                title="Top Categories"
                                titleTypographyProps={{ fontSize: 'clamp(12px, 1.45vw, 16px)', fontWeight: '600', color: "#f5f3f7", marginLeft: "-3px" }}
                            />
                            {/* <Divider sx={{background:'#40454d'}}/> */}
                            <CardContent>
                                <Grid container marginTop={-2} marginBottom={-1.5}>
                                    <Grid item marginRight={1.3}>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" fontWeight="200" color={(theme) => theme.palette.text.label} lineHeight="175%" sx={{cursor: "default"}}>
                                            1<br />2<br />3
                                        </Typography>
                                    </Grid>
                                    <Grid item width="calc(100% - 24px)">
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" style={{ cursor: 'pointer' }} lineHeight="175%">
                                        <Box sx={{"&:hover": {backgroundColor: (theme) => theme.palette.button.main}, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", borderRadius: "8px", padding: "0px 2px 0px 6px"}}>
                                            <span onClick={() => handleClickCategory("Music")} style={styleCategoryButton("Music")}>Music <br /> </span>
                                        </Box>
                                        <Box sx={{"&:hover": {backgroundColor: (theme) => theme.palette.button.main}, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", borderRadius: "8px", padding: "0px 2px 0px 6px"}}>
                                            <span onClick={() => handleClickCategory("Information")} style={styleCategoryButton("Information")}>Information <br /></span>
                                        </Box>
                                        <Box sx={{"&:hover": {backgroundColor: (theme) => theme.palette.button.main}, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", borderRadius: "8px", padding: "0px 2px 0px 6px"}}>
                                            <span onClick={() => handleClickCategory("NFT")} style={styleCategoryButton("NFT")}>NFT <br /></span>
                                        </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </TrendingCard>
                    </Grid>
                    <Grid item xs flexGrow={1} padding={'0em 0.9em 0em 0.85em'} sx={{ margin: "auto" }}>
                        <TrendingCard sx={{ width: 1 }}>
                            <CardHeader sx={{ height: "20px", margin: "4px 0px 4px -2px", cursor: 'default' }}
                                avatar={<Image src="/topcreators.svg" alt='Top Creators' width="20rem" height="20rem" />}
                                title="Top Creators"
                                titleTypographyProps={{ fontSize: 'clamp(12px, 1.45vw, 16px)', fontWeight: '600', color: "#f5f3f7", marginLeft: "-3px" }}
                            // onClick={() => console.log(topCreators.splice(0, 3))}
                            />
                            {/* <Divider sx={{background:'#40454d'}}/> */}
                            <CardContent>
                                <Grid container marginTop={-2} marginBottom={-1.5}>
                                    <Grid item marginRight={1.3}>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" fontWeight="200" color= {(theme) => theme.palette.text.label} lineHeight="175%" sx={{cursor: "default"}}>
                                            1<br />2<br />3
                                        </Typography>
                                    </Grid>
                                    <Grid item width="calc(100% - 24px)">
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" lineHeight="175%" style={{ cursor: 'pointer' }}>
                                            {eventsContext.length === 0 ? <span>Loading..</span> :
                                                <span>
                                                    {
                                                        topCreators.splice(0, 3).map((item, i) => (
                                                            < span key={i} onClick={() => handleClickCreator(item.createdByUser)} style={styleCreatorButton(item.createdByUser)}>
                                                                <Box sx={{"&:hover": {backgroundColor: (theme) => theme.palette.button.main}, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", borderRadius: "8px", padding: "0px 2px 0px 6px"}}>
                                                                {item.createdByUser} < br />
                                                                </Box>
                                                            </span>
                                                        ))
                                                    }
                                                </span>
                                            }

                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </TrendingCard>
                    </Grid>
                </Main>
                </BackCard>
                <animated.div {...bind()} >
                    <Backdrop open={open} onClick={handleClose} />
                    <InfoPane handleCloseFunction={handleClose} info={infoPaneInfo} openState={open} />
                </animated.div>
            </Wrapper>
        </ThemeProvider >
    )
}