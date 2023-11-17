const React = require('react');

function Category({ category }) {
  return (
      <div>
        <p><a href={`/questions/${category.id}`} className="btn btn-primary">
        {category.text}</a></p>
      </div>
  );
}

module.exports = Category;
