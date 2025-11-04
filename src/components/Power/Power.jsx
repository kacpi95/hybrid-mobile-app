import { useState } from 'react';

export default function Power() {
  const [numX, setNumX] = useState(0);
  const [numY, setNumY] = useState(0);

  return (
    <div>
      <label>
        x:
        <input
          type='number'
          value={numX}
          onChange={(e) => setNumX(Number(e.target.value))}
        />
      </label>
      <label>
        y:
        <input
          type='number'
          value={numY}
          onChange={(e) => setNumY(Number(e.target.value))}
        />
      </label>
      <button> = </button>
      <p>Sum: {Math.pow(numX, numY)}</p>
    </div>
  );
}
