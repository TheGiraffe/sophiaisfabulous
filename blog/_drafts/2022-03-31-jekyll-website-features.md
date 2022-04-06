---
layout: post
title: "Jekyll Website Features"
---
## DRY Navbar
<img src="{{ site.url }}/blog/images/jekyll_website_features/navbar.png" width="100%">

## Projects Gallery
So the Projects page gallery looks like this:

<img src="{{ site.url }}/blog/images/jekyll_website_features/projects_page.png" width="100%">

And when you hover over a gallery item, it looks like this:

![Project gallery item]({{ site.url }}/blog/images/jekyll_website_features/projects_page_hover.png)

The most important piece of code on the Projects page is this:

![Project page liquid]({{ site.url }}/blog/images/jekyll_website_features/liquid_1.png)

*Note: The second most important piece of code is this, which changes the layout of all those tiles to a Masonry grid layout, using the Masonry Javascript library:*

![Masonry library jquery]({{ site.url }}/blog/images/jekyll_website_features/masonry.png)

But anyways, back to dissecting this much more important piece of code:

![Project page liquid]({{ site.url }}/blog/images/jekyll_website_features/liquid_1.png)

We have a YAML file in our <code>_data</code> folder called <code>projects.yml</code>, and this Liquid for loop is looping through each item - called <code>project</code> - in that file, then including a file called <code>galleryitem.html</code> for each project.

The galleryitem.html file is located in the <code>_includes</code> folder, along with things such as the navbar and footer. It is essentially a piece of html code that can be included on various pages by specifying <code>{&#37; include galleryitem.html &#37;}</code> on the page.

![galleryitem.html file]({{ site.url }}/blog/images/jekyll_website_features/gallery_item.png)

Projects.yml looks like this:
![Projects.yml file]({{ site.url }}/blog/images/jekyll_website_features/projects_data.png)
