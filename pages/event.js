import { useRouter } from 'next/router'
import { styled } from "@mui/system"
import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Slide, Divider, Box, Grid, Button, Card, Typography } from '@mui/material';
import Image from 'next/image'
import GetEvent from '../src/requests/GetEvent';
import { platformsDict } from '../src/static/StaticVariables';

const InfopaneRow = styled("div")(({ theme }) => ({ display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center" }));
const InfopaneHead = styled(Grid)(({ theme }) => ({ marginBottom: "8px" }));
const InfopaneImage = styled("div")(({ theme }) => ({ position: 'relative' }));
const ImageOverlayContainer = styled("div")(({ theme }) => ({ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: "20em", height: "10em" }));
const InfopaneInfo = styled(Grid)(({ theme }) => ({ backgroundColor: theme.palette.card.secondary, borderRadius: '6px', marginTop: '15px', padding: '5px 10px', cursor: 'default' }));
const InfopaneDescription = styled('div')(({ theme }) => ({ backgroundColor: theme.palette.card.secondary, borderRadius: '6px', margin: '15px 0px 0px 0px', padding: '5px 10px', height: 'auto', overflow: 'auto', msOverflowStyle: "none", '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: "none" }));

export default function Event() {
    const router = useRouter()
    const row = GetEvent(router.query).data
    console.log(router.query)

    const currentTime = new Date();

    const dateStyled = rowItem => {
        const dateTimeStart = new Date(rowItem.dateTimeStart);
        const dateTimeEnd = new Date(rowItem.dateTimeEnd);
        const formattedStartDate = dateTimeStart.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
        const formattedEndDate = (dateTimeEnd.toLocaleDateString('en-US', { year: 'numeric' }) == currentTime.toLocaleDateString('en-US', { year: 'numeric' })) ? dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
        const formattedStartTime = dateTimeStart.toLocaleTimeString('en-US')
        const formattedEndTime = dateTimeEnd.toLocaleTimeString('en-US')
        const dateStyledInfo = (dateTimeStart < currentTime) ? ("Active (ends " + (formattedEndDate + " @ " + formattedEndTime + ")")) : (formattedStartDate + " @ " + formattedStartTime + " - " + formattedEndDate + " @ " + formattedEndTime)
        return dateStyledInfo
    }

    const dateStyledShort = rowItem => {
        const dateTimeStart = new Date(rowItem.dateTimeStart);
        const dateTimeEnd = new Date(rowItem.dateTimeEnd);
        const formattedStartDate = dateTimeStart.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
        const formattedEndDate = (dateTimeEnd.toLocaleDateString('en-US', { year: 'numeric' }) == currentTime.toLocaleDateString('en-US', { year: 'numeric' })) ? dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
        const formattedStartTime = dateTimeStart.toLocaleTimeString('en-US')
        const formattedEndTime = dateTimeEnd.toLocaleTimeString('en-US')
        const dateStyledInfo = (dateTimeStart < currentTime) ? ("Active (ends " + formattedEndDate + ")") : (formattedStartDate + " @ " + formattedStartTime)
        return dateStyledInfo
    }

    return (
        <span onClick={() => console.log(router, row)}> {row &&
            <DialogContent sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <InfopaneHead>
                    {/* ########################################### DATE / TITLE ############################################ */}
                    <DialogTitle sx={{ padding: '0px 0px', fontSize: '20px', fontWeight: 'bold', mb: '10px', mt: '-10px', lineHeight: '100%' }}>{row.name}</DialogTitle>

                    {/* ############################################## IMAGE ############################################## */}
                    <DialogContentText component={'span'} sx={{ mb: '10px' }}>
                        <InfopaneImage>
                            <Image src={row.image} alt={row.name} width="600rem" height="300rem" unoptimized={true} style={{ borderRadius: '8px', cursor: 'default' }} position='relative' />
                            {row.imageOverlay &&
                                <div style={{ position: 'absolute', top: '0', left: '0', width: '600px', height: '300px', maxHeight: '50vw', maxWidth: '90vw' }}>
                                    <ImageOverlayContainer>
                                        <Image src={row.imageOverlay} layout="fill" objectFit="contain" alt={row.name} unoptimized={true} style={{ borderRadius: '8px', cursor: 'default', zIndex: '1' }} position='relative' />
                                    </ImageOverlayContainer>
                                </div>
                            }
                        </InfopaneImage>
                    </DialogContentText>

                    {/* ########################################### DATE ############################################ */}
                    <DialogContentText component={'span'} sx={{ cursor: 'pointer', color: (theme) => theme.palette.text.secondary }}>
                        <InfopaneRow sx={{ fontSize: "10px", fontWeight: "300" }}>
                            {dateStyled(row)}
                        </InfopaneRow>
                    </DialogContentText>
                    <DialogContentText component={'span'}>
                        <InfopaneRow sx={{ fontSize: "10px", fontWeight: "500", color: (theme) => theme.palette.text.secondary }}>
                            {platformsDict[row.platformId]}
                            &nbsp;
                            &#x2022;
                            &nbsp;
                            {row.locator}
                        </InfopaneRow>
                    </DialogContentText>
                </InfopaneHead>

                {/* ###################################### CREATOR / USERS / CATEGORY ###################################### */}
                <InfopaneInfo>
                    <DialogContentText component={'span'} sx={{ cursor: 'default' }}>
                        <InfopaneRow sx={{ fontSize: "12px", fontWeight: "500" }}>
                            <Box sx={{ marginRight: '10px', mt: '3px' }}>
                                <Image src="/creator.svg" alt='Creator' width="12rem" height="12rem" unoptimized={true} />
                            </Box>
                            <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>Created by</Typography>
                            &nbsp;
                            <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>{row.createdByUser}</Typography>
                        </InfopaneRow>
                    </DialogContentText>
                    <Divider sx={{ margin: '3px 0px' }} />

                    {row.totalAttendees &&
                        <DialogContentText component={'span'}>
                            <InfopaneRow sx={{ fontSize: "12px", fontWeight: "500" }}>
                                <Box sx={{ marginRight: '10px', mt: '3px' }}>
                                    <Image src="/users.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
                                </Box>
                                <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>{row.totalAttendees}</Typography>
                                &nbsp;
                                <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>total users</Typography>
                                {/* &nbsp;
              &#x2022;
              &nbsp;
              <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>{row.totalAttendees}</Typography>
              &nbsp;
              <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>active users</Typography> */}
                            </InfopaneRow>
                        </DialogContentText>
                    }
                    {row.totalAttendees && <Divider sx={{ margin: '3px 0px' }} />}

                    <DialogContentText component={'span'}
                    // onClick={() => console.log(row)}
                    >
                        <InfopaneRow sx={{ fontSize: "12px", fontWeight: "500" }}>
                            <Box sx={{ marginRight: '10px', mt: '3px' }}>
                                <Image src="/category.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
                            </Box>
                            {row.category.replace(/;/g, ',').substring(0, row.category.length - 1)}
                        </InfopaneRow>
                    </DialogContentText>
                </InfopaneInfo>

                {/* ########################################### DESCRIPTION ############################################ */}
                <InfopaneDescription>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        className='non_select'
                        sx={{
                            lineHeight: '150%',
                            cursor: 'default',
                            width: '100%',
                            overflow: "auto",
                            fontSize: "12px",
                            fontWeight: "500",
                            overflowWrap: "break-word",
                        }}
                    >
                        {row.description}
                    </DialogContentText>
                </InfopaneDescription>
            </DialogContent>}
        </span>
    );
}
