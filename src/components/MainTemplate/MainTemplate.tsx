import React, { ReactNode } from 'react';
import { Content, Wrapper } from './MainTemplate.styled';
import { TopBar } from '../TopBar';
import { PageContainer } from '../PageContainer/PageContainer';
import { SideBar } from '../SideBar';

interface IMainTemplateProps {
  children: ReactNode;
}

export const MainTemplate: React.FC<IMainTemplateProps> = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        <SideBar />
        <PageContainer>
          <TopBar />
          {children}
        </PageContainer>
      </Content>
    </Wrapper>
  );
};
