/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          text: 'One',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Two',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Three',
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
