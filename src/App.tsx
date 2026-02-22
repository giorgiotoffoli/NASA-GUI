import { useState } from 'react';
import { Card } from './components/ui/card';
import './index.css';

let oxygen: number;

oxygen = 20;

function App() {
  return (
    <>
      <div className="grid h-screen bg-slate-900">
        <Card className="h-36 w-full">
          <h1>Vitals example</h1>
          <ul className="flex flex-row gap-3">
            <li>
              {oxygen <= 50 ? (
                <span className="text-rose-500">{oxygen}%</span>
              ) : (
                <span className="text-green-400">{oxygen}%</span>
              )}
            </li>
            <li>43psi pressure</li>
          </ul>
        </Card>
      </div>
    </>
  );
}

export default App;
