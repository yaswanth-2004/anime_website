import React, { useState } from "react";
import Navbar from "./Navbar";

const episodes = Array.from({ length: 13 }, (_, i) => `Episode ${i + 1}`);

const WatchNow = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const handleEpisodeClick = (episodeNumber) => {
    setSelectedEpisode(episodeNumber);
  };

  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-gray-900 text-white p-4 mt-10">   
      <div className="flex  gap-2">
        
        <div className="w-1/5 bg-gray-800 rounded-lg shadow-lg">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-bold">List of episodes:</h2>
            <input
              type="text"
              placeholder="Number of Ep"
              className="w-full mt-2 px-3 py-2 rounded bg-gray-700 text-sm text-gray-300 focus:outline-none"
            />
          </div>
          <ul className="overflow-y-scroll h-[calc(100vh-150px)]">
            {episodes.map((episode, index) => (
              <li
                key={index}
                onClick={() => handleEpisodeClick(index + 1)}
                className={`p-3 border-b border-gray-700 cursor-pointer hover:bg-gray-700 ${
                  selectedEpisode === index + 1 ? "bg-pink-500 text-white" : ""
                }`}
              >
                {episode}
              </li>
            ))}
          </ul>
        </div>

        
        <div className="flex-1 bg-gray-800 rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-bold mb-4">
            Watching Blue Lock
          </h2>
          <div className="relative bg-black rounded overflow-hidden mb-4">
            <video
              controls
              className="w-full"
              src={`https://example.com/episode-${selectedEpisode}.mp4`}
            >
              Your browser does not support HTML5 video.
            </video>
            <div className="absolute bottom-2 left-2 text-sm text-gray-300">
              00:00 / 23:04
            </div>
          </div>
          <div className="flex gap-4 text-sm">
            <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
              Expand
            </button>
            <span>Light: <strong>On</strong></span>
            <span>Auto Play: <strong>On</strong></span>
            <span>Auto Next: <strong>On</strong></span>
            <span>Auto Skip Intro: <strong>On</strong></span>
          </div>
          <div className="mt-4 bg-pink-200 text-pink-900 rounded-lg p-4 text-center">
            <p>You are watching Episode {selectedEpisode}</p>
            <p>
              If the current server doesn't work, please try other servers
              beside.
            </p>
          </div>
        </div>

      
        <div className="w-1/4 bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://via.placeholder.com/100x150"
              alt="Super Heavy God Gravion"
              className="w-24 h-36 rounded"
            />
            <div>
              <h3 className="text-lg font-bold">Blue Lock</h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="bg-gray-700 px-2 py-1 rounded">PG-13</span>
                <span className="bg-gray-700 px-2 py-1 rounded">HD</span>
                <span className="bg-gray-700 px-2 py-1 rounded">CC</span>
                <span>13</span>
                <span>TV</span>
                <span>23m</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            The year is now 2041 AD. A new enemy called Zeravire suddenly
            appears in the solar system, destroying all military installations
            it comes across. However, a wealthy man named Klein Sandman is
            already aware of this planned invasion...
          </p>
          <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
            View Detail
          </button>
          <div className="mt-4 text-center">
            <span className="text-lg font-bold">5.5</span>
            <p className="text-sm">Vote now</p>
            <textarea
              placeholder="What do you think about this anime?"
              className="w-full mt-2 px-3 py-2 rounded bg-gray-700 text-sm text-gray-300 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WatchNow;
