// IMPORT: We are "grabbing" the Navbar we exported above
import { Navbar } from "./features/Navbar.tsx";

function App() {
  return (
    // Light Mode Classes: bg-zinc-50 (light gray) and text-zinc-900 (dark text)
    <div className="min-h-screen bg-zinc-200 text-zinc-900 selection:bg-green-500/20">
      {/* We "Render" the Navbar here */}
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pt-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight text-zinc-900">
          Starting from Scratch.
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          The background should be light gray now!
        </p>
        <div className="h-[2000px]"></div>
      </main>
    </div>
  );
}

// DEFAULT EXPORT: Every file needs one main export
export default App;
