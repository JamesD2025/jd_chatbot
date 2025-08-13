
import { Chatbot } from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-maroon-500 to-grey-400 flex flex-col items-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-6xl font-bold text-center bg-gradient-to-r from-blue-800 to-yellow 400-600 bg-clip-text text-transparent">
          James assistant clanker
        </h1>
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <Chatbot/>
        </div>
      </div>
    </main>
  );
}
