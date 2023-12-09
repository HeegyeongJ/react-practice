import React from 'react';

const NewsIdPage = ({params, searchParams}) => { //params로 id 값 받아오기
    console.log(params.id) 
    console.log(searchParams)
    return (
        <div>
            Hello {params.id}
            Hello {searchParams.text}
        </div>
    );
};

export default NewsIdPage;