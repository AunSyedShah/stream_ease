'use client';
import React, { useState } from 'react';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Feedback</h1>
            {submitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 p-4">
                    <p className="text-green-800">
                        Thank you for your feedback!
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                            Your Feedback
                        </label>
                        <textarea
                            id="feedback"
                            name="feedback"
                            rows="4"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="mt-1 block w-full px-4 py-3 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 bg-gray-100 text-gray-700 placeholder-gray-500 sm:text-sm"
                            placeholder="Your feedback..."
                        ></textarea>

                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit Feedback
                    </button>
                </form>
            )}
        </div>
    );
};

export default Feedback;
