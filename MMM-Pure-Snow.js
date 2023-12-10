/* Magic Mirror
 * Module: MMM-Pure-Snow
 *
 * By Peter Törnhult https://tornhult.se
 * MIT Licensed.
 */

Module.register("MMM-Pure-Snow", {
  defaults: {
    dataCount: "200",
  },
  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.setAttribute("id", "snow");
    wrapper.setAttribute("data-count", this.config.dataCount);
    return wrapper;
  },
  getStyles: function () {
    return [this.file("pure-snow.css")];
  },
  getScripts: function () {
    return [this.file("pure-snow.js")];
  },
});
