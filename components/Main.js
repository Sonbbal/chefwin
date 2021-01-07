import styled from 'styled-components';
import MainList from './MainList';
import MainSlider from './MainSlider';

const data = [
    {
        id:1,
        title: "316 티타늄 스텐 양수 스퀘어팬 사각팬",
        subtitle:"모던한 주방의 완성",
        price:199000,
        link:"/product/01",
        img:"/main/01_main.jpg",
        category:"프라이팬"
    },
    {
        id:2,
        title: "316 STS 후라이팬 기름방지 멀티커버",
        subtitle:"스마트와 스타일리쉬의 필수품",
        price:83000,
        link:"/product/02",
        img:"/main/02_main.jpg",
        category:"뚜껑"
    },
    {
        id:3,
        title: "316 STS 멀티 스티머 & 돔뚜껑 set",
        subtitle:"언제나 안전한 찜요리",
        price:94000,
        link:"/product/03",
        img:"/main/03_main.jpg",
        category:"세트"
    },
    {
        id:4,
        title: "MOON 통5중 스텐냄비 28대형곰솥",
        subtitle:"통5중 명품 곰솥",
        price:196000,
        link:"/product/04",
        img:"/main/04_main.jpg",
        category:"냄비"
    },
    {
        id:5,
        title: "오리지날 통5중 스텐 28와이드웍",
        subtitle:"선이 예쁜 멀티웍",
        price:175000,
        link:"/product/05",
        img:"/main/05_main.jpg",
        category:"프라이팬"
    },
    {
        id:6,
        title: "오리지날 통5중 스텐 36웍",
        subtitle:"대용량 튀김도 자신있다",
        price:226000,
        link:"/product/06",
        img:"/main/06_main.jpg",
        category:"프라이팬"
    },
]

const slideData = [
    {
        id:7,
        title: "올인원 304스텐 통5중 18cm 스마트쿡",
        subtitle:" 냄비 / 찜기  / 채반 / 뚜껑 모두 한번에 스마트하게",
        price:105000,
        link:"/product/07",
        img:"/slider_01.jpg",
        category:"세트"
    },
    {
        id:8,
        title: "쉐프윈 316스텐 통5중 사각 그리들팬 세트(뚜껑포함)",
        subtitle:"언제나 스타일 리쉬하게",
        price:239000,
        link:"/product/08",
        img:"/slider_02.jpg",
        category:"냄비"
    },
    {
        id:9,
        title: "쉐프윈 316스텐 통5중 커퍼코어 22cm 쏘테후라이팬",
        subtitle:"최고급 316 스테인리스를 사용한 명품 프라이팬",
        price:159000,
        link:"/product/09",
        img:"/slider_03.jpg",
        category:"프라이팬"
    },
]

const SlideSection = styled.section`
    width: 100%;
    overflow:hidden;
`;
const OneSection = styled.section`
    width: 100%;
`;
const TwoSection = styled.section`
    width: 100%;
    display:flex;
    flex-flow: row nowrap;
    & > div {
        width:50%;
    }
    @media (max-width: 1200px) {
        flex-flow: column nowrap;
        & > div {
            width:100%;
        }   
    }
`;
const ThreeSection = styled.section`
    width: 100%;
    display:flex;
    flex-flow: row nowrap;
    & > div {
        width:33.3%;
    }
    @media (max-width: 1200px) {
        flex-flow: column nowrap;
        & > div {
            width:100%;
        }   
    }
`;

const MainPage = () => {
    return (
        <>
        <SlideSection>
            <MainSlider items={slideData}/>
        </SlideSection>
        <OneSection>
            <MainList item={data[0]} isOne={true} />
        </OneSection>
        <TwoSection>
            <MainList item={data[1]} isOne={false} />
            <MainList item={data[2]} isOne={false} />
        </TwoSection>
        <ThreeSection>
            <MainList item={data[3]} isOne={false} />
            <MainList item={data[4]} isOne={false} />
            <MainList item={data[5]} isOne={false} />
        </ThreeSection>
        </>
    )
}

export default MainPage;