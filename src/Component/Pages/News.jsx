import React from "react";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    title: "FULL TIME",
    date: "April 19, 2025",
    image: "/fulltime.jpg",
    content: `
A dominant performance from the defending champions! 
Bo Rangers 3-1 Bai Bureh Warriors
We continue our impressive run with a commanding victory at home. Clinical finishing and solid teamwork sealed all three points!
Goals:
• Mohamadu Lamin (2 goals)
• Bailor Bah (penalty)
The champions are showing why they're still the team to beat!
    `
  },
  {
    id: 2,
    title: "final Training",
    date: "April 18, 2025",
    image: "/finatTraining.jpg",
    content: `
Bo Rangers Wrap Up Final Training Ahead of Crucial Clash Against Bai Bureh Warriors*
Bo Rangers have completed their final training session at the Southern Arena ahead of tomorrow’s highly anticipated match against Bai Bureh Warriors. The players looked sharp and focused, with high spirits and determination evident throughout the session.
Tomorrow's fixture marks the final match of the Leone Rock Premier League first round, and the team is fully committed to finishing on a high note with a win.`
  },
  {
    id: 3,
    title: "Coach Musu Kamara Talks Season Ambitions",
    date: "April 15, 2025",
    image: "/staff1.jpg",
    content: `In an exclusive interview, head coach Musu Kamara discusses the team's preparation and goals for the season. He praised the commitment of the players and the support from fans. He also hinted at a few tactical changes and new signings...`
  }
];

const News = () => {
  return (
    <div id="news" className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Club News</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {newsData.map(({ id, title, date, image, snippet }) => (
          <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
              <p className="text-sm text-gray-500 mb-2">{date}</p>
              <p className="text-sm text-gray-700 mb-3">{snippet}</p>
              <Link
                to={`/news-details/${id}`}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
