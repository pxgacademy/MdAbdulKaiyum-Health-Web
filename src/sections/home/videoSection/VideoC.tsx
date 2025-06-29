interface Props {
  videoId: string;
  title?: string;
}

const VideoC = ({ videoId, title }: Props) => {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || "YouTube Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default VideoC;
