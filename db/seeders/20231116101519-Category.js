/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          text: 'Кино',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Тотошка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Это чьЁ?',
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
