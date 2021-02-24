var rating = decodeURI(Request.GetQueryStringParameter('rating'))
var title = decodeURI(Request.GetQueryStringParameter('title'))
var review = decodeURI(Request.GetQueryStringParameter('review'))
var url = "http://example.com" + "?rating=" + rating + "&title=" + title + "&review=" + review

try {
  var obj = { url:url };
  Write(Stringify(obj))
} catch(e) {
  Write(Stringify({"message": e}))
}
