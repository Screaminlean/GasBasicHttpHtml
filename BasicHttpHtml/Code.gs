function doGet(e){
    /* 
     * I have put the html in the variable like this to make it easier to read. 
     */
    var html = '<!DOCTYPE html>';
        html += '<html lang="en">';
        html += '<head>';
        html += '<meta charset="UTF-8">';
        html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
        html += '<meta http-equiv="X-UA-Compatible" content="ie=edge">';
        html += '<title>Basic Http Html</title>';
        html += '</head>';
        html += '<body>';
        html += '<p>This is a basic example';
        html += '</body>';
        html += '</html>';
  
   // create and use a template
   var htmlTemplate = HtmlService.createTemplate(html)
  
   var HTMLOutput = HtmlService.createHtmlOutput();
       HTMLOutput.append(htmlTemplate.evaluate().getContent());
   
    // return response to the browser
   return HTMLOutput;
  }