import { Box } from "@mui/system";
import Header from "./components/header/Header";

function App() {
  return (
    <Box>
      <Header title={process.env.REACT_APP_TITLE || '<Título da aplicação>'} />
    </Box>
  );
}

export default App;
