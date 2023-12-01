// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterProvider } from 'react-router-dom';
import { router } from './../configs/router';

export function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
  );
}

export default App;
