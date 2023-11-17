const React = require('react');

module.exports = function Score({ BigScore, user }) {
  return (
    <div>ТВОЙ СЧЕТ: {user.score}
      <div>
        <p>1. {BigScore[0].name} - {BigScore[0].score}</p>
        <p>2. {BigScore[1].name} - {BigScore[1].score}</p>
        <p>3. {BigScore[2].name} - {BigScore[2].score}</p>
        <p>4. {BigScore[3].name} - {BigScore[3].score}</p>
        <p>5. {BigScore[4].name} - {BigScore[4].score}</p>
      </div>
      </div>
  );
}

