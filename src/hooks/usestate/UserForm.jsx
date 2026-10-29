import { useState } from "react";

const emptyFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
};

function UserForm({ pagetitle }) {
    const [formData, setFormData] = useState(emptyFormData);
    const [feedback, setFeedback] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((previousData) => ({ ...previousData, [name]: value }));
        setFeedback(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(formData).some((value) => !value.trim())) {
            setFeedback({
                type: "error",
                message: "Please complete every field before submitting."
            });
            return;
        }

        if (!e.currentTarget.elements.email.validity.valid) {
            setFeedback({
                type: "error",
                message: "Please enter a valid email address."
            });
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setFeedback({
                type: "error",
                message: "Passwords do not match. Please check them and try again."
            });
            return;
        }

        console.log("Form Data Submitted:", formData);
        setFormData(emptyFormData);
        setFeedback({
            type: "success",
            message: "Registration submitted successfully."
        });
    };

    return (
        <div>
            <h2>{pagetitle} : User Registration Form</h2>
            <form className="registration-form" onSubmit={handleSubmit} noValidate>
                <div className="form-fields">
                    <label className="form-field" htmlFor="firstName">
                        First Name
                        <input type="text" id="firstName" name="firstName" autoComplete="given-name" required value={formData.firstName} onChange={handleChange} />
                    </label>
                    <label className="form-field" htmlFor="lastName">
                        Last Name
                        <input type="text" id="lastName" name="lastName" autoComplete="family-name" required value={formData.lastName} onChange={handleChange} />
                    </label>
                    <label className="form-field" htmlFor="email">
                        Email
                        <input type="email" id="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} />
                    </label>
                    <label className="form-field" htmlFor="phone">
                        Phone
                        <input type="tel" id="phone" name="phone" autoComplete="tel" required value={formData.phone} onChange={handleChange} />
                    </label>
                    <label className="form-field" htmlFor="password">
                        Password
                        <input type="password" id="password" name="password" autoComplete="new-password" required value={formData.password} onChange={handleChange} />
                    </label>
                    <label className="form-field" htmlFor="confirmPassword">
                        Confirm Password
                        <input type="password" id="confirmPassword" name="confirmPassword" autoComplete="new-password" required value={formData.confirmPassword} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-actions">
                    <button className="button-default" type="reset" onClick={() => {
                        setFormData(emptyFormData);
                        setFeedback(null);
                    }}>Clear</button>
                    <button className="button-primary" type="submit">Register</button>
                </div>
                {feedback && (
                    <div
                        className="form-popover"
                        data-state={feedback.type}
                        role={feedback.type === "error" ? "alert" : "status"}
                        aria-live={feedback.type === "error" ? "assertive" : "polite"}
                    >
                        {feedback.message}
                    </div>
                )}
            </form>
        </div>
    )
}
export default UserForm;