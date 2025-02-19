import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import './index.less';

function NavLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const className = `nav-link ${match ? 'nav-active' : ''}`;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link className={className} to={to} {...props}>
      {children}
    </Link>
  );
}

export default function NavBar() {
  return (
    <div className="nav">
      <NavLink to="/">一键长草</NavLink>
      <NavLink to="/settings">设置</NavLink>
    </div>
  );
}
