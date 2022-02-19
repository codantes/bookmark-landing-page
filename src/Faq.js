import React from 'react';
import Questions from './Questions.js';

function Faq() {
    return(
        <section className='faq'>
            <h1>Frequently Asked Questions</h1>
            <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            <Questions 
                question = "What is Bookmark?"
                answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis"
            />

            <Questions 
                question = "How can I request a new browser?"
                answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis"
            />

            <Questions 
                question = "Is there a mobile app?"
                answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis"
            />

            <Questions 
                question = "What about other Chromium browsers?"
                answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis"
            />

            <button>More Info</button>
        </section>
    )
}

export default Faq;