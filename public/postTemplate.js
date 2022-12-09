(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"post\" data-price=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":39}}}) : helper)))
    + "\">\n    <div class=\"post-contents\">\n        <div class=\"post-image-container\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"source") || (depth0 != null ? lookupProperty(depth0,"source") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"source","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":32}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"itemDescription") || (depth0 != null ? lookupProperty(depth0,"itemDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemDescription","hash":{},"data":data,"loc":{"start":{"line":4,"column":39},"end":{"line":4,"column":58}}}) : helper)))
    + "\">\n        </div>\n        <div class=\"post-info-container\">\n            <a href=\"#\" class=\"post-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"itemDescription") || (depth0 != null ? lookupProperty(depth0,"itemDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemDescription","hash":{},"data":data,"loc":{"start":{"line":7,"column":43},"end":{"line":7,"column":62}}}) : helper)))
    + "</a> <span class=\"post-price\">$"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":7,"column":93},"end":{"line":7,"column":102}}}) : helper)))
    + "</span>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();