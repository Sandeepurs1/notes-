import './App.css';
import qrImage from './assets/qr.jpg'; // Ensure qr.jpg is inside src/assets
import { useState } from 'react';

function App() {
  const [copied, setCopied] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('9392316592');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = qrImage;
    link.download = 'Sandeeptalks_QR.jpg';
    link.click();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello all, welcome!</h1>
        <h2>Sandeeptalks here 👋</h2>
        <p>If you want the notes PDF link, please follow these steps:</p>

        {/* QR Code Section */}
        <div style={{ margin: '20px 0' }}>
          <p><strong>Scan the QR Code below to pay ₹10 per each unit:</strong></p>
          <img
            src={qrImage}
            alt="Payment QR Code"
            style={{
              width: '260px',
              height: '260px',
              borderRadius: '16px',
              objectFit: 'contain',
              padding: '10px',
              backgroundColor: '#ffffff',
              border: '2px solid #e0e0e0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            }}
          />
          <div style={{ marginTop: '10px' }}>
            <button onClick={downloadQR} style={buttonStyle}>
              📥 Download QR
            </button>
            <button onClick={copyPhoneNumber} style={{ ...buttonStyle, marginLeft: '10px' }}>
              📋 Copy Number
            </button>
            {copied && <span style={{ marginLeft: '10px', color: 'lime' }}>Copied!</span>}
          </div>
        </div>

        <ol style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>Or directly pay ₹10 per 1 unit to this number: <strong>9392316592</strong></li>
          <li>Send the payment screenshot to WhatsApp: <strong>9392316592</strong></li>
          <li>Mention the <strong>subject</strong> and <strong>unit</strong> you want.</li>
          <li>I will share the PDF with you on WhatsApp.</li>
          <li>
            <strong>Each subject costs ₹10 per each unit</strong>. For example, if you want 5 units of a subject, pay ₹50,
            send the screenshot, and mention the subject and unit names.
          </li>
        </ol>

        <p style={{ color: 'red', fontWeight: 'bold' }}>
          NOTE: Please don’t make spoof (fake) payments. It’s just a reward for my hard work from you lovely people.
        </p>

        <hr style={{ margin: '2rem 0', width: '80%' }} />

        <h3>IN TELUGU:</h3>
        <ol style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>Meeku notes PDF kaavalante ₹10 okka unit ki <strong>9392316592</strong> ki pay cheyandi.</li>
          <li>Payment screenshot ni WhatsApp lo pampandi.</li>
          <li>Meeku kavalsina subject and unit name mention cheyandi.</li>
          <li>PDF ni WhatsApp lo share chestha.</li>
          <li>
            <strong>Each unit ₹1</strong>. Meeku 5 units kavali ante ₹50 pay cheyandi,
            screenshot pettandi, subject name with units mention cheyandi.
          </li>
        </ol>

        <p style={{ color: 'red', fontWeight: 'bold' }}>
          NOTE: Fake payments chesi screenshot pettakandi. Thanks for your contribution and patience ❤️
        </p>
      </header>
    </div>
  );
}

// Simple button styling
const buttonStyle = {
  backgroundColor: '#1976d2',
  color: 'white',
  padding: '8px 16px',
  fontSize: '14px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
};

export default App;


