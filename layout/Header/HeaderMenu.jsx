import { Menu, Space } from "antd";

import Arrow from "../../icons/Arrow";
import Link from "next/link";

const items = [
  {
    label: (
      <Space>
        <Link href="/">Главная</Link>
      </Space>
    ),
    key: "1.1",
  },
  {
    label: (
      <Space>
        О компании
        <Arrow width={8} height={4} />
      </Space>
    ),
    key: "2.1",
    children: [
      { label: <Link href="/about/team/">Команда</Link>, key: "2.2" },
      { label: <Link href="/about/us/">О нас</Link>, key: "2.3" },
      { label: <Link href="/">Награды и сертификаты</Link>, key: "2.4" },
      { label: <Link href="/">Вакансии</Link>, key: "2.5" },
      { label: <Link href="/">Миссия</Link>, key: "2.6" },
      { label: <Link href="/">Наши преимущества</Link>, key: "2.7" },
      { label: <Link href="/">Партнерам</Link>, key: "2.8" },
      { label: <Link href="/">Пресс-центр</Link>, key: "2.9" },
      { label: <Link href="/">Сми о нас</Link>, key: "2.10" },
      { label: <Link href="/">Мы в соцсетях</Link>, key: "2.11" },
      {
        label: (
          <Link href="/">
            Официальные уведомления и отказ от ответственности
          </Link>
        ),
        key: "2.12",
      },
      { label: <Link href="/">Условия использования</Link>, key: "2.13" },
      { label: <Link href="/">Политика конфиденциальности</Link>, key: "2.14" },
      {
        label: <Link href="/">Политика в отношении cookie-файлов</Link>,
        key: "2.15",
      },
    ],
  },
  {
    label: (
      <Space>
        Недвижимость в Турции
        <Arrow width={8} height={4} />
      </Space>
    ),
    key: "3.1",
    children: [
      { label: <Link href="/">Квартиры, апартаменты</Link>, key: "3.2" },
      { label: <Link href="/">Виллы и дома</Link>, key: "3.3" },
      { label: <Link href="/">Дуплекс</Link>, key: "3.4" },
      { label: <Link href="/">Коммерческая недвижимость</Link>, key: "3.5" },
      { label: <Link href="/">Земельные участки</Link>, key: "3.6" },
      { label: <Link href="/">Эксклюзивно</Link>, key: "3.7" },
    ],
  },
  {
    label: (
      <Space>
        Услуги
        <Arrow width={8} height={4} />
      </Space>
    ),
    key: "4.1",
    children: [
      { label: <Link href="/">Интернет-консультирование</Link>, key: "4.2" },
      {
        label: <Link href="/">Презентации и выезды на места</Link>,
        key: "4.3",
      },
      { label: <Link href="/">Продажа Онлайн</Link>, key: "4.4" },
      { label: <Link href="/">Юридические услуги</Link>, key: "4.5" },
      { label: <Link href="/">Ознакомительный тур в Турцию</Link>, key: "4.6" },
      { label: <Link href="/">Онлайн тур</Link>, key: "4.7" },
      {
        label: <Link href="/">Продажа Вашей недвижимость в Турции</Link>,
        key: "4.8",
      },
      { label: <Link href="/">Трансфер</Link>, key: "4.9" },
      {
        label: <Link href="/">ВНЖ при покупке недвижимости</Link>,
        key: "4.10",
      },
      { label: <Link href="/">Презентация в офисе</Link>, key: "4.11" },
      {
        label: <Link href="/">Услуги по приобретению недвижимости</Link>,
        key: "4.12",
      },
      { label: <Link href="/">Турецкое гражданство</Link>, key: "4.13" },
    ],
  },
  {
    label: (
      <Space>
        Инвесторам
        <Arrow width={8} height={4} />
      </Space>
    ),
    key: "5.1",
    children: [
      { label: <Link href="/">Инвестиции</Link>, key: "5.2" },
      { label: <Link href="/">ВНЖ и Гражданство</Link>, key: "5.3" },
    ],
  },
  {
    label: (
      <Space>
        Блог
        <Arrow width={8} height={4} />
      </Space>
    ),
    key: "6.1",
    children: [
      { label: <Link href="/">Инвестиции</Link>, key: "6.2" },
      { label: <Link href="/">ВНЖ и Гражданство</Link>, key: "6.3" },
    ],
  },
  {
    label: (
      <Space>
        <Link href="/contacts">Контакты</Link>
      </Space>
    ),
    key: "7.1",
  },
];

export default function HeaderMenu() {
  return (
    <Menu items={items} mode={"horizontal"} triggerSubMenuAction={"click"} />
  );
}
