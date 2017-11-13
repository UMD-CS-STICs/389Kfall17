# Week 1: HTML, CSS
-------------------------

### What is HTML?

HTML **(Hypertext Markup Language)** is the code that is used to structure and display a web page and its content.

### Setup
---------

Create file named `index.html`.

Open it in your text editor and browser.

**Basic HTML document structure.**

Insert the following into your `index.html` file.

```html
<head>
    <!-- meta-info here --> <!-- By the way, this is how you would write comments in HTML -->
</head>
<body>
    <!-- page content here -->
</body>
```

### Tags and Elements
-------

HTML tags define **elements** that wrap content.

For example, this is an HTML paragraph tag :
```html
<p> this is text </p>
```

The main parts of an HTML element are:  
- Opening tag (`<p>`)
- Closing tag (`</p>`)
- Content (`text`)

Together, these parts form what we call an **element**.

Important elements you should know are:
```html
<h1> - <h6>   Heading
<p> Paragraph
<i> Italic
<b> Bold
<a> Anchor
<ul> + <li> Unordered List and List Item
<blockquote>    Blockquote
<hr>    Horizontal Rule
<img>   Image
<div>   Division
```

Try experimenting with different elements and layouts to see how they are rendered in the browser.

**Create h1 Element**

In the body, create an h1 element with the text content "UMD Courses".

```html
<h1>UMD Courses</h1>
```

### Header
-----------

There's a special tag in HTML that's just made for headers. It's called `<header>`. Do not confuse it with the `<head>` tag!

```html
<header>
    <h1>UMD Courses</h1>
</header>
```

Header is a `container` element -- it wraps other elements, just like body or html.

### Body Content
----------------

Add the following in the body, under the header.

```html
<h2> Title </h2>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione a odio fugit, illum, soluta explicabo doloremque et! Cupiditate odio reprehenderit ut ipsa voluptates architecto, consectetur asperiores. Saepe sunt, fugiat molestiae!
```

### Element attributes
----------------------

Elements can additionally have attributes.

For example:

```html
    <p class="editor-note" id="web"> this is text </p>
```

These attributes can store extra information in the element. We can later access these attributes in a certain way, to help the browser render the elements in certain ways.

### Images
---------

In the header, above the `h1` element, add a image tag.

```html
<header>
    <img>
    <h1>UMD Courses</h1>
</header>
```

Set the attribute `width="150px"` to the image. Also set the attribute `src` to a url link to an image. For example,

```html
<img src="http://thestamp.umd.edu/portals/0/Images/Shops%20and%20Services/terapinLogo.png" width="150px">
```

### Navigation Bar
------------------

Navigation bar can be designed as a unordered list. Here is how you make an unordered list. Add it below the h1 element in the header.

```html
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Other</li>
</ul>
```

But these have to be links, so we need a link tag, aka `anchor tag`

```html
 <ul>
    <li>
        <a href="http://google.com">Home</a></li>
    <li>
        <a href="http://facebook.com">About</a>
    </li>
    <li>
        <a href="#">Other</a>
    </li>
</ul>
```

### **Attributes**

In addition to the tag name, elements can have attributes. Anchor tag has attribute called href (hypertext reference) which defines the url the link points to.

## CSS
------

CSS is a way for us to make our HTML look pretty. We can use the `<style>` tag to do this. The `<style>` tag is written between the opening and closing anchor of the `<head> element like so:

```html
<head>
    <style>
    /* Your CSS code here... */
    </style>
</head>
```

Note that comments in CSS are written using ``slash-asterisk`` notation, which is C-like.

### CSS Reset
-------------

Link tags lets you include CSS from an external file (`.css` file called a **stylesheet**).

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css">
```

href: URL of CSS stylesheet
rel: stylesheet (relation)

We use `normalize.css` simply because it is a css file that renders everything consistently with modern standards. Some tags have styling be default that we do not want.

### Important: Order of link and style tags matters!
-----------------------------------------
It is important to note that if you write your CSS code between the `style` elements opening and closing anchor *before* you use the `link` element to link to a stylesheet, any CSS code between those anchors will be **shadowed** by CSS code inside the stylesheet **that affects the same elements**. For example, if you navigate to 
[https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css](`https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css`) (just click on the link or copy and paste the URL  into your browser's address bar) you will notice the following CSS code:

```css
h1{ 
    font-size: 2em;
    margin:0.67em 0;
}
```

We can disregard the second line of code for now. The first line, however, is of interest to us. What it does is select **all** `<h1>` elements inside our HTML file (like the one we have already written) and tell the browser to render those headers with a font size of 2em ([Wikipedia link on what em means](https://en.wikipedia.org/wiki/Em_(typography))). If we were to type the following CSS code inside our `style` element:

```css
h1{
    font-size: 10em;
}
```

and inserted the `style` element **underneath** our `link` element inside the `head` element, we will be **shadowing** the `font-size` CSS definition inside `normalize.css`. To convince yourselves that this is true, paste this inside your `head` element and then open `index.html` with your browser:

```css
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css">
<style>
    h1 {
        font-size:10em;
    }
</style>
```

You should be seeing *UMD Courses* in **very** large letters. :)
Then, switch the order around to have the `<link>` attribute **after** the `<style>` attribute. Reload your browser. What happens now?

Before going forward, make sure that:

    - You have erased the CSS code you wrote above, and
    - You have your `style` element **after** the `link` element. In **all** of the subsequent exercises, we will assume that your `style` element is written **after** the `link` element.
 
### Center header
-----------------
Type the following CSS code inside your `style` element:

```css
header {
    text-align: center;
}
```

### Push over the bullet points
-----------------------

By setting the padding to ten, we push over the bullet points off screen.

```css
ul {
    padding: 10px;
}
```

### Inline display
------------------

Make the elements come next to each other.

```css
li {
    display: inline;
}
```

**Block vs. Inline elements**

Block element examples: headings, paragraphs, list items (by default). Block elements stretch the whole width of the webpage and have line breaks before and after.

Inline element examples: links (by default). Inline elements take up minimum space, and exist within the normal flow of the text. No line breaks precede *or* follow the element.

### Padding:
-------------

Let's expand our `li` selector with another line of code that defines the *padding* CSS property for list items:
```css
li {
    display: inline;
    padding: 0px 10px 0px 10px; /* top right bottom left */
}
```

When we have 1 value for padding, it sets that padding on all four sides.

When we have 4 values, we individually define the padding for each side. The order is **clockwise**: top right bottom left.

We can also have 2 values. Then, we once again end up following a clockwise order: the first value is applied to the top, then the second value to the right, and then we cycle back to the first value for bottom and the second value for left. Temporarily comment out (using CSS style comments!) the second line of the CSS code above and replace it with `padding: 0px 10px;` to convince yourselves that the results are exactly the same.

**Open chrome dev tools and show**

### Header styles
-----------------

Type this inside the `<style>` element:

```css
header {
    text-align: center;
    background: url("http://www.mtech.umd.edu/news/press_releases/images/UMD_aerial_fullres.png");
    background-size: cover;
}
```

Let's make the color of the header white to make it more compatible with our new background color:

```css
header {
    /* ... */
    /* Properties you typed above ... */
   /* ... */
    color: white; /*NEW*/
}
```

### Small Adjustments
---------------------

Make the title larger

```css
h1 {
    font-size: 70px;
}
```

Add space between top of page and image.

```css
img {
    margin: 40px 0 0 0;
}
```

Margin creates space on the outside, while padding creates space on the inside.

```css
img {
  /*  margin definition as is */
    border: 7px solid red;
    border-radius: 20px;
    background-color: brown;
}
```

### Navigation bar
------------------

Change the background color of the navigation bar unordered list to black, and style the links.

```css
ul {
    /* padding definition as is */
    background: black;
}
```

The links stay blue because, unlike most other elements like headings and paragraphs, links dont inherit color from their parent element. In this case, the parent element of the `<a>` anchor is the `<li>` element. We only want to color the links, so we use CSS to explicitly set the color **just for the anchor elements**. We also add some more code to make links stand out more. Notably, we make the background **just for the links** gray. Reload your browser after you type this inside your `<style>` element to see how the colors co-exist around the navigation bar.

```css
a {
    color: white;
    text-decoration: none; /*-- No underlines below links */
    background-color: gray;
    padding: 5px;
    border-radius: 5px;
}
```

### Articles
------------

Let's make some changes to the content of our text. Replace the **entire** text and `<title>` element after the `<head>` element to instead contain this:

```html
    <article>
        <h3>Search School Name:</h3>
        <input type="text" placeholder="Ex: CMSC"> <!-- Gives you a text box where you can type, like in forms. -->
        <button>Search! </button>   <!-- A button-like object that is meant to be clicked. -->
        <button> Clear Results </button>
    </article>
```
This way, our article wraps all the text that follows the header. You can find more information about the `<article>` tag on the [Mozilla Developers webpage](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article). 

Making articles narrower and centered makes them easier to read.

```css
article {
    width: 500px;
    padding: 20px;
}
```

To center them, we can define the margin on the right and the left to the value `auto`. This tells the browser to automatically balance the `<article>` element **based on the parent element's width** (so, when specified on the left and right, it centers it horizontally). In this case, the parent element is `<body>`. `normalize.css` defines the margin of the `<body>` to be 0, and we have not added a selector for `body` between the `<style>` tags. Therefore, `<body>` will expand to fill the entire web browser tab.

```css
article {
    width: 500px;
    padding: 20px;
    margin: 0 auto;
}
```

Using `auto` cleverly is a very good trick used all the time.

### Responsiveness
------------------

Try resizing the browser to see how the website reacts. It is important to realize that our website needs to adapt to many situations, and one of the most basic ones are a use resizing the browser window. More complex ones include viewing websites through phones, tablets, small and big resolution computers, and different operating systems/browsers. This adaptability of a website to numerous client-side variations is called its **responsiveness**. Building responsive websites is of paramount importance.

### Responsiveness for navigation
---------------------------------

Try adding this CSS rule, and then resizing the webpage:

```css
@media (max-width: 500px) {
   body {
        background: red;
   }
}
```

Now, when you make the webpage less than 500px wide, the webpage should turn red.

Here are several rules to enable when the website becomes to small. Paste them in and try resizing the browser now.

```css
@media (max-width: 500px) {
    h1 {
        font-size: 36px;
    }
    li {
        display: block; /*Makes them next to each other*/
        padding: 7px 0 7px 0; /*Change the padding to top and bottom now*/
    }
    a {
        padding: 5px 40% 5px 40%; /*Make them easier to click on*/
    }
}
```

Let's make one last style change to the links:

```css
a {
    /* All other properties as they were... */   
    padding: 5px 100px;
}
```
