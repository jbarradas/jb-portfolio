import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import site1 from 'assets/thumbnail/site1.png';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  // const {
  //   github: {
  //     viewer: {
  //       repositories: { edges },
  //     },
  //   },
  // } = useStaticQuery(
  //   graphql`
  //     {
  //       github {
  //         viewer {
  //           repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
  //             edges {
  //               node {
  //                 id
  //                 name
  //                 url
  //                 description
  //                 stargazers {
  //                   totalCount
  //                 }
  //                 forkCount
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  const edges = [
    {
      node: {
        id: 1,
        name: 'project 1',
        url: 'http://project1',
        description: 'project description',
        stargazers: {
          totalCount: 18,
        },
        forkCount: 35,
      },
    },
    {
      node: {
        id: 2,
        name: 'project 2',
        url: 'http://project2',
        description: 'project2 description',
        stargazers: {
          totalCount: 18,
        },
        forkCount: 35,
      },
    },
    {
      node: {
        id: 1,
        name: 'project 1',
        url: 'http://project1',
        description: 'project description',
        stargazers: {
          totalCount: 18,
        },
        forkCount: 35,
      },
    },
    {
      node: {
        id: 2,
        name: 'project 2',
        url: 'http://project2',
        description: 'project2 description',
        stargazers: {
          totalCount: 18,
        },
        forkCount: 35,
      },
    },
    {
      node: {
        id: 1,
        name: 'project 1',
        url: 'http://project1',
        description: 'project description',
        stargazers: {
          totalCount: 18,
        },
        forkCount: 35,
      },
    },
  ];
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <img src={site1} alt="site1" />
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === 'light' ? '#000' : '#fff'} />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <Fork color={theme === 'light' ? '#000' : '#fff'} />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
