import React from 'react';
import _ from 'lodash';

export default class Skills extends React.Component {
    render() {
        return (
            <div className="social-links">
                <h2>Skills</h2>
                {_.map(_.get(this.props, 'pageContext.site.data.skills.core_skills'), (skill, id) => (
                skill && 
                    <div key={id}>
                        {_.get(skill, 'title')}
                    </div>
                ))}
          </div>
        );
    }
}
