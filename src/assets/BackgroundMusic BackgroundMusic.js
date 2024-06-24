import React, { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });
      removeEventListeners();
    };

    const addEventListeners = () => {
      document.addEventListener('click', playAudio);
      document.addEventListener('scroll', playAudio);
      document.addEventListener('keydown', playAudio);
      document.addEventListener('touchstart', playAudio);
    };

    const removeEventListeners = () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('scroll', playAudio);
      document.removeEventListener('keydown', playAudio);
      document.removeEventListener('touchstart', playAudio);
    };

    addEventListeners();

    return () => {
      removeEventListeners();
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="https://res.cloudinary.com/dpcgiupja/video/upload/v1719241004/invaite/backsound.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundMusic;
