import React from 'react';
import _ from 'lodash';

export default class Skills extends React.Component {
    render() {
        return (
            <div className="skills-wrapper">
                <ul className="skills-list">
                    {_.map(_.get(this.props, 'pageContext.site.data.skills.core_skills'), (skill, id) => (
                    skill && 
                        <li className="skill-item" key={id}>
                            <span className="skill-progress">{_.get(skill, 'title')}</span>
                        </li>
                    ))}
                </ul>
          </div>
        );
    }
}
