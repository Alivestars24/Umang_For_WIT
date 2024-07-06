import React from "react";
import img1 from '../../../assets/Images/herosectionimg.png'
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const navigate=useNavigate();

    function getstartedHandler(){
         navigate("/login")
    }
    return(
        <div className=" mt-0 relative w-fit pt-3">
            <div className="flex flex-row items-center justify-between max-h-5/6 mx-auto">
                <div className="relative flex flex-col justify-between py-1 px-5 mt-0 gap-y-4 w-fit lg:max-w-8/12">
                    <p className="text-7xl font-bold font-cher text-sunny ">Empowering Women in Tech</p>
                    <p className="text-[20px] font-mw text-lpurple opacity-90">
                    Dare to dream, Dare to disrupt, Dare to make a difference. 
                    </p>
                    <p className="text-xl py-2 font-mw text-purple-300 mt-3 opacity-80">
                    At the heart of our mission lies a simple yet profound goal: to embolden women in tech, amplify their voices, 
                    and cultivate environments where brilliance transcends gender.
                    Join us as we lead the charge towards a future where success hinges solely on talent, 
                    innovation, and unwavering determination.
                    </p>

                    <button onClick={getstartedHandler} className="border w-5/12 border-slate-500 bg-lpurple rounded-lg relative hover:bg-yellow-25 cursor-pointer
                    py-3 px-6">
                        <p className="font-bold text-darkestpurple text-2xl ">Get Started</p>
                    </button>
                </div>

                <div>
                    <img src={img1} alt="home_page_img" className="w-[1400px] h-[700px] relative"/>
                </div>
            </div>
            
        </div>
    )
}

export default Header;