
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

  return (

     
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
        Welcome to EduPlay
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        Fun & Learning for Children (Class 1 to 5)
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <button
          onClick={() => navigate("/quiz")}
          className="px-8 py-4 bg-blue-600 text-white text-lg rounded-2xl shadow-md hover:bg-blue-700   transition-all hover:scale-[1.02]"
        >
          🎓 Start Quiz
        </button>

        <button
          onClick={() => navigate("/games")}
          className="px-8 py-4 bg-green-500 text-white text-lg rounded-2xl shadow-md hover:bg-green-600  transition-all hover:scale-[1.02]"
        >
          🧩 Play Games
        </button>
      </div>
    </div>
  
  )
}

export default Home