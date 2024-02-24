import { Col, Row } from 'antd'
import React from 'react'
import mainLogo from '../../assets/logo.svg'
import paymentMethod from '../../assets/payment-method.svg'
import Title from 'antd/es/typography/Title'
import { useSelector } from 'react-redux'
import FooterMenuItems from './FooterMenuItems'

const Footer = () => {
  const footer_menu = useSelector((state) => state.headerData.footerMenu);
  const footer_category = useSelector((state) => state.headerData.footerCategory);
  return (

    <div className="bg-dark text-white py-3">
      <div className="commonContainerFluid">
        <Row gutter={16} className='mb-3'>
          <Col xs={24} sm={12} lg={12} xl={8}>
            <a href="/">
              <img src={mainLogo} className="logo" alt="logo" height={32} />
            </a>
          </Col>
          <Col xs={24} sm={12} lg={12} xl={4}>
            <Title level={4} className='text-white mb-3'>Categories</Title>
            <ul className="footerList">
              {footer_category.map((e, i) => {
                return <li key={i}>
                  <a href={e.slug}>{e.name} </a>
                </li>;
              })}
            </ul>
          </Col>
          {footer_menu.map((e) => {
            return <FooterMenuItems data={e} />;
          })}
        </Row>
        <Row gutter={16}>
          <Col xs={24} lg={12} className='footer_links text-center text-lg-start'>
            <a href="/page/about-us">About Us</a> |
            <a href="/page/privacy-policy">Privacy Policy</a> |
            <a href="/page/refund-policy">Refund Policy</a> |
            <a href="/page/terms-of-use">Terms of Use</a> |
            <a href="/page/disclaimer">Disclaimer</a>
          </Col>
          <Col xs={24} lg={12} className=" text-center text-lg-end">
            <img src={paymentMethod} alt="payment Method" height={18} />
          </Col>
        </Row>
        <hr className='my-3' />
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} className="text-center text-lg-start">© All Copyrights Reserved by <a href="/" className="text-gray">BLACK DAWG APPARELS</a></Col>
          <Col xs={24} sm={24} md={12} className="text-center text-lg-end"><a href="https://www.nikitha.com/ecommerce-website-development.php" target="_blank" className="text-gray">Ecommerce Development</a> : <a href="https://www.nikitha.com/nikitha-web-development-company.php" target="_blank" className="text-gray">Nikitha.com</a></Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer