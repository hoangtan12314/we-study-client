import classNames from "classnames/bind";
import styles from './MenuWrapper.module.scss';

const cx = classNames.bind(styles);

function MenuWrapper({children}) {
    return <div className={cx('wrapper')}>
        {children}
    </div>
}

export default MenuWrapper;