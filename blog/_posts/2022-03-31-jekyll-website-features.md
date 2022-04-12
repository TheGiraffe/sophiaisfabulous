---
layout: post
title: "Jekyll Website Features"
---
In this article, I am just going over some of the features of my personal jekyll website, and showing why Jekyll could be a good tool for generating static websites that contain lots of content such as blogs and galleries, without pulling your hair out. Jekyll websites are fast, secure, and simple, and below, I go over some features of Jekyll that I think are pretty powerful.

For other resources, I highly recommend checking out the [Jekyll docs](https://jekyllrb.com/docs/), and using their **amazing** [step by step tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/) to get started - and to see all the neat things that are possible! If you are new to markdown, this [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/) is a super awesome, helpful resource - for Jekyll sites, Github READMEs, and beyond!

### Jump to Section:
1. [Creating a DRY Code Navbar / Navigation](#section-1)
  - [Relevant GitHub code to see for this section](#section-1-code)
2. [Projects Gallery](#section-2)
  - [Relevant GitHub code to see for this section](#section-2-code)
3. [Page Templates](#section-3)
  - [Relevant GitHub code to see for this section](#section-3-code)
4. [Making Blog Posts](#section-4)
  - [Relevant GitHub code to see for this section](#section-4-code)
5. [Final Thoughts](#final-thoughts)


Hopefully, by the end of this post, you will see that Jekyll is ✨ *magical* ✨.
<a name="section-1"></a>
<br>

## Creating a DRY Code Navbar / Navigation
#### *i.e. The magic of using Includes*

<img src="{{ site.url }}/blog/images/jekyll_website_features/navbar.png" width="100%">

You can have a navbar included on every page, without having to type the same navbar code over and over again. This is advantageous as well for if those navbar links need to be changed or added to, or if you are as indecisive as me and am constantly changing the navbar content to be better organized.

So the <code>navbar.html</code> file is inside the <code>_includes</code> folder, like this:

![Includes folder]({{ site.url }}/blog/images/jekyll_website_features/includes.png)

When we open <code>navbar.html</code>, it looks like this:

<img src="{{ site.url }}/blog/images/jekyll_website_features/navbar_liquid.png" width="100%">

You'll notice that all the links lead to paths that look something like this:
<img src="{{ site.url }}/blog/images/jekyll_website_features/siteurl.png" width="100%">

Where there is the <code>{&#123;  site.url 	&#125;}</code> liquid variable. What we are doing, is taking the site url and adding the proper path after it. This way, we don't run into any problems with relative paths, we are just using the absolute path, and the navbar code will work on any page, even those in nested folders. Blog folders are especially nested when they are generated in the <code>_site</code> by Jekyll, they get nested first in a folder by year, then in one by month, then in one by date, hence why it is essential to use absolute versus relative paths.

Once you put the navbar in the <code>_includes</code> folder, you can include the navbar on a page like this:

![Include Navbar]({{ site.url }}/blog/images/jekyll_website_features/includenavbar.png)

Easy peasy. :)

All in all, Jekyll's <code>_includes</code> folder and site url variable have solved a problem that I've had for a long time with the older versions of my personal website when I was younger, I kept having navbar links break on different pages, and I kept having to copy/paste the same navbar code onto each page.

<a name="section-1-code"></a>
<br>

#### Relevant GitHub code to see for this section:
 - [_includes/navbar.html](https://github.com/TheGiraffe/sophiaisfabulous/blob/master/_includes/navbar.html)

<a name="section-2"></a>
<br>

## Projects Gallery
#### *i.e. The magic of using YAML files & Liquid for loops*

So the Projects page gallery looks like this:

<img src="{{ site.url }}/blog/images/jekyll_website_features/projects_page.png" width="100%">

And when you hover over a gallery item, it looks like this:

![Project gallery item]({{ site.url }}/blog/images/jekyll_website_features/projects_page_hover.png)

The most important piece of code on the Projects page is this:

![Project page liquid]({{ site.url }}/blog/images/jekyll_website_features/liquid_1.png)

<br>
<div style="background-color:#cfeee9ff; padding:1em">
<i>Note: The second most important piece of code is this, which changes the layout of all those tiles to a Masonry grid layout, using the Masonry Javascript library:</i>
<br>
<img src="{{ site.url }}/blog/images/jekyll_website_features/masonry.png" alt="Masonry library jquery" width="50%">
</div>
<br>

But anyways, back to dissecting this much more important piece of code:

![Project page liquid]({{ site.url }}/blog/images/jekyll_website_features/liquid_1.png)

We have a YAML file in our <code>_data</code> folder called <code>projects.yml</code>, and this Liquid for loop is looping through each item - called <code>project</code> - in that file, then including a file called <code>galleryitem.html</code> for each project.

The galleryitem.html file is located in the <code>_includes</code> folder, along with things such as the navbar and footer. It is essentially a piece of html code that can be included on various pages by specifying <code>{&#37; include galleryitem.html &#37;}</code> on the page.

The gallery item file looks like this:

<img src = "{{ site.url }}/blog/images/jekyll_website_features/gallery_item.png" alt="galleryitem.html file" width="100%">

So, what happens is that this code gets inserted into the main <code>projects/index</code> page many times as the for loop loops itself. At each iteration of the for loop, <code>project</code> is set to a different entry in the <code>projects.yml</code> file, and so the gallery item loaded into the html uses that version/iteration of <code>project</code>. The project <code>pagename</code> is used with liquid to generate the div ids for the container and details, which allows the jQuery code below it to work - hence the fadeIn and fadeOut behaviour of the project pagename details upon hover.

Some of this may make more sense by looking at the projects.yml file below:
<img src = "{{ site.url }}/blog/images/jekyll_website_features/projects_data.png" alt="Projects.yml file" width="100%">

**So, to reiterate:**

What's going on here is that, for every <code>project</code> in <code>projects.yml</code>, we generate a gallery item <code>div</code> that uses the project <code>name</code> for the heading (in the galleryitemname div), its <code>description</code> and <code>tags</code>, and most importantly, its <code>pagename</code> to make it link to the correct url, but also because the pagename is used to generate the unique div ids for the gallery item div, if that makes sense:

![pagename container details]({{ site.url }}/blog/images/jekyll_website_features/container_details.png)

So for a project with the pagename asthimo, the id of the container div will be <code>asthimocontainer</code> and the id of the details div would be <code>asthimodetails</code>.

And, like, this is so neat because Jekyll goes and generates the static site for you! Without you having to repeat yourself and pull all the hair out of your head! So, for the asthimo iteration of gallery details, the actual page source of my projects gallery page looks like this:

![page source asthimo]({{ site.url }}/blog/images/jekyll_website_features/pagesource.png)

All of the asthimo details are filled in from projects.yml! 🤩

I highly recommend going over to <a href="https://sophiaisfabulous.com/projects/">https://sophiaisfabulous.com/projects/</a> and looking over the page source.

<a name="section-2-code"></a>
<br>

#### Relevant GitHub code to see for this section:
 - [projects/index.html](https://github.com/TheGiraffe/sophiaisfabulous/blob/master/projects/index.html)
 - [_includes/galleryitem.html](https://github.com/TheGiraffe/sophiaisfabulous/blob/master/_includes/galleryitem.html)
 - [_data/projects.yml](https://github.com/TheGiraffe/sophiaisfabulous/blob/master/_data/projects.yml)

<a name="section-3"></a>
<br>

## Page Templates
#### *i.e. The magic of using Layouts*
Say that you have a lot of different pages that basically need to look the same, but hold different content. Well, *ta-da!* there is a solution for this, called Layouts! So, let's use a project page as a template. From the project gallery, you can see the project page for any project by clicking "Visit Project" for any project. A project's project page looks something like this:

<img src="{{ site.url }}/blog/images/jekyll_website_features/project-page.png" width="100%">
<br>

<img src="{{ site.url }}/blog/images/jekyll_website_features/project-page-2.png" width="100%">
<br>

<img src="{{ site.url }}/blog/images/jekyll_website_features/project-page-3.png" width="100%">

As you can see, it's basically the same layout, with varying content.

How this works is that we create a <code>_layouts</code> folder in our Jekyll project, and then we create an html file inside it that is the layout/template that we want to use for multiple pages. Just like what we did with <code>_includes</code>.

The layouts folder looks like this for my website:

![layouts file structure]({{ site.url }}/blog/images/jekyll_website_features/layouts.png)

Let's take a look at <code>project.html</code> to see how the layout is put together, and where the content goes in it.

<img src="{{ site.url }}/blog/images/jekyll_website_features/project_html.png" width="100%">

Okay that's probably hard to read lol. But the important thing is that you put together an HTML file with all of the stuff that you want repeated across each page that you want to apply the layout to. And then, wherever you want the unique content to go, you add a tag that says: <code>{&#123;  content 	&#125;}</code>

![content tag]({{ site.url }}/blog/images/jekyll_website_features/content_tag.png)

*Ta-da!* it's magic lol.

When you want to use that layout on a specific page, all you have to do is add it to the very top of a markdown file (that you want to be generated into a webpage on the final site,) between some dashed lines:

![content tag]({{ site.url }}/blog/images/jekyll_website_features/layout_project_liquid.png)
<br>
<div style="background-color:#cfeee9ff; padding:1em">
<i>Note: If you are wondering, "wtf, we're using markdown files now? I thought everything so far was html", I completely understand! We have been using html files up to this point - so no, you aren't losing your mind - but for pages that use layouts, those need to be .md files instead of .html files. The ✨ magic ✨ of Jekyll is being able to take all these markdown files, and then generate them into html files to be served statically. The generated html files are stored in a folder called <code>_site</code>, and that is where the website is actually served from when you visit it via localhost or when deployed to Github Pages!</i>
<br>
<br>
<i>For a brief example, consider my <code>_site</code> directory below, where I expanded the projects subfolder. In the projects folder that I created outside of <code>_site</code>, all of the file names for each project page end in <code>.md</code>. However, if you look at the <code>_site</code> version of projects, the <code>.md</code> files are now <code>.html</code> files!</i>
<br>
<br>
<img src="{{ site.url }}/blog/images/jekyll_website_features/site_project_html_files.png" alt="site folder projects" width="25%">
</div>
<br>

Okay, anyways, one thing that can be noted is that, on a typical project page of my website, a lot more information is passed over rather than just the layout:

<img src="{{ site.url }}/blog/images/jekyll_website_features/asthimo_variables.png" alt="site folder projects" width="100%">

All of those things between the dashed lines (called *Front Matter*) are variables that the webpage can use. Basically all of the variables in the front matter of this page were actually referenced in the <code>_layouts/project.html</code> template file instead of in the asthimo.md page that we are seeing here, but you can also reference the variable in the page itself using: <code>{&#123;  page.variable-name 	&#125;}</code>.

Specifically for the project example, we can see where the variables listed in the screenshot above are used to populate the project template when it is applied to a page. All of the following screenshots are from <code>_layouts/project.html</code>.

 - Here, we are taking the page <code>title</code> variable, which in the case of asthimo, appears to just be <code>Asthimo</code>:

    ![page title]({{ site.url }}/blog/images/jekyll_website_features/project_page-title.png)
 - And here, you can see a lot of the other page variables referenced. Note that most of these variables are set to a value in the front matter of asthimo.md, however, the ones that aren't set to a value yet, such as <code>projecttags</code> just get rendered blank on the generated web page, rather than throwing an error or breaking things. It's pretty fool-proof, though I'm sure there are still plenty of ways to break it, and that I will find a way to break it on accident one day and cause myself a mental breakdown.

    ![page variables]({{ site.url }}/blog/images/jekyll_website_features/project_page-variables.png)

But yeah, that's basically all you need to know to get started with Layouts / page templates. Just make yourself an html file template in the <code>_layouts</code> folder, find places where you want the <code>{&#123;  content 	&#125;}</code> and page variables to be, then use the front matter on a markdown file to specify the template that you want to use and set the page variables!
<a name="section-3-code"></a>
<br>

#### Relevant GitHub code to see for this section:
 - [_includes/project.html](https://github.com/TheGiraffe/sophiaisfabulous/blob/master/_layouts/project.html)
 - [projects/asthimo.md](https://raw.githubusercontent.com/TheGiraffe/sophiaisfabulous/master/projects/asthimo.md) as an example of how a markdown project page - using the project layout, front matter, and page variables - looks.
    - And [_site/projects/asthimo.html](https://github.com/TheGiraffe/sophiaisfabulous/blob/master/_site/projects/asthimo.html) to show what the html file generated from that markdown file looks like on the final site.

<a name="section-4"></a>
<br>

## Making Blog Posts
#### *i.e. The magic of the Posts folder*

**This is a little meta lol.** Anyways, adding a blog / post functionality to a Jekyll website is pretty similar to the project gallery example from before, but even easier thanks to a magical folder specifically for posts!

Anywhere in your website, you can add a <code>_posts</code> folder to hold all of your blog posts and drafts and things. I decided that I wanted my <code>_posts</code> folder nested within another folder called <code>blog</code> both for organization reasons and so that someday when I'm not a lazy sloth, I can build up a full blog feed functionality (with tags and search all that jazz) on the <code>blog/index</code> page.

Currently the main / index file of my blog probably looks something like this, so obviously, being a lazy sloth 🦥 has won for the time being:

<center><img src="{{ site.url }}/blog/images/jekyll_website_features/blog-page-sad.png" alt="site folder projects" width="100%">
<i>Lol my first blog post (Hello, World!) is so random, what even is that? </i>
<br>
<i>Obvs I'm not exactly a super consistent blogger yet - if the fact that this post is labeled 31 March and yet wasn't pushed until 12 April wasn't already enough indication.</i> 😂
</center>
<br>

Anyways, go create your <code>_posts</code> folder, and then you can add your first post to it! The format of how the file should be named is: <code> YEAR-MONTH-DAY-title.md </code>. For example, this post that you are currently reading is titled: <code>2022-03-31-jekyll-website-features.md</code>. The full path of it in my jekyll project is <code>blog/_posts/2022-03-31-jekyll-website-features.md</code>. The path in the final generated <code>_site</code> will be a little different, but I will touch on that later.

From here, all you have to do is add the front matter to the top of the post, as the layout needs to be the post layout and title (see screenshot below), and then start writing your ideas for the world to enjoy or cruelly roast! (Or both, the world is fickle lol.)

<img src="{{ site.url }}/blog/images/jekyll_website_features/blogpost_topportion.png" alt="my post layout example" width="100%">

Now, you probably should actually create a post layout, so a file called <code>post.html</code> in your <code>_layouts</code> folder, so that your post can live in a proper webpage with a navbar and some sort of nice layout for reading and all that jazz. My post layout is shown below, it's not exactly finished because it could use more regular blog-like functionality, but it's okay for right now while I'm being a lazy sloth 🦥 :

<img src="{{ site.url }}/blog/images/jekyll_website_features/post_layout.png" alt="my post layout example" width="100%">
<br>

It appears that the <code>page.date</code> automatically got passed from the post - I guess from the title or its details or something? Idk, I think it's just magic lol.

And, by the way, if you have been working on a post for ~~several days~~ several weeks and are still not finished with it, and want to store it somewhere where visitors to your site can't find it and roast you, you can create a <code>_drafts</code> folder within your <code>_posts</code> folder. You can also add <code>_drafts</code> to your <code>.gitignore</code> if you're using git and don't want folks to see anything in your drafts, however, that's too much work for lazy sloth so I haven't really done that yet.
<br>
<br>

Okay, so once you are done with your post and you're super happy with it (and it's properly located in the <code>_posts</code> folder & not nested under <code>_drafts</code>!), you can <code>jekyll serve</code> (or sometimes just press save depending on your setup) and have Jekyll generate the actual html file and file structure of the post. What I mean by this is... Well, have a look at what's going on in <code>_site</code> once this has been generated:

![site folder blog structure]({{ site.url }}/blog/images/jekyll_website_features/sitefolder_blog.png)

Aaah! That's a lot of nesting! And this is kinda concerning because, say you put a bunch of images for your post in an images folder within the blog folder. How are you going to access this without having to count the nesting for every single post depending upon the day, month, and year that it's published? It sounds like a massive headache! Well, that's where our dear friend <code>{&#123;  site.url 	&#125;}</code> comes in handy, and I think I may have mentioned the blog nesting issue further up in this post when I first introduced it. That was eons ago though lol. So, basically, make sure that you are specifying your image paths absolutely using <code>{&#123;  site.url 	&#125;}</code> rather than relatively. For example, the markdown image code that I used to include the image directly above was:

![markdown - site folder blog structure]({{ site.url }}/blog/images/jekyll_website_features/markdown_sitefolderblogstructure.png)
<br>
<br>

This post is getting so very meta lol. Anyways, the last thing I want to discuss before I go back to being lazy is how I put together this kinda half-assed blog page that only displays, titles, dates, and a very short blurb from the original post, because it might be a good jumping-off point for a more sophisticated looking blog page.

<img src="{{ site.url }}/blog/images/jekyll_website_features/blog-page-sad.png" alt="site folder projects" width="100%">

Dismissing the front matter specifying the page layout and title and other variables for the page, which I didn't include btw, the **only** HTML code on the <code>blog/index.html</code> page is:

![blog index html content]({{ site.url }}/blog/images/jekyll_website_features/blog_html_content.png)

This is super similar to what we did with the projects page, except, we **do not** need to create a <code>posts.yml</code> file! It just knows what a post is! The post url, post date, and post excerpt are automatically taken from the post using magic or something, and the post title was specified in the post's front matter so that gets taken too. And so, yeah, it just uses a for loop to display this information for each post that exists.

You can read more information about posts and what you can do with them, and some slightly better advice regarding images/assets than my advice lol, all here on the <a href="https://jekyllrb.com/docs/posts/">page in the Jekyll docs</a>.
<a name="section-4-code"></a>
<br>

#### Relevant GitHub code to see for this section:
 - [blog/_posts/2022-03-31-jekyll-website-features.md](https://github.com/TheGiraffe/sophiaisfabulous/blob/master/blog/_posts/2022-03-31-jekyll-website-features.md) - as an example, link to the markdown version of this post.
 - [blog/index.html](https://github.com/TheGiraffe/sophiaisfabulous/blob/master/blog/index.html)

## Final Thoughts

1. Omg this took forever lol.

2. Feel free to go through and stalk my Jekyll website code at [https://github.com/TheGiraffe/sophiaisfabulous](https://github.com/TheGiraffe/sophiaisfabulous).
    - But please don't stalk me as a person.
<br>
<br>

3. It might be awkward if a future employer ever read the way I wrote this.

4. Jekyll is ✨ *magic* ✨ and despite being a static site generator, can actually do a lot of things that developers often use much more complicated tools / frameworks for. It is super simple and easy to learn, very secure in comparison to other platforms typically used for blogs, and very easy to deploy (which I didn't really touch on in this guide, but please believe me!). I am particularly fond of how it makes use of the Liquid templating language. Overall, these attributes make it quite powerful. I am excited to see what else I can do with it in the future!

5. **There are also a lot more things that you can do with Jekyll!** Are you interested in adding [comments](https://jekyllrb.com/resources/#comments) to your blog posts or [e-commerce](https://jekyllrb.com/resources/#e-commerce) functionality? The Jekyll website's [Resources](https://jekyllrb.com/resources/) page has a bunch of resources that can help level up your Jekyll website to :100:
    - This [repo](https://github.com/planetjekyll/awesome-jekyll-plugins) also appears to have a bunch of really good jekyll plugins, although I haven't tested most of them out myself. One plugin I do use though is [jemoji](https://github.com/jekyll/jemoji) because I'm mildly obsessed with emojis. :star: :star: :star:
