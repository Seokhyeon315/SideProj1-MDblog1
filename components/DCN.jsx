import React, { useState } from "react";

// Daily Calorie Needs Calculator:
// Daily calorie needs = BMR x Activity Level

// Activity Level can be sedentary, lightly active, moderately active, very active, or extra active.
// Sedantary: zero
// Lightly active: between 130 and 160 calories
// moderately active: between 470 and 580 calories
// very active: between 1,150 and 1,400 calories
// extra active: more than 1400 calories

function DCN() {
    // const [bmr, setBMR] = useState(0);
    // const [dcn, setDCN] = useState(0);
    // const [active, setActive] = useState('sedentary')

    // const calculateDCN = () => {
    //     let activityLevel = 0;
    //     switch (active) {
    //         case 'sedentary':
    //             activityLevel = 0;
    //             break;
    //         case 'lightly':
    //             activityLevel = ((130 + 160) / 2) / 100;
    //             break;
    //         case 'moderately':
    //             activityLevel = ((470 + 580) / 2) / 100;
    //             break;
    //         case 'very':
    //             activityLevel = ((1150 + 1400) / 2) / 100;
    //             break;
    //         case 'extra':
    //             activityLevel = (1500) / 100;
    //             break;
    //         default:
    //             break;
    //     }
    //     let dcn = bmr * activityLevel;
    //     setDCN(dcn.toFixed(2));
    // };


    return (
        <div className="flex flex-col px-4 py-6 sm:px-6 md:px-8 lg:px-10">
            {/* <h2 className="text-2xl font-bold mb-4">DCN (Daily Calorie Needs)</h2>
            <div className="mb-4">
                <label className="block font-medium mb-2">
                    Your BMR :
                </label>
                <input className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="number" value={bmr} onChange={(e) => setBMR(e.target.value)} />
            </div>

            <div className="mb-4">
                <label className="block font-medium mb-2">
                    Your Active Status:
                </label>
                <select className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" value={active} onChange={(e) => setActive(e.target.value)}>
                    <option value="sedentary">Sedentary (Zero calories)</option>
                    <option value="lightly">Lightly Active (130-160 calories)</option>
                    <option value="moderately">Moderately Active (470-580 calories)</option>
                    <option value="very">Very Active (1150-1400 calories)</option>
                    <option value="extra">Extra Active ( more than 1400 calories)</option>
                </select>
            </div> */}

            {/* <button className="bg-green-600 text-white py-2 px-4 rounded-md mb-4" onClick={calculateDCN}>Calculate DCN</button>
            <div className="text-lg font-medium">Daily Calorie Needs: {dcn}</div> */}


            {/* Daily calorie requirements for male */}
            <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                <h3 className="text-xl font-bold mb-4 col-span-2 lg:col-span-3">Male Daily Calorie Needs</h3>

                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Age</th>
                            <th className="border px-4 py-2">Daily calorie requirements</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">19–30 years</td>
                            <td className="border px-4 py-2">2,400–3,000 calories</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">31–59 years</td>
                            <td className="border px-4 py-2">2,200–3,000 calories</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">60+ years</td>
                            <td className="border px-4 py-2">2,000–2,600 calories</td>
                        </tr>
                    </tbody>
                </table>

            </div>




            {/* Daily calorie requirements for female */}

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <h3 className="text-xl font-bold mb-4 col-span-2 lg:col-span-3">Female Daily Calorie Needs</h3>

                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Age</th>
                            <th className="border px-4 py-2">Daily calorie requirements</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">19–30 years</td>
                            <td className="border px-4 py-2">2,000–2,400 calories</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">31–59 years</td>
                            <td className="border px-4 py-2">1,800–2,200 calories</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">60+ years</td>
                            <td className="border px-4 py-2">1,600–2,000 calories</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default DCN;