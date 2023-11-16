const React = require('react');

function Category({ category }) {
  return (
    <div>
      <div>
        <p>{category.text}</p>
      </div>
    </div>
  );
}

module.exports = Category;
