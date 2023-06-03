import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "О нас",
    newTab: false,
    path: "/about",
    submenu: [
      {
        id: 12,
        title: "Новости",
        path: "/about/news",
        newTab: false,
      },
      {
        id: 13,
        title: "Публикации",
        path: "/about/press",
        newTab: false,
      },
      {
        id: 14,
        title: "Мероприятия",
        path: "/about/conferences/",
        newTab: false,
      },
      {
        id: 15,
        title: "Лицензии и сертификаты",
        path: "/about/licenses/",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Услуги",
    newTab: false,
    path: "/services",
  },
  {
    id: 3,
    title: "Средства защиты",
    newTab: false,
    path: "/products",
    submenu: [
      {
        id: 31,
        title: "SECURITY CAPSULE SIEM",
        path: "/products/siem",
        newTab: false,
      },
      {
        id: 32,
        title: "Операционная система EMIAS OS 1.0",
        path: "/products/emias",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Контакты",
    newTab: false,
    path: "/contact",
  },
];
export default menuData;
