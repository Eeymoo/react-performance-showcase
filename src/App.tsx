import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <Suspense fallback={<div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#888',
    }}>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;