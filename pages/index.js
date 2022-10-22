import { styled } from "@mui/system"
import Filters from '../components/Filters'
import EventsList2 from '../components/EventsList2'
import AdBar from '../components/AdBar'
import TrendingBar from '../components/TrendingBar'

const Wrapper = styled("div")(({ theme }) => ({
  overflow: "hidden",
  padding: "0 0",
  background: "#000000",
}));

export default function Index(props) {
  return (
    <Wrapper>
      <AdBar />
      <TrendingBar />
      <Filters />
      <EventsList2 eventList={props.eventList} />
    </Wrapper>
  )
}
