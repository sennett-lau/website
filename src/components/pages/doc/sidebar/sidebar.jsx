import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';
import Logo from 'components/shared/logo';

import Menu from './menu';

const Sidebar = ({ className = null, sidebar, slug, basePath }) => (
  <aside
    className={clsx(
      'relative left-0 z-50 border-r border-gray-new-94 bg-white dark:border-gray-new-10 dark:bg-black-pure',
      className
    )}
  >
    <div className="sticky top-0 px-[52px] pt-[18px] xl:px-8">
      <Link to="/">
        <span className="sr-only">Neon</span>
        <Logo className="h-7" width={102} height={28} priority />
      </Link>
      <nav className="no-scrollbars relative z-10 mt-8 flex h-[calc(100vh-100px)] overflow-x-hidden overflow-y-scroll pb-16 pt-8">
        <Menu title="Home" basePath={basePath} slug={slug} items={sidebar} isOpen />
      </nav>
    </div>
  </aside>
);

export const sidebarPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string,
    ariaLabel: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.exact({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.any),
        ariaLabel: PropTypes.string,
      })
    ),
  })
).isRequired;

Sidebar.propTypes = {
  className: PropTypes.string,
  sidebar: sidebarPropTypes,
  slug: PropTypes.string.isRequired,
  basePath: PropTypes.string.isRequired,
};

export default Sidebar;
