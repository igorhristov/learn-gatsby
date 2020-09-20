import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import astronaut from '../../images/gatsby-astronaut.png';

import Layout from '../../components/layout2';

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
`;

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  margin: 0;
`;

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`;

const Username = styled.div`
  margin: 0 0 12px 0;
`;

const Excerpt = styled.p`
  margin: 0;
`;

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
);

const Team = () => {
  return (
    <Layout>
      <div>
        <h1>Info about Styled component</h1>

        <User
          username="Igor Hristov"
          avatar={astronaut}
          excerpt="Full-stack web developer. Founder of some website.com"
        />

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose injected humour and the like.
        </p>

        <Link to="/">Go back to homepage</Link>
      </div>
    </Layout>
  );
};

export default Team;
