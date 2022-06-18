/** Dependencies */
import * as React from 'react';

import CustomComponent from '../customcomponent';
import Container from './components/container';
import NavBar from './components/navbar';
import {AppContainerProps} from './appcontainer.interfaces';
import Footer from './components/footer';

const AppContainer: React.FC<AppContainerProps> = ({leftSideNav, content}) => (
  <CustomComponent>
    <NavBar />
    <Container leftSideNav={leftSideNav} content={content}/>
    <Footer />
  </CustomComponent>
);

export default AppContainer;
