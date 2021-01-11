import {useEffect,useRef, useState} from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 500px;
    position:relative;
`;

const SlideConatiner = styled.div`
    width: 100%;
    height: 500px;
    position:relative;
    display:flex;
    flex-flow: row nowrap; 
`;

const TypoContainer = styled.div`
    width: 100%;

`;
const MainTypo = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: #000;
    text-align: cneter;
    
`;

const SlideItemContainer = styled.div`
    background: url(${props=> props.bg});
    background-size: cover;
    background-position: center;
    width: 100%;
    height:500px;
    position:absolute;
    left:0;
    display:flex;
    justify-content: center;
    text-align:center;
    align-items:center;
    &:nth-child(2){
        left:100%;
    }
    &:nth-child(3){
        left:200%;
    }
`;

const NextButton = styled(ArrowForwardIosRoundedIcon)`
    position:absolute;
    top: calc(50% - 24px);
    right: 50px;
    width: 3rem !important;
    height: 3rem !important;
    color:#fff;
    &:hover {
        color: #999;
    }
`;

const PrevButton = styled(ArrowBackIosRoundedIcon)`
    position:absolute;
    top: calc(50% - 24px);
    left: 50px;
    width: 3rem !important;
    height: 3rem !important;
    color:#fff;
    &:hover {
        color: #999;
    }
`;

const SlideItem = ({item}) => {
    return (
        <SlideItemContainer bg={item.img}>
            <TypoContainer>
                <MainTypo>{item.subtitle}</MainTypo>
            </TypoContainer>
        </SlideItemContainer>
    )
}

const MainSlider = ({items}) => {
    const TOTAL_SLIDES = 2;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide(currentSlide + 1);
        }
      };
      const prevSlide = () => {
        if (currentSlide === 0) {
          setCurrentSlide(TOTAL_SLIDES);
        } else {
          setCurrentSlide(currentSlide - 1);
        }
      };

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform =  `translateX(-${currentSlide}00%)`;
    },[currentSlide]);

    return (
        <Container>
            <SlideConatiner ref={slideRef}>
                {items.map(item => <SlideItem key={item.id} item={item}/>)}
            </SlideConatiner>
            <NextButton onClick={() => nextSlide()}>next</NextButton>
            <PrevButton onClick={() => prevSlide()}>prev</PrevButton>
        </Container>
    )
}

export default MainSlider;