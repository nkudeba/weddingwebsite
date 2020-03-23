import {string} from 'prop-types';
import React from 'react';
import SStyle from "./site.module.scss"

const PageTitle = ({title}) => (
  <h1 className={SStyle.pageTitle}>
    {title}
  </h1>
);

PageTitle.propTypes = {
  title: string,
};

export default PageTitle;
  