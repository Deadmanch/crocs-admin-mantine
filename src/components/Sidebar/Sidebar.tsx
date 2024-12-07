import {
  IconCategory2,
  IconHome2,
  IconLogout,
  IconMaximize,
  IconPackage,
  IconPalette,
} from '@tabler/icons-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { rem, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import { useUserStore } from '@/store/userStore';
import styles from './Sidebar.module.css';

const mockdata = [
  { icon: IconHome2, label: 'Home', href: '/' },
  { icon: IconCategory2, label: 'Categories', href: '/categories' },
  { icon: IconMaximize, label: 'Sizes', href: '/sizes' },
  { icon: IconPalette, label: 'Colors', href: '/colors' },
  { icon: IconPackage, label: 'Products', href: '/products' },
];

interface NavbarLinkProps {
  href?: string;
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick, href = '#' }: NavbarLinkProps) {
  return (
    <Link to={href}>
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={onClick} className={styles.link} data-active={active || undefined}>
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    </Link>
  );
}

export function Sidebar() {
  const { pathname } = useLocation();
  const clearUser = useUserStore((state) => state.clearUser);
  const navigate = useNavigate();
  const logout = () => {
    clearUser();
    navigate('/auth/login');
  };

  const links = mockdata.map((link) => (
    <NavbarLink {...link} key={link.label} active={pathname === link.href} onClick={() => {}} />
  ));

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconLogout} label="Logout" onClick={logout} />
      </Stack>
    </nav>
  );
}
