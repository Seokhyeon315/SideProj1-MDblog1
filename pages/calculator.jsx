import React from "react";
import BMI from '../components/BMI';
import BMR from "@/components/BMR";
// import DCN from "@/components/DCN";
import HRC from '@/components/HRC';
import ORM from '@/components/ORM';
import BFP from "@/components/BFP";
// import DWI from "@/components/DWI";


const calculator = () => {
    return (
        <>
            <div className=" px-7 mt-20 flex flex-col justify-center items-center ">
                <h1 className="text-3xl mb-5 p-5">Calculators for Health & Fitness</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols4 gap-3">

                    {/* Use grid for each calculator, short explanation: what & when to use*/}

                    <div className="rounded-md px-3 border-2">
                        <BMI />
                    </div>
                    <div className="rounded-md px-3 border-2">
                        <BMR />
                    </div>
                    {/* <div className="rounded-md px-3 border-2">
                        <DCN />
                    </div> */}
                    <div className="rounded-md px-3 border-2">
                        <HRC />
                    </div>
                    <div className="rounded-md px-3 border-2">
                        <ORM />
                    </div>
                    <div className="rounded-md px-3 border-2">
                        <BFP />
                    </div>

                </div>
            </div></>
    );
};

export default calculator;


// Heart Rate Calculator:
// Maximum heart rate = 220 - age in years
// Target heart rate for exercise = 50-85% of maximum heart rate
