export const Instructions = () => {
    return (
        <div className="px-5 mt-10">
          <h1 className="text-center mb-6">
            <span className="block text-xl font-bold">The README.md is frequently a treasure trove of essential information.</span>
          </h1>
          <p className="text-center text-lg">
            Follow the link below for detailed game instructions.{" "}
          </p>
          <p className="text-center text-lg">
            <a 
              href="https://github.com/Astronaut828/SpeedRun_PuttPutt/blob/main/instructions/README.md" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 'xx-large',
                textDecoration: 'underline',
                fontWeight: 'bold'
              }}
            >
              👉 Game Instructions 👈
            </a>
          </p>
        </div>
    );
};
