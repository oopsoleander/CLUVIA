import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        { question: "What is CLUVIA?", answer: "CLUVIA is a platform for..." },
        { question: "How does it work?", answer: "CLUVIA works by..." },
        // Add more questions as needed
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {questions.map((item, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleAccordion(index)}>
                        {item.question}
                    </div>
                    {activeIndex === index && (
                        <div className="faq-answer">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;