import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';

const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/api/linkResolver');

registerLinkResolver(linkResolver);

export const onServiceWorkerUpdateReady = () => window.location.reload(true);

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
