import React from 'react'

const Description = () => {
    return (
        <div className='Description'>
            <h2>Description</h2>
            <ul>
                <li>This model predicts a range of emotions which includes joy,anger,sadness,fear,surprise and love.</li>
                <li>Give it some textual data and click the predict button to predict the emotion of the text you entered!</li>
                <li>Its only about 85% accurate, so you might get some weird answers. Its also good at predicting only direct literal meanings, not good at finding metaphorical, figurative meanings.</li>
                <li>Its also slow, it might take a little while before displaying the answer.</li>
                <li>The backend sleeps after large periods of inactivity so it might take a few minutes before predicting for the first time</li>
            </ul>
        </div>
    )
}

export default Description