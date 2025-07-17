import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 p-6 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 text-center">
          📚 About the Project
        </h1>

        <p className="text-lg mb-4 leading-relaxed">
          This web application is built specially for children from Class 1 to Class 5, combining **fun and learning** in one place.
          It has two major sections — <span className="font-semibold text-blue-600">Quiz</span> and <span className="font-semibold text-green-600">Games</span>.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">🎓 Quiz Section</h2>
            <ul className="list-disc pl-6 text-base leading-relaxed">
              <li>Class-wise & subject-wise quizzes (Maths & Science)</li>
              <li>Timer, Scoreboard, and Leaderboard system</li>
              <li>Text-to-Speech: Reads questions & options when hovered</li>
              <li>Interactive, simple, and responsive UI</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">🧩 Games Section</h2>
            <ul className="list-disc pl-6 text-base leading-relaxed">
              <li>5 Educational games like puzzles, matching, sorting, etc.</li>
              <li>Designed to boost logical thinking and problem-solving</li>
              <li>Lightweight & easy-to-play on all devices</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">🔐 Authentication & Leaderboard</h2>
            <ul className="list-disc pl-6 text-base leading-relaxed">
              <li>Sign up / Sign in functionality</li>
              <li>Progress saving and leaderboard comparison</li>
              <li>Weekly top performers for motivation!</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-600 mb-2">🛠️ Tech Stack</h2>
            <ul className="list-disc pl-6 text-base leading-relaxed">
              <li><span className="font-medium">Frontend:</span> React.js (Vite), Tailwind CSS, TypeScript</li>
              <li><span className="font-medium">Backend:</span> Node.js (Express)</li>
              <li><span className="font-medium">Database:</span> MySQL</li>
              <li><span className="font-medium">TTS:</span> Web Speech API (SpeechSynthesis)</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          Made with ❤️ by Ayush Sharma
        </div>
      </div>
    </div>
  );
};

export default About;
