import { useState } from 'react';

const VIDEO_ID = 'VcetbzdZ5uY';

const LineUpSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-rvl-creme-bg py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {playing ? (
          <iframe
            className="w-full aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
            title="Line Up Revival Conference 26"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <button
            className="relative w-full aspect-video rounded-lg overflow-hidden group"
            onClick={() => setPlaying(true)}
            aria-label="Reproduzir vídeo Line Up"
          >
            <img
              src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="Line Up Revival Conference 26"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default LineUpSection;
