import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import banner from '../static/images/banner_1.png';
import { useRouter } from 'next/router';

const bannerObj = {
  img: banner,
  title: '회사개요',
  text:
    '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획	개발, 출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
};

const Company = () => {
  const router = useRouter();
  console.log(router);
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Banner
          img={bannerObj.img}
          title={bannerObj.title}
          text={bannerObj.text}
        ></Banner>
        <div className='company_container'>
          <div className='company_box'>
            <div className='text_wrapper'>
              <h1>
                No.1 Platform
                <br />
                Service Provider
              </h1>
              <span>
                비지니스 채널은 국내 화장품 업계 최초의 ODM 기업입니다.
              </span>
              <p>
                우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획,
                개발, 출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다.
                브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수
                있도록 지원합니다.
              </p>
            </div>
            <div className='img_wrapper'>
              <div className='img_area'></div>
            </div>
          </div>
          <div className='company_box'>
            <div className='text_wrapper'>
              <h1>
                No.1 Platform
                <br />
                Service Provider
              </h1>
              <span>
                비지니스 채널은 국내 화장품 업계 최초의 ODM 기업입니다.
              </span>
              <p>
                우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획,
                개발, 출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다.
                브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수
                있도록 지원합니다.
              </p>
            </div>
            <div className='img_wrapper'>
              <div className='img_area'></div>
            </div>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Company;
