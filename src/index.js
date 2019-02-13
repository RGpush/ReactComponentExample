import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are your sure?
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author = "Rahul"
                           msg = "Hey try this..."
                           timeAgo="Today at 6:00PM"
                           img = {faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root') );