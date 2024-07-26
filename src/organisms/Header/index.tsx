import * as S from '../Header/style';
import Logo from '../../molecules/Logo/index';
import Menu from '../Menu/index';
import Button from '../../atoms/Button/index';

const Header = () => {

    return (<S.Box>
        
        <Logo />
        <Menu />
        <Button />

    </S.Box>);

}

export default Header;