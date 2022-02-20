import React from 'react';

function Questions(props){
    const [answerState, setAnswerState] =  React.useState(false);
    function answerToggle() {
        setAnswerState(!answerState);
    }
    
    const arrowStyle = {
        transform : (answerState)? "rotate(180deg)" : "none"
    }
    return(
        <article className="question">
            <h1>
                <div>{props.question}</div>
                <div><img onClick={answerToggle} style={arrowStyle} src="./images/icon-arrow.svg" alt="" /></div>
            </h1>
            {
                (answerState) &&
                <p>
                    {props.answer}
                </p>
            }

        </article>
    )
}

export default Questions;