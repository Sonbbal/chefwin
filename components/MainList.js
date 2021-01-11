import styled from 'styled-components';
import Link from 'next/link';


const Container = styled.div`
    display: flex;
    flex-flow: ${props => props.isOne ? "row nowrap": "column nowrap"};
    @media (max-width: 1200px) {
        flex-flow: column nowrap;
    }
    
`;
const InfoContainer = styled.div`
    width: ${props => props.isOne ? "30%": "100%"};
    padding: 40px 20px;
    display:flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    color: #555;
    ${props=> props.isOne ? 'justify-content:center;':''}
    @media (max-width: 1200px ){
        width: 100%;
        padding: 40px 5%;
    }
    & > a {
        padding:15px 30px;
        margin-top: 15px;
        border-radius:10px;
        border: 2px solid #b5c84b;
        color: #b5c84b;
        text-decoration: none;
        &:hover {
            color: #fff;
            background: #b5c84b;
        }
    }
`;
const Category = styled.p`
    font-size:10px;
`;
const Title = styled.h3`
    font-size:18px;
    color: #333;
    font-weight: 400;
`;
const SubTitle = styled.p`
    font-size:25px;
    color: #111;
    font-weight: 700;
`;
const Price = styled.p`
    font-size:15px;
`;

const ImgContainer = styled.div`
    width: ${props => props.isOne ? "70%": "100%"};
    padding: ${props => props.isOne ? "0": "0 30px;"};
    & > img {
        width:100%;
    }
    @media (max-width: 1200px ){
        width: 100%;
    }
`;


const MainList = ({item,isOne}) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <Container isOne={isOne}>
            <InfoContainer isOne={isOne}>
                <Category>{item.category}</Category>
                <Title>{item.title}</Title>
                <SubTitle>{item.subtitle}</SubTitle>
                <Price>{numberWithCommas(item.price)}</Price>
                <Link href={item.link}>이동하기</Link>                
            </InfoContainer>
            <ImgContainer isOne={isOne}>
                <img src={item.img} alt={item.title} />
            </ImgContainer>
        </Container>
    )
}

export default MainList;