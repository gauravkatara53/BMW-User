import { useState } from 'react';
interface OTPModalProps {
    isOpen: boolean;
    onClose: () => void;
    onVerify: () => void;
}

const OTPModal: React.FC<OTPModalProps> = ({ isOpen, onClose, onVerify }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://mywarehouse-fxuk.onrender.com/api/v1/users/verifyandlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();

      if (response.ok) {
        onVerify();
      } else {
        setError(data.message || 'OTP verification failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Verify OTP</h2>
        <div className="mb-4">
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP</label>
          <input
            type="text"
            id="otp"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex justify-between items-center">
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md"
            onClick={handleVerify}
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPModal;
