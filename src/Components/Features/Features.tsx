import React from "react";

const features = [
    {
        title: "🎓 Class & Subject Wise Quizzes",
        description:
            "Children can choose their class (1 to 5) and pick between Maths or Science to get a personalized quiz experience.",
        bg: "bg-blue-100",
    },
    {
        title: "⏱️ Timer & Scoreboard",
        description:
            "Each quiz is time-based with an interactive scoreboard at the end to show the score and correct answers.",
        bg: "bg-yellow-100",
    },
    {
        title: "🗣️ Text-to-Speech Integration",
        description:
            "Hover on any question or option and it will be read aloud using the browser's speech engine — perfect for early learners.",
        bg: "bg-purple-100",
    },
    {
        title: "🧠 5 Educational Games",
        description:
            "From puzzles to memory games, children can sharpen their minds while having fun in the games section.",
        bg: "bg-green-100",
    },
    {
        title: "📈 Leaderboard & Progress Tracking",
        description:
            "Track player progress, compare scores on the leaderboard, and motivate kids to do better!",
        bg: "bg-pink-100",
    },
    {
        title: "🔐 Secure Login System",
        description:
            "Sign up, sign in, and securely save your quiz scores and progress in the database using JWT authentication.",
        bg: "bg-indigo-100",
    },
];

const Features: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 py-12 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">✨ Key Features</h1>
                <p className="text-lg text-gray-700 mb-10">
                    Explore all the interactive and educational features we’ve built to make learning fun for kids!
                </p>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-xl shadow-md ${feature.bg} transition-all hover:scale-[1.02]`}
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h2>
                            <p className="text-gray-700 text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-sm text-gray-500">
                    Designed for children | Built by Ayush Sharma 🧑‍💻
                </div>
            </div>
        </div>
    );
};

export default Features;
