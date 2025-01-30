import Image from '../assets/image/Zaglushka.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h1 className="title about-us__title">
          Knightsbridge private park – элитный район Лондона в центре Москвы
        </h1>
      </div>

      <div className="about-us__content">
        <div className="container">
          <div className="about-us__info">
            <ul className="about-us__menu">
              <li className="about-us__menu-item">
                <div className="about-us__menu-item-title">
                  156 - 636{' '}
                  <span className="about-us__menu-item-span">
                    м<sup>2</sup>
                  </span>
                </div>
                <div className="about-us__menu-item-subtitle">Площадь квартир</div>
              </li>
              <li className="about-us__menu-item">
                <div className="about-us__menu-item-title">475</div>
                <div className="about-us__menu-item-subtitle">Парковочных мест</div>
              </li>
              <li className="about-us__menu-item">
                <div className="about-us__menu-item-title">
                  10 <span className="about-us__menu-item-span">мин</span>
                </div>
                <div className="about-us__menu-item-subtitle">До метро Фрунзенская</div>
              </li>
              <li className="about-us__menu-item">
                <div className="about-us__menu-item-title">
                  2 <span className="about-us__menu-item-span">га</span>
                </div>
                <div className="about-us__menu-item-subtitle">Площадь собственного парка</div>
              </li>
            </ul>
            <div className="about-us__description">
              Жилой комплекс из четырех клубных домов класса де-люкс в английском стиле,
              расположенный в собственном парке площадью 3 га в районе Хамовники. Авторы интерьеров
              жилого комплекса и дизайна частного парка – дизайнеры мировой величины. Так,
              общественные зоны оформляет Дэвид Линли, племянник королевы Великобритании и глава
              компании LINLEY, а настоящий английский парк для жителей.
            </div>
          </div>
          <div className="about-us__find-more">Узнать Подробнее</div>
          <div className="container">
            <img className="about-us__main-image" src={Image} alt="Main" />

            <div className="about-us__image-group">
              <div className="about-us__image">
                <h3 className="about-us__image-title">
                  Презентация <br />
                  ЖК Knightsbridge <br /> Private Рark
                </h3>
              </div>
              <div className="about-us__image about-us__image-2">
                <h3 className="about-us__image-title">Типы планировок апартаментов</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
