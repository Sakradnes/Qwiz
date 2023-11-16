const React = require('react');

function Category({ category }) {
  return (
    <div>
      <div>
        <p><a href={`/questions/${category.id}`} className="btn btn-primary">
        {category.text}</a></p>
        
        <p></p>
      </div>
    </div>
  );
}

module.exports = Category;
