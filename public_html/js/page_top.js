/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// グローバル変数
var syncerTimeout = null ;

// 一連の処理
$( function()
{
    // PCサイズの場合のみ処理を行う。
    if( document.documentElement.clientWidth > 769 ){
        
	// スクロールイベントの設定
	$( window ).scroll( function()
	{
		// 1秒ごとに処理
		if( syncerTimeout == null )
		{
			// セットタイムアウトを設定
			syncerTimeout = setTimeout( function(){

				// 対象のエレメント
				var element = $( '#move-page-top' ) ;

				// 現在、表示されているか？
				var visible = element.is( ':visible' ) ;

				// 最上部から現在位置までの距離を取得して、変数[now]に格納
				var now = $( window ).scrollTop() ;
                                
                                // <h1 id="element-h1">指定要素</h1>
                                var elm = document.getElementById( "content" ) ;
                                
                                // 要素のY座標
                                var y = $( elm ).offset().top ;

				// 最上部から現在位置までの距離(now)が1500以上かつ
				if( now > y )
				{
					// 非表示状態だったら
					if( !visible )
					{
						// [#page-top]をゆっくりフェードインする
						element.fadeIn( 'slow' ) ;
					}
				}

				// 1500px以下かつ
				// 表示状態だったら
				else if( visible )
				{
					// [#page-top]をゆっくりフェードアウトする
					element.fadeOut( 'slow' ) ;
				}

				// フラグを削除
				syncerTimeout = null ;
			} , 100 ) ;
		}
	} ) ;

	// クリックイベントを設定する
	$( '#move-page-top' ).click(
		function()
		{
			// スムーズにスクロールする
                        var scldurat = 1200;
			$( 'html,body' ).animate( {scrollTop:0} , {duration: scldurat, easing: "easeOutQuint"} ) ;
		}
	) ;
    }
} ) ;