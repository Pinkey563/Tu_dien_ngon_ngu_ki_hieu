import React, { useState, useRef, useEffect } from 'react';

const speechToText = (options) => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [interimTranscript, setInterimTranscript] = useState("");
    const recognitionRef = useRef(null);

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window)) {
            console.error("Web speech API is not supported.");
            return;
        }

        recognitionRef.current = new window.webkitSpeechRecognition();
        const recognition = recognitionRef.current;
        recognition.interimResults = options.interimResults || true;
        recognition.lang = "vi-VN";
        recognition.continuous = options.continuous || false;

        recognition.onresult = (event) => {
            let finalTranscript = "";
            let interimTranscript = "";

            for (let i = 0; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }

            setTranscript(finalTranscript);
            setInterimTranscript(interimTranscript);
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        return () => {
            recognition.stop();
        };
    }, []);

    const startListening = () => {
        if (recognitionRef.current && !isListening) {
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

    const stopListening = () => {
        if (recognitionRef.current && isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        }
    };

    return { isListening, transcript, interimTranscript, startListening, stopListening };
};

export default speechToText;
