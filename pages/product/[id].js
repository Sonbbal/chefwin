import {useRouter} from 'next/router';
import Layout from '../../components/Layout';
import ProductPage from '../../components/Product';

const data = [
    {
        id:10,
        title:"쌍떼몽 316스텐 통5중 커퍼코어 24양수냄비",
        subtitle:"*완벽* 최고급 스테인리스 냄비",
        price:419000,
        src:"/product/10",
        img:"/list_10.jpg",
        category:"냄비",
        detailImg:"/detail_10.jpg"
    },
    {
        id:11,
        title:"쌍떼몽 316스텐 통5중 커퍼코어 24전골냄비",
        subtitle:"*완벽* 최고급 스테인리스 냄비",
        price:374000,
        src:"/product/11",
        img:"/list_11.jpg",
        category:"냄비",
        detailImg:"/detail_11.jpg"
    },
    {
        id:12,
        title:"오리지날 통5중 스텐 16편수",
        subtitle:"라면용 최강 냄비",
        price:97000,
        src:"/product/12",
        img:"/list_12.jpg",
        category:"냄비",
        detailImg:"/detail_12.jpg"
    },
    {
        id:13,
        title:"쉐프윈 316스텐 통5중 사각 그리들팬 세트(뚜껑포함)",
        subtitle:"예쁜 사각 냄비",
        price:239000,
        src:"/product/13",
        img:"/list_13.jpg",
        category:"냄비",
        detailImg:"/detail_13.jpg"
    }
]

const Product = () => {
    const router = useRouter();
    const {id} = router.query;
    const item = data.find( data => data.id === Number(id));
    
    return (
        <Layout>
            {
                item ?  <ProductPage item={item} notFind={false}/>: <ProductPage notFind={true}/>
            }
        </Layout>
    )
}

export default Product;