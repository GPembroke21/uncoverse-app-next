import { styled } from "@mui/system";
import Lander from "./index.js";

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: 1300,
  margin: "0 auto",
  // [theme.breakpoints.down("sm")]: {
  //   maxWidth: "100%",
  // },
}));

export default function Home() {

  return (
    <Wrapper>
      <Lander/>
    </Wrapper>
  );
}
