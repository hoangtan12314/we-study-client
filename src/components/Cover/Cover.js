import images from '../../assets/images';
import styles from './Cover.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Cover() {
    return <div className={cx('wrapper')}>
        <img src={images.cover} className={cx('cover-img')}/>
        <div className={cx('content')}>
            <h2 className={cx('content-header')}>DU HỌC NGẮN HẠN</h2>
            <p>Mục đích chính của du học ngắn hạn là tích lũy kiến thức và trải nghiệm chất lượng giảng dạy tiên tiến từ các quốc gia khác</p>
        </div>
    </div>
}

export default Cover;