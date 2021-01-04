import Link from 'next/link';
import styled from 'styled-components';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';

const HeeaderContainer = styled.header`
    width: 100%;
    padding 10px 20px;
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`;
const Navigation = styled.nav`
    width: 400px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    @media (max-width: 1200px) { 
        width: 25%;
    }
`;
const NavigationItem = styled.span`
    font-size: 15px;
    padding: 5px 10px;
    margin-right: 7px;
    a {
        color: #666;
        text-decoration: none;
        font-weight: 600;
        &:hover {
            color: #000;
        }
    }
    @media (max-width: 1200px) { 
        display:none;
    }
`;
const NavigationButton = styled(MenuRoundedIcon)`
    display:none !important;
    @media (max-width: 1200px) { 
        display:block !important;
    }
`;
const LoginNavigation = styled.div`
    width: 400px;
    display: flex;
    flex-flow: row nowrap;   
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 1200px) { 
        width: 25%;
    }
}
`;
const LoginNavigationItem = styled.span`
    font-size: 12px;
    padding: 5px 10px;
    margin-left: 7px;
    color: #666;
    font-weight: 600;
    &:hover {
        color: #000;
    }
    @media (max-width: 1200px) { 
        display:none;
    }
`;
const LoginNavigationButton = styled(ShoppingBasketRoundedIcon)`
    display:none !important;
    @media (max-width: 1200px) { 
        display:block !important;
    }
`;
const Logo = styled.h1`
    wdith: 200px;
    a {
        text-decoration: none;
    }
    @media (max-width: 1200px) { 
        width: 50%;
        max-width: 200px;
    }
    img { width: 100%;}
`;

const Header = () => (
    <HeeaderContainer>
        <Navigation>
            <NavigationItem><Link href="/list">냄비</Link></NavigationItem>
            <NavigationItem><Link href="/list">프라이팬</Link></NavigationItem>
            <NavigationButton />
        </Navigation>
            <Logo><Link href="/"><img src="/logo.gif" alt="logo"/></Link></Logo>
        <LoginNavigation>
            <LoginNavigationItem>로그인</LoginNavigationItem>
            <LoginNavigationItem>장바구니</LoginNavigationItem>
            <LoginNavigationButton />
        </LoginNavigation>
    </HeeaderContainer>
)

export default Header;