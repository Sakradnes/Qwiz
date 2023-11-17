/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          difficulty: 10,
          answer: 'Майкл',
          content: 'Имя киногероя Аль Пачино в «Крёстном отце» было',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 10,
          answer: 'Джеймс Кемерон',
          content: 'Кто стал режиссёром «Титаника»?',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 10,
          answer: 'Маркиз',
          content: 'Кот в сапогах дал владельцу определённый титул. Какой?',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 10,
          answer: 'Канны',
          content: 'Назовите место, где вручают «золотую пальмовую ветвь.',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          difficulty: 10,
          answer: 'Последнее слово',
          content: 'Штирлиц полагал, что это запоминается лучше всего. Что?',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 100,
          answer: 'Взаимное содержание',
          content:
            'Согласно ст.89 Семейного кодекса супруги должны обеспечивать …',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 100,
          answer: 'Радио',
          content: 'Что причислено к изобретениям Попова?',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 100,
          answer: 'Осы',
          content: 'Первосоздатели бумаги – это …',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 100,
          answer: 'Вешалки',
          content: 'Театр, по мнению Станиславского, начинается с …',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 1000,
          answer: 'Конфликт',
          content: 'Назовите по терминологии международной дипломатии взаимоотношения героев «Ну, погоди!»',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },


        {
          difficulty: 1000000,
          answer: 'Ян ван Эйк',
          content: 'https://arthive.net/res/media/img/oy1000/work/10c/691869@2x.webp',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 1000,
          answer: 'Брейгель',
          content: 'https://arthive.net/res/media/img/oy800/work/1e2/614098.webp ',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 1000,
          answer: 'Диего Веласкес',
          content: 'https://arthive.net/res/media/img/oy1000/work/439/326576.webp',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 1000,
          answer: 'Жан Луи Андре Теодор Жерико',
          content: '.https://i.ytimg.com/vi/JfxJytWFAKI/maxresdefault.jpg ',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          difficulty: 1000,
          answer: 'Серов',
          content: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Europe_serov.jpg/700px-Europe_serov.jpg ',
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
