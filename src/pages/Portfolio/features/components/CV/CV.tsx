import React from 'react'
import { useEffect } from 'react';

import './CV.scss'
import { ClassNames, ElementId, recursiveToAddClassNameWith } from '../../../common/function/functions';
import HeaderCv from './HeaderCv/HeaderCv';
import ContactCv from './ContactCv/ContactCv';
import ExperienceCv from './ExperienceCv/ExperienceCv';
import PersonalOverviewCv from './PersonalOverviewCv/PersonalOverviewCv';


function CV(props) {
  let classNames = "";
  if (props.classNames) {
    classNames = props.classNames
  }

  useEffect(() => {
    recursiveToAddClassNameWith(ElementId.CV, ClassNames.noClose)
  }, [])

  return (
    <div id={ElementId.CV} className={classNames}>
        <div className="cv__header"><HeaderCv /></div>
        <div className="cv__contact"><ContactCv /></div>
        <div className="cv__experience"><ExperienceCv /></div>
        <div className="cv__personal-overview"><PersonalOverviewCv /></div>
    </div>
  )
}

export default CV