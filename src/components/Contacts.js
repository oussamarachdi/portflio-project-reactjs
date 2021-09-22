import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form'



export const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, formState:{errors}} = useForm();

    const serviceID = "service_y9a74hd";
    const templateID ="template_70k62sh";
    const userID = "user_kwrq7JnVAtBC5v3JcqX1A";

    const onSubmit = (data, r) => {
        sendEmail(serviceID, 
        templateID,
        {
            name:data.name,
            phone:data.phone,
            email:data.email,
            subject:data.Subject,
            description:data.description
        },
        userID
        );
        r.target.reset();
    }

    function sendEmail(serviceID, templateID, variables, userID) {

        emailjs.send(serviceID, templateID, variables, userID)
            .then((result) => {
                setSuccessMessage("Form sent Successfully! I'll contact you as soon as possible")
            }).catch(err => console.error(`Something went wrong ${err}`))
    }


    return (
        <div className="contacts">
            

            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out form and describe your project needs and I'll contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            {...register("name", { required: "Name is Required", maxLength: {value:20, message:"you should enter fewer than 20 characters"} })}
                            />
                        <div className="line"></div>
                        </div>     
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Phoone Number"
                            name="phone"
                            {...register("phone", { required: "Phone is Required" })}
                            />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        <div className="text-center">
                            <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            {...register("email", { 
                                required: "Email is Required",
                                pattern:{
                                        value:/^[A-Za-z._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,
                                        message:"invalid email"
                                    }
                                })}
                            />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        <div className="text-center">

                        <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        {...register("subject", { required: "Subject is Required" })}
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && "Subject is required"}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                name="description"
                                {...register("description", { required: "Description is Required" })}
                                ></textarea>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                        <button type="submit" className="btn-main-offer contact-btn">contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}
