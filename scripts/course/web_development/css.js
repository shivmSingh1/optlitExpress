import { handleTabSwitching, renderChapters, setChapterLinkListeners } from "/minorProject/modules/chapterModule.js";

// Define arrays for each chapter's content type
const chapters = [
	{
		title: "Chapter 1: Introduction to CSS",
		content: ` 
    <br> <h3>What is CSS?</h3>
	<br>
    <p><strong>CSS</strong> stands for <strong>Cascading Style Sheets</strong>. It is a language used to style and design the layout of a webpage written in HTML. CSS defines how HTML elements should appear on screen, such as their colors, sizes, positioning, and fonts.</p>
<br>
    <h2>Importance of CSS in Web Development</h2>
    <p><strong>CSS</strong> plays a vital role in web development because:</p>
    <ul>
        <li>It helps separate the structure (HTML) from the design (style), making code easier to maintain.</li>
        <li>It allows for consistent styling across multiple pages on a website.</li>
        <li>CSS enables responsive designs that adjust the layout on different screen sizes (like mobile and desktop).</li>
        <li>It enhances the visual appeal of a website, improving user experience.</li>
    </ul>
<br>
    <h2>CSS Syntax and Selectors</h2>
    <p><strong>CSS Syntax:</strong> It consists of <strong>selectors</strong> and <strong>declarations</strong>.</p>
    <p><strong>Selector:</strong> The HTML element that you want to style (e.g., <code>p</code>, <code>h3</code>, <code>div</code>).</p>
    <p><strong>Declaration:</strong> The style you want to apply, which has two parts: <strong>property</strong> and <strong>value</strong>.</p>
    <p>Example: <code>color: blue;</code> - <strong>color</strong> is the property, and <strong>blue</strong> is the value.</p>
    
    <h3>Example CSS:</h3>
    <pre><code>
p {
    color: red;
    font-size: 16px;
}
    </code></pre>
<br>
    <h3>Selectors:</h3>
	<br>
    <ul>
        <li><strong>Element Selector:</strong> Targets an HTML element (e.g., <code>h3</code>, <code>p</code>).</li>
        <li><strong>Class Selector:</strong> Targets elements with a specific class (e.g., <code>.button</code>).</li>
        <li><strong>ID Selector:</strong> Targets an element with a specific ID (e.g., <code>#header</code>).</li>
        <li><strong>Universal Selector:</strong> Targets all elements (e.g., <code>*</code>).</li>
    </ul>
<br>
    <h2>Types of CSS: Inline, Internal, and External</h2>

    <h3>Inline CSS:</h3>
	<br>
    <p><strong>Inline CSS</strong> is applied directly within an HTML tag using the <code>style</code> attribute.</p>
    <p>Example: <code>&lt;p style="color: red;"&gt;Hello World&lt;/p&gt;</code></p>
    <p class="important">Not recommended for large projects due to lack of reusability.</p>
<br>
    <h3>Internal CSS:</h3>
	<br>
    <p><strong>Internal CSS</strong> is defined within a <code>&lt;style&gt;</code> tag inside the HTML <code>&lt;head&gt;</code> section.</p>
    <p>Example:</p>
    <pre><code>
&lt;style&gt;
    p {
        color: blue;
    }
&lt;/style&gt;
    </code></pre>
    <p>Useful for small websites or pages, but not ideal for large ones.</p>
<br>
    <h3>External CSS:</h3>
	<br>
    <p><strong>External CSS</strong> is written in a separate <code>.css</code> file and linked to an HTML file.</p>
    <p>Example: <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></p>
    <p>The best choice for large websites since it keeps HTML and CSS separate and reusable across multiple pages.</p>
<br>
    <h2>Linking CSS to HTML</h2>
	<br>
    <p>To link an external CSS file to an HTML document, use the <code>&lt;link&gt;</code> tag in the <code>&lt;head&gt;</code> section of your HTML.</p>
    <p>Example:</p>
    <pre><code>
&lt;head&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
    </code></pre>
    <p>This tells the browser to load the styles from the <code>styles.css</code> file and apply them to the HTML page.</p>

</body>`,
		code: `p {
  color: red;
  text-align: center;
}`,
	},
	{
		title: "Chapter 2: CSS Selectors and Properties",
		content: ` 
<div>
    <div>
        <div>
            <div dir="auto">
                <div>
                    <div>
                    
                        <br><h3>1. <strong>Basic Selectors:</strong></h3>
						<br>
                        <p>These are the most common types of CSS selectors used to target HTML elements.</p>
                        <ul>
                            <li>
                                <p><strong>Universal Selector (<code>*</code>)</strong>: It targets all elements on the page.</p>
                                <ul>
                                    <li>Example: <code>* { color: red; }</code> (This will make all text red.)</li>
                                </ul>
                            </li>
                            <li>
                                <p><strong>Type Selector (Element Selector)</strong>: Targets specific HTML elements (tags).</p>
                                <ul>
                                    <li>Example: <code>p { font-size: 16px; }</code> (This will style all <code>&lt;p&gt;</code> tags.)</li>
                                </ul>
                            </li>
                            <li>
                                <p><strong>Class Selector (<code>.</code>)</strong>: Targets elements with a specific class attribute.</p>
                                <ul>
                                    <li>Example: <code>.button { color: white; }</code> (This will style all elements with class=&quot;button.&quot;)</li>
                                </ul>
                            </li>
                            <li>
                                <p><strong>ID Selector (<code>#</code>)</strong>: Targets a specific element with a unique ID.</p>
                                <ul>
                                    <li>Example: <code>#header { background-color: blue; }</code> (This will style the element with id=&quot;header&quot;.)</li>
                                </ul>
                            </li>
                        </ul>
                        <hr>
                        <h3>2. <strong>Grouping and Nesting Selectors:</strong></h3><br>
                        <ul>
                            <li><strong>Grouping Selectors</strong>: You can group multiple selectors to apply the same styles to different elements.<ul>
                                    <li>Example: <code>h1, h2, p { color: blue; }</code> (This will apply blue color to <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, and <code>&lt;p&gt;</code> tags.)</li>
                                </ul>
                            </li>
                            <li><strong>Nesting Selectors</strong>: You can nest selectors inside others to apply styles to specific elements inside other elements.<ul>
                                    <li>Example: <code>div p { color: red; }</code> (This will make the text of all <code>&lt;p&gt;</code> tags inside a <code>&lt;div&gt;</code> red.)</li>
                                </ul>
                            </li>
                        </ul>
                        <hr>
                        <h3>3. <strong>Attribute Selectors:</strong></h3>
						<br>
                        <p>Attribute selectors target elements based on the presence or value of an attribute.</p>
                        <ul>
                            <li>Example 1: <code>[type=&quot;text&quot;] { border: 1px solid black; }</code> (This will style all <code>&lt;input&gt;</code> elements with type=&quot;text&quot;.)</li>
                            <li>Example 2: <code>[href^=&quot;https&quot;] { color: green; }</code> (This will style all links starting with &quot;https&quot;.)</li>
                        </ul>
                        <hr>
                        <h3>4. <strong>Pseudo-classes and Pseudo-elements:</strong></h3>
						<br>
                        <ul>
                            <li>
                                <p><strong>Pseudo-classes</strong>: Target elements in specific states, such as when hovered over or clicked.</p>
                                <ul>
                                    <li>Example: <code>a:hover { color: red; }</code> (This will change the color of a link to red when you hover over it.)</li>
                                </ul>
                            </li>
                            <li>
                                <p><strong>Pseudo-elements</strong>: Style parts of elements, like the first letter or line.</p>
                                <ul>
                                    <li>Example: <code>p::first-letter { font-size: 2em; }</code> (This will make the first letter of each paragraph bigger.)</li>
                                </ul>
                            </li>
                        </ul>
                        <hr>
                        <h3>5. <strong>Specificity and Inheritance:</strong></h3>
						<br>
                        <ul>
                            <li><strong>Specificity</strong>: CSS uses specificity to determine which styles are applied when multiple rules target the same element. More specific selectors override less specific ones.<ul>
                                    <li>Example: ID selectors (<code>#header</code>) have higher specificity than class selectors (<code>.button</code>).</li>
                                </ul>
                            </li>
                            <li><strong>Inheritance</strong>: Some styles (like <code>font-family</code>, <code>color</code>, etc.) are inherited by child elements from their parent elements.<ul>
                                    <li>Example: If a parent <code>&lt;div&gt;</code> has <code>color: blue;</code>, all child elements inside it will inherit this color unless specifically overridden.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,


		code: ``,
	},
	{
		title: "Chapter 3:  CSS Box Model",
		content: ` <p><br></p>
<h3>1. Content</h3>
<p>The <strong>content</strong> refers to the actual material or information inside an HTML element, such as text, images, or other media. It&rsquo;s the &quot;main&quot; area of the box, where the element&apos;s visible content appears. The content area is the starting point for layout calculations.</p>
<h3>2. Padding</h3>
<p><strong>Padding</strong> is the space between the content and the border of an element. It provides internal spacing, giving breathing room inside the box around the content. Padding is often used to control how close the content is to the element&rsquo;s border.</p>
<ul>
    <li>Padding is specified for each side of the element (top, right, bottom, left) and can be set with shorthand or individual properties.
        <pre><div><div>css</div><div><div><div></div></div></div><div><code>padding: 10px; /* All sides */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 15px;
padding-left: 5px;
</code></div></div></pre>
    </li>
</ul>
<h3>3. Border</h3>
<p>A <strong>border</strong> is a line around the padding (if present) and content area of an element. It separates the content from the margin, providing visual distinction. Borders can be styled with different widths, colors, and styles.</p>
<ul>
    <li>Borders are also set for each side of the element (top, right, bottom, left).
        <pre><div><div>css</div><div><div><div></div></div></div><div><code>border: 2px solid #000; /* 2px thick, solid black border */
</code></div></div></pre>
    </li>
</ul>
<h3>4. Margin</h3>
<p><strong>Margin</strong> is the space outside the border, creating a gap between the element and its neighbors. It helps control the positioning of elements relative to one another.</p>
<ul>
    <li>Margins also work on all sides (top, right, bottom, left) and can be set in shorthand or individually.
        <pre><div><div>css</div><div><div><div></div></div></div><div><code>margin: 20px; /* All sides */
margin-top: 20px;
margin-right: 30px;
margin-bottom: 10px;
margin-left: 5px;
</code></div></div></pre>
    </li>
</ul>
<h3>5. Box-Sizing Property</h3>
<p>The <strong>box-sizing</strong> property determines how the width and height of an element are calculated in relation to padding and borders. There are two main values:</p>
<ul>
    <li>
        <p><strong>content-box</strong> (default): The width and height of the element are only calculated based on the content area. Padding and border are added outside of the content area, increasing the total size of the element.</p>
        <ul>
            <li>Example: If an element has a width of <code>200px</code>, padding of <code>20px</code>, and a border of <code>5px</code>, the total width will be <code>200px + 20px (padding) + 5px (border) = 250px</code>.</li>
        </ul>
    </li>
    <li>
        <p><strong>border-box</strong>: The width and height of the element include padding and border, so the total size remains the specified width/height. This makes it easier to manage layout, as you don&apos;t need to account for padding and border separately.</p>
        <ul>
            <li>Example: If the width of an element is <code>200px</code> and it has <code>20px</code> padding and <code>5px</code> border, the actual content width will be smaller to accommodate the padding and border, and the total element size will remain <code>200px</code>.</li>
		</ul>
            <div>
                <div>css</div>
                <div>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div><code>box-sizing: border-box;<br></code></div>
            </div>
        </ul>
        <pre></pre>
        <p>This is a common practice in modern web development because it simplifies layout calculations.</p>
    </li>
</ul>
<h3>Visualizing the Box Model</h3>
<p>Here&apos;s a visual breakdown of the box model:</p>
<pre><div><div>lua</div><div><div><div></div></div></div><div><code>+-------------------------------+
|            Margin              | 
|  +-------------------------+   |
|  |        Border            |   |
|  |  +-------------------+   |   |
|  |  |     Padding        |   |   |
|  |  |  +-----------+    |   |   |
|  |  |  |  Content  |    |   |   |
|  |  |  +-----------+    |   |   |
|  |  +-------------------+   |   |
|  +-------------------------+   |
+-------------------------------+
</code></div></div></pre>
<p>In this diagram:</p>
<ul>
    <li>The <strong>Content</strong> is the actual content inside the element (text, images, etc.).</li>
    <li>The <strong>Padding</strong> surrounds the content, creating space between the content and the border.</li>
    <li>The <strong>Border</strong> encloses the padding and content.</li>
    <li>The <strong>Margin</strong> creates space between the element and its neighboring elements.</li>
</ul>
<h3>Practical Use of Box Model Properties</h3>
<p>You can combine these properties to control layout and spacing in responsive designs. For example:</p>
<pre><div><div>css</div><code>/* Apply box-sizing to make layout calculations simpler */
* {
  box-sizing: border-box;
}

/* Style the container */
.container {
  width: 100%;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}

/* Style the content */
.content {
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
}
</code></div></div></pre>
<p>By using <strong>box-sizing: border-box</strong>, you ensure the element&apos;s size doesn&apos;t grow unexpectedly when adding padding or borders, making layout management more intuitive and predictable.</p>
<h3>Conclusion</h3>
<p>Understanding how <strong>content</strong>, <strong>padding</strong>, <strong>border</strong>, <strong>margin</strong>, and <strong>box-sizing</strong> work together is essential for creating layouts that are both flexible and consistent. Using the <strong>box-sizing</strong> property, especially <code>border-box</code>, can make managing spacing and size much easier, especially for responsive desig</p>`,
		code: ``,
	},
	{
		title: "Chapter 4:CSS Positioning and Layout ",
		content: `<h3><strong>CSS Positioning and Layout:</strong></h3>
<ol>
    <li>
        <p><strong>Static Positioning</strong>: Default position, where elements flow normally in the page.</p>
        <ul>
            <li>Example: <code>position: static;</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Relative Positioning</strong>: Moves an element relative to its normal position.</p>
        <ul>
            <li>Example: <code>position: relative; top: 10px;</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Absolute Positioning</strong>: Positions an element relative to its nearest positioned ancestor (not static).</p>
        <ul>
            <li>Example: <code>position: absolute; top: 20px;</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Fixed Positioning</strong>: Keeps an element fixed in place even when the page is scrolled.</p>
        <ul>
            <li>Example: <code>position: fixed; top: 0; left: 0;</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Float</strong>: Moves elements to the left or right, allowing content to flow around it.</p>
        <ul>
            <li>Example: <code>float: left;</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Clear</strong>: Stops elements from floating next to a floated element.</p>
        <ul>
            <li>Example: <code>clear: both;</code></li>
        </ul>
    </li>
</ol>
<h3><strong>Flexbox:</strong></h3>
<ol>
    <li>
        <p><strong>Concepts</strong>: A layout model that allows easy alignment and distribution of items in a container.</p>
        <ul>
            <li>Example: <code>display: flex;</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Properties</strong>:</p>
        <ul>
            <li><code>justify-content</code>: Aligns items horizontally (e.g., <code>center</code>, <code>space-between</code>).</li>
            <li><code>align-items</code>: Aligns items vertically (e.g., <code>center</code>, <code>stretch</code>).</li>
            <li><code>flex-direction</code>: Defines the direction of items (e.g., <code>row</code>, <code>column</code>).</li>
        </ul>
    </li>
    <li>
        <p><strong>Example</strong>:</p>
        <pre><div><div>css</div><code>.container {
  display: flex;
  justify-content: space-between;
}
</code></div></div></pre>
    </li>
</ol>
<h3><strong>CSS Grid:</strong></h3>
<ol>
    <li>
        <p><strong>Grid Layout</strong>: Creates a grid-based layout for placing items in rows and columns.</p>
        <ul>
            <li>Example: <code>display: grid;</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Grid Areas</strong>: Allows you to assign specific areas to grid items for easier layout.</p>
        <ul>
            <li>Example: <code>grid-template-areas: &quot;header header&quot; &quot;main sidebar&quot;;</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Grid Alignment</strong>: Controls how grid items are aligned in both directions.</p>
        <ul>
            <li>Example: <code>align-items: center; justify-items: center;</code></li>
        </ul>
    </li>
</ol>
<h3><strong>Responsive Design with Media Queries:</strong></h3>
<ol>
    <li><strong>Media Queries</strong>: Used to change the layout for different screen sizes or devices.<ul>
            <li>Example:
                <pre><div><div>css</div><code>@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
</code></div></div></pre>
            </li>
            <li>This applies the styles when the screen width is 600px or less.</li>
        </ul>
    </li>
</ol>`,
		code: ``,
	},
	{
		title: "Chapter 5: Colors and Background ",
		content: `<h3><strong>Color Formats:</strong></h3>
<ol>
    <li><strong>RGB</strong>: Uses Red, Green, and Blue to create colors. Values range from 0 to 255.<ul>
            <li>Example: <code>rgb(255, 0, 0)</code> (red).</li>
        </ul>
    </li>
    <li><strong>HEX</strong>: A 6-digit code for colors, starting with a <code>#</code>.<ul>
            <li>Example: <code>#FF0000</code> (red).</li>
        </ul>
    </li>
    <li><strong>HSL</strong>: Describes colors using Hue (color), Saturation (vividness), and Lightness (lightness or darkness).<ul>
            <li>Example: <code>hsl(0, 100%, 50%)</code> (red).</li>
        </ul>
    </li>
</ol>
<h3><strong>Background Properties:</strong></h3>
<ol>
    <li><strong>Color</strong>: Sets the background color of an element.<ul>
            <li>Example: <code>background-color: blue;</code></li>
        </ul>
    </li>
    <li><strong>Image</strong>: Adds an image as the background.<ul>
            <li>Example: <code>background-image: url(&apos;image.jpg&apos;);</code></li>
        </ul>
    </li>
    <li><strong>Repeat</strong>: Controls whether the background image repeats.<ul>
            <li>Values: <code>repeat</code>, <code>no-repeat</code>, <code>repeat-x</code>, <code>repeat-y</code>.</li>
        </ul>
    </li>
    <li><strong>Position</strong>: Specifies where the background image is placed.<ul>
            <li>Example: <code>background-position: center;</code></li>
        </ul>
    </li>
    <li><strong>Attachment</strong>: Defines whether the background image scrolls with the page.<ul>
            <li>Values: <code>scroll</code>, <code>fixed</code>, <code>local</code>.</li>
        </ul>
    </li>
</ol>
<h3><strong>Gradients:</strong></h3>
<ol>
    <li>
        <p><strong>Linear Gradient</strong>: A smooth color transition along a straight line.</p>
        <ul>
            <li>Example: <code>background: linear-gradient(to right, red, blue);</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Radial Gradient</strong>: A smooth color transition from the center outward.</p>
        <ul>
            <li>Example: <code>background: radial-gradient(circle, red, blue);</code></li>
        </ul>
    </li>
</ol>`,
		code: ``,
	},
	{
		title: "Chapter 6:Text and Font Styling ",
		content: `<h3><strong>Font-family, Font-size, and Font-weight:</strong></h3>
<ol>
    <li><strong>Font-family</strong>: Specifies the type of font used for text (e.g., <code>Arial</code>, <code>Verdana</code>).<ul>
            <li>Example: <code>font-family: Arial, sans-serif;</code></li>
        </ul>
    </li>
    <li><strong>Font-size</strong>: Defines the size of the text (e.g., <code>12px</code>, <code>1em</code>, <code>16px</code>).<ul>
            <li>Example: <code>font-size: 16px;</code></li>
        </ul>
    </li>
    <li><strong>Font-weight</strong>: Sets the thickness of the text (e.g., <code>normal</code>, <code>bold</code>, <code>lighter</code>).<ul>
            <li>Example: <code>font-weight: bold;</code></li>
        </ul>
    </li>
</ol>
<h3><strong>Line-height, Letter-spacing, Word-spacing:</strong></h3>
<ol>
    <li><strong>Line-height</strong>: Controls the space between lines of text.<ul>
            <li>Example: <code>line-height: 1.5;</code></li>
        </ul>
    </li>
    <li><strong>Letter-spacing</strong>: Adjusts the space between individual letters.<ul>
            <li>Example: <code>letter-spacing: 2px;</code></li>
        </ul>
    </li>
    <li><strong>Word-spacing</strong>: Sets the space between words.<ul>
            <li>Example: <code>word-spacing: 5px;</code></li>
        </ul>
    </li>
</ol>
<h3><strong>Text-decoration and Text-transform:</strong></h3>
<ol>
    <li><strong>Text-decoration</strong>: Adds decorations to text, like <code>underline</code>, <code>overline</code>, or <code>line-through</code>.<ul>
            <li>Example: <code>text-decoration: underline;</code></li>
        </ul>
    </li>
    <li><strong>Text-transform</strong>: Changes the case of the text (e.g., <code>uppercase</code>, <code>capitalize</code>, <code>lowercase</code>).<ul>
            <li>Example: <code>text-transform: uppercase;</code></li>
        </ul>
    </li>
</ol>
<h3><strong>Web-safe fonts and Google Fonts:</strong></h3>
<ol>
    <li>
        <p><strong>Web-safe Fonts</strong>: Fonts that are supported across all browsers and devices (e.g., <code>Arial</code>, <code>Georgia</code>).</p>
    </li>
    <li>
        <p><strong>Google Fonts</strong>: A collection of free fonts that can be easily used in web design by linking them from Google&rsquo;s server (e.g., <code>Roboto</code>, <code>Open Sans</code>).</p>
    </li>
</ol>`,
		code: ``,
	},
	{
		title: "Chapter 7: CSS Animation and Transitions",
		content: `<h3><strong>Keyframe Animations</strong>:</h3>
<ol>
    <li>
        <p><strong>Keyframes</strong>: Define the start and end points of an animation, along with any intermediate steps.</p>
        <ul>
            <li>Example:
                <pre><div><div>css</div><div><code>@keyframes example {
  0% { background-color: red; }
  100% { background-color: blue; }
}
.element {
  animation: example 2s infinite;
}
</code></div></div></pre>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Usage</strong>: Keyframe animations are used to create complex animations that change an element&apos;s styles over time.</p>
    </li>
</ol>
<h3><strong>Transition Properties (ease, duration, etc.)</strong>:</h3>
<ol>
    <li>
        <p><strong>Transition</strong>: Smoothly changes a property&rsquo;s value when it is altered.</p>
        <ul>
            <li>Example: <code>transition: background-color 0.5s ease;</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Duration</strong>: Defines how long the transition takes.</p>
        <ul>
            <li>Example: <code>transition-duration: 1s;</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Timing Function (ease, linear, etc.)</strong>: Controls the speed curve of the transition.</p>
        <ul>
            <li>Example: <code>transition-timing-function: ease-in;</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Delay</strong>: Sets a delay before the transition starts.</p>
        <ul>
            <li>Example: <code>transition-delay: 0.5s;</code></li>
        </ul>
    </li>
</ol>
<h3><strong>Transformations: Rotate, Scale, Skew</strong>:</h3>
<ol>
    <li>
        <p><strong>Rotate</strong>: Rotates an element by a specified angle.</p>
        <ul>
            <li>Example: <code>transform: rotate(45deg);</code></li>
        </ul>
    </li>
    <li>
        <p><strong>Scale</strong>: Resizes an element by a factor.</p>
        <ul>
            <li>Example: <code>transform: scale(1.5);</code> (scales the element by 1.5 times)</li>
        </ul>
    </li>
    <li>
        <p><strong>Skew</strong>: Skews an element along the X and/or Y axis.</p>
        <ul>
            <li>Example: <code>transform: skew(20deg, 10deg);</code></li>
        </ul>
    </li>
</ol>
<h3><strong>Hover Effects</strong>:</h3>
<ol>
    <li><strong>Hover Effects</strong>: Applies style changes when an element is hovered over.<ul>
            <li>Example:
                <pre><div><div>css</div><code>.element:hover {
  background-color: green;
  transform: scale(1.1);
}</code></div></div></pre>
            </li>
        </ul>
    </li>
</ol>`,
		code: ``,
	},


]


const practiceQuestions = [
	{
		chapterIndex: 0,
		questions: [
			{
				question: "1. What does CSS stand for? ",
				solution: `Answer: CSS stands for Cascading Style Sheets.`
			},
			{
				question: "2.What is the main purpose of CSS?",
				solution: `Answer: The main purpose of CSS is to style and design the layout of HTML elements.`
			},
			{
				question: "3. Why is CSS important in web development?",

				solution: `Answer: CSS helps make websites visually appealing and easy to maintain, and it separates design from structure.

`
			},
			{
				question: "4. What does CSS control on a webpage?",

				solution: `Answer: CSS controls the colors, fonts, sizes, and positions of HTML elements.`
			},
			{
				question: "5. What is a CSS selector?",
				solution: `Answer: A CSS selector is an element you want to style, like p, h1, or .button.

`
			},
			{
				question: "6. What is an element selector in CSS?",

				solution: `Answer: An element selector targets a specific HTML element, like p for paragraphs or h1 for headings.`
			},
			{
				question: "7. What is the difference between inline, internal, and external CSS?",

				solution: `Answer:

Inline CSS is applied directly in HTML tags.
Internal CSS is written inside a <style> tag in the HTML <head>.
External CSS is in a separate .css file linked to the HTML.
`
			},
			{
				question: "8. How do you link an external CSS file to HTML?",
				solution: `Answer: Use the <link> tag in the <head> section, like this: <link rel="stylesheet" href="styles.css">.

`
			}, {
				question: "9. What is the syntax for inline CSS?",
				solution: `Answer: Internal CSS is written within a <style> tag in the HTML document’s <head> section.`
			},
			{
				question: "10. What is internal CSS?",

				solution: `Answer: Internal CSS is written within a <style> tag in the HTML document’s <head> section.

`
			},
			{
				question: "11. Why is external CSS recommended for large websites?",

				solution: `Answer: External CSS makes it easier to manage and reuse styles across multiple pages.

`
			},
			{
				question: "12. What are the two parts of a CSS declaration?",
				solution: `Answer: A CSS declaration has a property (like color) and a value (like blue).

`
			},
			{
				question: "13. What does the universal selector (*) do in CSS?",
				solution: `Answer: The universal selector applies styles to all elements on a webpage.`
			},
			{
				question: "14. What is a class selector in CSS?",
				solution: `Answer: A class selector targets elements with a specific class, like .button.`
			}, {
				question: "15. What is an ID selector in CSS?",
				solution: `Answer: An ID selector targets an element with a specific ID, like #header.



			

`
			},

		]
	},
	{
		chapterIndex: 1,
		questions: [
			{
				question: "1. What does the universal selector (*) target in CSS?",
				solution: `Answer: It targets all elements on the page.
`
			},
			{
				question: "2. What is the purpose of a type selector in CSS?",
				solution: `Answer: It targets all elements of a specific HTML tag (like <p> or <h1>).
`
			},
			{
				question: "3. How do you select all elements with a class in CSS?",
				solution: `Answer: Use a class selector, e.g., .button.`
			},
			{
				question: "4. How do you target an element with a specific ID in CSS?",
				solution: `Answer: Use the ID selector, e.g., #header.`
			},
			{
				question: "5. What does grouping selectors do in CSS?",
				solution: `Answer: It allows you to apply the same styles to multiple elements.`
			},
			{
				question: "6. How do you style all <h1>, <h2>, and <p> elements at once?",
				solution: `Answer: Use a grouped selector: h1, h2, p { color: blue; }.`
			},
			{
				question: "7. What does nesting selectors mean in CSS?",
				solution: `Answer: It targets elements inside other elements (e.g., div p { color: red; }).`
			},
			{
				question: "8. What does the attribute selector ?",
				solution: `Answer: It targets all <input> elements with type="text".`
			},
			{
				question: "9. How can you select all links starting with  in CSS?",
				solution: `Answer: Use the selector [href^="https"] { color: green; }.
`
			},
			{
				question: "10. What does the :hover pseudo-class do?",
				solution: `Answer: It targets an element when it is hovered over, e.g., a:hover { color: red; }.`
			},
			{
				question: "11. What is a pseudo-element in CSS?",
				solution: `Answer: It targets parts of an element, like the first letter (p::first-letter).`
			},
			{
				question: "12. What is specificity in CSS?",
				solution: `Answer: Specificity determines which styles are applied when multiple rules target the same element. More specific rules override less specific ones.`
			},
			{
				question: "13. Which selector is more specific: an ID selector or a class selector?",
				solution: `Answer: An ID selector is more specific than a class selector.
`
			},
			{
				question: "14. What is inheritance in CSS?",
				solution: `Answer: It means some styles (like color) are inherited by child elements from their parent.`
			},
			{
				question: "15. If a parent <div> has color: blue;, will child elements inside it inherit this color?",
				solution: `Answer: Yes, child elements will inherit the color: blue; unless overridden.`
			},

		]
	},

	{
		chapterIndex: 2,
		questions: [
			{
				question: "1.What is the content area in the box model?",
				solution: `Answer: The content area is where the actual content (text, images, etc.) is displayed.`
			},
			{
				question: "2.What is padding in CSS?",
				solution: `Answer: Padding is the space between the content and the border of an element.

`
			},
			{
				question: "3.Can padding be set for each side of an element?",
				solution: `Answer: Yes, padding can be set individually for top, right, bottom, and left sides.

`
			},
			{
				question: "4.What is the purpose of a border in the box model?",
				solution: `Answer: The border surrounds the content and padding, providing a visual boundary for the element.

`
			},
			{
				question: "5.What does the margin property do?",
				solution: `Answer: Margin creates space outside the border, separating the element from others.

`
			},
			{
				question: "6.How do you set all margins at once in CSS?",
				solution: `How do you set all margins at once in CSS?`
			},
			{
				question: "7.What does the box-sizing property do?",
				solution: `Answer: It defines how the total width and height of an element are calculated, including padding and borders.`
			},
			{
				question: "8.What is the default value of box-sizing?",
				solution: `Answer: The default value is content-box, where padding and borders are added outside the width and height.

`
			},
			{
				question: "9.What happens when box-sizing: border-box; is used?",
				solution: `Answer: The width and height of the element include padding and borders, so the total size doesn’t increase.`
			},
			{
				question: "10.How do you apply box-sizing to all elements in a page?",
				solution: `Answer: Use * { box-sizing: border-box; } to apply it globally.

`
			},
			{
				question: "11.What is the difference between padding and margin?",
				solution: `Answer: Padding is the space inside the element, between content and border; margin is the space outside the element, between the border and other elements.

`
			},
			{
				question: "12.Why is box-sizing: border-box useful in responsive design?",
				solution: `Answer: It makes it easier to control the size of elements because padding and borders are included in the total width and height.

`
			}
		]
	},
	{
		chapterIndex: 3,
		questions: [
			{
				question: "1. What is static positioning in CSS?",
				solution: `Answer: Static is the default positioning, where elements are placed in the normal flow of the document (top-to-bottom).`
			},
			{
				question: "2. What does relative positioning do?",
				solution: `Answer: Relative positioning moves an element relative to its original position using top, left, right, or bottom.

`
			},
			{
				question: "3. How does absolute positioning work?",
				solution: `Answer: Absolute positioning moves an element relative to its nearest positioned ancestor, or the document if none exists.`
			},
			{
				question: "4. What is fixed positioning?",
				solution: `Answer: Fixed positioning keeps an element in the same position on the screen, even when the page is scrolled.`
			},
			{
				question: "5. What does the float property do in CSS?",

				solution: `Answer: The float property moves an element to the left or right, allowing other content to wrap around it.`
			},
			{
				question: "6. What is the clear property used for?",
				solution: `Answer: The clear property ensures that elements do not flow next to floated elements, forcing them to move below.`
			},
			{
				question: "7. What is Flexbox used for in CSS?",
				solution: `Answer: Flexbox is a layout model that helps align and distribute space between items in a container, both horizontally and vertically.

`
			},
			{
				question: "8. What does the justify-content property do in Flexbox?",
				solution: `Answer: justify-content aligns items horizontally within a flex container (e.g., center, space-between).

`
			},
			{
				question: "9. What is CSS Grid used for?",
				solution: `Answer: CSS Grid allows you to create complex, two-dimensional layouts with rows and columns.

`
			},
			{
				question: "10. What are grid areas in CSS Grid?",
				solution: `Answer: Grid areas allow you to name parts of your grid layout (like header, sidebar, and content) for easier control.`
			}, {
				question: "11. What is responsive design?",
				solution: `Answer: Responsive design makes a website look good on all devices by adjusting the layout based on the screen size.

`
			},
			{
				question: "12. What do media queries do in CSS?",
				solution: `Answer: Media queries apply different styles depending on the device's screen size or other characteristics, helping create a responsive design.

`
			},



		]
	},
	{
		chapterIndex: 4,
		questions: [

			{
				question: "What is RGB?",
				solution: `Answer: RGB stands for Red, Green, Blue, and combines these colors to make other colors.`
			},
			{
				question: "What is a HEX color code?",
				solution: `Answer: HEX is a 6-digit code used to represent colors, like #FF0000 for red.

`
			}, {
				question: "What is HSL?",
				solution: `Answer: HSL stands for Hue, Saturation, and Lightness, describing color with three values.

`
			},
			{
				question: "How do you set a background color in CSS?",
				solution: `Answer: Use background-color: color; (e.g., background-color: red;).`
			}, {
				question: "How do you add an image as a background?",
				solution: `Answer: Use background-image: url('image.jpg');.`
			},
			{
				question: "What does background-repeat do?",
				solution: `Answer: It controls if the background image repeats. Values are repeat, no-repeat, etc.`
			}, {
				question: "How do you position a background image?",
				solution: `Answer: Use background-position: position; (e.g., background-position: center;).`
			},
			{
				question: "What does background-attachment mean?",
				solution: `Answer: It determines if the background image scrolls with the page or stays fixed. Use scroll or fixed.`
			}, {
				question: "What is a radial gradient?",
				solution: `Answer: A radial gradient smoothly blends colors from the center outwards.

`
			},
			{
				question: "How do you create a linear gradient in CSS?",
				solution: `Answer: Use background: linear-gradient(direction, color1, color2);.`
			}, {
				question: "How do you create a radial gradient in CSS?",
				solution: `Answer: Use background: radial-gradient(shape, color1, color2);.`
			},

		]
	},
	{
		chapterIndex: 5,
		questions: [
			{
				question: "What is RGB?",
				solution: "Answer: RGB stands for Red, Green, Blue, and combines these colors to make other colors."
			},
			{
				question: "What is a HEX color code?",
				solution: "Answer: HEX is a 6-digit code used to represent colors, like #FF0000 for red."
			},
			{
				question: "How do you set a background image in CSS?",
				solution: "Answer: Use background-image: url('image.jpg'); to add an image as the background."
			},
			{
				question: "What does background-repeat do?",
				solution: "Answer: It controls whether the background image repeats. Use repeat, no-repeat, repeat-x, or repeat-y."
			},
			{
				question: "What is a linear gradient?",
				solution: "Answer: A linear gradient smoothly blends colors along a straight line. Example: background: linear-gradient(to right, red, blue);"
			}

		]
	},
	{
		chapterIndex: 6,
		questions: [{
			question: "What is the purpose of the `font-family` property?",
			solution: "Answer: `font-family` defines the type of font to use for text, like Arial or Times New Roman."
		},
		{
			question: "How do you set the size of text in CSS?",
			solution: "Answer: Use `font-size` to define the size of the text, such as `font-size: 16px;`."
		},
		{
			question: "What does the `font-weight` property do?",
			solution: "Answer: `font-weight` controls the thickness of the text, e.g., normal, bold, or light."
		},
		{
			question: "What is `line-height` used for?",
			solution: "Answer: `line-height` adjusts the space between lines of text to improve readability."
		},
		{
			question: "How do you change the space between letters in CSS?",
			solution: "Answer: Use `letter-spacing` to adjust the space between letters, like `letter-spacing: 2px;`."
		},
		{
			question: "What does `word-spacing` control?",
			solution: "Answer: `word-spacing` controls the space between words in a block of text."
		},
		{
			question: "What does the `text-decoration` property do?",
			solution: "Answer: `text-decoration` adds styles like underline, line-through, or overline to text."
		},
		{
			question: "How can you make text uppercase in CSS?",
			solution: "Answer: Use `text-transform: uppercase;` to change text to uppercase."
		},
		{
			question: "What are web-safe fonts?",
			solution: "Answer: Web-safe fonts are fonts that are widely supported across all browsers and devices."
		},
		{
			question: "What is the advantage of using Google Fonts?",
			solution: "Answer: Google Fonts offers a collection of free, easy-to-use, and web-optimized fonts."
		},
		{
			question: "How do you set a fallback font in CSS?",
			solution: "Answer: List multiple fonts in `font-family`, like `font-family: Arial, sans-serif;`."
		},
		{
			question: "Can you use custom fonts in your website?",
			solution: "Answer: Yes, you can use custom fonts from services like Google Fonts by linking them to your website."
		}


		]
	},
	{
		chapterIndex: 7,
		questions: [[
			{
				"question": "What are keyframe animations in CSS?",
				"solution": "Answer: Keyframe animations allow you to create smooth transitions between different styles at different points in time."
			},
			{
				"question": "How do you define a keyframe animation in CSS?",
				"solution": "Answer: You use `@keyframes` followed by the animation steps (e.g., 0%, 50%, 100%)."
			},
			{
				"question": "What is the purpose of the `animation` property?",
				"solution": "Answer: It is used to apply a keyframe animation to an element."
			},
			{
				"question": "What does the `transition` property do in CSS?",
				"solution": "Answer: It smoothly changes property values when an element’s state changes, like on hover."
			},
			{
				"question": "How can you control the speed of a transition?",
				"solution": "Answer: You can control it using the `duration` property (e.g., `0.5s`)."
			},
			{
				"question": "What are common timing functions for CSS transitions?",
				"solution": "Answer: `ease`, `linear`, `ease-in`, `ease-out`, and `ease-in-out`."
			},
			{
				"question": "What is the `transform` property in CSS?",
				"solution": "Answer: It allows you to move, rotate, scale, or skew an element."
			},
			{
				"question": "How do you rotate an element in CSS?",
				"solution": "Answer: Use `transform: rotate(45deg);` to rotate an element by 45 degrees."
			},
			{
				"question": "What does the `scale` function do in CSS?",
				"solution": "Answer: It changes the size of an element, like `transform: scale(1.5);` to make it 1.5 times bigger."
			},
			{
				"question": "What is the effect of the `skew` function in CSS?",
				"solution": "Answer: It slants an element, either horizontally or vertically."
			},
			{
				"question": "How do you create a hover effect in CSS?",
				"solution": "Answer: Use the `:hover` pseudo-class to define changes when the mouse hovers over an element."
			},
			{
				"question": "How can you combine `transition` and `transform` for a hover effect?",
				"solution": "Answer: By defining both properties in the `:hover` state to change the element’s style smoothly when hovered."
			}
		]


		]
	}

];


const notes = [
	{

		chapterIndex: 0,
		notes: [
			" CSS stands for Cascading Style Sheets and is used to style and design the layout of HTML elements on a webpage.",
			"CSS controls the appearance of HTML elements, including colors, fonts, sizes, positions, and more.",
			"CSS separates content from design by separating HTML (structure) from CSS (style), making code easier to maintain and update.",
			"CSS enhances user experience by making websites visually appealing and improving the layout and interactivity.",


			"Selectors in CSS are used to target HTML elements that you want to style (e.g., p, h1, or .button).",


			"CSS declaration consists of two parts: property (e.g., color) and value (e.g., blue).",


			"Inline CSS is written directly inside an HTML element using the style attribute and is not ideal for large projects.",
			"Internal CSS is written within a <style> tag inside the HTML document's <head> section, usually for smaller websites.",


			"External CSS is written in a separate .css file and linked to HTML using the <link> tag, which is best for large websites.",


			"Element Selector targets specific HTML elements, like p, h1, or div.",
			"Class Selector targets elements with a specific class, such as .button or .header.",
			"ID Selector targets an element with a specific ID, such as #header, making it unique within the page.",


			"Universal Selector (*) applies styles to all elements on the webpage.",
			"Linking an external CSS file to an HTML document is done using the <link> tag inside the <head> section.",
			"Responsive design in CSS adjusts the layout of a website to look good on different devices (e.g., mobile, tablet, desktop).",






		]
	},

	{
		chapterIndex: 1,
		notes: [
			"Universal Selector (*): Targets all elements on the page and applies styles universally. Example: * { color: red; } changes the text color for all elements to red.",
			"Type Selector (Element Selector): Targets specific HTML elements (tags) to apply styles. Example: p { font-size: 16px; } affects all <p> tags on the page.",
			"Class Selector (.): Selects elements with a specific class attribute. Example: .button { color: white; } applies styles to all elements with the class .",
			"ID Selector (#): Selects a specific element with a unique ID. Example: #header { background-color: blue; } applies styles to the element with ID .",
			"Grouping Selectors: Allows you to apply the same style to multiple elements by grouping them together. Example: h1, h2, p { color: blue; } will apply the color blue to <h1>, <h2>, and <p> tags.",
			"Nesting Selectors: Styles elements that are inside other elements. Example: div p { color: red; } targets <p> elements inside a <div>, making their text red.",

			"Attribute Selectors: Targets elements based on the presence or value of an attribute. Example:  border: 1px solid black; } styles <input> elements with the type .",
			"Attribute Selector with Value Prefix (^): Targets elements whose attribute value begins with a specific string. Example:  color: green; } styles all links starting with .",
			"Pseudo-classes: Styles elements based on their state or interaction, such as when a link is hovered over. Example: a:hover { color: red; } changes the color of a link when hovered.",
			"Pseudo-elements: Allows you to style specific parts of an element. Example: p::first-letter { font-size: 2em; } enlarges the first letter of each paragraph.",
			"Specificity in CSS: CSS specificity determines which rules are applied when multiple selectors target the same element. More specific selectors override less specific ones.",
			"ID Selectors vs. Class Selectors: ID selectors are more specific than class selectors. Example: #header has higher specificity than .button.",
			"Inheritance: Some CSS properties, like color and font-family, are inherited from parent elements to their children. Example: A <div> with color: blue; will cause all child elements inside it to inherit the blue color.",
			"Overriding Inherited Styles: You can override inherited styles with more specific rules, ensuring that child elements can have different styles from their parent elements.",
			"Importance of Understanding Selectors: Mastering CSS selectors, specificity, and inheritance is essential for controlling element styles, ensuring proper design, and avoiding style conflicts on a webpage.",

		]
	},
	{
		chapterIndex: 2,
		notes: [
			"Content: The actual material (text, images) inside an element.",
			"Padding: Space between content and the element border.",
			"Border: A line around the padding and content, visually separating them.",
			"Margin: Space outside the border, creating distance between elements.",
			"Box-Sizing: Controls how width and height are calculated in relation to padding and borders.",
			"content-box: Default value; padding and borders are added outside the content area.",
			"border-box: Includes padding and borders in the element width/height, making size predictable.",
			"Shorthand Notation: Set padding, margin, and border values for all sides at once (e.g., padding: 10px).",
			"Box Model Structure: Content → Padding → Border → Margin (from inside out).",
			"box-sizing: border-box: Simplifies layout by including padding and borders in the element's total size.",
			"Global box-sizing: Set box-sizing: border-box; globally for consistent layout behavior.",
			"Control Spacing: Adjust padding and margin to control space inside and outside elements.",
			"Layout Impact: Padding and borders affect element size, especially with content-box.",
			"Responsive Design: border-box helps prevent overflow and ensures consistent sizing on all devices.",
			"Practical Example: Use padding, border, and margin to design and space elements accurately.",

		]
	},
	{
		chapterIndex: 3,
		notes: [
			"generate 15 key points covering all topic from the content",
			"Relative Positioning: Moves an element relative to its original position.",
			"Absolute Positioning: Removes the element from the flow and positions it relative to its nearest positioned ancestor.",
			"Fixed Positioning: Keeps the element in a fixed position on the screen, even when scrolling.",
			"Float: Moves an element left or right, allowing text or content to wrap around it.",
			"Clear: Prevents elements from appearing next to floated elements, forcing them to clear below.",
			"Flexbox: A layout system that aligns and distributes space between items in a container.",
			"justify-content (Flexbox): Aligns flex items horizontally (e.g., center, space-between).",
			"align-items (Flexbox): Aligns flex items vertically (e.g., center, stretch).",
			"CSS Grid: A layout system that divides a container into rows and columns for complex designs.",
			"Grid Areas: Named areas in a grid to simplify layout management (e.g., header, sidebar).",
			"Responsive Design: Makes a website adapt its layout based on screen size or device.",
			"Media Queries: Apply different styles based on device characteristics like screen width or orientation.",
			"box-sizing: Determines how width and height are calculated, including padding and borders (use border-box for easier layouts).",
			"Shorthand for Margin/Padding: Define margin and padding for all sides at once (e.g., margin: 10px 20px 30px 40px).",

		]
	},
	{
		chapterIndex: 4,
		notes: [

			"RGB Color Model: Combines red, green, and blue light to create colors.",
			"RGB Values: Each color can have a value from 0 to 255.",
			"HEX Code: A 6-digit hexadecimal code that represents colors (e.g., #FF0000).",
			"HSL: Represents color using three components: Hue, Saturation, and Lightness.",
			"Hue: The type of color, expressed in degrees (0– 360°).",
			"Saturation: How vivid or dull a color is, from 0% (gray) to 100% (full color).",
			"Lightness: How light or dark a color is, from 0% (black) to 100% (white).",
			"Background Color: Sets the background color of an element using background-color.",
			"Background Image: Applies an image as the background with background-image: url().",
			"Background Repeat: Controls if the background image repeats, with values like repeat, no-repeat, etc.",
			"Background Position: Determines where the background image is placed (e.g., center, top left).",
			"Background Attachment: Specifies whether the background image scrolls with the page (scroll) or stays fixed (fixed).",
			"Linear Gradient: A gradient where colors transition along a straight line.",
			"Radial Gradient: A gradient where colors radiate outward from a central point.",
			"CSS Gradient Syntax: To create gradients, use background: linear-gradient() or background: radial-gradient().",


		]
	},
	{
		chapterIndex: 5,
		notes: [
			"RGB Color Model : Combines red, green, and blue light to create colors.",
			"RGB Values : Each color can have a value from 0 to 255.",
			"HEX Code : A 6-digit hexadecimal code that represents colors (e.g., #FF0000).",
			"HSL : Represents color using three components: Hue, Saturation, and Lightness.",
			"Hue : The type of color, expressed in degrees (0–360°).",
			"Saturation : How vivid or dull a color is, from 0% (gray) to 100% (full color).",
			"Lightness : How light or dark a color is, from 0% (black) to 100% (white).",
			"Background Color : Sets the background color of an element using background-color.",
			"Background Image : Applies an image as the background with background-image: url().",
			"Background Repeat : Controls if the background image repeats, with values like repeat, no-repeat, etc.",
			"Background Position : Determines where the background image is placed (e.g., center, top left).",
			"Background Attachment : Specifies whether the background image scrolls with the page (scroll) or stays fixed (fixed).",
			"Linear Gradient : A gradient where colors transition along a straight line.",
			"Radial Gradient : A gradient where colors radiate outward from a central point.",
			"CSS Gradient Syntax : To create gradients, use background: linear-gradient() or background: radial-gradient()."
		]
	},
	{
		chapterIndex: 6,
		notes: ["Keyframe Animations define steps for animating an element.",

			"@keyframes is used to create keyframe animations.",
			"Animation Properties include name, duration, and timing function.",
			"CSS Transitions create smooth changes between two states.",
			"Transition Properties control duration, delay, and timing.",
			"Timing Functions define the speed curve of transitions (e.g., ease, linear).",
			"Hover Effects apply styles when an element is hovered over.", "",
			":hover pseudo-class triggers hover effects.",
			"Transform Property modifies an element's shape or position.",
			"Rotate rotates an element using transform: rotate().",
			"Scale changes the size of an element with transform: scale().",
			"Skew tilts an element using transform: skew().",
			"Translate moves an element using transform: translate().",
		]
	}


]

const articles = [
	{
		chapterIndex: 0,
		articles: [

		]
	},
	{
		chapterIndex: 1,
		articles: ["", ""]
	},
	{
		chapterIndex: 2,
		articles: ["", ""]
	}
];

window.addEventListener("DOMContentLoaded", () => {
	// Initialize tab switching functionality
	handleTabSwitching();

	// Render chapters in the sidebar
	renderChapters(chapters);

	// Set chapter link listeners
	setChapterLinkListeners(chapters, practiceQuestions, notes, articles);
})
