export const platformLogos = {
    'DCLD': '/DCLD_logo.png',
    'SOMN': '/SOMN_logo.png',
    'CRVX': '/CRVX_logo.png',
    'META': '/META_logo.png',
    'SAND': '/SAND_logo.png',
    'RBLX': '/RBLX_logo.png',
}

export const platformsList = [
    'DCLD',
    'SOMN',
    'CRVX',
    'META',
    'SAND',
    'RBLX',
]

export const platformsDict = {
    'DCLD': 'Decentraland',
    'SOMN': 'Somnium',
    'CRVX': 'Voxels',
    'META': 'Horizon Worlds',
    'SAND': 'Sandbox',
    'RBLX': 'Roblox',
}


export const eventsIdArray = []
export const eventsArray = []

export const favoriteEvents = {}
export const favoriteEventsArray = []

export const categoryList = [
    'Meetup',
    'Talks',
    'Music',
    'Art',
    'Information',
    'Party',
    'Movies',
    'Crypto',
    'Games',
    'Sports',
    'Fashion',
    'Exhibition',
    'Explore',
    'NFT'
]

export const typeList = [
    'Event',
    'Space'
]

const currentTime = new Date();

export const getDate = (dateStartRaw, dateEndRaw) => {

    const dateTimeStart = new Date(dateStartRaw);
    const dateTimeEnd = new Date(dateEndRaw);
    const formattedStartDate = dateTimeStart.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
    const formattedEndDate = (dateTimeEnd.toLocaleDateString('en-US', { year: 'numeric' }) == currentTime.toLocaleDateString('en-US', { year: 'numeric' })) ? dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    const formattedStartTime = dateTimeStart.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
    const formattedEndTime = dateTimeEnd.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
    const dateStyled = (dateTimeStart < currentTime) ? "Active" : (formattedStartDate + ", " + formattedStartTime)
    const dateStyledInfo = (dateTimeStart < currentTime) ? ("Active (ending " + (formattedEndDate + " @ " + formattedEndTime + ")")) : (formattedStartDate + " @ " + formattedStartTime + " - " + formattedEndDate + " @ " + formattedEndTime)
}