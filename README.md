# Tailwind CSS Starter
A starter template for very simple and small projects or static web pages with Tailwind CSS setup and configured without PostCSS or any other framework. You only need to install NPM.

Follow the Getting Started guide and build static web pages with Tailwind CSS. Also, follow the steps to Optimize for Production to end up with a very tiny final CSS bundle.

OR

Watch this video for demo - https://youtu.be/lGlq8ZjozKI

## Getting Started
1. Clone the repository


        git clone https://github.com/ThirusOfficial/tailwind-css-starter.git {{ your project name }}

   Alternately you can download the zip file and unzip it.

 2.  You will now have the cloned project folder. Open the project in
   Visual Studio Code editor (recommended code editor for Tailwind CSS
   Projects)
   
 3. Open new terminal within Visual Studio Code
   
 4.  Download and install NPM - [A Beginner’s Guide to npm](https://www.sitepoint.com/npm-guide/)
   
 5. Initialize the project with defaults

         npm init -y 

6. Install dependencies

        npm install

7. Build using Tailwind CSS

        npm run build

8. Open the `public > index.html` file in your browser and you should see a heading styled with a gradient. If you don't see a gradient on the text, something went wrong.


## How to use

- Go to `public > index.html` Remove the `<h1>` element and start adding your own HTML.
- If you need to add more HTML pages, add them in the `public` folder.
- To extract classes and use the `@apply` directive, edit the custom CSS file in `src > styles.css`. Add any amount of custom CSS within this file. Refer [https://tailwindcss.com/docs/installation#using-a-custom-css-file](https://tailwindcss.com/docs/installation#using-a-custom-css-file)

NOTE: Do NOT edit the file `public > styles.css` directly. The CSS here is generated from `src > styles.css` using Tailwind when you build.


## Optimize for production

Before pushing your code (the `public` folder) for production, run the below command to reduce the size of `styles.css` within the public folder

     npm run prod

 
