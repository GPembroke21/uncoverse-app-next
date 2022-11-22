import { styled } from "@mui/system"
import Chart from '../components/Chart'
import ChartBottom from '../components/ChartBottom'
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

const ChartTable = styled("div")(({ theme }) => ({
  margin: "0rem 0 1rem 0",
  border: "1px solid #2e2e2e",
  borderRadius: "10px",
}));

const Table = styled("div")(({ theme }) => ({
  width: "100%",
}));

const TableRow = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));

const TableItem = styled("div")(({ theme }) => ({
  padding: "1rem 2rem",
}));

const Divider = styled("div")(({ theme }) => ({
  borderBottom: "1px solid #282b2f",
}));

const Title = styled("div")(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "600",
}));

export default function Index(props) {
  return (
<Wrapper>
        <Content>
        <ChartTable>
          {/* <TableItem>
            <Title></Title>
          </TableItem>
          <Divider /> */}
          <Table>
              <TableItem>
                  <TableRow sx={{color: "white"}}>
                      <div style={{ flex: 3 }}>Platforms</div>
                      <div style={{ flex: 2 }}>Events</div>
                      <div style={{ flex: 1 }}>Users</div>
                      <div style={{ flex: 0 }}>
                          <MoreVertIcon/>
                      </div>
                  </TableRow>
              </TableItem>
              <Divider/>
              {/* <div>
              {coins.map(coin => (
                <div key={coin.name}>
                  <Coin coin={coin} />
                  <Divider />
                </div>
              ))}
            </div> */}
          </Table>
        </ChartTable>
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
