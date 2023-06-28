import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Cover from '../../components/Cover';
import InfoCard from '../../components/InfoCard';

const cx = classNames.bind(styles);

function Home() {
    return <div className={cx('wrapper')}>
        <Cover/>
        <InfoCard headerContent="DU HỌC QUỐC TẾ" narrowContent>
            <p className={cx("text-center")}>
                We Study là đơn vị tư vấn giáo dục hỗ trợ học sinh và sinh viên tiếp cận với nền giáo dục toàn cầu. Chúng tôi luôn đồng hành với học sinh trên con đường săn học bổng nhằm tiết kiệm chi phí du học và là cầu nối vững chắc giữa gia đình và nhà trường trong suốt thời gian các em học tập tại nước ngoài.
            </p>
        </InfoCard>

        <InfoCard>
            
        </InfoCard>
    </div>
}

export default Home;
