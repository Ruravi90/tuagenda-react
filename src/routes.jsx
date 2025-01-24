import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home} from "@/pages/panel";
import HomeBrange from "./pages/sucursales/home";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "panel",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "panel",
        path: "",
        element: <Home />,
      }
    ],
  },
  {
    title: "banges pages",
    layout: "sucursales",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Sucursales",
        path: "",
        element: <HomeBrange />,
      },
    ],
  },
];

export default routes;
