import { useLocation } from "react-router-dom";
import BrandsSale from "../BrandsSale/BrandsSale";
import Feshonsho from "../Feshonsho/Feshonsho";
import Marquees from "../Marquees/Marquees";
import MaulipolProdauct from "../MaulipolProdauct/MaulipolProdauct";
import Slider from "../Slider/Slider";
import { useEffect } from "react";


const Home = () => {
        const location = useLocation();

// card - 1
// AboutDev component '#section1' বাটন এ ক্লিক করলে Home এর Latest Blogs কার্ড দেখাবে এটা তার useEffect
    useEffect(() => {
        if (location.hash === '#section1') {
            const element = document.getElementById('section1');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    // card - 2
    // AboutDev component '#section2' বাটন এ ক্লিক করলে Home এর Fashion show কার্ড দেখাবে এটা তার useEffect
    useEffect(() => {
        if (location.hash === '#section2') {
            const element = document.getElementById('section2');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    // all prodauct compani 
    // AboutDev component '#section3' এই বাটন এ ক্লিক করলে Home এর কার্ড দেখাবে এটা তার useEffect
    useEffect(() => {
        if (location.hash === '#section3') {
            const element = document.getElementById('section3');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div>
            <div>
           <Slider></Slider> 
            </div>
           {/* AboutDev component এর Link এর button click করলে id অনুসারে এই component এর এই জায়গায় চলে আসবে*/}
           <div id="section3" className="my-8">
            <Marquees></Marquees>
           </div>
           <div className="my-8">
            <BrandsSale></BrandsSale>
           </div>
             {/* AboutDev component এর Link এর button click করলে id অনুসারে এই component এর এই জায়গায় চলে আসবে*/}
           <div id="section2" className="my-8">
            <Feshonsho></Feshonsho>
           </div>
             {/* AboutDev component এর Link এর button click করলে id অনুসারে এই component এর এই জায়গায় চলে আসবে*/}
           <div id="section1" className="my-8">
            <MaulipolProdauct></MaulipolProdauct>
           </div>
        </div>
    );
};

export default Home;