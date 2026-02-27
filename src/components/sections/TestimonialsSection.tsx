import { useState } from 'react';
import { Play } from 'lucide-react';

const VideoEmbed = ({ videoId }: { videoId: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const bgImage = "/images/rvl-testemunhos.png";

  return (
    <div className="relative w-full aspect-[9/16] max-w-[328px] shrink-0 bg-black rounded-xl overflow-hidden shadow-lg border border-border group">
      {!isPlaying ? (
        <div
          className="absolute inset-0 cursor-pointer flex items-center justify-center"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={bgImage}
            alt="Thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          <button className="relative z-10 w-16 h-16 border-2 border-white rounded-full flex items-center justify-center bg-black/50 hover:bg-rvl-laranja hover:border-rvl-laranja transition-all scale-95 group-hover:scale-105">
            <Play className="w-6 h-6 text-white ml-1" />
          </button>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Testemunho Revival Conference"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full absolute inset-0"
        />
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-bebas text-4xl md:text-6xl text-rvl-escuro tracking-wide mb-2">
          TESTEMUNHOS
        </h2>
        <p className="font-inter text-rvl-escuro/60 mb-12">
          Ao longo das edições, testemunhamos intervenções claras da fidelidade de Deus.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
          <VideoEmbed videoId="8EljWvT2fq0" />
          <VideoEmbed videoId="YWGMmmm6k4s" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
