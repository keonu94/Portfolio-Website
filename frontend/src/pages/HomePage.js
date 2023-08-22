import React from 'react';

function HomePage() {
    return (
        <>
        <h2>About</h2>
        <article>
            <p>
            Hello, my name is Joshua White and this is my portfolio project. I'm still exploring career options, but currently have a
            strong interest in data science. This is primarily due to my economics background and current job as a fraud prevention analyst. 
            </p>
        </article>
        <article></article>
        <p>
            <ul>
                <li>This portfolio project was created using <strong>MongoDB, Express, React, and Node.</strong></li>
                <li>The backend is created using Express and Node that enables CRUD operations using a restful <strong>API</strong>. These operations
                    are used to manipulation a collection of data housed inside MongoDB database.</li>
                <li>The frontend is created using React, which utilizes component trees to indirectly manipulate the DOM tree.</li>
                <li>These technologies helped create a full stack single page application, using the <strong>MVC</strong> design pattern 
                    to decompose the app into maintainable layers. </li>
            </ul>

        </p>
        </>
        );
    }
export default HomePage