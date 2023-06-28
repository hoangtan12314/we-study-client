import classNames from "classnames/bind"
import MenuWrapper from "../MenuWrapper"
import MenuItem from "../MenuItem"
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function Menu({data}) {
    return <div>
        <MenuWrapper>
            {
                data.map((item, index) => (
                    <MenuItem data={item}/>
                ))
            }
        </MenuWrapper>
    </div>
}

export default Menu