import React from 'react'
import { useState } from "react"
import axios from 'axios'
import {FaSmile,FaAngry,FaSadTear,FaSurprise,FaLaugh, FaSadCry} from "react-icons/fa"

const EmotionPredictor = () => {
    const [text, setText] = useState('')
    const [predictedEmotion, setPredictedEmotion] = useState('')
    const [predictedScore, setPredictedScore] = useState()
    const [predicting,setPredicting] = useState(false)
    const [reqError,setReqError] = useState(false)

    const handleChange =(e) => {
        setText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setPredicting(true)

        try {
            const response = await axios.post("https://emotion-predictor-backend.onrender.com//predict-emotion", {text})
            setPredictedEmotion(response.data.predicted_emotion)
            setPredictedScore(response.data.confidence_percentage)
        } catch (err) {
            setReqError(true)
            console.error("Error predicting the emotion ",err)
        }
        finally {
            setPredicting(false)
            setReqError(false)
        }
    }

    const renderIcon = () => {
        switch (predictedEmotion) {
            case 'joy':
                return <FaLaugh />
            case 'anger':
                return <FaAngry />
            case 'sadness':
                return <FaSadTear />
            case 'surprise':
                return <FaSurprise />
            case 'fear':
                return <FaSadCry />
            case 'love':
                return <FaSmile />
            default:
                return null
        }
    }

    return (
        <div>
            <div className='Form'>
                <form onSubmit={handleSubmit}>
                    <label >
                        Enter Text:
                        <input type='text' onChange={handleChange}/>
                    </label>
                    <button type='submit' disabled={predicting}>Predict Emotion</button>
                </form>
            </div>
            {reqError && (
                <div className='ErrorMessage'>
                    <h2>Error occured while predicting...Please try again</h2>
                </div>
            )}
            {predicting ? (
                <div>
                    <h2>Predicting Emotion...</h2>
                </div>
            ) : predictedEmotion && (
                <div className='PredictedEmotion'>
                    <h3>Predicted Emotion : </h3>
                    <p className='Result'>{predictedEmotion.toUpperCase()} {renderIcon()}</p>
                    <h3>Confidence Percentage : </h3>
                    <p className='Result'>{Math.round(predictedScore)} %</p>
                </div>
            )}
        </div>
        
    )
}

export default EmotionPredictor