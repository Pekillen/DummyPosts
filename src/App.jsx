import './App.css';
import { Box, Container } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import theme from './styles/Styles';

 
const App = () => {     
 return (
    <Container sx={{ bgcolor: theme.palette.pale.main, minHeight: "100vh" }}>
      <BrowserRouter>
          <Box maxWidth="lg">
            <Navbar />
            <Routes>
            <Route path='/' element={<Navigate to="/posts" replace />} />                                      
            <Route path="/posts" element={<Posts />} />                    
            <Route path='/posts/:id' element={<PostDetails />} />                                     
            </Routes>
          </Box> 
        </BrowserRouter>   
    </Container>
         
    );
}

export default App;