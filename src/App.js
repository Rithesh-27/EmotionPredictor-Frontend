import React from "react";
import Header from "./Header";
import Description from "./Description";
import EmotionPredictor from "./EmotionPredictor";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Header title="Emotion Predictor"/>
            <Description />
            <EmotionPredictor />
            <Footer />
        </div>
    );
}

export default App;
