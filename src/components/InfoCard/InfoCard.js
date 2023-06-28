import styles from './InfoCard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function InfoCard({narrowContent = false, darkBg = false, headerContent, children}) {
    return <div className={cx('wrapper', darkBg ? "dark-bg" : "")}>
        <div className={cx('container', narrowContent ? "narrow-content" : "")}>
            <h2 className={cx('title')}>{headerContent}</h2>
            {children}
        </div>
    </div>
}

export default InfoCard;