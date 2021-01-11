import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display:flex;
    flex-flow: row nowrap;
    &:nth-child(2n) {
        flex-flow: row-reverse nowrap;
    }
    @media (max-width: 768px) {
        flex-flow: row wrap;
        &:nth-child(2n) {
            flex-flow: row wrap;
        }
    }
`;
const ImgContainer = styled.div`
    width:50%;
    img {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const InfoContainer = styled.div`
    width:50%;
    display:flex;
    flex-flow:column nowrap;
    justify-content: center;
    align-items: center;
    a {
        text-decoration:none;
        border: 2px solid green;
        border-radius: 10px;
        padding: 10px 20px;
        color:green;
        width: 150px;
        text-align:center;
        margin-top: 10px;
        &:hover {
            background: green;
            color:#fff;
        }
        @media (max-width: 768px) {
            margin-top: 10px;
            margin-bottom: 15px;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Title = styled.h5`
    font-size: 15px;
    color: #666;
    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;
const SubTitle = styled.p`
    font-size: 25px;
    color: #222;
    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;
const Price = styled.p`
    font-size: 15px;
    color: 666;
    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

 const ListItem = ({item}) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <Container>
            <ImgContainer><img src={item.img} alt={item.title} /></ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <SubTitle>{item.subtitle}</SubTitle> 
                <Price>{numberWithCommas(item.price)}</Price>
                <Link href={item.src}>이동하기</Link>             
            </InfoContainer>
        </Container>       
    )
}
export default ListItem;