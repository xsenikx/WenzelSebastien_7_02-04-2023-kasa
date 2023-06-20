import { Routes, Route } from 'react-router-dom';
import { Layout, Home, About, Accomodation, NotFound} from '../pages'

const RoutePage = () => {
    
    return (
        <Routes>
            {/* route PARENT */}
            <Route element={<Layout/>}>
                {/* route ENFANT */}
                {/*optionnel <Route index element={<Home/>} /> */}
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/accomodation/:id" element={<Accomodation/>} />
                <Route path="*" element={<NotFound/>} />
            </Route>
        </Routes>
    );
};

export default RoutePage;