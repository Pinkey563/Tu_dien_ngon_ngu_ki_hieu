import React, {useEffect} from 'react';
import speechToText from './speechToText';
import './VoiceInput.css'

const VoiceInput = ({ word, setWord }) => {
    const { isListening, transcript, interimTranscript, startListening, stopListening } = speechToText({ continuous: true });

    const handleVoiceInput = () => {
        if (isListening) {
            stopListening();
        } else {
            startListening();
        }
    };
    
    useEffect(() => {
        setWord(transcript);
    }, [transcript]);

    useEffect(() => {
        if (interimTranscript && interimTranscript !== transcript) {
            setWord(transcript + ' ' + interimTranscript);
        }
    }, [interimTranscript, transcript]);
    /*
    useEffect(() => {
        setWord(prevWord => prevWord + (transcript.length ? (prevWord.length ? " " : "") + transcript : ""));
    }, [transcript, setWord]);
    */
    return (
        <div>
            <button type="button" className="VoiceInput" onClick={handleVoiceInput}>
                    {isListening ? <img src='record.png' alt='Stop'/> : <img src='micro.png' alt='Start'/>} 
            </button>
        </div>
    );
};

export default VoiceInput;