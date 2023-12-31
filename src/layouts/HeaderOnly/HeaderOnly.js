import classNames from 'classnames/bind'
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './HeaderOnly.module.scss'

const cx = classNames.bind(styles);

function HeaderOnly({children}) {
    return <div className={cx('wrapper')}>
        <Header />
        <div className={cx('container')}>{children}</div>
    </div>
}

export default HeaderOnly;