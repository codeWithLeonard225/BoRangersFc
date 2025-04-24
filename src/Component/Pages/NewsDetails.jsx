import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ import useNavigate


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

export default function NewsDetails() {
    const { id } = useParams();
    const navigate = useNavigate(); // ✅ initialize navigate

    const article = newsData.find((item) => item.id === parseInt(id));

    if (!article) {
        return <div className="text-center text-red-500 py-10">News not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg mb-6
                md:w-2/3 md:mx-auto md:object-contain
                border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
            />

            <h1 className="text-3xl font-bold text-green-700 mb-2">{article.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{article.date}</p>

            {/* Preserve paragraph breaks and spacing */}
            <div className="text-gray-700 leading-loose mb-6" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                {article.content}
            </div>

            {/* ✅ Back button */}
            <button
                onClick={() => navigate(-1)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-200"
            >
                ← Back to News
            </button>
        </div>
    );
}
