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
        download(content,'sample.zip','application');
    });
}

// import file
// ファイルがアップロードされたらデータを取得
var fileInput = document.getElementById('file');
var files = null;
let reader = new FileReader();
var new_zip = new JSZip();
//インポートしたコードたちを格納する変数
var import_movements = {};


function import_zip(){
    import_movements = {};
    files = fileInput.files; // 選択されたファイルのリストを取得
    for (let i = 0; i < files.length; i++) { // 選択された各ファイルに対して繰り返し処理を行う
        let file = files[i]; // 現在処理中のファイルを取得
        let reader = new FileReader(); // ファイル読み込み用のFileReaderオブジェクトを生成
        reader.onload = function(event) { // ファイルの読み込み完了時に実行される処理を定義
            let fileContent = event.target.result; // 読み込んだファイルの内容を取得

            let zip = new JSZip(); // JSZipオブジェクトを作成
            zip.loadAsync(fileContent).then(function(zip) { // 読み込んだファイルをZIPファイルとして解凍する
                zip.forEach(function(relativePath, zipEntry) { // ZIPファイル内の各ファイルに対して繰り返し処理を行う
                    if (!zipEntry.dir) { // ファイルの場合のみ処理を実行
                        let fileExtension = zipEntry.name.split('.').pop(); // ファイルの拡張子を取得
                        if (fileExtension === 'json') { // JSONのファイルの場合のみ処理を実行
                            zipEntry.async("string").then(function(data) { // ファイルの内容を文字列として取得
                                let folderPath = relativePath.substring(0, relativePath.lastIndexOf('/')); // フォルダのパスを取得
                                if (!import_movements[folderPath]) { // フォルダが存在しない場合、新たに作成
                                    import_movements[folderPath] = {};
                                }
                                import_movements[folderPath]["json"] = data; // フォルダ内のファイルを保存
                            });
                        } else if (fileExtension === 'xml'){// XMLのファイルの場合のみ処理を実行
                            zipEntry.async("string").then(function(data) { // ファイルの内容を文字列として取得
                                let folderPath = relativePath.substring(0, relativePath.lastIndexOf('/')); // フォルダのパスを取得
                                if (!import_movements[folderPath]) { // フォルダが存在しない場合、新たに作成
                                    import_movements[folderPath] = {};
                                }
                                import_movements[folderPath]["xml"] = data; // フォルダ内のファイルを保存
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

        mainUI_restoreWorkingState(mainUI_newData);
        scriptUI_restoreWorkingState(scriptUI_newData);
    }
}


let button_create = document.getElementById('button_create');
button_create.onclick = loadMovementsToWorkspace;

let button_download_zip = document.getElementById('button_download_zip');
button_download_zip.onclick = download_zip;