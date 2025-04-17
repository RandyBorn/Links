import Navbar from "@/components/Navbar";
import TypingEffect from "@/components/TypingEffect";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <>
      <div>
        <VideoPlayer />
        <Navbar />
        <TypingEffect />
      </div>
    </>
  );
}
