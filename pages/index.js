import { styled } from "@mui/system"
import FiltersBar from '../components/FiltersBar'
import EventsList from '../components/EventsList'
import AdBar from '../components/AdBar'
import TrendingBar from '../components/TrendingBar'

const Wrapper = styled("div")(({ theme }) => ({ overflow: "hidden", padding: "0 0", background: "transparent", position: "relative", height: "calc(100%)" }));

export default function Index(props) {
  return (
    <Wrapper>
      <AdBar />
      <TrendingBar />
      <FiltersBar />
      <EventsList />
    </Wrapper>
  )
}
