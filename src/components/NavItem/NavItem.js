import styles from './NavItem.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu/Menu';

const cx = classNames.bind(styles)

function NavItem({data}) {
    return <div>
        <Tippy
        offset={[0, 9]}
        interactive
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            {
                data.children ? (
                <div>
                    {
                        <Menu data={data.children}/>
                    }
                </div>
                ) : <></>
            }
          </div>
        )}
        >
            <div className={cx('item')}>
                {data.title}
                {
                    data.children && (
                    <span className={cx('expand-icon')}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span> )
                }
            </div>
        </Tippy>
    </div>
}

export default NavItem;