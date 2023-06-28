import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import images from '../../../assets/images'
import MenuItem from '../../../components/MenuItem'
import NavItem from '../../../components/NavItem'
const cx = classNames.bind(styles)

const menuItems = [
    {
        title: "GIỚI THIỆU",
        children: [
            {
                title: "VỀ CHÚNG TÔI"
            },
            {
                title: "CÁC DỊCH VỤ"
            }
        ]
    },
    {
        title: "DU HỌC",
        children: [
            {
                title: "DU HỌC CHÂU MỸ"
            },
            {
                title: "DU HỌC CHÂU ÚC"
            },
            {
                title: "DU HỌC CHÂU ÂU"
            },
            {
                title: "DU HỌC CHÂU Á"
            },
            {
                title: "DU HỌC HÈ"
            }
        ]
    },
    {
        title: "VIỆC LÀM",
        children: [
            {
                title: "LAO ĐỘNG TAY NGHỀ"
            },
            {
                title: "LAO ĐỘNG PHỔ THÔNG"
            }
        ]
    },
    {
        title: "DI TRÚ",
        children: [
            {
                title: "ĐỊNH CƯ MỸ"
            },
            {
                title: "ĐỊNH CƯ CANADA"
            },
            {
                title: "ĐỊNH CƯ ÚC / NEW ZEALAND"
            },
            {
                title: "CÁC NƯỚC KHÁC"
            }
        ]
    },
    {
        title: "LIÊN HỆ"
    },
]

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link className={cx('logo-link')} to="/">
                <img src={images.goldLogo} className={cx('logo-img')}/>
            </Link>

            <div className={cx('menu-items')}>
                {
                    menuItems.map((item, index) => {
                        return <NavItem key={index} data={item}/>
                    })
                }
            </div>

            <button className={cx('register-btn')}>
                ĐĂNG KÝ
            </button>
        </div>
    </header>
}

export default Header