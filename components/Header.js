import {useState} from 'react';
import Link from 'next/link';
import Modal from './Modal';
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
    cursor:pointer;
    display:none !important;
    @media (max-width: 1200px) { 
        display:block !important;
        color: #666;
        &:hover {
            color:#000;
        }
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
    cursor:pointer;
    display:none !important;
    @media (max-width: 1200px) { 
        display:block !important;
        color: #666;
        &:hover {
            color:#000;
        }
    }
`;
const Logo = styled.h1`
    cursor:pointer;
    wdith: 200px;
    &:hover {
        opacity: 0.8;
    }
    a {
        text-decoration: none;
    }
    @media (max-width: 1200px) { 
        width: 50%;
        max-width: 200px;
    }
    img { width: 100%;}
`;

const ModalContainer = styled.div`
    padding-top: 50px;
`;
const ModalList = styled.div`
    cursor:pointer;
    width:100%;
    max-width: 200px;
    text-align: center;
    margin:0 auto;
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    &:hover {
        color:#666;
    }
`;

const ModalContent = ({content}) => {
    if (content === 'product'){
        return (
            <ModalContainer>
            <Link href="/list"><ModalList>냄비</ModalList></Link>
            <Link href="/list"><ModalList>프라이팬</ModalList></Link>
            </ModalContainer>
        )
    } else if (content === 'login'){
        return (
            <ModalContainer>
            <ModalList>로그인</ModalList>
            <ModalList>장바구니</ModalList>
            </ModalContainer>
        )
    } else {
        return (
            <p>페이지오류</p>
        )
    }

}

const Header = () => {
    const [modal, setModal] = useState(false);
    const [modalNav, setModalNav] = useState('');

    function handleNavigationModal() {
        setModal(true);
        setModalNav('product');
    }
    function handleLoginModal() {
        setModal(true);
        setModalNav('login');
    }
    function closeModal() {
        setModal(false);
        setModalNav('');
    }
    return(
    <>
    {modal ? (
    <Modal left={modalNav === 'product'} closeModal={closeModal} >
        <ModalContent content={modalNav}/>
    </Modal>):''
    }
    <HeeaderContainer>
        <Navigation>
            <NavigationItem><Link href="/list">냄비</Link></NavigationItem>
            <NavigationItem><Link href="/list">프라이팬</Link></NavigationItem>
            <NavigationButton onClick={() => handleNavigationModal()}/>
        </Navigation>
            <Logo><Link href="/"><img src="/logo.gif" alt="logo"/></Link></Logo>
        <LoginNavigation>
            <LoginNavigationItem>로그인</LoginNavigationItem>
            <LoginNavigationItem>장바구니</LoginNavigationItem>
            <LoginNavigationButton onClick={()=> handleLoginModal()} />
        </LoginNavigation>
    </HeeaderContainer>
    </>
)}

export default Header;