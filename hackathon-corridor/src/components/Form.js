import React, { useState, useEffect } from 'react';
import Axios from "axios";

function Form() {

    // const [formData, setFormData] = useState({
    //     project: '',
    //     model: '',
    //     info: '',
    //   });


    const url = "http://localhost:8000/data/upload";
    const [data, setData] = useState({
        project: '',
        model: '',
        info: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    function changeHandler(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    function submitHandler(e) { }
    function submitHandler(e) {
        //e.preventDefault();
        setErrors(validate(data));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && isSubmit) {
            Axios.post(url, {
                project: data.name,
                model: data.model,
                info: data.info,
            }).then((res) => {
                console.log(res.data);
            });
        }
    }, [errors]);

    const validate = (values) => {
        const errors = {};
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!values.name) {
            errors.name = "Please Enter Your Name";
        }
        if (!values.email) {
            errors.email = "Please Enter Your Email Address";
        } else if (!regex.test(values.email)) {
            errors.email = "Please Provide a Valid Email";
        }
        if (!values.domain) {
            errors.domain = "Please Enter A Domain";
        }
        if (!values.drive) {
            errors.drive = "Please Enter The Drive Link to Your CV";
        }
        if (!values.phone) {
            errors.phone = "Please Enter Your Phone Number";
        } else if (values.phone.length < 9) {
            errors.phone = "Phone Number too Short";
        } else if (values.phone.length > 12) {
            errors.phone = "Phone Number too Long";
        }
        return errors;
    };
    return (
        // <div>
        <form onSubmit={(e) => submitHandler(e)} class="bg-white relative">
            <div class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
                <div class="flex flex-col items-center w-full lg:flex-row">
                    <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                        <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                            <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" class="btn-" />
                        </div>
                    </div>
                    <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                        <div class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
                relative z-10">
                            <p class="w-full text-4xl font-medium text-center leading-snug font-serif">Enter the Details</p>
                            <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                <div class="relative">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                    absolute">Project name</p>
                                    <input id="project" value={data.project} onChange={(e) => changeHandler(e)} placeholder="'Project'" type="text" class="border placeholder-gray-400 focus:outline-none
                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                    border-gray-300 rounded-md"/>
                                </div>
                                <div class="relative">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Model Used</p>
                                    <input id="model" value={data.model} onChange={(e) => changeHandler(e)} placeholder="Model" type="text" class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                                </div>
                                <div class="relative">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                    absolute">Model Specific Information</p>
                                    <input id="info" value={data.info} onChange={(e) => changeHandler(e)} placeholder="Description" type="text" class="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
                                </div>
                                <div class="relative">
                                    <a class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                    rounded-lg transition duration-200 hover:bg-indigo-600 ease">Submit</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </form>
        // </div>
    )
}

export default Form

