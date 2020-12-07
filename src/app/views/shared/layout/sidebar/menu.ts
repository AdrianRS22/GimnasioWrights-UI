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
    to: '/admin/pagosyventas',
  },
  {
    icon: 'iconsminds-basket-items',
    label: 'Productos',
    to: '/admin/productos'
  },
  {
    icon: 'iconsminds-male-female',
    label: 'Socios',
    to: '/admin/socios'
  },
  {
    icon: 'iconsminds-bar-chart-4',
    label: 'Reportes',
    to: '/admin/reportes'
  },
  {
    icon: 'iconsminds-gear',
    label: 'Mantenimiento',
    to: '/admin/mantenimiento'
  },
  {
    icon: 'iconsminds-file',
    label: 'Rutinas',
    to: '/admin/rutinas'
  }
];
export default data;
