/*!
 * RPGSpeechBalloon.js
 *
 * Copyright (c) 2022 t-hsgw
 *
 * Released under the MIT license.
 * see https://opensource.org/licenses/MIT
 */
class RPGSpeechBalloon {

  /* ----------------------------------------------------------
   *
   * 1.Setting property
   * 
   * --------------------------------------------------------- */
  static ELEMENT_ID = 'RPGsb';

  static $balloonEl = document.createElement('div');
  static {
    this.$balloonEl.id = this.ELEMENT_ID;
  }

  static initObj = {
    text: '初期テキスト',
    targetId: this.$balloonEl.id
  }




  /* ----------------------------------------------------------
   *
   * 2.Function
   * 
   * --------------------------------------------------------- */

  /**
   * createBalloon  
   * ふきだしの作成  
   * デフォルトでは `<div id="RPGsb"></div>` が作成される
   */
  static createBalloon( $appendEl = document.body, targetId = this.$balloonEl.id ){

    const $el = this.$balloonEl;

    $appendEl.appendChild($el);

    this.initText(targetId);
  }


  /**
   * initText  
   * メッセージを初期化
   */
  static initText(targetId = this.$balloonEl.id) {
    const targetIdEl = document.getElementById(targetId);
          targetIdEl.textContent = '';
  }


  /**
   * displayText  
   * メッセージを表示
   * 
   * @param propText String  出力するテキストを指定する（初期値「初期テキスト」）
   * @param targetId String  出力先のDOM'ID'を指定する
   * @param duration Number  文字の出力される間隔(mm秒で指定)
   */
  static displayText(
      propText = this.initObj.text,
      targetId = this.$balloonEl.id,
      duration = 100
    ) {

    if( !document.body.contains(document.querySelector(`#${this.$balloonEl.id}`)) ) {
      this.createBalloon();
    }

    // テキスト初期化
    this.initText(targetId);

    const targetIdEl = document.getElementById(targetId);
    // テキストを1文字ずつ分割して配列に挿入
    const textArray = propText.split('');

    textArray.forEach((word, i) => {
      setTimeout( () => {
        let new_element = document.createElement('span');
            new_element.textContent = word;
        targetIdEl.appendChild(new_element);
        },
        duration * i
      )
    })
  }
}