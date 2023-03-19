// One Rep Max (1RM) Calculator:
// 1RM = weight lifted / (1.0278 - (0.0278 x number of repetitions))


import React, { useState } from "react";

function ORM() {
    const [weight, setWeight] = useState(0);
    const [rep, setRep] = useState(0);
    const [orm, setORM] = useState(0);

    const calculateORM = () => {
        let orm = weight / (1.0278 - (0.0278 * rep));
        setORM(orm.toFixed(2));
    };

    return (
        <div className="flex flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10">
            <h2 className="text-2xl font-bold mb-4">One Rep Max (1RM)</h2>
            <div className="mb-4">
                <label className="block font-medium mb-2">
                    Weight Lifted (kg):
                </label>
                <input className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-2">
                    Number of repetitions:
                </label>
                <input className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="number" value={rep} onChange={(e) => setRep(e.target.value)} />
            </div>


            <button className=" bg-gray-600 text-white py-2 px-4 rounded-md mb-4" onClick={calculateORM}>Calculate BMI</button>
            <div className="text-lg font-medium">One Rep Max: {orm}</div>

        </div>
    );
}

export default ORM;
