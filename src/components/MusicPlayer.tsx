import { Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const MusicPlayer = () => {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/mp3/ytmp3free (mp3cut.net).mp3');

    if (audioRef.current) {
      audioRef.current.loop = true;

      // Try to play audio on component mount (may be blocked by browser)
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Auto-play was prevented, user interaction required:", error);
        });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 right-4 z-50 bg-matcha rounded-full p-3 text-white shadow-lg hover:bg-matcha-dark transition-colors"
      aria-label={muted ? "Unmute music" : "Mute music"}
    >
      {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
    </button>
  );
};

export default MusicPlayer;