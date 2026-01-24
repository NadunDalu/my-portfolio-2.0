import React, { useState } from 'react';
import { connectData } from './ConnectData';

const Connect = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const [submitStatus, setSubmitStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        setLoading(false);

        if (response.status === 200) {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '', subject: '' });
        } else {
            setSubmitStatus('error');
        }
    };

    return (
        <div className="section-box mt-4" id="contact">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={connectData.mainData.title}>
                        {connectData.mainData.title2}
                    </h6>
                    <h1>{connectData.mainData.title3}</h1>
                    <p>{connectData.mainData.description}</p>
                    <ul className="list-inline-pills mt-4">
                        <li>Email: {connectData.mainData.email}</li>
                        <li>Address: {connectData.mainData.address}</li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 mt-lg-5">
                <div className="contact-form">
                    <form method="post" id="contactform" onSubmit={handleSubmit}>
                        <div className="row gx-3 gy-0">
                            <div className="col-12 col-md-6">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="E-Mail"
                                    required
                                />
                            </div>
                        </div>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                        />
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            required
                        ></textarea>
                        <button className="button button-md button-dark" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                    <div className="submit-result">
                        {submitStatus === 'success' && <span id="success">Thank you! Your message has been sent.</span>}
                        {submitStatus === 'error' && <span id="error">Something went wrong. Please try again!</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
