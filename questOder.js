// オブジェクトの要素ではなく、htmlのidを参照しなくてはいけない
(() => {

    class Accordion{
        constructor(obj){
            console.log(obj);
            const $category = document.getElementById('questCategory-js');
            const $contents = document.getElementById('contents-js');
            const categoryLength = obj.questCategory.length;
            const contentsLength = obj.questContents.length;
            for(let categoryIndex = 0; categoryIndex < categoryLength; categoryIndex++){
                let cloneCategory = $category.cloneNode(true);
                document.getElementsByClassName('categoryAppend').appendChild(cloneCategory);
                // for(let contentsIndex = 0; contentsIndex < contentsLength; contentsIndex++){
                //     let cloneContents = $contents.cloneNode(true);
                //     $contents.appendChild(cloneContents);

                // }
            }
        }
    }
    const questAccordion = new Accordion({
        questCategory : [
            '定常クエスト' ,
            'ボランティア',
            'イベント参加',
            '仕事'
        ],
        questContents : [
            [
                'スタンプラリー',
                'お買い物'
            ],
        [

        ],
        [
            'ホームステイ',
            '伝統体験イベント'
        ]
    ]
    });

})();