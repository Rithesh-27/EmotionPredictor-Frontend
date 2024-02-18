import React from "react";
import Header from "./Header";
import Description from "./Description";
import EmotionPredictor from "./EmotionPredictor";

function App() {
    return (
        <div className="App">
            <Header title="Emotion Predictor"/>
            <Description />
            <EmotionPredictor />
        </div>
    );
}

export default App;
