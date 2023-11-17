const React = require('react');
const Layout = require('./Layout');
const Category = require('./CategoryBak');
const Score = require('./Score');

module.exports = function CategoryPage({ title, categories , BigScore, user}) {
  return (
    <Layout title={title}>
      <div>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <div><Score key={user.id} BigScore={BigScore} user={user}></Score></div>
    </Layout>
  );
};
