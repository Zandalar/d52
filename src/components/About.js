import React from 'react';
import Menu from './Menu';
import image from '../images/bg_honda.jpg';
import Footer from './Footer';

function About({ height, location }) {
  return (
    <div className='about'>
      <Menu height={height} location={location} />
      <section className='about__masters'>
        <h1 className='about__title'>Наши герои</h1>
        <ul className='about__masters-container'>
          <li className='about__card'>
            <img className='about__photo' src={image} alt='Фото мастера' />
            <h3 className='about__name'>ФИО сотрудника</h3>
            <p className='about__text'>Несколько слов о себе</p>
          </li>
          <li className='about__card'>
            <img className='about__photo' src={image} alt='Фото мастера' />
            <h3 className='about__name'>ФИО сотрудника</h3>
            <p className='about__text'>Несколько слов о себе</p>
          </li>
          <li className='about__card'>
            <img className='about__photo' src={image} alt='Фото мастера' />
            <h3 className='about__name'>ФИО сотрудника</h3>
            <p className='about__text'>Несколько слов о себе</p>
          </li>
          <li className='about__card'>
            <img className='about__photo' src={image} alt='Фото мастера' />
            <h3 className='about__name'>ФИО сотрудника</h3>
            <p className='about__text'>Несколько слов о себе</p>
          </li>
        </ul>
      </section>
      <section className='about__service'>
        <div className='about__service-container'>
          <div className='about__description'>
            <h1 className='about__title'>Немного истории</h1>
            <h2 className='about__subtitle'>"Все началось с чашки кофе...
              Или как снесли наш автосервис"
            </h2>
            <p className='about__text'>
              D52 Service родился в 2015 году, но к тому времени
              Паша и Витя уже были опытными мастерами своего дела
              и отдали годы службе дилерскому центру Honda.
              А в какой-то момент встретились за чашечкой «кофе»
              в нерабочей обстановке и решили,что свой талант нужно
              пускать в массы - открыть свой автосервис, сделать это
              делом жизни и вывести на качественный уровень.
            </p>
            <p className='about__text'>
              Сошлись на том, что стартовый бюджет, необходимый для
              открытия сервиса - 300 000 рублей. Сошлись...
              И разошлись в поисках суммы,параллельно присматривая
              годное оборудование и первое помещение.
              Это был еще 2014 год, а 20 апреля 2015 года мы заключили
              договор на аренду помещения - мечта
              становилась все ближе, сердце билось все чаще!
            </p>
            <p className='about__text'>
              12 мая 2015 года на ул. Дорожной 52 сервис открыл двери первому клиенту.
              Тогда мы ремонтировали Civic 4d, обучали дроссель.
            </p>
            <p className='about__text'>
              В июне мы решили, что нельзя автосервису быть без имени,
              и запустили конкурс среди наших
              (тогда еще немногочисленных) клиентов на лучшее название.
              С большим перевесом победил
              Александр Кузьмин (@kuzminalex) с названием D52 Service,
              которое закрепилось за нами по сей день.
              D - потому что Дорожная,
              52 - потому что дом.
              Стильно, модно, молодежно! И запомнить легко!
              На Дорожной у нас стоял один подъемник,
              благодаря которому мы нашли лучших клиентов.
            </p>
            <p className='about__text'>
              2017 год. Март. Пятница. В 12:00 нам сообщают,
              что в понедельник наш автосервис снесут. На этой
              территории будут строить дома. В состоянии аффекта
              мы ищем новое помещение и в спешке
              перевозим оборудование и инструменты. Мы решили,
              что это шанс расширяться и двигаться дальше!
            </p>
            <p className='about__text'>
              Тогда в нашей команде было пополнение: Александр
              стал одним из лучших мастеров,
              которого так часто отмечают клиенты.
              А в 2019 году с нами поселился еще и Рыжий Кот,
              но о нем есть отдельный пост.
            </p>
          </div>
          <img className='about__image' src={image} alt='Фото сервиса' />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
