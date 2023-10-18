import React from "react";
import { Link } from "react-router-dom";

const VideoShowcase = () => {
  const videos = [
    {
      videoName: "sample1.mp4",
      thumbnail: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      title: "Video 1",
      length: "00:12",
    },
    {
      videoName: "sample2.mp4",
      thumbnail:
        "https://cdn.pixabay.com/photo/2023/10/15/18/12/swan-8317602_1280.jpg",
      title: "Video 2",
      length: "00:12",
    },
    {
      videoName: "sample3.mp4",
      thumbnail:
        "https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg",
      title: "Video 3",
      length: "00:12",
    },
    {
      videoName: "sample4.mp4",
      thumbnail:
        "https://cdn.pixabay.com/photo/2023/09/25/20/11/boat-8275962_1280.jpg",
      title: "Video 4",
      length: "00:12",
    },
  ];
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Stream Videos with the power of Quic
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Experience the new protocol of streaming data via QUIC. A protocol
            implemented on top of UDP to provide latency better than TCP+TLS.
          </p>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video, index) => (
            <li key={index}>
              <Link
                to={`/video/${video.videoName}`}
                className="block overflow-hidden group"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative pt-3 bg-white">
                  <h3 className="text-2xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {video.title}
                  </h3>
                  <p className="mt-2">
                    <span className="sr-only"> Video Length </span>
                    <span className="tracking-wider text-gray-900">
                      {video.length}
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VideoShowcase;
