import React from 'react'

function Quesions() {
    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
                <div className=" flex m-8 w-9/12">
                    <p className="text-justify t ">
                        What is the Question ?
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Button
                        </button>
                    </p>
                </div>
                <div className=" flex m-8 w-9/12">
                    <img className="" src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" alt="carousel2" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className=" flex m-8 w-9/12">
                    <img className="" src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" alt="carousel3" />
                </div>
                <div className=" flex m-8 t w-9/12">
                    <p className="text-justify t">
                        We're committed to realizing the human potential in all locations, at all times, and at all stages of life. Health, we think, is the key to fulfilling that promise. Because when we're at our healthiest, we're capable of anything. That is why we will never stop working to help individuals attain their optimal health at every stage of their lives. This is how we put our convictions into action daily.
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Button
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Quesions