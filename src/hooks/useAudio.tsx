import { useState, useEffect } from "react";

const useAudio = (url: string | undefined) => {
  console.log("inside useAudio");
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(true);

  useEffect(() => {
    audio.play();
  }, [audio]);

  // useEffect(() => {
  //   audio.addEventListener("ended", () => setPlaying(false));
  //   return () => {
  //     audio.removeEventListener("ended", () => setPlaying(false));
  //   };
  // }, [audio]);

  return [playing, toggle];
};

export default useAudio;
