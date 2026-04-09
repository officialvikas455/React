import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    let handleInputChange = (event) => {
        let fieldname = event.target.name;
        let fieldvalue = event.target.value;

        setFormData((currData) => {
            return {
                ...currData,
                [fieldname]: fieldvalue
            };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // optional
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>FullName</label>
            <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleInputChange}
            />
            <br />

            <label>Username</label>
            <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
            />
            <br />

            <label>Password</label>
            <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
            />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}