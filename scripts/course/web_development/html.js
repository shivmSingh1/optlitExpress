import {
  handleTabSwitching,
  renderChapters,
  setChapterLinkListeners,
} from "/minorProject/modules/chapterModule.js";

// Define arrays for each chapter's content type
const chapters = [
  {
    title: "Chapter 1: Introduction to HTML",
    content: `<h1>The Internet
</h1>
<p>Web pages are digital documents that make up the internet.</p>
<p>How are these digital documents written ? Web pages are written using HTML (Hypertext Markup Language), the
    fundamental markup language for structuring web content, and styled with CSS (Cascading Style Sheets) to make it
    look nice.
</p>
<p>
    There are billions of web pages on the internet, covering everything from news and entertainment to education and
    shopping. Before we jump into computers and HTML, let's start with some important basics about the web.

</p>
<h2>Key Layers of the Internet</h2>
<h3>Content</h3>
<p>
    Content on the web includes everything from this article and cute Instagram photos to hilarious YouTube videos to
    viral memes and those addictive cat GIFs. Basically, if it's something you can read, watch, or listen to online,
    it's content.</p>
<h3>

    Search Engine</h3>
<p>
    A search engine is a web-based tool that enables users to discover information on the internet. Examples include
    Google, Bing, and Yahoo. Users enter queries, and the search engine returns relevant results from its indexed
    database of web pages.</p>
<h3>

    Web Browser</h3>
<p>
    A web browser is a software application used to access and navigate the web. Popular examples include Google Chrome,
    Mozilla Firefox, and Safari. Browsers interpret and display web content, allowing users to interact with websites
    and online services.</p>
<h3>The World Wide Web (WWW)</h3>
<p>
    The World Wide Web, commonly referred to as the web, is a subset of the internet. It consists of interconnected web
    pages and multimedia content accessible through the internet.</p>
<h3>

    The Internet</h3>
<p>
    The internet is a global network connecting millions of computers and devices worldwide. It facilitates
    communication, data sharing, and access to resources across vast distances.</p>
<h2>Client-Server Communication
</h2>
<p>All machines on the internet can be categorized into two types: Clients and Servers.
</p>
<p>Servers are machines that provide services to other machines. These services can include hosting websites, storing
    files, delivering emails, managing databases, and more.</p>
<ul>
    <li>Depending on the service a server provides it can be -</li>
    <li>web server, showing websites,</li>
    <li>
        a file server for storing files,</li>
    <li>
        an email server handling emails,</li>
    <li>
        a database server managing lots of information.</li>
</ul>
<p>On the other hand, a client is a computer hardware or software device that utilizes the services provided by servers.
    This means that clients make requests to servers for specific services, such as loading web pages, sending and
    receiving emails, or downloading files.</p>
<h2>
    History of HTML
</h2>
<p>
    Back in the late 1980s, a scientist named Tim Berners-Lee wanted to create a way for scientists to share information
    and collaborate more easily. He started working on his idea and built a special language for web pages.</p>
<h2>

    The timeline of HTML</h2>
<p>
    In 1990, he created the first web browser and server, the tools for exploring and sharing information. He also
    developed the first version of HTML (Hypertext Markup Language), which is the language used to create web pages. In
    1991 he decided to share his creation with the world. From there, the web exploded! People built websites and shared
    everything from pictures to stories to cat videos. To keep things organized, Tim and others worked on common rules
    and standards. Colorful browsers like Mosaic made the web even more user-friendly, paving the way for the modern
    browsers we use today. And so, the web became the giant, ever-growing resource we know today, connecting people and
    information from all over the world.</p>
<h3>Birth of HTML</h3>
<p>
    HTML, which stands for Hypertext Markup Language, was created by Tim Berners-Lee in the late 1980s. It was
    originally conceived as a simple markup language for sharing and formatting documents on the internet. Berners-Lee
    developed the first version of HTML, inspired by an existing markup language called SGML. He also wrote the first
    web browser and server software during this time.</p>
<h3>

    HTML 1.0</h3>
<p>
    The first official version of HTML, known as HTML 1.0, was published in 1993. It provided basic tags for structuring
    web pages, such as &lt;h1> for headings and &lt;p> for paragraphs. HTML 1.0 had only limited set of tags for
    headings,
    paragraphs, lists, and basic formatting. There were no tags for things like bold or italics, so web pages
    could only display text in a single font and style. Also HTML 1.0 had no support for images, tables, or
    forms. These are all essential parts of web pages today, but they weren't supported in HTML 1.0</p>
<h3>HTML 2.0</h3>
<p>
    HTML 2.0 was released in 1995 and introduced new features like tables and forms, allowing for more complex layouts
    and interactive elements on web pages. While not fully standardized yet, HTML 2.0 paved the way for embedding images
    and other multimedia elements within web pages.
</p>
<h3>
    HTML 3.2 / 4.01</h3>
<p>
    HTML 3.2, released in 1997, further expanded the capabilities of HTML with features like frames and style sheets.
    Frames allowed web pages to be divided into sections, each with its own independent scrollbar and content. HTML
    4.01, released in 1999, added support for scripting languages like JavaScript and introduced stricter rules for
    markup. HTML 4.01 introduced new tags and attributes to improve accessibility for users with disabilities. This
    included features to describe images and provide alternative text for screen readers.</p>
<h3>XHTML 1.0</h3>
<p>
    XHTML, or Extensible Hypertext Markup Language, was introduced in 2000 as a reformulation of HTML as an XML
    application. It aimed to make HTML more compatible with XML syntax and stricter in its rules.
</p>
<h3>
    HTML5</h3>
<p>
    HTML5, released in 2014, represented a major overhaul of the HTML language. It introduced new semantic elements like
    &lt;header>, &lt;footer>, and &lt;nav>, as well as multimedia elements like &lt;video> and &lt;audio>. HTML5 also
    brought
    improvements in accessibility, performance, and compatibility with mobile devices.
</p>
<h3>
    Living Standard</h3>
<p>
    Instead of releasing new versions, HTML is now maintained as a "living standard" by the World
    Wide Web Consortium (W3C) and the Web Hypertext Application Technology Working Group (WHATWG).
    This means that the language is continually updated and improved based on community feedback and
    technological advancements.</p>
    `,
    code: ``,
  },
  {
    title: "Chapter 2:Understanding HTML ",
    content: `<h1>Elements, Tags and Attributes</h1>
<p>
    HTML elements define the structure of web content, tags enclose elements, and attributes provide additional
    information.
</p>
<p>
    We already talked a little about elements in our previous article, HTML elements play a crucial role in structuring
    and organizing content on a web page. But did you know that these elements can be categorized into different types
    based on how they are displayed?
</p>
<h2>
    Two primary categories of HTML elements</h2>
<h3>Block-level elements</h3>
<ul>
    <li>
        These HTML elements start on a new line and occupy the full width available.</li>
    <li>
        Examples include &lt;p> for paragraphs, &lt;h1> to &lt;h6> for headings, and &lt;img> for images.</li>
    <li>
        They stack vertically, one below the other, creating distinct blocks of content on a webpage.</li>
</ul>
<h3>Inline elements</h3>
<ul>
    <li>
        Inline HTML elements only occupy the space needed for their content and do not force a new line before or after.
    </li>
    <li>
        Examples include &lt;span> for generic inline content, &lt;a> for links, and &lt;strong> for bold text.</li>
    <li>
        They can flow alongside other inline elements within a line of text.</li>
</ul>
<h2>HTML Tags and Attributes</h2>
<p>HTML tags mark the beginning and end of an element (and are considered part of the element). Tags are containers.
    They tell you something about the content between the opening & closing tags.
</p>
<p>
    Attributes provide additional information about HTML elements. Each tag has its own special attribute for example
    class, id, style, lang and type.
</p>
<ul>
    <li>
        Attributes are positioned inside the opening tag, before the right bracket.</li>
    <li>
        Values are assigned to attributes and they must be contained inside quotation marks.
    </li>
    <li> Attributes are selected from a pre-defined set of possible attributes depending on the element.
    </li>
</ul>
<h3>Let's look at few examples of HTML attributes</h3>
<ol>
    <li>
        class: Assigns one or more class names to an HTML element. Classes are used for styling multiple elements with
        the same properties.
        <pre>
        <code>
            &lt;div class="container">
                <!-- Your content goes here-->
            &lt;/div>
        </code>
    </pre>
    </li>

    <li> id : Provides a unique identifier for an HTML element. IDs are often used for styling or JavaScript purposes.
        <pre>
            <code>
             &lt;p id="paragraph1">This is a paragraph.&lt;/p>
            </code>
        </pre>
    </li>
    <li>src: Specifies the URL of the resource (usually an image or video) to be embedded in an HTML document.
        <pre>
            <code>
             &lt;img src="image.jpg" alt="Description">
            </code>
        </pre>
    </li>
    <li>href: Specifies the URL of the link in an anchor (&lt;a>) tag.
        <pre>
            <code>
             &lt;a href="https://www.thecodehelp.in/">Crack the Code to Success with CodeHelp&lt;/a>
            </code>
        </pre>
    </li>
</ol>
<h2>HTML Document Structure</h2>
<p>
    An HTML document serves as the backbone of a webpage, providing the structural framework for content presentation on
    the internet.
</p>
<h3>
    HTML document example</h3>
<pre>
    <code>     
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
          &lt;meta charset="utf-8" /&gt;
          &lt;title&gt;This is an HTML document&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
          &lt;h1&gt;Welcome to codehelp !&lt;/h1&gt;
          &lt;p&gt;This is your first step to success&lt;/p&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
</pre>
<ol>
    <li>
        &lt;!DOCTYPE html> : This is a document type declaration, which informs the web browser that the document is
        written in HTML5, the latest version of HTML.
    </li>
    <li>

        &lt;html lang="en"> : The html element. It is the opening tag for the HTML document. The html element wraps all
        the content on the page. The lang="en" attribute specifies that the primary language of the document is English.
    </li>
    <li>
        &lt;head>: This is the head section of the HTML document. It contains metadata about the document, such as
        character encoding, title, stylesheets, scripts, and other important information that that viewers don't
        see.</li>
    <li>
        &lt;meta charset="utf-8" /> : This meta tag specifies the character encoding for the HTML document. So that the
        browser correctly understands and displays text characters.</li>
    <li>
        &lt;title> : The &lt;title> element tells the tittle of the webpage. This title appears in the browser's title
        bar or
        tab.
    </li>
    <li>
        &lt;body> : This is the body section of the HTML document. It contains all the content of the webpage that
        viewers can see like text, images, links, and other multimedia elements.</li>
</ol>
<h3>Entity names and Entity numbers</h3>
<p>
    Entity names or entity numbers can be used to display reserved HTML characters.</p>
<p>

    Entity Names: These are more user-friendly representations of reserved characters. They take the form &entity_name;,
    where "entity_name" is a descriptive word representing the character (e.g., & for the ampersand).
</p>
<p>
    Entity Numbers: For characters without a designated name, or for more obscure symbols, we can use entity numbers.
    These are written in two formats: Decimal: &#decimal_number; (e.g., > for the greater than sign). Hexadecimal:
    &#xhexadecimal_number; (e.g., > for the greater than sign).</p>
<h2>HTML Head</h2>
<p>
    The HTML &lt;head> element is an important part of every HTML document, serving as a container for metadata and
    other important information about the webpage.
</p>
<h3>
    HTML Head Element</h3>
<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;title&gt;Head Tag Example&lt;/title&gt;
            &lt;link rel="stylesheet" href="styles.css"&gt;
            &lt;script src="script.js"&gt;&lt;/script&gt;
            &lt;meta name="author" content="John Doe"&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;p&gt;Hello guys! Happy Learning.&lt;/p&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
</pre>
<p>So, what exactly is this HTML head? Think of it as the brain of a webpage. It holds essential details about the page,
    like its title, special instructions for browsers.
</p>
<ul>
    <li>
        The &lt;head> element in HTML stores metadata about the webpage.</li>
    <li>
        Metadata includes information like the document title, character set, stylesheets, and scripts. Metadata is not
        visible on the webpage itself.</li>
    <li>
        The &lt;head> element is located between the &lt;html> and &lt;body> tags.</li>
    <li>
        It helps browsers and search engines understand and render the webpage correctly.</li>
</ul>
<h3>HTML Title Element</h3>
<pre>
    <code>
        &lt;title>Page Title&lt;/title>
    </code>
</pre>
<p>The &lt;title> element is placed within the &lt;head> section of an HTML document. It specifies the title of the
    webpage, which appears in the browser's title bar or tab.
</p>
<ul>
    <li>
        The title is also displayed in search engine results, bookmark listings, and social media shares.</li>
    <li>
        It should be concise, descriptive, and relevant to the content of the webpage.</li>
    <li>
        A good title can improve search engine optimization (SEO) and attract more visitors to the webpage.</li>
</ul>
<h3>HTML Style Element

</h3>
<pre>
    <code>
            
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
        &lt;head&gt;
            &lt;title&gt;Style Tag Example&lt;/title&gt;
            &lt;style&gt;
                /* CSS styles go here */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                }
                h1 {
                    color: #333;
                }
            &lt;/style&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;h1&gt;Welcome to my website&lt;/h1&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
</pre>
<p>If you look closely in our articles you'll find every code output has a light blue background. But we have not used
    any external CSS here. So how was it done? By using style element
</p>
<ul>
    <li>
        The &lt;style> element is used to define internal styles within an HTML document.</li>
    <li>
        It is placed within the &lt;head> section of the HTML document.</li>
    <li>
        Internal styles specified within the &lt;style> element apply only to the webpage where they are defined.</li>
    <li>
        Styles defined with the &lt;style> element override external stylesheets linked to the webpage.</li>
    <li>
        The syntax within the &lt;style> element follows standard CSS syntax, including selectors, properties, and
        values.</li>
</ul>
<h2>HTML Images</h2>
<p>
    In the beginning, the web only had text, then we learned to add images.

</p>
<p> To put a simple picture on a webpage, we use &lt;img>. It's like a special code. You just need to tell it where the
    picture is (src) and give it a name (alt) in case it can't be shown. That's it!
</p>
<p>
    The &lt;img> element is special (it’s a void element) because it's empty (has no child content) and doesn't need a
    closing tag. It relies on two attributes: src and alt. The src attribute holds the URL of the image you want to show
    on the webpage.
</p>
<h3>
    Now what does alt do then ?</h3>
<p>
    The alt attribute in HTML provides a text description of an image. This is important for accessibility reasons
    because it helps people who cannot see the image (due to slow loading, errors, or visual impairments) to understand
    the image from its description. In short, when an image can't be displayed, the text specified in the alt attribute
    is shown instead. Using the alt attribute is considered good practice for making web content more inclusive and
    user-friendly.</p>
<h3>Width, Height and Title</h3>
<p>
    The width and height attributes tell the dimensions of the image. These attributes are optional but can be used to
    control the size of the image on the webpage.
</p>
<p>
    Other than width, and height you can also add the title to your image.</p>
<pre>
    <code>
        &lt;img src="sunset.jpg" alt="Sunset" title="This is a beautiful sunset">
    </code>
</pre>
<h2>HTML Comments</h2>
<p>
    HTML comments are like hidden messages within your code. They're snippets of text that browsers completely ignore,
    so they won't show up on your webpage.
</p>
<p>
    But why bother with comments? Well, think of them as signposts on your journey through your code. They help you
    remember what each part does, like little reminders. And if someone else wants to read your code, comments make it
    easier for them to follow along. So, whenever you're making your new project, don't forget to add some comments
    along the way. They'll make your coding adventure a whole lot easier!</p>

<pre>
    <code>
        &lt;h1>HTML Comment Example&lt;/h1>
        <!-- This is a simple HTML comment -->
        &lt;p>This paragraph is visible, but the comment above is not.&lt;/p>
    </code>
</pre>
<h3>What is a valid HTML Comment ?</h3>
<p>
    A valid HTML comment follows certain rules to make sure web browsers interpret it correctly. Here are some points on
    how are valid HTML comments :</p>
<ul>
    <li>Opening Tag: HTML comments begin with &lt;!--.
    </li>
    <li>
        Content: The comment can include any text, characters, or markup, except for the closing sequence --&gt;.
    </li>
    <li>
        Closing Tag: HTML comments end with --&gt;.
    </li>
    <li>
        No Nested Comments: HTML comments cannot be nested within each other. Attempting to do so will lead to parsing
        errors.
    </li>
    <li>
        No Comments within Tags: Comments cannot be placed within HTML tags. They must be placed outside of any opening
        and closing tags.
    </li>
    <li>
        No Unclosed Comments: Each opening &lt;!-- must have a corresponding closing --&gt; to form a complete comment.
        Leaving a comment unclosed will result in parsing errors.
    </li>
    <li>
        No Comments within Special Elements: Certain elements, such as
        &lt;script> and &lt; style>, have their own syntax and cannot contain HTML comments.Comments within these
        elements may not function as expected</li>
</ul>
<h2>HTML Tags</h2>
<p>
    HTML (Hypertext Markup Language) uses tags to structure content on web pages. Tags are enclosed in angle brackets <>
        and typically come in pairs: an opening tag and a closing tag.
</p>
<h3>
    What is an HTML tag?</h3>
<p>
    HTML tags mark the beginning and end of an element (and are considered part of the element). Tags are containers.
    They tell you something about the content between the opening & closing tags.
</p>
<h3>HTML &lt;br> tag</h3>
<p>
    The &lt;br> tag in HTML stands for "line break."
</p>
<ul>
    <li>
        It is a self-closing tag which means it has an opening tag but does not have any closing tag.</li>
    <li>
        It is used to insert a line break or a carriage return in a document, without starting a new paragraph.</li>
    <li>
        When the browser encounters a &lt;br> tag, it moves the text following it to a new line.</li>
</ul>
<pre>
    <code>
        
        When the browser encounters a &lt;br> tag, it moves the text following it to a new line.
    </code>
</pre>
<h3>HTML &lt;hr> Tag</h3>
<p>
    The &lt;hr> tag in HTML stands for "horizontal rule."</p>
<ul>
    <li>

        It is again a self-closing tag used to insert a horizontal line.</li>
    <li>
        Unlike the &lt;br> tag, which creates a line break, the &lt;hr> tag draws a visible line to divide sections of
        content.</li>
</ul>
<pre>
    <code>
        &lt;p>This is the first paragraph.&lt;/p>
        &lt;hr>
        &lt;p>This is the second paragraph.&lt;/p>
    </code>
</pre>
<h3>HTML &lt;pre> tag</h3>
<p>
    The &lt;pre> tag in HTML stands for "preformatted text."</p>
<ul>
    <li>
        It is used to preserve the formatting of text exactly as it appears in the HTML code, including spaces, line
        breaks, and tabs.</li>
    <li>
        This tag is particularly useful when you want to display code snippets, ASCII art, or any text that requires
        precise spacing and alignment.</li>

</ul>`,
    code: ` <pre>
            This is an example
            of preformatted text.
            It preserves
            spaces,
            line breaks,
            and tabs.

    </pre>`,
  },
  {
    title: "Chapter 3: HTML & URLS ",
    content: `<h1>HTML and URLs</h1>
<p>
    The World Wide Web is like a huge library filled with information.</p>
<p>

    To make this information easy to find and access, it uses three important tools:
</p>
<ul>
    <li>
        Uniform Naming Scheme: This is like a system of giving every web page an address. Just like every house has its
        address, every web page has its unique address called a URL (Uniform Resource Locator). It's what you type into
        your
        web browser to go to a specific webpage.
    </li>
    <li>
        Protocols: Think of protocols as the rules and methods for how information travels on the web. One common
        protocol
        is HTTP (Hypertext Transfer Protocol). It's the system that allows your web browser to communicate with the
        servers
        where web pages are stored.</li>
    <li>Hypertext: This is the cool part that makes web pages interactive and easy to navigate. Hypertext is like a web
        of interconnected pages. You can click on links within a webpage and it takes you to another webpage related to
        the topic. These links are created using HTML (Hypertext Markup Language), which is the language used to design
        and structure web pages.</li>
</ul>
<p>
    So, in simple terms, the World Wide Web uses URLs to give each webpage an address, protocols to fetch and
    display web pages, and hypertext to make it easy to jump between pages. It's like a giant interconnected library
    where you can easily find and explore information.</p>
<h3>URLs in HTML
</h3>
<p>
    In HTML, URLs are used in various ways:</p>
<ul>
    <li>

        Linking to another document or resource : You use the &lt;a> and
        &lt;link> elements to create clickable links.</li>
    <li>

        Linking to external styles/scripts : If you want to use a separate file for styling (CSS) or scripting
        (JavaScript), you use the
        &lt;link> and&lt;script> elements to connect your HTML file to these external files.
    </li>
    <li>
        Including images, objects, applets : When you want to add images or other multimedia elements to your webpage,
        you use the &lt; img >, &lt;object>, &lt;applet>, and &lt;input> elements. You specify the URL of the image or
        resource you want to include.</li>
    <li>Creating image maps: Image maps allow you to make certain parts of an image clickable and link them to different
        URLs. You use the &lt;map> and &lt;area> elements to define clickable areas on an image.</li>
    <li>Submitting forms: When you fill out a form on a webpage and hit submit, the data is sent to a specific URL for
        processing. You specify this URL in the &lt;form> element's action attribute.
    </li>
    <li>
        Using frames : Frames allow you to split a webpage into multiple sections, each displaying a different webpage.
        You use the &lt;frame> and &lt;iframe> elements to define these sections and specify the URLs of the webpages
        you want to display in each frame.
    </li>
    <li>
        Citing external reference: When you quote or refer to external content, you use elements like &lt;q>,
        &lt;blockquote>, &lt;ins>, and &lt;del>. You can include the URL of the external reference to give credit or
        provide more information.
    </li>
    <li>
        Referring to metadata conventions: Metadata describes information about the HTML document, like its title,
        author, or keywords. You can include URLs in the &lt;head> element to point to metadata conventions that provide
        additional information about the document.</li>
</ul>
<h2>Absolute, Relative and Root-Relative Links</h2>
<p>
    HTML links, also known as hyperlinks, are used to connect one webpage to another or to link to different sections
    within the same webpage. They are created using the <a> (anchor) element.
</p>
<p>
    In our previous article, we looked at what are hyperlinks in HTML and how are links created in HTML. Now we’re going
    to take a deep dive into some important topics.
</p>
<h3>
    Basic Link Syntax</h3>
<pre>
    <code>
        <pre>
            <code>
                &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;head&gt;
                    &lt;meta charset="UTF-8"&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                    &lt;title&gt;Document&lt;/title&gt;
                    &lt;script&gt;
                        document.addEventListener('DOMContentLoaded', (event) => {
                            const codeBlocks = document.querySelectorAll('pre code');
                            codeBlocks.forEach((block) => {
                                block.textContent = block.innerHTML.trim();
                            });
                        });
                    &lt;/script&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    &lt;pre&gt;
                        &lt;code&gt;
                            &lt;!DOCTYPE html&gt;
                            &lt;html lang="en"&gt;
                            &lt;head&gt;
                                &lt;meta charset="UTF-8"&gt;
                                &lt;title&gt;Basic HTML Link Syntax&lt;/title&gt;
                            &lt;/head&gt;
                            &lt;body&gt;
                                &lt;h1&gt;Basic HTML Link Syntax&lt;/h1&gt;
                                &lt;p&gt;This is a simple HTML document.&lt;/p&gt;
                                &lt;a href="URL"&gt;Link Text&lt;/a&gt;
                            &lt;/body&gt;
                            &lt;/html&gt;
                        &lt;/code&gt;
                    &lt;/pre&gt;
                &lt;/body&gt;
                &lt;/html&gt;
            </code>
        </pre>
    
    </code>
</pre>
<ul>
    <li>The href attribute specifies the URL (Uniform Resource Locator) of the page or resource you want to link to.</li>
    <li>
        The text between the opening and closing &lt;a> tags is the visible link text.</li>
</ul>
`,
    code: ``,
  },
  {
    title: "Chapter 4: HTML Forms ",
    content: `<h1>HTML Forms</h1>
<p>
    HTML forms provide a way for users to interact with a web page by entering data, selecting options, and submitting
    it to a server for processing. They are created using the &lt;form> element and consist of various input controls,
    such as text fields, checkboxes, radio buttons, select menus, and buttons.</p>
<h2>

    What are forms ?</h2>
<p>
    Imagine your school or college wants to hear from you about your teachers. They want to know what you think – who's
    great, who needs improvement, and how they can make things better. So, they set up a form on their website. It's
    like a digital way for you to share your thoughts. You just type in your feedback, like writing in a notebook. When
    you're finished, you click a button that says "submit." That sends your feedback to the school's office. They'll
    read it and use it to help make things better for everyone. Hopefully.</p>
<p>

    Behind the scenes, this form is made using HTML. Each field you see – like the one for your name or your feedback –
    is created using HTML code. And when you click "submit," that's like activating a special feature of the form called
    the "submit button," which sends your data to the school's server for processing.</p>
<h2>How to make forms in HTML ?</h2>
<h3> Creating a Form </h3>
<p>To create a form in HTML, you use the &lt;form> tag. This tag encloses all the elements that make up your form. The
    basic syntax looks like this:</p>
<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;en&quot;&gt;
        &lt;head&gt;
            &lt;meta charset=&quot;UTF-8&quot;&gt;
            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
            &lt;title&gt;Document&lt;/title&gt;
            &lt;script&gt;
                document.addEventListener(&#39;DOMContentLoaded&#39;, (event) => {
                    const codeBlocks = document.querySelectorAll(&#39;pre code&#39;);
                    codeBlocks.forEach((block) => {
                        block.textContent = block.innerHTML.trim();
                    });
                });
            &lt;/script&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;pre&gt;
                &lt;code&gt;
                    &lt;!DOCTYPE html&gt;
                    &lt;html lang=&quot;en&quot;&gt;
                    &lt;head&gt;
                        &lt;meta charset=&quot;UTF-8&quot;&gt;
                        &lt;title&gt;Adventure Survey&lt;/title&gt;
                        &lt;style&gt;
                          body{
                            background-color: lightblue;
                          }
                        &lt;/style&gt;
                    &lt;/head&gt;
                    &lt;body&gt;
                        &lt;h1&gt;Discover Your Dream Adventure&lt;/h1&gt;
                        &lt;form&gt;
                            &lt;h2&gt;Your Dream Destination:&lt;/h2&gt;
                            &lt;input type=&quot;text&quot; id=&quot;destination&quot;&gt;&lt;br&gt;
                            
                            &lt;h2&gt;Favorite Way to Spend a Lazy Sunday:&lt;/h2&gt;
                            &lt;input type=&quot;text&quot; id=&quot;sunday&quot;&gt;
                            &lt;br&gt;
                            &lt;input type=&quot;submit&quot; value=&quot;Discover&quot;&gt;
                        &lt;/form&gt;
                    &lt;/body&gt;
                    &lt;/html&gt;
                &lt;/code&gt;
            &lt;/pre&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
</pre>
<h2>HTML Form Element</h2>
<p>
    HTML forms are interactive elements used on web pages to collect information from users. They serve as a means for
    users to input data which can then be submitted to a server for processing. Forms are crucial for various purposes
    on websites, such as user registration, login, surveys, feedback submission, and e-commerce transactions.
</p>
<h3>
    HTML Form Elements</h3>
<ol>
    <li>&lt;input>
    </li>
    <li>
        &lt;textarea>
    </li>
    <li>
        &lt;select></li>
    <li>

        &lt;button>
    </li>
    <li>
        &lt;label>
    </li>
    <li>
        &lt;fieldset></li>
</ol>
<h3>&lt;input> Element</h3>
<p>
    The &lt;input> element in HTML can be described in various ways depending on its type and attributes.</p>
<p>Do you notice anything different or strange in the above picture ? Not exactly strange but look carefully, Your name
    is a single line text field while your feedback is a multiple line text field.
</p>
<p>
    Inside the &lt;form> tag, you can include various form elements to collect different types of data. Some common form
    elements include:</p>
<ul>
    <li>Text fields : Allows users to enter single-line text.
    </li>
    <li>
        Textarea fields : Allows users to enter multi-line text.</li>
</ul>
<h3>&lt;input type = "text"> Attributes in HTML</h3>
<pre>
    <code>
        &lt;form>
        &lt;label for="name">Your Name:&lt;/label>&lt;br>
        &lt;input type="text" id="name" name="name">
        &lt;/form>
    </code>
</pre>
<ol>
    <li>type: Specifies the type of input field. For text fields, it should be set to "text".</li>
    <li>

        name: Assigns a name to the input field, which is used to identify the field when the form is submitted.</li>
    <li>

        id: Provides a unique identifier for the input field, which can be used for styling or scripting purposes.</li>
    <li>

        value: Specifies the initial value of the text field.</li>
    <li>

        placeholder: Displays a hint or example text inside the text field when it's empty.
    </li>
    <li>
        maxlength: Sets the maximum number of characters allowed in the text field.
    </li>
    <li>
        readonly: Prevents users from editing the text field. The value can only be changed programmatically.
    </li>
    <li>
        disabled: Disables the text field, making it uneditable and preventing its value from being submitted with the
        form.</li>
</ol>
<h4>&lt;input type="radio"> && &lt;input type="checkbox"> in HTML</h4>
<ul>
    <li>Radio Buttons in HTML allows users to select one option from a set of mutually exclusive choices.
    </li>
    <li>
        Checkboxes in HTML allows users to select one or more options from a set of choices.</li>
</ul>
<pre>
    <code>
        &lt;form&gt;
            &lt;h2&gt;Pick Your Superpower&lt;/h2&gt;
            &lt;input type=&quot;radio&quot; id=&quot;flight&quot; value=&quot;flight&quot;&gt;
            &lt;label for=&quot;flight&quot;&gt;Flight&lt;/label&gt;&lt;br&gt;
            
            &lt;input type=&quot;radio&quot; id=&quot;invisibility&quot; value=&quot;invisibility&quot;&gt;
            &lt;label for=&quot;invisibility&quot;&gt;Invisibility&lt;/label&gt;&lt;br&gt;
            
            &lt;h2&gt;Favorite Dessert&lt;/h2&gt;
            &lt;input type=&quot;checkbox&quot; id=&quot;icecream&quot; value=&quot;icecream&quot;&gt;
            &lt;label for=&quot;icecream&quot;&gt;Ice Cream&lt;/label&gt;&lt;br&gt;
            
            &lt;input type=&quot;checkbox&quot; id=&quot;cake&quot; value=&quot;cake&quot;&gt;
            &lt;label for=&quot;cake&quot;&gt;Cake&lt;/label&gt;&lt;br&gt;
            
            &lt;input type=&quot;submit&quot; value=&quot;Submit&quot;&gt;
        &lt;/form&gt;
    </code>
</pre>
<h3>TextArea Attributes in HTML</h3>
<pre>
    <code>
        &lt;form&gt;
            &lt;label for=&quot;feedback&quot;&gt;Your Feedback:&lt;/label&gt;&lt;br&gt;
            &lt;textarea id=&quot;feedback&quot; name=&quot;feedback&quot; rows=&quot;4&quot; cols=&quot;50&quot;&gt;&lt;/textarea&gt;
        &lt;/form&gt;
    </code>
</pre>
<ol>
    <li>name: Similar to the text field, assigns a name to the text area for identification upon form submission.
    </li>
    <li>
        id: Provides a unique identifier for the text area, useful for styling or scripting purposes.</li>
    <li>

        rows and cols: Specifies the visible dimensions of the text area. rows determine the number of visible lines,
        while cols determine the number of visible characters per line.
    </li>
    <li>
        placeholder: Similar to text fields, displays a hint or example text inside the text area when it's empty.
    </li>
    <li>
        maxlength: Sets the maximum number of characters allowed in the text area.
    </li>
    <li>
        readonly: Prevents users from editing the text area content. The value can only be changed programmatically.
    </li>
</ol>`,
    code: ``,
  },
  {
    title: "Chapter 5: Semantic HTML ",
    content: `<h1>Semantic HTML</h1>
<p>
    Semantic HTML involves using HTML elements that convey meaning and structure, going beyond mere visual presentation.
    In simpler terms, it means using HTML tags that accurately describe the purpose and content they contain.
</p>
<h2>
    Backstory of Semantic HTML</h2>
<p>The Internet was originally invented to share documents, programmers were not concerned about how it looked. As the
    information grew and so did the Internet, people wanted the web to look nicer. Think of HTML tags like labels you
    put on different parts of a box. Before, people were using generic labels that tell much about what was inside. For
    example, instead of saying "clothes" or "books," they just said "stuff."
</p>
<p>
    This was a problem because when someone else looked at the box, they wouldn't know what was inside just by reading
    the label. Similarly, search engines and screen readers couldn't understand what the content on a webpage was about
    because it was labeled too generically (nothing specific).
</p>
<p>
    Semantic HTML is like using labels that describe what's inside the box. So now, instead of just saying "stuff," you
    might use labels like "clothes," "books," or "shoes." This helps everyone - humans and computers to understand
    what's inside the box, or on the webpage.</p>
<h2>What is Semantic HTML?</h2>
<p>
    Semantic HTML means using HTML elements that carry meaning, and structure beyond just presentation. In simpler
    terms, it means using HTML tags that accurately describe the content they contain. In HTML, for example, the
    &lt;h1> tag is a semantic element, that tells the computer that it is the main heading of the page.
</p>
<h2>
    Semantic HTML Elements</h2>
<p>
    Semantic HTML elements are HTML elements that define the role of the content they contain.
</p>
<p>
    For example, &lt;h1> element as we mentioned above, elements like &lt;header> , &lt;article> , and &lt;footer>
    are all semantic elements. &lt;div> and &lt;span> are examples of non-semantic elements that are non-specific
    containers that do not convey any specific semantic meaning about the content.
</p>
<h3>
    Why use Semantic HTML?</h3>
<p>You must be thinking why do you need to use Semantic HTML elements? Fair question. Let’s find out valid reasons
    for this change. The most obvious reason is semantic HTML tags are easier to read. When you look at &lt;h1> you
    know it’s a main heading already. Let’s understand this more clearly. Below are two blocks of code –</p>
<pre>
            <code>
                &lt;header&gt;
                    &lt;nav&gt;
                        &lt;ul&gt;
                            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;About&lt;/a&gt;&lt;/li&gt;
                        &lt;/ul&gt;
                    &lt;/nav&gt;
                &lt;/header&gt;
                
                &lt;main&gt;
                    &lt;article&gt; &lt;/article&gt;
                &lt;/main&gt;
                
                &lt;footer&gt;
                    &lt;p&gt; CodeHelp Website. All rights reserved.&lt;/p&gt;
                &lt;/footer&gt;
            </code>
</pre>
<p>The first code block uses semantic HTML, which makes it easier to understand. While this example is small, when
    you're dealing with large amounts of code, the clarity and structure provided by semantic HTML become incredibly
    valuable.
</p>
<h3>
    Advantages of using Semantic HTML</h3>
<ul>
    <li>Accessibility: Semantic HTML helps improve accessibility by providing meaningful structure to content,
        making it easier for screen readers and other assistive technologies to interpret and navigate the webpage.
    </li>
    <li>
        SEO (Search Engine Optimization): Search engines rely on semantic markup to better understand the content
        and context of a webpage. Using semantic HTML elements can improve your website's search engine ranking and
        visibility.
    </li>
    <li>
        Future-proofing: Semantic HTML is designed to be forward-compatible, meaning that as new technologies and
        standards emerge, websites built with semantic markup are more likely to remain compatible and functional.
    </li>
    <li>
        Maintainability: Semantic HTML promotes cleaner and more maintainable code by providing a clear and logical
        structure. This makes it easier for developers to understand, modify, and debug code, especially in
        collaborative projects or when revisiting code after some time.
    </li>
    <li>
        Consistency: Semantic HTML encourages consistent use of markup across different web pages and projects,
        leading to a more uniform and cohesive user experience.</li>
</ul>
<h2>HTML Semantic Elements</h2>
<p>
    Semantic elements in HTML are those that carry meaning, providing context and structure to the content they enclose.
    They describe the purpose of the content rather than just its presentation, which is crucial for accessibility,
    search engine optimization (SEO), and overall maintainability of the code.
</p>
<p>
    We've just learned about semantic elements in the previous article, now let's dive into two distinct categories of
    semantic elements, classified according to their usage.</p>
<p>Structural Elements: These elements define the different parts of a web page, such as the header, navigation, main
    content, aside, section, and footer.
</p>
<p>
    Text-level elements: These elements define the type of text content, such as headings, paragraphs, emphasis, and
    strong emphasis.
</p>
<h3>
    List of Semantic Elements in HTML</h3>
<ol>
    <li>&lt;header>: This tag is like the main heading of a page or a section. It can be found at the top of the
        document and may contain navigation links.</li>
    <li>&lt;nav>: This tag wraps around navigation links, making it easier for visitors to explore different parts of
        the website. You can have multiple &lt;nav> elements on a single page, each representing different navigation
        menus or sections.</li>
    <li>&lt;main>: It contains the main content of a webpage (body of the webpage) or the primary focus of the page. The
        &lt;main> tag should only be used once per page to encapsulate the main content, ensuring proper accessibility
        and SEO.</li>
    <li> &lt;section> : Section tag can be imagined as a container for related content. It helps to organize the content
        of related themes into different parts or sections on a page.</li>
    <li>
        &lt;article> : This HTML tag is used when you have an independent piece of content. That means it can stand
        alone and make sense by itself. In simple words, an article is reusable on its own anywhere. Each &lt;article>
        should ideally have a unique, descriptive heading for better accessibility and SEO.
    </li>
    <li>&lt;footer> : &lt;footer> tag goes at the bottom of the page and usually contains things like copyright
        information, contact details, or links to related pages.
    </li>
    <li>
        &lt;figcaption> : This HTML semantic tag provides a caption or description for content inside a &lt;figure> tag,
        like an image or a diagram.
    </li>
    <li>
        &lt;figure> : This tag is for grouping content like images, diagrams, or videos, along with their captions.</li>
</ol>
`,
    code: ``,
  },
];

const practiceQuestions = [
  {
    chapterIndex: 1, //Introduction to HTML
    questions: [
      {
        question: "What is the primary purpose of HTML on the Internet?",
        solution: `HTML (HyperText Markup Language) is used to structure content on the web. It defines the elements of a web page, such as headings, paragraphs, images, and links, enabling browsers to display and interpret the content correctly.`,
      },
      {
        question:
          "How did the development of the World Wide Web impact the Internet?",
        solution: `The World Wide Web, developed by Tim Berners-Lee, transformed the Internet from a data-sharing network into a user-friendly platform for accessing information. It introduced the concept of hypertext, making it possible to link documents and navigate between them easily.`,
      },

      {
        question: "What are some key features introduced in HTML5?",
        solution: `HTML5 introduced several new elements and APIs, including the <video> and <audio> tags for embedding multimedia, the <canvas> element for drawing graphics, and APIs for offline storage, geolocation, and drag-and-drop functionality. These advancements greatly enhanced web interactivity and performance.`,
      },
      {
        question: "Why is the Internet considered a global network?",
        solution: `The Internet is considered a global network because it connects millions of private, public, academic, business, and government networks across the world. This interconnectedness allows for seamless communication and data exchange on a global scale.`,
      },
    ],
  },
  {
    chapterIndex: 2, //Understanding HTML
    questions: [
      {
        question: "Create a simple HTML document structure.",
        solution: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome</h1>
</body>
</html>
`,
      },
      {
        question: "Add a link to an external website.",
        solution: `<a href="https://example.com">Visit Example</a>
`,
      },
      {
        question: "Create a list of items.",
        solution: `<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
`,
      },
      {
        question: "Insert an image from a URL.",
        solution: `<img src="https://example.com/image.jpg" alt="Description">`,
      },
    ],
  },
  {
    chapterIndex: 3, // HTML & URLS
    questions: [
      {
        question: "How do you create a hyperlink to an external website?",
        solution: `<a href="https://www.example.com">Visit Example</a>
`,
      },
      {
        question: "How do you embed an image from a URL?",
        solution: `<img src="https://www.example.com/image.jpg" alt="Example Image">
`,
      },
      {
        question:
          "How do you create a form that submits data to a specified URL?",
        solution: `<form action="https://www.example.com/submit" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <input type="submit" value="Submit">
</form>
`,
      },
      {
        question: "How do you link an external CSS stylesheet?",
        solution: `<link rel="stylesheet" href="https://www.example.com/styles.css">
`,
      },
    ],
  },
  {
    chapterIndex: 4, //HTML Forms
    questions: [
      {
        question: "How do you create a basic HTML form to collect user input?",
        solution: `<!DOCTYPE html>
<html>
<body>

<form action="/submit" method="post">
  <label for="fname">First name:</label><br><br>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label><br><br>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form> 

</body>
</html>
`,
      },
      {
        question:
          "How can you create a form that requires user input to follow a specific pattern (e.g., a valid email)?",
        solution: `<!DOCTYPE html>
<html>
<body>

<form action="/submit" method="post">
  <label for="email">Email:</label><br><br>
  <input type="email" id="email" name="email" required><br><br>
  <input type="submit" value="Submit">
</form> 

</body>
</html>
`,
      },
      {
        question: "How do you create a form with a password input field?",
        solution: `<!DOCTYPE html>
<html>
<body>

<form action="/submit" method="post">
  <label for="password">Password:</label><br><br>
  <input type="password" id="password" name="password" required><br><br>
  <input type="submit" value="Submit">
</form> 

</body>
</html>
`,
      },
      {
        question: "How can you add a dropdown list to a form?",
        solution: `<!DOCTYPE html>
<html>
<body>

<form action="/submit" method="post">
  <label for="cars">Choose a car:</label><br><br>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select><br><br>
  <input type="submit" value="Submit">
</form> 

</body>
</html>
`,
      },
      {
        question:
          "How can you create a form that includes radio buttons for multiple choices?",
        solution: `<!DOCTYPE html>
<html>
<body>

<form action="/submit" method="post">
  <p>Please select your gender:</p>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label><br>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label><br>
  <input type="radio" id="other" name="gender" value="other">
  <label for="other">Other</label><br><br>
  <input type="submit" value="Submit">
</form> 

</body>
</html>
`,
      },
    ],
  },
  {
    chapterIndex: 5, //Semantic HTML
    questions: [
      {
        question:"Article Tag: The <article> tag specifies independent, self-contained content.",
        solution: `<article>
    <h2>Semantic HTML</h2>
    <p>Semantic HTML uses elements that clearly describe their meaning in a human- and machine-readable way.</p>
</article>
`,
      },
      {
        question:
          "Section Tag: The <section> tag defines sections in a document, such as chapters, headers, footers, or any other sections of the document.",
        solution: `<section>
    <h2>Introduction to Semantic HTML</h2>
    <p>Semantic HTML provides meaning to web content, improving accessibility and SEO.</p>
</section>
`,
      },
      {
        question: "Nav Tag: The <nav> tag defines a set of navigation links.",
        solution: `<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
`,
      },
      {
        question:
          "Header Tag: The <header> tag represents introductory content or a set of navigational links.",
        solution: `<header>
    <h1>Welcome to Semantic HTML</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>
`,
      },
      {
        question:
          "Footer Tag: The <footer> tag defines a footer for a document or section, typically containing author information, copyright, links to related documents, etc.",
        solution: `<footer>
    <p>© 2024 Example.com</p>
    <p><a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
</footer>
`,
      },
    ],
  },
];

const notes = [
  {
    chapterIndex: 1, //Introduction to HTML
    notes: [
      "1991: HTML 1.0, the first version, is created by Tim Berners-Lee to structure documents on the web.",

      "1995: HTML 2.0 is released, introducing basic table and image support.",

      "1997: HTML 3.2 standardizes features like tables, applets, and complex forms.",

      "1999: HTML 4.01, the most widely adopted early version, improves support for scripting and style sheets.",

      "2000: XHTML 1.0 combines HTML with XML, enforcing stricter syntax rules.",

      "2004: Work begins on HTML5 to address modern web needs.",

      "2008: HTML5 draft specifications are released, including new elements like <canvas>, <video>, and <audio>.",

      "2014: HTML5 becomes an official W3C Recommendation, revolutionizing web capabilities.",

      "2020s: HTML5 continues to evolve with new standards for web components and accessibility.",

      "Present: HTML remains the cornerstone of web development, supporting dynamic, interactive, and accessible web experiences.",
    ],
  },
  {
    chapterIndex: 2, //Understanding HTML
    notes: [
      "Elements: Building blocks of an HTML document, defined by tags, and containing content or other elements.",

      "Tags: Markup that surrounds content to create an element. They come in pairs: opening and closing.",

      "Attributes: Provide additional information about an element. They are included in the opening tag.",

      "Nested Elements: Elements can be nested inside other elements, creating a hierarchy in the HTML document.",

      "Self-Closing Tags: Some elements do not have a closing tag, like images and line breaks.",

      "Semantic Elements: These elements clearly describe their meaning, like header, footer, article, and nav.",

      "Global Attributes: Attributes that can be applied to any element, such as id, class, and style.",

      "Block vs Inline Elements: Block elements take up the full width and start on a new line, whereas inline elements only take up as much width as necessary.",

      "Document Structure: An HTML document starts with a doctype declaration, followed by html, head, and body elements.",

      "Linking Resources: Attributes like href and src are used to link to external resources, such as stylesheets and images.",
    ],
  },
  {
    chapterIndex: 3, //HTML & URLS
    notes: [
      "Hyperlinks: URLs are used in HTML to create hyperlinks, allowing users to navigate from one web page to another.",

      "Images: URLs are used to link to images that are embedded in an HTML page, allowing for the display of visual content.",

      "Stylesheets: URLs are used to link to external CSS stylesheets that define the visual presentation of an HTML document.",

      "JavaScript: URLs are used to link to external JavaScript files, enabling dynamic and interactive behavior on web pages.",

      "Forms: URLs are used in form actions to specify where the form data should be sent when a user submits the form.",

      "Resource Linking: URLs are essential for linking all sorts of resources, like fonts, videos, and other media files, ensuring they are correctly displayed or utilized in an HTML document.",
    ],
  },
  {
    chapterIndex: 4, //HTML Forms
    notes: [
      "Form Elements: HTML forms are created using the <form> tag, which acts as a container for various input elements like text fields, checkboxes, radio buttons, and submit buttons.",

      "Action Attribute: This attribute in the <form> tag specifies the URL to which the form data is sent for processing after submission.",

      "Method Attribute: It defines how the form data should be sent to the server, commonly using the GET or POST method.",

      "Input Types: There are various input types like text, password, email, file, etc., that cater to different types of user data.",

      "Form Validation: HTML5 includes built-in form validation features that allow you to specify constraints for input fields (e.g., required fields, pattern matching).",

      "Labels and Accessibility: Using the <label> tag to associate labels with input elements improves form accessibility for screen readers and enhances user experience.",
    ],
  },
  {
    chapterIndex: 5, //Semantic HTML
    notes: [
      "Clear Structure: Semantic HTML uses elements that clearly describe their meaning and purpose, creating a more organized and understandable structure for both developers and browsers.",

      "Accessibility: These elements improve accessibility by providing meaning to screen readers and other assistive technologies, helping users with disabilities navigate and understand web content more effectively.",

      "SEO Benefits: Search engines can better understand the content and context of web pages, leading to improved search engine optimization (SEO) and higher rankings.",

      "Maintainability: Semantic HTML makes the code more readable and maintainable, as it is easier to understand the purpose of different elements at a glance.",

      "Standardization: It promotes the use of standardized elements, reducing the need for excessive div and span tags and leading to cleaner, more standardized code.",

      "Browser Compatibility: Modern browsers are optimized to recognize and handle semantic elements more efficiently, enhancing performance and compatibility.",

      "Future-Proofing: Using semantic HTML ensures that web pages remain compatible with future web standards and technologies, providing long-term benefits.",

      "Better Communication: Semantic tags clearly communicate the structure and flow of a document, making collaboration among developers and designers more seamless.",

      "Separation of Concerns: By defining clear roles for different sections of a webpage, semantic HTML helps in maintaining a clear separation between content, presentation, and behavior.",

      "Enhanced User Experience: Overall, semantic HTML contributes to a better user experience by creating web pages that are easy to navigate, understand, and interact with.",
    ],
  },
];

const articles = [
  {
    chapterIndex: 0,
    articles: [
      "The History of C Programming",
      "Understanding Memory Management in C",
      "Best Practices for Writing Clean C Code",
    ],
  },
  {
    chapterIndex: 1,
    articles: ["", ""],
  },
  {
    chapterIndex: 2,
    articles: ["", ""],
  },
];

window.addEventListener("DOMContentLoaded", () => {
  // Initialize tab switching functionality
  handleTabSwitching();

  // Render chapters in the sidebar
  renderChapters(chapters);

  // Set chapter link listeners
  setChapterLinkListeners(chapters, practiceQuestions, notes, articles);
});
