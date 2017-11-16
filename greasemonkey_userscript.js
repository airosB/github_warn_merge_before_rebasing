// ==UserScript==
// @name           gheでrebase前はマージボタンの見た目を変えて気づくようにするやつ
// @namespace      https://github.com/airosB/github_warn_merge_before_rebasing
// @version        1.01
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
    var mergeButtons = $$('.btn-group-merge button');
    var mergeButton = mergeButtons[0];
    mergeButton.innerText = mergeButton.innerText + ' (' + commitCount + ')';

    if(parseInt(commitCount, 10) >= 2){
        mergeButtons.forEach(function(e){
            e.classList.remove('btn-primary');
            e.classList.add('btn-purple');
        });
    }
})();
