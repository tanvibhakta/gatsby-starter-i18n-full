import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import LangLink from './langlink';
import { Consumer } from '../context/createContext';

const LangSwitcher = () => (
    <StaticQuery query={graphql`
      {
        site {
          siteMetadata {
            languages
          }
        }
      }
    `} 
    render={data => (
      <div>
        {data.site.siteMetadata.languages.map((lang) => (
          <>
            <LangLink lang={lang} to={window.location.pathname}>{lang}</LangLink>
            <Consumer>
              {({ langList }) => {
                var temp = langList.push({lang})
              }}
            </Consumer>
          </>
         ))}
      </div>
    )}
    />
)

export default LangSwitcher