import CodeEntry from "./components/CodeEntry";

const App = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        <CodeEntry />
      </div>
    </main>
  );
};

export default App;