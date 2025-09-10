'use client';

export default function CircularText() {
  return (
    <div className="fixed bottom-10 left-10 z-50 flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 300 300" className="animate-spin-slow size-20">
          <defs>
            {/* Normal circle */}
            <path
              id="circlePath"
              d="
                M 150, 150
                m -120, 0
                a 120,120 0 1,1 240,0
                a 120,120 0 1,1 -240,0
              "
            />
          </defs>

          <text
            fill="white"
            fontSize="40"
            fontWeight="700"
            fontFamily="font-sans"
            letterSpacing="12px"
          >
            {/* Top text */}
            <textPath href="#circlePath" startOffset="20%" textAnchor="middle">
              • Hire Me •
            </textPath>

            <textPath href="#circlePath" startOffset="80%" textAnchor="middle">
              I am Available
            </textPath>
          </text>
        </svg>

        {/* Middle Circle */}
        <div className="absolute flex size-8 items-center justify-center rounded-full bg-red-600 text-lg font-bold text-white">
          N
        </div>
      </div>
    </div>
  );
}
