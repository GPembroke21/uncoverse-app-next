import * as React from 'react';
import Image from 'next/image'
import { styled } from "@mui/system"
import ThemeProvider from "../Theme"
import Grid from "@mui/material/Grid"
import CssBaseline from '@mui/material/CssBaseline'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { useEventsContext, useFiltersCategoriesContext, useFiltersContextUpdate } from './ContextProvider';
import InfoPane from './InfoPane';

const Wrapper = styled("div")(({ theme }) => ({ overflow: "hidden", padding: "0 0", background: "transparent", boxShadow: "3" }));
const Main = styled(Grid)(({ theme }) => ({ color: "#ffffff", justifyContent: "center", alignItems: "top", direction: "column", marginTop: "4px" }));
const currentTime = new Date();

export default function TrendingBar() {
    const filtersCategoriesContext = useFiltersCategoriesContext()
    const filtersContextUpdate = useFiltersContextUpdate()
    const eventsContext = useEventsContext()
    // const [topCreators, setTopCreators] = React.useState([])
    const topThreeEvents = eventsContext.filter(array => { if ((array.dateTimeEnd > currentTime.toISOString()) && array.totalAttendees) { return array } })
        .sort((a, b) => a.totalAttendees < b.totalAttendees ? 1 : -1).slice(0, 3);
    const [infoPaneInfo, setInfoPaneInfo] = React.useState(null)
    const [open, setOpen] = React.useState(false)
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

    return (
        <ThemeProvider>
            <CssBaseline />
            <Wrapper sx={{ display: { xs: 'none', sm: 'revert' } }}>
                <Main container>
                    <Grid item flexGrow={1} padding={'0em 0.25em 0em 0.9em'} sx={{ margin: "auto" }}>
                        <Card sx={{
                            width: 1,
                            color: "white",
                            borderRadius: "12px",
                            border: '1px solid #40454d',
                        }}>
                            <CardHeader sx={{ height: "20px", mt: '4px' }}
                                avatar={
                                    <Image src="/trendingevents.svg" alt='Top Events' width="15rem" height="15rem" />
                                }
                                title="Trending Events"
                                titleTypographyProps={{ fontSize: 'clamp(10px, 1.25vw, 13px)', fontWeight: 'bold' }}
                            // onClick={() => console.log(topThreeEvents)}
                            />
                            {/* <Divider sx={{background:'#40454d'}}/> */}
                            <CardContent>
                                <Grid container marginTop={-2} marginBottom={-1.5}>
                                    <Grid item marginRight={2}>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" color="#5d5a5d">
                                            1<br />2<br />3
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)">
                                            {eventsContext.length === 0 ? <span>Loading..</span> :
                                                <span>
                                                    {
                                                        topThreeEvents.map((item, i) => (
                                                            < span key={i} onClick={() => handelClick(item)} style={{ cursor: 'pointer' }}>
                                                                {item.name} < br />
                                                            </span>
                                                        ))
                                                    }
                                                </span>
                                            }
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item flexGrow={1} padding={'0em 0.25em 0em 0.25em'} sx={{ margin: "auto" }}>
                        <Card sx={{
                            width: 1,
                            color: "white",
                            borderRadius: "12px",
                            border: '1px solid #40454d',
                        }}>
                            <CardHeader sx={{ height: "20px", mt: '4px' }}
                                avatar={
                                    <Image src="/topcreators.svg" alt='Top Creators' width="15rem" height="15rem" />
                                }
                                title="Top Creators"
                                titleTypographyProps={{ fontSize: 'clamp(10px, 1.3vw, 14px)', fontWeight: 'bold' }}
                            // onClick={() => console.log(topCreators())}
                            />
                            {/* <Divider sx={{background:'#40454d'}}/> */}
                            <CardContent>
                                <Grid container marginTop={-2} marginBottom={-1.5}>
                                    <Grid item marginRight={2}>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" color="#5d5a5d">
                                            1<br />2<br />3
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)">
                                            {eventsContext.length === 0 ? <span>Loading..</span> :
                                                <span>
                                                    {
                                                        topThreeEvents.map((item, i) => (
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
                        </Card>
                    </Grid>
                    <Grid item flexGrow={1} padding={'0em 0.9em 0em 0.25em'} sx={{ margin: "auto" }}>
                        <Card sx={{
                            width: 1,
                            color: "white",
                            borderRadius: "12px",
                            border: '1px solid #40454d',
                        }}>
                            <CardHeader sx={{ height: "20px", mt: '4px' }}
                                avatar={
                                    <Image src="/topcategories.svg" alt='Top Categories' width="15rem" height="15rem" />
                                }
                                title="Top Categories"
                                titleTypographyProps={{ fontSize: 'clamp(10px, 1.3vw, 14px)', fontWeight: 'bold' }}
                            />
                            {/* <Divider sx={{background:'#40454d'}}/> */}
                            <CardContent>
                                <Grid container marginTop={-2} marginBottom={-1.5}>
                                    <Grid item marginRight={2}>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" color="#5d5a5d">
                                            1<br />2<br />3
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)" style={{ cursor: 'pointer' }}>
                                            <span onClick={() => handleClickCategory("Music")} style={styleCategoryButton("Music")}>Music <br /> </span>
                                            <span onClick={() => handleClickCategory("Information")} style={styleCategoryButton("Information")}>Information <br /></span>
                                            <span onClick={() => handleClickCategory("Art")} style={styleCategoryButton("NFT")}>NFT <br /></span>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Main>
                <InfoPane handleCloseFunction={handleClose} info={infoPaneInfo} openState={open} />
            </Wrapper>
        </ThemeProvider >
    )
}