/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve", "John", "Dan", "Susan"];
const OCCUPATIONS = [
  "Writer",
  "Teacher",
  "Programmer",
  "Designer",
  "Engineer",
  "Tester",
  "Artist",
  "Marketer",
];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
const { useState } = React;
function generateFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  return { name, occupation, rate };
}

function calculateAverageRate(freelancers) {
  const total = freelancers.reduce((sum, f) => sum + f.rate, 0);
  return (total / freelancers.length).toFixed(2);
}

function Freelancer({ freelancer }) {
  return (
    <div>
      <h3>{freelancer.name}</h3>
      <p>{freelancer.occupation}</p>
      <p>${freelancer.rate}/hr</p>
    </div>
  );
}

// 6. Component for list of freelancers
function FreelancerList({ freelancers }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {freelancers.map((f, index) => (
          <tr key={index}>
            <td>{f.name}</td>
            <td>{f.occupation}</td>
            <td>${f.rate}/hr</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// 7. Component for average rate
function AverageRate({ average }) {
  return <h2>Average Rate: ${average}/hr</h2>;
}

function App() {
  const [freelancers] = useState(() =>
    Array.from({ length: NUM_FREELANCERS }, generateFreelancer),
  );

  const [averageRate] = useState(() => calculateAverageRate(freelancers));

  return (
    <div>
      <h1>Freelancer Marketplace</h1>
      <AverageRate average={averageRate} />
      <FreelancerList freelancers={freelancers} />
    </div>
  );
}

// 8. Render function
function render() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
}

render();
