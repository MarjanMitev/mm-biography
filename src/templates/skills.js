import React from 'react';
import _ from 'lodash';

import {Layout, Skills} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Skills extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post page post-full">
                <Skills {...this.props} />
              </article>
            </Layout>
        );
    }
}
