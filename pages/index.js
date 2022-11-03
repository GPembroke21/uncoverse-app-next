import { styled } from "@mui/system"
import FiltersBar from '../components/FiltersBar'
import EventsList2 from '../components/EventsList2'
import AdBar from '../components/AdBar'
import TrendingBar from '../components/TrendingBar'
import Footer from '../components/Footer'

const Wrapper = styled("div")(({ theme }) => ({
  overflow: "hidden",
  padding: "0 0",
  background: "transparent",
  position: "relative",
  height: "calc(100%)"
}));

export default function Index(props) {
  return (
    <Wrapper>
      <AdBar/>
      <TrendingBar/>
      <FiltersBar/>
      {/* <EventsList2 eventList={props.eventList} /> */}
      <EventsList2 />
      <Footer/>
    </Wrapper>
  )
}
