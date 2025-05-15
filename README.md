<h1 align="center" style="color:#007FFF;">ZeroID <span style="font-size:1.2rem;">🔐</span></h1>

<p align="center">
  <em>A decentralized identity verification system — secure, simple, private.</em>

  <p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=plastic" />
  <img src="https://img.shields.io/badge/Backend-Express-black?style=plastic" />
  <img src="https://img.shields.io/badge/UI-TailwindCSS-38bdf8?style=plastic" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-336791?style=plastic" />
</p>
</p>

<hr>

<h2>🔍 About ZeroID</h2>

<p>
ZeroID empowers users to verify their identity online <strong>without sharing sensitive personal documents.</strong><br>
Simplifying identity verification while drastically reducing the risk of identity theft through decentralized digital credentials.
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
