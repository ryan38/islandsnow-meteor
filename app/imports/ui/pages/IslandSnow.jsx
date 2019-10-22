import React from 'react';
import TopMenu from '../components/TopMenu';
import IslandSnowLogo from '../components/islandSnowLogo';
import middleMenu from '../components/middleMenu';
import fullWidthImage from '../components/fullWidthImage';
import footerMenu from '../components/footerMenu';

export default class IslandSnow extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <middleMenu/>
          <fullWidthImage/>
          <footerMenu/>
        </div>
    )
  }
}
