import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function MenuItem({data}) {
    return <div className={cx('menu-item')}>{data.title}</div>
}

export default MenuItem;