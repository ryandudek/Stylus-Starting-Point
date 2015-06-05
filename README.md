# Stylus Starting Point
I have developed this starting point as a way to easily and rapidly begin working on a project using [Stylus](https://learnboost.github.io/stylus/) as my CSS pre-processor of choice. The idea is a combination of reset CSS, normalize CSS, and a baseline for my project to work from. It is customizable through variables. I have also included some basic mixins that I use on all of my projects and tools that I find handy in my development method. To use this starting point, simply download/fork/clone the source, ensure that all requirements are installed, then run `$ gulp` from your command line.

## Requirements:
* **npm** (curl -L https://www.npmjs.org/install.sh | sh)
* **gulp** (npm install -g gulp)

[Having trouble with npm?](https://gist.github.com/DanHerbert/9520689#solution)

## Steps to run/build:
From the command line, run the following tasks:  
+ `$ npm install`
+ `$ gulp`

# What's Included?

## Variables
You can easily edit your starting point through the variables starting point included. I have broken it down into three sections.

## File Paths
Having worked on projects in the past where I couldn't remember the exact file path from the generated CSS file to the images or fonts, I started using variables as an easy way to remember these paths.

### Fonts
For demonstration purposes, I have included Lato (Regular, Bold, and Italic) as a truetype only font in `/styl/core/_fonts.styl`. This is the file in which you would include or import any fonts you want to use on your project. Then, simply declare vairables for each font you are using in `/styl/_variables.styl` and create your font stack (or font stacks) in this same file. Lastly, make sure you add your font stack(s) in `/styl/core/_baseline.styl`.

### Colors
In `/styl/_variables.styl`, I have created a small number of color variables. Body, header, footer, and module background and font colors should be enough to get you started.

## Icons
Every project uses some form of icons for a variety of reasons. The purpose of `/styl/core/_icons.styl` is to begin the icon set, keep it organized in one place, and to use the Image Replacement mixin for the icons.

## Mixins
A lot of useful mixins are included with Nib (see below), but I have included two that I find to be useful.

### Font-Size
This font-size mixin is useful for creating rem font-sizes without having to do the math. Simply pass in your desired font-size and let the mixin handle the reset.  
  
Example:  
```css
p
    fontSize(18px)
```

### Image Replace
This is a simple mixin that I have used for years for pushing text past the visible area of a background image to give screen reader users context as to what the image is. For example, a link to Twitter with no visible text, only an icon as a background image.  
  
Example:  
```html
<a href="http://twitter.com/coffee_dad" class="icon--twitter">Follow @coffee_dad on Twitter</a>
```  
```css
.icon--twitter {
	background: url($imgPath + 'icons/twitter.png') no-repeat 0 0
	background-size: cover
	imageReplace(40px, 40px)
}```


## Beacon (for em-based media queries)
On a recent project with a large focus on accessibility, we realized the benefits of using [em based media queries](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/) and how we could give users on small screens with large font sizes a better user experience. Where we began to fall short was when we realized that our javascript wasn't always respecting the user's preference. This beacon should be used in conjunction with [the javascript methodology](http://www.ashtonharris.me/#!/responsive_js) that [Ashton Harris](https://github.com/aharris) documented in his blog post.

## Toolset
I have added a very simple toolset to this repository. It is only meant to be a starting point, so you will want to update the gulpfile (or even replace it with a similar gruntfile, etc.) to include any other tools that your project will be using and to add the paths you want on your project. These tools are all related to the CSS and a simple build process.

### Jeet
[Jeet](http://jeet.gs/) is a very simple, easy to read, and intuitive grid system. It only adds the code you define, so including Jeet and not using it isn't going to bloat your CSS.

### Rupture
[Rupture](http://jenius.github.io/rupture/) is a handy, readable, and awesome way to write media queries in Stylus. However, like everything that makes development simpler, it is also very easy to mis-use. The first time I used Rupture, I had media queries nested inside of selectors and wasn't writing my CSS very efficiently, so I present to you [How to Write Rupture Media Queries Like a Person Who Isn’t a Jerk](https://docs.google.com/document/d/1tUUGhflUagSd7HRxvG1IiiijLODnKlgm84mReGP53IM/edit?usp=sharing)

### Nib
[Nib](http://tj.github.io/nib/) is a Stylus library similar to Compass in Sass. It contains a lot of awesome and useful mixins, but please, don't use the resets considering that it may undo a lot of the work that is being done in this starting point.

### Gulp
[Gulp](http://gulpjs.com/) is a workflow tool that is super handy for front end development. Watch your files for automatic recompliation / rendering. Automatically minify images and javascript. Run a local server. Sure, there are other ways to do this, but I really like Gulp a lot. The gulpfile included in this starting point is very simple, you will definitely want to add to it (or switch it out with another tool).