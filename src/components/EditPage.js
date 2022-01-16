import React from 'react';
import {useParams} from 'react-router-dom';

const EditPage =() => (
    <div>
        <p> This is the edit page component with an ID passed in the query params </p>
        <p> The passed id is: {useParams().id} </p>
    </div>
);

export default EditPage;