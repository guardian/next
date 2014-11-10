next
====

Landing page for Guardian Beta users. 

To submit an article for review please contact Cantlin Ashrowan.

Local Install Requirements
--------------------------
* A Mac or Linux pc
* Installed Node.js (https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* Installed npm (Node package manager - you quite possibly already have this)
* Installed Grunt (build tool) `sudo npm -g install grunt-cli`
* Installed Ruby >= v1.9.x (on Ubuntu: `sudo apt-get install ruby ruby-dev`) & [bundler](http://gembundler.com/) (You may already have this installed, but run `ruby -v` to check version number)
* Installed Jekyll gem `gem install jekyll`


Running locally
--------------------------
Assuming you have checked out this project, open a console and change directory into the root of the project.

* First get dependecies with `sh grunt`
* Then compile the static assets by running `grunt` from the root of the project
* Next change into the Jekyll directory `cd jekyll`
* Run the Jekyll local server `jekyll serve --baseurl` (more command line options can be found within the [Jekyll docs](http://jekyllrb.com/docs/configuration/#serve-command-options))
* Point your web browser of choice to `http://localhost:4000/` 
