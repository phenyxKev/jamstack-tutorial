const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

   eleventyConfig.addPassthroughCopy('./src/style.css'); // <- brings our css
   eleventyConfig.addPassthroughCopy('./src/assets'); // <- brings our assets folder w/ its files

   // Format to local string via node 'luxon' module
   
   eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toLocaleString(DateTime.DATE_MED)
   })

   // Return your Object options:
   return {
      dir: {
         input: "src", // <- from our /src folder
         output: "dist" // <- eleventy is going to serve the copy from this created folder as root
      }
   }
};