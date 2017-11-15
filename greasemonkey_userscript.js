// ==UserScript==
// @name           gheでrebase前はマージボタンの見た目を変えて気づくようにするやつ
// @namespace      https://github.com/airosB/github_warn_merge_before_rebasing
// @version        1.00
// @description    ブランチをマージする前にrebaseでコミットを1つにしてないとマージボタンの色が変わる
// @author         airosB
// @match          https://github.com/*
// @grant          none
// ==/UserScript==

(function() {
    'use strict';
    function $$(str){
        return document.querySelectorAll(str);
    }

    var commitCount = $$('#commits_tab_counter')[0].innerText;
    var mergeButton = $$('.btn-group-merge button')[0];
    var mergeOptionButton = $$('.btn-group-merge button')[1];
    mergeButton.innerText = mergeButton.innerText + ' (' + commitCount + ')';

    if(parseInt(commitCount, 10) >= 2){
        mergeButton.classList.remove('btn-primary');
        mergeButton.classList.add('btn-purple');
        mergeOptionButton.classList.remove('btn-primary');
        mergeOptionButton.classList.add('btn-purple');
    }
})();
