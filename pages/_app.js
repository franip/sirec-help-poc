import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
        <div className="h-16 bg-brand shadow-lg flex items-center justify-center">
          <h1 className="font-bold text-2xl text-white">SIREC HELP POC</h1>
        </div>

        <div className="flex-1 p-6 overflow-y-auto mx-auto prose max-w-screen-lg">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
