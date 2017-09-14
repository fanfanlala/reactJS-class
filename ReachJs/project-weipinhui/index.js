/**
 * Created by dllo on 17/8/17.
 */
// 城市选择
$('.theCity').click(function () {
    $(this).css({'color':'white','backgroundColor':'rgb(232,0,111)'});
    $('.city').text($(this).text());
    $('.theCity').not($(this)).css({'color':'darkgray','backgroundColor':'white'})
})
$('.theCity').eq(0).css({'color':'white','backgroundColor':'rgb(232,0,111)'})

//黑色导航栏账号的delete
$(".black-person-delete").click(function () {
    $(".black-person-hidden").css({'top':'0','right':'-275px'});
})

//轮播图
var i = -1;
setInterval(function () {
    i++;
    i = i >4 ? 0:i;
    var path = 'img/slideShow/slide'+i+'.jpg';
    $(".swiperImg").attr('src',path);
    $('.swiperPinkAll').eq(i).addClass('swiperPink');
    $('.swiperPinkAll').not(  $('.swiperPinkAll').eq(i)).removeClass('swiperPink');
},1000)

// $('.swiper-bottom a').each(function (index,item) {
//  item.click(function () {
//      $('.swiperPinkAll').eq(index).addClass('swiperPink');
//      var url = 'img/slideShow/slide'+index+'.jpg';
//      $(".swiperImg").attr('src',url);
//  })
// })
