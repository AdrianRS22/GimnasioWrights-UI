export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
  {
    icon: 'iconsminds-wallet',
    label: 'Pagos y Ventas',
    to: 'pagosyventas',
  },
  {
    icon: 'iconsminds-basket-items',
    label: 'Productos',
    to: 'productos'
  },
  {
    icon: 'iconsminds-male-female',
    label: 'Socios',
    to: 'socios'
  },
  {
    icon: 'iconsminds-bar-chart-4',
    label: 'Reportes',
    to: 'reportes'
  },
  {
    icon: 'iconsminds-gear',
    label: 'Mantenimiento',
    to: 'mantenimiento'
  },
  {
    icon: 'iconsminds-file',
    label: 'Rutinas',
    to: 'rutinas'
  }
];
export default data;
