import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import GeneDisplayContainer from '../components/GeneDisplay/GeneDisplayContainer';
const { Header, Content } = Layout;

const Home = () => {
    const [selectedMenu, setSelectedMenu] = useState('gene')
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

    return (
        <Layout style={{minHeight: '100vh'}}>
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={selectedMenu}
              onSelect={(menuItem) => setSelectedMenu(menuItem.key)}
              items={[
                {label: 'Gene Expressions', title: 'Genes', key: 'gene'},
                {label: 'Anomaly Detection', title: 'Outliers', key: 'outlier'}
              ]}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            />
          </Header>
          <Content
            style={{
              padding: '48px',
            }}
          >
            <div
              style={{
                background: colorBgContainer,
                height: 'auto',
                padding: 24,
                borderRadius: borderRadiusLG,
              }}
            >
              {
                selectedMenu === 'gene' 
                    ? <GeneDisplayContainer /> 
                    : <span>anomaly</span>
              }
            </div>
          </Content>
        </Layout>
      );
};

export default Home;