
import Banner from '../components/Banner';
import './home.css';
import Frontvideos from '../components/frontend/frontvideos.jsx';
import Backvideos from '../components/backend/backendvideos.jsx';
import InnovaVideos from '../components/innova/innovaVideos.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
    
    
    return (
        <>
        <Header/>
        <div className='home-container'>
            <Banner />
            <main>
                <Frontvideos/>
                <Backvideos/>
                <InnovaVideos/>
            </main>
        </div>
        <Footer/>
        </>
    );
}
