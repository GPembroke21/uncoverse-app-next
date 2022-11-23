import { styled } from "@mui/system"
import Chart from '../components/Chart'
import ChartBottom from '../components/ChartBottom'
import ChartTable from '../components/ChartTable'

const Wrapper = styled("div")(({ theme }) => ({ 
    position: "relative", 
    height: "calc(100%)", 
    width: "100%",
}));

const Content = styled("div")(({ theme }) => ({
  width: "100%",
//   maxWidth: "1000px",
  padding: "1rem 1rem",
}));

const ChartContainer = styled("div")(({ theme }) => ({
  border: "1px solid #2e2e2e",
  borderRadius: "10px",
  padding: "1rem 2rem",
}));

const ChartSubtitle = styled("div")(({ theme }) => ({
  color: "#8a919e",
  fontSize: "0.9rem",
  margin: "0 0 0.25rem 0",
}));

const ChartTitle = styled("div")(({ theme }) => ({
  fontSize: "1.8rem",
  fontWeight: "700",
  color: theme.palette.button.text,
}));

export default function Index(props) {
  return (
<Wrapper>
        <Content>
            <ChartTable/>
            <ChartContainer>
                <ChartTitle>MetaverseName</ChartTitle>
                <ChartSubtitle>Daily Active Users</ChartSubtitle>
                <Chart/>
                <ChartBottom/>
            </ChartContainer>
        </Content>
    </Wrapper>
  )
}
