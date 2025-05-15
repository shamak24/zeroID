<h1 align="center">
  <img src="./client/public/zeroidLogo.png" alt="ZeroID Logo" width="80" />
  <br>
  <span style="color:#0ea5e9">ZeroID</span> 🔐
</h1>

<p align="center">
  <em>A decentralized identity verification system — secure, simple, private.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/frontend-react-blue?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/backend-express-green?style=flat-square&logo=express" />
  <img src="https://img.shields.io/badge/database-postgres-blue?style=flat-square&logo=postgresql" />
  <img src="https://img.shields.io/badge/styling-tailwindcss-38bdf8?style=flat-square&logo=tailwind-css" />
</p>

<hr>

<h2>🛠️ Tech Stack</h2>

<table>
  <thead>
    <tr>
      <th>Frontend</th>
      <th>Backend</th>
      <th>Database</th>
      <th>Styling</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>React + Vite</td>
      <td>Express.js</td>
      <td>PostgreSQL</td>
      <td>Tailwind CSS</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>🚀 Features</h2>

<ul>
  <li>Decentralized digital identity wallet</li>
  <li>Secure credential issuance & verification</li>
  <li>Privacy-preserving proofs (show only necessary info)</li>
  <li>No centralized data storage — user data remains private</li>
  <li>Easy to use, fast, and scalable</li>
</ul>

<hr>

<h2>🏗️ Project Structure</h2>

<pre style="background-color:#f5f5f5; padding:1em; border-radius:5px;">
root/
├── client/           # React frontend with Vite + Tailwind CSS
├── server/           # Express backend API server
├── README.md         # Project documentation
└── .gitignore        # Git ignore rules
</pre>

<hr>

<h2>⚙️ Setup & Run</h2>

<h3>1. Clone the repo</h3>
<pre><code>git clone https://github.com/shamak24/zeroid.git
cd zeroid
</code></pre>

<h3>2. Backend Setup</h3>
<pre><code>cd server
npm install
# Configure your Postgres connection in <code>.env</code>
npm run dev
</code></pre>

<h3>3. Frontend Setup</h3>
<p>Open a new terminal:</p>
<pre><code>cd client
npm install
npm run dev
</code></pre>

<h3>4. Open</h3>
<ul>
  <li>Frontend: <a href="http://localhost:5173">http://localhost:5173</a></li>
  <li>Backend: <a href="http://localhost:5000">http://localhost:5000</a></li>
</ul>

<hr>

<h2>📝 Notes</h2>

<ul>
  <li>Remember to create a <code>.env</code> file in the server folder for DB credentials and any secrets.</li>
  <li>This is an MVP; future versions may include blockchain integration and advanced cryptography.</li>
</ul>

<hr>

<p align="center"><em>Thank you for checking out <strong>ZeroID</strong>! 🔐</em></p>
