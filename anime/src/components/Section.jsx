import React from 'react';
import card from '../assets/card.jpg'

const sectionsData = [
  {
    id: 'top-airing',
    title: 'Top Airing',
    items: [
      { name: 'One Piece', episodes: 1122, popularity: 1096, type: 'TV' ,image:card},
      { name: 'Blue Lock Season 2', episodes: 12, popularity: 10, type: 'TV',image:card },
      { name: 'Bleach', episodes: 12, popularity: 8, type: 'TV' ,image:card},
      { name: 'Case Closed', episodes: 1146, popularity: 123, type: 'TV' ,image:card},
      { name: 'Bleach', episodes: 12, popularity: 12, type: 'TV',image:card },
    ],
  },
  {
    id: 'most-popular',
    title: 'Most Popular',
    items: [
      { name: 'One Piece', episodes: 1122, popularity: 1096, type: 'TV' ,image:card},
      { name: 'Naruto: Shippuden', episodes: 500, popularity: 500, type: 'TV',image:card },
      { name: 'Bleach', episodes: 366, popularity: 366, type: 'TV',image:card },
      { name: 'Jujutsu Kaisen 2nd Season', episodes: 23, popularity: 23, type: 'TV',image:card },
      { name: 'Black Clover', episodes: 170, popularity: 170, type: 'TV' ,image:card},
    ],
  },
  {
    id: 'most-favorite',
    title: 'Most Favorite',
    items: [
      { name: 'One Piece', episodes: 1122, popularity: 1096, type: 'TV',image:card },
      { name: 'Chainsaw Man', episodes: 12, popularity: 12, type: 'TV' ,image:card},
      { name: 'Jujutsu Kaisen (TV)', episodes: 24, popularity: 24, type: 'TV',image:card },
      { name: 'Demon Slayer', episodes: 11, popularity: 11, type: 'TV',image:card },
      { name: 'Black Clover', episodes: 170, popularity: 170, type: 'TV' ,image:card},
    ],
  },
  {
    id: 'latest-completed',
    title: 'Latest Completed',
    items: [
      { name: 'Kuttsukiboshi', episodes: 2, popularity: 2, type: 'OVA',image:card },
      { name: 'Thunderbolt Fantasy', episodes: 12, popularity: 12, type: 'TV',image:card },
      { name: 'Koutetsushin Jeeg', episodes: 13, popularity: 13, type: 'TV',image:card },
      { name: 'Kud Wafter', episodes: 1, popularity: 1, type: 'OVA',image:card },
      { name: 'Kuro ga Ita Natsu', episodes: 1, popularity: 1, type: 'Movie',image:card },
    ],
  },
];

const  Section=({ id })=> {
  const section = sectionsData.find((sec) => sec.id === id);

  if (!section) return null;

  return (
    <div className="flex flex-col p-1">
    <h2 className="text-pink-400 text-lg mb-4 font-bold">{section.title}</h2>
    <ul className="space-y-4 ">
      {section.items.map((item, index) => (
        <li key={index} className="bg-gray-800 p-3 rounded-lg shadow-md">
          <div className="flex items-center">
            <img src={item.image} alt={item.name} className="w-16 h-25 rounded-lg mr-4" />
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">{item.name}</h3>
              <div className="text-sm text-white space-y-1">
                <p>Episodes: <span className="text-white">{item.episodes}</span></p>
                <p>Popularity: <span className="text-white">{item.popularity}</span></p>
                <p>Type: <span className="text-white">{item.type}</span></p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}
export default Section;