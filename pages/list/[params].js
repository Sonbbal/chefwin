import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ListItem from '../../components/ListItem';
import styled from 'styled-components';

const data = [
    {
        id:10,
        title:"쌍떼몽 316스텐 통5중 커퍼코어 24양수냄비",
        subtitle:"*완벽* 최고급 스테인리스 냄비",
        price:419000,
        src:"/product/10",
        img:"/list_01.jpg",
        category:"냄비"
    },
    {
        id:11,
        title:"쌍떼몽 316스텐 통5중 커퍼코어 24전골냄비",
        subtitle:"*완벽* 최고급 스테인리스 냄비",
        price:374000,
        src:"/product/11",
        img:"/list_02.jpg",
        category:"냄비"
    },
    {
        id:12,
        title:"오리지날 통5중 스텐 16편수",
        subtitle:"라면용 최강 냄비",
        price:97000,
        src:"/product/12",
        img:"/list_03.jpg",
        category:"냄비"
    },
    {
        id:13,
        title:"쉐프윈 316스텐 통5중 사각 그리들팬 세트(뚜껑포함)",
        subtitle:"예쁜 사각 냄비",
        price:239000,
        src:"/product/13",
        img:"/list_04.jpg",
        category:"냄비"
    }
]

const PageTitle = styled.h3`
    text-align: center;
    margin: 10px auto 30px;
    font-size: 40px; 
    color: #555;
`;

const List = () => {
    const router = useRouter();
    const {params} = router.query;
    return (
        <Layout>
            <section>
                <PageTitle>{params}</PageTitle>
                
                {
                    data.map(
                        item => <ListItem item={item} key={item.id} />
                    )
                }
            </section>
        </Layout>
    )
}

export default List;