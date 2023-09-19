    // // download file
    // function download(content, fileName, contentType) {
    //     var a = document.createElement("a");
    //     var file = new Blob([content], { type: contentType });
    //     a.href = URL.createObjectURL(file);
    //     a.download = fileName;
    //     a.click();
    // }
    // function save_json() {
    //     var code = Blockly.JavaScript.workspaceToCode(workspace);
    //     var codej = JSON.parse(code);
    //     download(JSON.stringify(codej),'theaterScript.json','text/plain');
    // }
    // function save_xml() {
    //     var xml = Blockly.Xml.workspaceToDom(workspace);
    //     var myBlockXml = Blockly.Xml.domToText(xml);
    //     download(myBlockXml,'theaterScriptBlock.xml','text/plain');
    // }
    // let button_json = document.getElementById('button_json');
    // button_json.onclick = save_json;
    // let button_xml = document.getElementById('button_xml');
    // button_xml.onclick = save_xml;

    // // import file
    // // ファイルがアップロードされたらデータを取得
    // var fileInput = document.getElementById('file');
    // var files = null;
    // let reader = new FileReader();
    // function handleFileSelect(){
    //     files = fileInput.files;
    //     for(file of files){
    //         reader.readAsText(file, 'UTF-8');
    //     }
    // }
    // fileInput.addEventListener('change', handleFileSelect);

    // function import_xml() {
    //     if(files != null){
    //         var xml = Blockly.Xml.textToDom(reader.result);
    //         Blockly.Xml.clearWorkspaceAndLoadFromXml(xml,workspace);
    //         console.log(files);
    //     }
    // }
    // let button_create = document.getElementById('button_create');
    // button_create.onclick = import_xml;

function download_zip(){

    var zip = new JSZip();

}