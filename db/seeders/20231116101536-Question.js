/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          difficulty: 0,
          answer: 'One',
          content: 'What?',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 0,
          answer: 'Two',
          content: 'Where',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 0,
          answer: 'Three',
          content: 'When',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
