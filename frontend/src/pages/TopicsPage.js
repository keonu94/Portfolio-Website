import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav class="local">
                <a href="#servers">Web Servers</a>
                <a href="#design">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#favicon">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#java">Javascript</a>
            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                <p>In the context of <strong>websites and servers</strong>, an <strong>index</strong> normally represents the homepage for either platform. The index.html file, in particular,
                is often utilized as the homepage on web servers. When looking at a web application's root directory, the index.html file is typically  
                the homepage of that application as well. For example, the OSU Engineering server software utilizes the name “index”, for its homepage 
                on the Apache web server. Another example, that is a bit different, would be Microsoft's .Net platform. This platform allows default.html to be used 
                as a homepage.</p>
                <p>The file on the web server had many of the same details, along with a few more pieces of information. The <strong>method request</strong> type was GET, 
                which is a request to retrieve or read a resource. This request was successful, as the <strong>status code</strong> read “200 OK”, and the web page loaded properly. 
                The <strong>header response</strong> contained the content type, which was text/html, and the date. There was also a body section, containing the same text found 
                on the webpage. Despite the many similarities, there are a few noticeable differences found on the web server copy of the file. 
                A <strong>favicon.ico</strong> file can now be seen. A matching remote address can also be found on all files. The main.css and main.js files now have a 404 status code, 
                and the favicon.ico file has a 200 status code.</p>
                <p>The favicon.ico returns the 200 status code, because the resource was found and can be seen as the OSU icon
                on the tab of the <strong>URL</strong>. This is due to the file being viewed from an OSU server. Due to the main.css and main.js files not 
                using any resources in the HTML file, the 404 status code was returned.</p>
                <p>The scheme the server's URL is <strong>HTTPS</strong>. The URL contains two subdomains, which are web and engr. The host domain is oregonstate.edu.
                The path of the URL is /~whitejo4/a1-whitejo4/. </p>
            </article>
            <article id="design">
                <h3>Frontend Design</h3>
                <p>The <strong>frontend design</strong> is in reference to the visual design of a website or app. This also includes the graphical user interface, and how the user
                    experiences the website or app. Things like illustration scheme, color scheme, and navigation systems directly impact the frontend design as well.</p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>The user is assisted with meeting their goals, by being provided things, like accurate results.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>The user is able to quickly perform their tasks.</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>The user is able to locate their goal without much effort.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>Users with different needs, experience no road blocks when traversing the website or app.</dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>The user is enticed to visit the website or app again, due to their needs being.</dd>
                </dl>
                <p><strong>Page layout tags</strong> help break up content. This assists with the flow of the page, and can help machines understand where certain components are located. Prior 
                    to HTML 5 releasing new names for page layout tags, <strong>division blocks</strong> were heavily used by developers. Now a page normally includes a <strong>header, nav, main, 
                    section of articles, and footer tags.</strong> A header can be described as a banner for a page, and is typically at the top of the website. A header can include a logo, name, 
                    publisher, and slogan. The nav block, is a group of navigation links for the page. The main block, denotes the type of content represented in the body of the page. The section
                    block groups similar content based on theme. An article can be used inside of a section to denote a particular topic. Lastly, a footer block contains information pertaining to 
                    important links, contact, and legal info. Each of these layout blocks previously described, denote a component that is read by machines and search engine robots.</p>
                <ol>
                    <li>An <strong>anchor</strong> links to <strong>external content</strong> by referencing a URL with the href attribute inside the opening anchor. A description is then provided between the opening 
                        and closing anchor, that will become a hyperlink to the URL.</li>
                    <li>An anchor links to <strong>internal content</strong> by referencing IDs from the same page, with the href attribute. As long as a prior tag has an attribute, it can be referenced 
                        by using the ID, along with a hashtag inside the opening anchor. A description can then be given between the opening and closing anchor, which will become a hyperlink. </li>
                    <li>An anchor can link from <strong>page to page</strong> by referencing another page's file name with the href attribute. This will get referenced in the opening anchor. A description is then
                        provided between the opening and closing anchor, that will also become a hyperlink to the file referenced.</li>
                </ol>
            </article>
            <article id="images">
                <h3>Optimizing Images</h3>
                <p>
                    The six major specifications of images are <strong>descriptive file names, small file sizes, exact dimensions, correct file format, reduced resolution, and color mode</strong>. Descriptive file names improve SEO 
                    by allowing search engines bots to organize more efficiently, which helps the user when searching for an image. Small file sizes allow for faster load times for the user. Having exact dimensions
                    are important, because it can affect the load time of an image. Correct file formats are needed because not all images are the same. Photos and logos are an example of this. 
                    Photos are normally in a <strong>JPG</strong> format, while a logo is normally in a <strong>PNG</strong> format. JPG and <strong>WebP</strong> formats are used for photographic images because of how the files compress down into small, rectangular 
                    sizes. The PNG format is good for line art because it doesn't distort when used with a variety of colors. This is due to the format having true transparency. SVG file formats can also be used for line art, because it is able 
                    to scale a graphic up or down without compromising quality. Reduced resolution involves providing more image sizes for different monitors. This helps because content will be viewed from different users, using different hardware. 
                    Color mode directly impacts how a user experiences the content. An example of this is using poor color combinations, making it harder to read a page. </p>
            </article>
            <article id="favicon">
                <h3>Favicons</h3>
                <p>Browsers and devices utilize favicons to identify the website, in the form of an icon. Different file formats are used due to compatibility differences between browsers and devices. Older browsers, like Internet Explorer,
                   have utilized the <strong>ICO</strong> format. The most common formats currently used are PNG and <strong>SVG</strong> formats. When viewing a web page through a browser, a favicon can normally be seen on the webpage tab.
                   When using a smartphone application, the favicon is being utilized as the logo of that application.
                </p>
            </article>
            <article id="css">
                <h3>Cascading Stylesheets</h3>
                <p>There are many reasons to incorporate <strong>CSS</strong> in websites and apps. One of the most important, is creating a better experience for the user. This involves making improvements to the readability, legibility, 
                    and usability of the website or app. Another important reason to use CSS is to follow requirements for a brand.</p>
                <p>The five ways to incorporate styles include <strong>External, Embedded, Inline, JavaScript with template literals, and JavaScript with DOM</strong>. Linking styles externally is the most efficient way to incorporate
                style into an app or website, because it is applied globally. Embedded and inline styles are good for unique situations, that might require a style change for one aspect of the website or app. Incorporating styles with 
                JavaScript doesn't normally apply style changes globally either, and is also used for unique situations.</p>
            </article>
            <article id="java">
                <h3>JavaScript</h3>
                <p><strong>JavaScript</strong> has six data types. The data types are <strong>number, boolean values, string, special values, and an object</strong>.</p>
                <p>Objects house sets of name and value pairs, that contain properties. <strong>CRUD</strong> can be utilized to manipulate the properties of an object. This 
                includes creating, updating, reading, or deleting a property in an object. <strong>Arrays</strong> are objects consisting of string data types. The string properties
                in an array are named based on index position, like “0”, “1”, “2”, etc. This allows values to be accessed with zero based indexing. Certain index positions of the array can also
                be manipulated with <strong>push</strong> and <strong>pop</strong> methods. Push will add elements to the end of an array, while pop removes and returns the last element in 
                the array. The <strong>length</strong> method can also be used to count how many elements are in an array. <strong>JSON</strong> is a format that stands for JavaScript Object 
                Notation. This format can be used between multiple languages, despite its name. This can be done by mapping an object to a string using JSON. After this string is created,
                it can then be created back into another object for a different type of program language.</p>
                <p><strong>Conditionals</strong> are used for branching in JavaScript. 
                This involves if and else statements, that will execute a branch of code if a condition is met. <strong>Equality</strong> and <strong>boolean</strong> operators are heavily used with conditionals to monitor for particular conditions. 
                The equality operators include <strong>equal, not equal, strict equal, strict not equal, greater than, greater than or equal, less than, and less than or equal</strong>. The boolean operator 
                values are <strong>True</strong> and <strong>False</strong>. <strong>Loops</strong> are used to execute a program a certain number of times. There are various types of loops that will execute differently. Normally, all loops continue 
                to execute part of a program until a condition is met. This involves iterating over an iterable object, like an array. The different types of loops include while, for, for of, and for in loops.</p>
                <p><strong>Object-oriented programming</strong> is a concept related to objects having an identity, state, and behavior. An object's identity is unique, making different objects distinct from one another. An example
                    of this would be two objects sharing the same property, like company, but both have a different value or company name for that property. The property characteristics of an object, like the company property previously
                    mentioned in the last example, is in relation to its state.  The behavior of an object is in relation to the methods used inside the object. 
                    These methods are normally stored as a value for a property inside the object. <strong>Prototype</strong> objects can be used to create more objects in JavaScript. This involves collecting common properties from other objects.</p>    
                <p><strong>Functional programming</strong> involves utilizing the flexibility of functions efficiently. This could be assigning a function to a variable, a function receiving another function as an argument, or a function 
                returning another function. </p> 
            </article>
            </>
                            );
                                        }

export default TopicsPage;