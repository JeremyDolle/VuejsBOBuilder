import {
  ButtonPlugin,
  NavbarPlugin,
  LayoutPlugin,
  SidebarPlugin,
  ListGroupPlugin,
  TablePlugin,
  IconsPlugin,
  LinkPlugin,
  SpinnerPlugin,
  FormInputPlugin,
  ImagePlugin,
  ToastPlugin,
  ModalPlugin,
  PaginationPlugin,
  VBTooltipPlugin,
  FormFilePlugin,
  OverlayPlugin,
  InputGroupPlugin,
} from 'bootstrap-vue'

export default function registerB (app) {
  app.use(ButtonPlugin)
  app.use(NavbarPlugin)
  app.use(LayoutPlugin)
  app.use(SidebarPlugin)
  app.use(ListGroupPlugin)
  app.use(TablePlugin)
  app.use(IconsPlugin)
  app.use(LinkPlugin)
  app.use(SpinnerPlugin)
  app.use(FormInputPlugin)
  app.use(ImagePlugin)
  app.use(ToastPlugin)
  app.use(ModalPlugin)
  app.use(PaginationPlugin)
  app.use(VBTooltipPlugin)
  app.use(FormFilePlugin)
  app.use(OverlayPlugin)
  app.use(InputGroupPlugin)
}
