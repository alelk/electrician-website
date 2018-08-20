/**
 * Data file
 *
 * Created by Alex Elkin on 18.10.2017.
 */
import imgCamera from './services-camera.jpg'
import imgEnergy from './services-energy.jpg'
import imgFireproof from './services-fireproof.jpg'
import imgPavilion from './services-pavilion.jpg'
import imgMsrmt from './services-measurement.jpg'
import imgOps from './services-ops.jpg'

export const contacts = {
  phoneNumber : '8 (83341) 5-11-65',
  companyName : 'Услуги электромонтажа',
  companyLocation : 'пгт. Кикнур',
  getDirectionUrl: 'https://www.google.com/maps/dir//%D0%9A%D0%B8%D0%BA%D0%BD%D1%83%D1%80%D1%81%D0%BA%D0%BE%D0%B5+%D0%90%D0%B3%D1%80%D0%BE%D0%BF%D1%80%D0%BE%D0%BC%D1%8D%D0%BD%D0%B5%D1%80%D0%B3%D0%BE/data=!4m8!4m7!1m0!1m5!1m1!1s0x41570d854440c13b:0x1b3c1b4f45ec4937!2m2!1d47.2060445!2d57.2960539'
};

export const statistics = [
  {
    iconName:"checked calendar",
    header: "Более 10 лет опыта",
    description: "Скорей всего мы сталкивались с заказом, подобным вашему, уже не один раз. Накопленный опыт позволит нам выполнить работу быстро и эффективно."
  }, {
    iconName:"thumbs up",
    header: "Квалифицированные специалисты",
    description: "Профессионализм сотрудников позволяет выполнять работы качественно и в срок"
  }, {
    iconName:"user secret",
    header: "Индивидуальный подход",
    description: "Мы разрабатываем индивидуальный подход для каждого из клиентов, обеспечиваем бесплатный выезд специалиста на замеры и консультацию, бесплатно составляем сметный расчет. "
  }, {
    iconName:"check",
    header: "Допуски",
    description: "На все виды работ имеются допуски. После выполнения работ предоставляем полный комплект сдаточной документации."
  }, {
    iconName:"handshake outline",
    header: "Обслуживание",
    description: "Заключаем договор на обслуживание электрооборудования и электроустановок до 1000 Вт, на обслуживание системы автоматической пожарной и охранно-пожарной сигнализации/"
  }
];

export const services = [
  {label:"Электромонтаж", img:imgEnergy},
  {label:"Установка видеонаблюдения", img:imgCamera},
  {label:"Монтаж и обслуживание охранно-пожарных систем", img:imgOps},
  {label:"Контрольно-измерительные работы до 1000 вольт", img: imgMsrmt},
  {label:"Огнезащита материалов, изделий и конструкций", img: imgFireproof},
  {label:"Ремонтно-строительные работы", img: imgPavilion},
];