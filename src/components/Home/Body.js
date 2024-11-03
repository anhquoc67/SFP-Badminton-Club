import { Routes, Route } from 'react-router-dom';
import Banner from './Banner';
import Level from './Level';
import FeedBack from './FeedBack';

function Body() {
    return ( 
        <div>
            <Banner />
            <Routes>
                <Route path='/' index element={<Level />} />
            </Routes>
            <FeedBack />
        </div>
     );
}

export default Body;