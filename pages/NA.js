import { styled } from "@mui/system"

const Wrapper = styled("div")(({ theme }) => ({
  overflow: "hidden",
  padding: "0 0",
  background: "transparent",
}));

export default function NA() {
  return (
    <Wrapper>
      Page not found
    </Wrapper>
  )
}
