const MediaPart = () => {
  return (
    <div className="bg-white rounded-3xl p-2 shadow-2xl border border-gray-200 overflow-hidden">
      <video
        className="w-full h-72 rounded-2xl object-cover enhanced-quality"
        src="/videos/grid.mp4"
        loop
        muted
        autoPlay
      ></video>
    </div>
  )
}

export default MediaPart
