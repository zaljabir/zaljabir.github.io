import './App.css';
import { SalesTable } from './components/salesTable';
import { SalesGraph } from './components/retailSalesGraph';
import { Stack } from '@mui/material';
import { SideBar } from './components/sidebar';
import { Heading } from './components/header';
import { Provider } from 'react-redux';
import store from './states/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Heading/>
        <Stack direction="row" spacing={2} sx={{ width: '100%'}}>
          <SideBar/>
          <Stack spacing={4} flex={1}>
            <SalesGraph/>
            <SalesTable/>
          </Stack>
        </Stack>
      </div>
    </Provider>
  );
}

export default App;
