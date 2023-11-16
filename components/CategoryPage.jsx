const React = require('react');
const Layout = require('./Layout');
const Category = require('./CategoryBak');

module.exports = function CategoryPage({ title, categories }) {
  return (
    <Layout title={title}>
      <div>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </Layout>
  );
};
