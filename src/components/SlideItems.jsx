const SlideItems = () => {
  const slidesData = [
    {
      num: '01',
      title: 'большая база',
      description:
        'У нас самая большая база актуальных и эксклюзивных объектов элитной недвижимости',
      buttonText: 'Посмотреть',
    },
    {
      num: '02',
      title: 'надежность',
      description: 'Мы гарантируем абсолютную безопасность и конфиденциальность по сделкам',
      buttonText: 'Узнать',
    },
    {
      num: '03',
      title: 'опыт',
      description: 'Наша команда имеет огромный опыт продаж недвижимости в элитном сегменте',
      buttonText: 'Изучить',
    },
    {
      num: '04',
      title: 'Закрытые предложения',
      description: 'Наша команда имеет огромный опыт продаж недвижимости в элитном сегменте',
      buttonText: 'Получить',
    },
    {
      num: '05',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eum minus non obcaecati sed sint.',
      buttonText: 'Посмотреть',
    },
    {
      num: '06',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eum minus non obcaecati sed sint.',
      buttonText: 'Изучить',
    },
    {
      num: '07',
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eum minus non obcaecati sed sint.',
      buttonText: 'Подробнее',
    },
  ];

  return (
    <>
      {slidesData.map((slide, index) => (
        <div className="features__carousel-item" key={index}>
          <a className="features__carousel-item-num">{slide.num}</a>
          <div className="features__carousel-item-content">
            <h2 className="features__carousel-item-title">{slide.title}</h2>
            <div className="features__carousel-item-description">{slide.description}</div>
            <button className="features__carousel-item-button">{slide.buttonText}</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default SlideItems;
