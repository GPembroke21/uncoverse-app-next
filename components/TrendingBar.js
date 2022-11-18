import * as React from 'react';
import Image from 'next/image'
import ThemeProvider from "../Theme"
import { styled } from "@mui/system"
import { Backdrop, Box, Card, CardContent, CardHeader, CssBaseline, Grid, Typography } from "@mui/material";
import { useEventsContext, useFiltersCategoriesContext, useFiltersContextUpdate } from './ContextProvider';
import InfoPane from './InfoPane';
import { animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

const Wrapper = styled("div")(({ theme }) => ({ overflow: "hidden", padding: "0 0", background: "transparent", boxShadow: "3" }));
const Main = styled(Grid)(({ theme }) => ({ color: "#ffffff", justifyContent: "center", alignItems: "top", direction: "row", marginTop: "2px" }));
const TrendingCard = styled(Card)(({ theme }) => ({ color: "white", borderRadius: "10px", background: theme.palette.card.trending }));
const currentTime = new Date();

export default function TrendingBar() {
    const filtersCategoriesContext = useFiltersCategoriesContext()
    const filtersContextUpdate = useFiltersContextUpdate()
    const eventsContext = useEventsContext()
    const [infoPaneInfo, setInfoPaneInfo] = React.useState(null)
    const [open, setOpen] = React.useState(false)

    const topEvents = eventsContext.filter(array => { if ((array.dateTimeEnd > currentTime.toISOString()) && (array.dateTimeStart < currentTime.toISOString()) && array.totalAttendees) { return array } })
        .sort((a, b) => a.totalAttendees < b.totalAttendees ? 1 : -1);
    const topCreators = [...new Map(topEvents.filter(array => { if(array.createdByUser && array.createdByUser !== "") return array }).map((m) => [m.createdByUser, m])).values()]

    const handleClose = () => setOpen(false)
    const handelClick = event => {
        setInfoPaneInfo(event)
        setOpen(!open)
    }


    const handleClickCategory = cat => {
        if (filtersCategoriesContext && filtersCategoriesContext.includes(cat)) { filtersContextUpdate.updateCategory(filtersCategoriesContext.filter(i => i !== cat)) }
        else if (filtersCategoriesContext) { filtersContextUpdate.updateCategory(filtersCategoriesContext.concat(cat)) }
    }
    const styleCategoryButton = cat => { return (filtersCategoriesContext && filtersCategoriesContext.includes(cat)) ? { color: "#dd00ff" } : { color: "white" } }
    const bind = useDrag(({ args: [index], down, movement: [mx, my] }) => { if (mx < -75) handleClose() })

    return (
        <ThemeProvider>
            <CssBaseline />
            <Wrapper sx={{ display: { xs: 'none', sm: 'revert' } }}>
                <Main container>
                    <Grid item xs flexGrow={1} padding={'0em 0.85em 0em 0.9em'} sx={{ margin: "auto" }} zeroMinWidth>
                        <TrendingCard sx={{width: 1}}>
                            <CardHeader sx={{ height: "20px", margin: "4px 0px 4px -2px", cursor: 'default' }}
                                avatar={
                                    <Image src="/trendingevents.svg" alt='Top Events' width="20rem" height="20rem" />
                                }
                                title="Trending Events"
                                titleTypographyProps={{ fontSize: 'clamp(12px, 1.45vw, 16px)', fontWeight: '600', color: "#f5f3f7", marginLeft: "-3px" }}
                            // onClick={() => console.log(topEvents)}
                            />
                            {/* <Divider sx={{background:'#40454d'}}/> */}
                            <CardContent>
                                <Grid container marginTop={-2} marginBottom={-1.5} wrap="nowrap">
                                    <Grid item marginRight={2}>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" color="#948b9c" lineHeight="175%">
                                            1<br />2<br />3
                                        </Typography>
                                    </Grid>
                                    {/* <Grid item> */}
                                    <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} lineHeight="175%">
                                        {eventsContext.length === 0 ? <span>Loading..</span> :
                                            <span>
                                                {
                                                    topEvents.slice(0, 3).map((item, i) => (
                                                        < span key={i} onClick={() => handelClick(item)} style={{ cursor: 'pointer' }}>
                                                            {item.name} < br />
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
                                    <Grid item marginRight={2}>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" color="#948b9c" lineHeight="175%">
                                            1<br />2<br />3
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" style={{ cursor: 'pointer' }} lineHeight="175%">
                                            <span onClick={() => handleClickCategory("Music")} style={styleCategoryButton("Music")}>Music <br /> </span>
                                            <span onClick={() => handleClickCategory("Information")} style={styleCategoryButton("Information")}>Information <br /></span>
                                            <span onClick={() => handleClickCategory("NFT")} style={styleCategoryButton("NFT")}>NFT <br /></span>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </TrendingCard>
                    </Grid>
                    <Grid item xs flexGrow={1} padding={'0em 0.9em 0em 0.85em'} sx={{ margin: "auto" }}>
                        <TrendingCard sx={{width: 1}}>
                            <CardHeader sx={{ height: "20px", margin: "4px 0px 4px -2px", cursor: 'default' }}
                                avatar={
                                    <Image src="/topcreators.svg" alt='Top Creators' width="20rem" height="20rem" />
                                }
                                title="Top Creators"
                                titleTypographyProps={{ fontSize: 'clamp(12px, 1.45vw, 16px)', fontWeight: '600', color: "#f5f3f7", marginLeft: "-3px" }}
                                onClick={() => console.log(topCreators.splice(0, 3))}
                            />
                            {/* <Divider sx={{background:'#40454d'}}/> */}
                            <CardContent>
                                <Grid container marginTop={-2} marginBottom={-1.5}>
                                    <Grid item marginRight={2}>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" color="#948b9c" lineHeight="175%">
                                            1<br />2<br />3
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" lineHeight="175%">
                                            {eventsContext.length === 0 ? <span>Loading..</span> :
                                                <span>
                                                    {
                                                        topCreators.splice(0, 3).map((item, i) => (
                                                            < span key={i}>
                                                                {item.createdByUser} < br />
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
                <animated.div {...bind()} >
                    <Backdrop open={open} onClick={handleClose} />
                    <InfoPane handleCloseFunction={handleClose} info={infoPaneInfo} openState={open} />
                </animated.div>
            </Wrapper>
        </ThemeProvider >
    )
}