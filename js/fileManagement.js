    // download file
    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
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
    //保存するデータを変数に入れて持ってくる
    //scriptUI_blocks　scriptUIで作ったOriginal Blockを配列で格納したやつ
    var mainMovement = mainUI_outputXMLandJSON();

    //作成したものをフォルダにまとめて、ZIPファイルでダウンロード
    var zip = new JSZip();
    
    //main
    var mainCode_json = JSON.parse(mainMovement['code']);
    var mainCode_xml = Blockly.Xml.domToText(mainMovement['xml']);

    zip.file('main/mainUI_code.json', JSON.stringify(mainCode_json));
    zip.file('main/mainUI_xml.xml', mainCode_xml);

    //script
    for (const block_keys of Object.keys(scriptUI_blocks)) {
        var scriptCode_json = JSON.parse(scriptUI_blocks[block_keys].code);
        var scriptCode_xml = Blockly.Xml.domToText(scriptUI_blocks[block_keys].xml);
        
        zip.file('script/'+scriptUI_blocks[block_keys].name+'/scriptUI_code.json', JSON.stringify(scriptCode_json));
        zip.file('script/'+scriptUI_blocks[block_keys].name+'/scriptUI_xml.xml', scriptCode_xml);
    }

    zip.generateAsync({type:"blob"})
    .then(function(content){
        download(content,'sample.zip','application');
    });
}

function import_zip(){


}
// import file
// ファイルがアップロードされたらデータを取得
var fileInput = document.getElementById('file');
var files = null;
let reader = new FileReader();
var new_zip = new JSZip();

function handleFileSelect(){
    files = fileInput.files;
    for(file of files){
        new_zip.loadAsync(file);
        // reader.readAsText(file, 'UTF-8');
    }
}
fileInput.addEventListener('change', handleFileSelect);

// function import_xml() {
//     if(files != null){
//         var xml = Blockly.Xml.textToDom(reader.result);
//         Blockly.Xml.clearWorkspaceAndLoadFromXml(xml,workspace);
//         console.log(files);
//     }
// }
// let button_create = document.getElementById('button_create');
// button_create.onclick = import_xml;

let button_download_zip = document.getElementById('button_download_zip');
button_download_zip.onclick = download_zip;