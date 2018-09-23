function doGet(e){

 // create and use a templates
 var headerHtml = HtmlService.createTemplateFromFile('header');
 var contentHtml = HtmlService.createTemplateFromFile('index');
 var footerHtml = HtmlService.createTemplateFromFile('footer');
  
 // generates the html output
 var HTMLOutput = HtmlService.createHtmlOutput();
 HTMLOutput.append(headerHtml.evaluate().getContent());
 HTMLOutput.append(contentHtml.evaluate().getContent());
 HTMLOutput.append(footerHtml.evaluate().getContent());
  
 // returns the html output to the browser
 return HTMLOutput
}