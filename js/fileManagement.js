    // download file
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

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
        let file_name = document.getElementById('download_name').value
        if (file_name == "") {
            file_name = "sample";
        }
        download(content,file_name+'.zip','application');
    });
}

// import file
// ファイルがアップロードされたらデータを取得
var fileInput = document.getElementById('file');
var files = null;
let reader = new FileReader();
var new_zip = new JSZip();
//インポートしたコードたちを格納する変数の初期値
const init_import_movements = {
    main:{
        xml:[],
        json:[]
    },
    script:{}
};
//インポートしたコードたちを格納する変数
var import_movements = init_import_movements;


function import_zip(){
    import_movements = init_import_movements;
    files = fileInput.files; // 選択されたファイルのリストを取得
    for (let i = 0; i < files.length; i++) { // 選択された各ファイルに対して繰り返し処理を行う
        let file = files[i]; // 現在処理中のファイルを取得
        let reader = new FileReader(); // ファイル読み込み用のFileReaderオブジェクトを生成
        reader.onload = function(event) { // ファイルの読み込み完了時に実行される処理を定義
            let fileContent = event.target.result; // 読み込んだファイルの内容を取得

            let zip = new JSZip(); // JSZipオブジェクトを作成
            // ファイルを読み込んで、mainフォルダとscriptフォルダの中身だけ処理する
            zip.loadAsync(file)
                .then(function (zip) {
                    zip.forEach(function (relativePath, zipEntry) {
                        // relativePathはエントリのパス（相対パス）
                        // zipEntryは各エントリの詳細情報（JSZipObjectと呼ばれる）

                        // mainフォルダ内のエントリのみを処理
                        if (relativePath.startsWith('main/') && !zipEntry.dir) {
                            console.log("mainフォルダ内のファイル:", relativePath);
                            if (relativePath.endsWith('.xml')) {
                            // mainフォルダ内のXMLファイル
                            zipEntry.async("text").then(function (xmlContent) {
                                import_movements.main["xml"] = xmlContent;
                            });
                        } else if (relativePath.endsWith('.json')) {
                            // mainフォルダ内のJSONファイル
                            zipEntry.async("text").then(function (jsonContent) {
                                import_movements.main["json"] = jsonContent;
                            });
                        }
                    }

                        // scriptフォルダ内のエントリのみを処理
                        if (relativePath.startsWith('script/') && !zipEntry.dir) {
                            console.log("scriptフォルダ内のファイル:", relativePath);
                            // ここにscriptフォルダ内のファイルに対する処理を記述する
                            let folders = relativePath.split('/');
                            if (folders.length > 2) {//'script/'の後ろに何かしらのフォルダ名やファイル名が続いている場合に条件を満たす
                                let folderName = folders[1];
                                let fileType = folders[2].split('.')[1];
                                if (!import_movements.script[folderName]) {
                                    import_movements.script[folderName] = {};
                                }
                                zipEntry.async("text").then(function (content) {
                                    if (!import_movements.script[folderName][fileType]) {
                                        import_movements.script[folderName][fileType] = {};//キーの名前まだ完全に記述してないからここからやってください
                                    }
                                    import_movements.script[folderName][fileType] = content;
                                });
                            }
                        }
                    });
                });
        };
        reader.readAsArrayBuffer(file); // ファイルをバイナリ形式で読み込む
    }

}

fileInput.addEventListener('change', import_zip);//zipファイルをアップロードした瞬間変数に中身を保存

function loadMovementsToWorkspace(){//保存した変数の中身をワークスペースに反映
    if(files != null){
        console.log(import_movements);
        let mainUI_newData = import_movements["main"];
        let scriptUI_newData = import_movements["script"];

        script_selectOptions = [];
        
        scriptUI_restoreWorkingState(scriptUI_newData);
        
        // Get a reference to the <select> element
        var scriptSelectElement = document.getElementById("script_select");

        // Create an empty array to store the options
        script_selectOptions = [];

        // Iterate through the <option> elements and populate script_selectOptions
        for (var i = 0; i < scriptSelectElement.options.length; i++) {
            var option = scriptSelectElement.options[i];
            script_selectOptions.push([option.text, option.value]);
        }
        
        Blockly.Blocks['custom_dropdown'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("Custom Dropdown:")
                  .appendField(new Blockly.FieldDropdown(script_selectOptions), "dropdown_name");
              this.setPreviousStatement(true, null);
              this.setNextStatement(true, null);
              this.setColour(210);
              this.setTooltip("");
              this.setHelpUrl("");
            }
          };//この処理の順番じゃないと壊れます
        mainUI_restoreWorkingState(mainUI_newData);
        scriptUI_showScriptBlock();
        
    }
}


let button_create = document.getElementById('button_create');
button_create.onclick = loadMovementsToWorkspace;

let button_download_zip = document.getElementById('button_download_zip');
button_download_zip.onclick = download_zip;