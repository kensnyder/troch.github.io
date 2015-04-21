---
title: Tour of Node building tools
draft: false
date: 2015-04-18 12:00:00
author: Thomas Roch
tags: node,nodejs,javascript,grunt,gruntjs,gulp,gulpjs,broccoli,broccolijs,build automation,build tool,task runner
---

# A tour of Node building tools

In this series of articles, we'll explore popular Node based tools for building web applications.
Although `npm` itself can be used for build automation (see ["How to use npm as a build tool"](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)),
we will focus on the specialised npm packages: `grunt`, `gulp` and `broccoli`. We will try to understand what problem they solve, how to use them
and what their limitations are.

Those tools share a few traits in common:
- They are npm packages exposing an API
- A build file needs to be added to your project `Gruntfile.js`, `gulpfile.js`, `brocfile.js`...
- Plugins (npm packages) wrapping well-known npm packages (uglifyjs, jshint, less, etc...) need to be installed to perform specific tasks

## Posts

- [Building with Grunt (Part 1)](/posts/2015/04/18/building-with-grunt-part-1/)
- [Building with Grunt (Part 2: caveats)](posts/2015/04/18/building-with-grunt-part-2-caveats/)
- Building with Gulp (Coming soon)
- Building with Broccoli

## Recommended articles on the web

- [How to use npm as a build tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
- [Why gulp might not be the answer](http://scm.io/blog/hack/2014/07/why-gulp-might-not-be-the-answer/)