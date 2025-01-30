const Map = () => {
  const categories = [
    { name: 'Красота и здоровье', count: 7 },
    { name: 'Магазины', count: 7 },
    { name: 'Обучение', count: 7 },
    { name: 'Детсад', count: 7 },
    { name: 'Отдых, Развлечение', count: 7 },
  ];

  return (
    <div className="on-map">
      <div className="container">
        <div className="on-map__content">
          <div>
            <h1 className="title on-map__title">на карте</h1>
            <div className="on-map__menu">
              {categories.map((category, index) => (
                <div key={index} className="on-map__menu-item-wrap">
                  <span className="on-map__menu-item">
                    {category.name} <span className="on-map__menu-item-span">{category.count}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <iframe
            className="on-map__map"
            src="https://yandex.ru/map-widget/v1/?ll=48.415491%2C54.309803&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzEwNTMxMxIg0KDQvtGB0YHQuNGPLCDQo9C70YzRj9C90L7QstGB0LoiCg3OnEFCFbxBWUI%2C&z=13"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Yandex Map"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
