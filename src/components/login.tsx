'use client';
import { useContext, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from './auth-provider';

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const authContext = useContext(AuthContext);
  const router = useRouter();

  if (!authContext) {
    return null; // or handle the case where context is undefined
  }

  const { login } = authContext;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(password, () => {
      router.push('/');
    });
    // If login is not successful, set the error message and clear the input
    if (password !== process.env.NEXT_PUBLIC_AUTH_PASSWORD) {
      setErrorMessage('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">Login</h2>
        {errorMessage && (
          <div className="mb-4 text-sm text-red-600">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

