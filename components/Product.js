import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 30px auto 0;
    display: flex;
    flex-flow: row wrap;
`;

const ThumbnailContainer = styled.section`
    width: 50%;
    img {
        width: 100%
    }
    @media (max-width: 786px) {
        width: 100%;
    }
`;
const SummaryContainer = styled.section`
    width:50%;
    padding: 20px 30px 100px;
    position:relative;  
    @media (max-width: 786px) {
        width: 100%;
    }
`;
const DetailSection = styled.section`
    width: 100%;
    img {
        width: 100%;
    }
`;
const NotFind = styled.p`
    text-align:center;
    font-size:30px;
    font-weight: 900;
    margin: 50px auto;
`;
const Title = styled.h4`
    font-size: 25px;
`;
const Price = styled.p`
    font-size: 23px;
`;

const ButtonContainer = styled.div`
    position:absolute;
    bottom:30px;
    width: 100%;
    display:flex;
    justify-content: space-around;
`;

const BuyButton = styled.button`
    padding: 10px 20px;
    border: 3px solid red;
    color: red;
    background:none;
    border-radius: 10px;
    &:hover {
        color: #fff;
        background:red;
    }
    &:focus,&:active{
        outline:none;
    }
`;

const CartButton = styled.button`
    padding: 10px 20px;
    border: 3px solid green;
    color: green;
    background:none;
    border-radius: 10px;
    &:hover {
        color: #fff;
        background:green;
    }
    &:focus,&:active{
        outline:none;
    }
`;

const ProductPage = ({item, notFind}) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    if(notFind === true){
        return (
            <Container>
                <NotFind>상품을 찾을 수없습니다.</NotFind>
            </Container>
        )
    } else {
        return (
            <Container>
                <ThumbnailContainer><img src={item.img} alt={item.title} /></ThumbnailContainer>
                <SummaryContainer>
                    <Title>{item.title}</Title>
                    <Price>{numberWithCommas(item.price)} 원</Price>
                    <ButtonContainer>
                        <BuyButton>구매하기</BuyButton>
                        <CartButton>담기</CartButton>
                    </ButtonContainer>
                </SummaryContainer>
                <DetailSection><img src={item.detailImg} alt={item.title} /></DetailSection>
            </Container>
        )
    }
}

export default ProductPage;