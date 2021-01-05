import styled from 'styled-components'; 

const FooterContainer = styled.footer`
    width: 100%;
    max-width: 1200px;
    margin:30px auto 0;
    display:flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    @media (max-width: 1200px) {
        flex-flow: column nowrap;
    }
`;

const CsCenter = styled.div`
    width: 33.3%;
    padding: 20px;
    h4 {
        color:#555;
    }
    .tel {
        font-size:28px;
        font-weight: 500;
        color: #111;
        padding: 10px 0;
    }
    p {
        color: #333;
        font-size: 12px;
    }
    @media (max-width: 1200px) {
        width: 100%;
        padding: 20px;
        text-align:center;
    }
`;
const BankingAccount = styled.div`
    width: 33.3%;
    padding: 20px;
    h4 {
        color: #555;
        margin-bottom: 20px;
    }
    p {
        color: #333;
        text-align: center;
        font-size: 20px;
        font-wieght: 800;
        padding: 10px 0;
    }
    @media (max-width: 1200px) {
        width: 100%;
        padding: 20px;
        text-align:center;
    }
`;

const Logo = styled.div`
    width: 33.3%;
    padding: 20px;
    text-align: center;
    img {
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
    }
    @media (max-width: 1200px) {
        width: 100%;
        max-width:400px;
        padding: 20px;
        margin:0 auto;
    }
`;

const Footer = () => (
    <FooterContainer>
        <CsCenter>
            <h4>CS Center</h4>
            <p className="tel">031-975-2583</p>
            <p>MON - FRI. AM 09:00 - PM 6:00</p>
            <p>LUNCH : PM 12:00 - 1:00</p>
            <p>SAT, SUN, HOLIDAY OFF</p>
        </CsCenter>
        <BankingAccount>
            <h4>Banking Account</h4>
            <p>기업 64201702101027</p>
            <p>예금주 : (주)제이디코프</p>
        </BankingAccount>
        <Logo><img src="/logo.gif" alt="logo"/></Logo>
    </FooterContainer>
)

export default Footer;