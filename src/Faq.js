import React from 'react';
import Questions from './Questions.js';

function Faq() {
    return(
        <section className='faq'>
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

            
        </section>
    )
}

export default Faq;