/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'One',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Two',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Three',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
