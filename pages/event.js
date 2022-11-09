import { useRouter } from 'next/router'
import { styled } from "@mui/system"
import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Slide, Divider, Box, Grid, Button, Card } from '@mui/material';
import Image from 'next/image'
import GetEvent from '../src/requests/GetEvent';

const InfopaneRow = styled("div")(({ theme }) => ({ display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center" }));
const InfopaneHead = styled(Grid)(({ theme }) => ({}));
const InfopaneImage = styled(Card)(({ theme }) => ({ position: 'relative' }));
const InfopaneInfo = styled(Grid)(({ theme }) => ({ border: '1px solid white', borderRadius: '12px', marginTop: '15px', padding: '5px 10px' }));
const InfopaneDescription = styled('div')(({ theme }) => ({ border: '1px solid white', borderRadius: '12px', margin: '15px 0px 0px 0px', padding: '5px 10px', height: 'auto', overflow: 'auto' }));

export default function event() {
    const router = useRouter()
    const eventDetails = GetEvent(router.query)
    
    const currentTime = new Date();
    const setDateTime = (start, end) => {
        const dateTimeStart = new Date(start);
        const dateTimeEnd = new Date(end);
        const formattedStartDate = dateTimeStart.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
        const formattedEndDate = (dateTimeEnd.toLocaleDateString('en-US', { year: 'numeric' }) == currentTime.toLocaleDateString('en-US', { year: 'numeric' })) ? dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
        const formattedStartTime = dateTimeStart.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
        const formattedEndTime = dateTimeEnd.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
        const dateStyledInfo = (dateTimeStart < currentTime) ? ("Active (ending " + (formattedEndDate + " @ " + formattedEndTime + ")")) : (formattedStartDate + " @ " + formattedStartTime + " - " + formattedEndDate + " @ " + formattedEndTime)
        return dateStyledInfo
    }

    return (
        <span> {eventDetails.data &&
            <DialogContent sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <InfopaneHead>
                    <DialogTitle sx={{ padding: '0px 0px', fontSize: '20px', fontWeight: 'bold', mb: '10px', mt: '-10px', lineHeight: '100%' }}>{eventDetails.data.name}</DialogTitle>
                    <DialogContentText component={'span'} sx={{ mb: '10px' }}>
                        <InfopaneImage>
                            <Image loader={`${eventDetails.data.image}`} src={eventDetails.data.image} alt={eventDetails.data.name} width="600rem" height="300rem" unoptimized={true} style={{ borderRadius: '8px', cursor: 'pointer' }} position='relative' />
                        </InfopaneImage>
                    </DialogContentText>
                </InfopaneHead>
                <InfopaneInfo>
                    <DialogContentText component={'span'} sx={{ mt: '15px', cursor: 'pointer' }}>
                        <InfopaneRow>
                            <Box sx={{ marginRight: '10px' }}>
                                <Image src="/creator.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
                            </Box>
                            {eventDetails.data.createdByUser}
                        </InfopaneRow>
                    </DialogContentText>
                    <Divider sx={{ margin: '3px 0px' }} />
                    <DialogContentText component={'span'} sx={{ mt: '15px', cursor: 'pointer' }}>
                        <InfopaneRow>
                            <Box sx={{ marginRight: '10px' }}>
                                <Image src="/date.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
                            </Box>
                            {setDateTime(eventDetails.data.dateTimeStart, eventDetails.data.dateTimeEnd)}
                        </InfopaneRow>
                    </DialogContentText>
                    <Divider sx={{ margin: '3px 0px' }} />
                    <DialogContentText component={'span'}>
                        <InfopaneRow>
                            <Box sx={{ marginRight: '10px' }}>
                                <Image src="/category.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
                            </Box>
                            {eventDetails.data.category}
                        </InfopaneRow>
                    </DialogContentText>
                    <Divider sx={{ margin: '3px 0px' }} />
                    <DialogContentText component={'span'}>
                        <InfopaneRow>
                            <Box sx={{ marginRight: '10px' }}>
                                <Image src="/users.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
                            </Box>
                            {eventDetails.data.totalAttendees}
                        </InfopaneRow>
                    </DialogContentText>
                    <Divider sx={{ margin: '3px 0px' }} />
                    <DialogContentText component={'span'}>
                        <InfopaneRow sx={{cursor: 'pointer',}}>
                            <Box sx={{ marginRight: '10px' }}>
                                <Image src="/location.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
                            </Box>
                            {eventDetails.data.platformId}
                            {eventDetails.data.locator}
                        </InfopaneRow>
                    </DialogContentText>
                </InfopaneInfo>
                <InfopaneDescription>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        sx={{
                            lineHeight: '150%',
                            width: '100%',
                            overflow: "auto",
                            msOverflowStyle: "none",
                            scrollbarWidth: "none",
                            '&::-webkit-scrollbar': {
                                display: "none",
                                width: 0,
                            },
                        }}
                        style={{ flex: 1, overflow: 'auto' }}
                    >
                        {eventDetails.data.description}
                    </DialogContentText>
                </InfopaneDescription>
            </DialogContent>}
        </span>
    );
}
