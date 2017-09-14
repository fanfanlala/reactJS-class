/**
 * Created by dllo on 17/8/17.
 */
var webpage = require('webpage');
var page = webpage.create();
phantom.outputEncoding = 'utf-8';
var fs = require('fs');

page.open('https://www.vip.com/',function (status) {
    if(status === 'success'){
        console.log('成功')
        console.log(page.title);
        page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js',function () {
            setTimeout(function () {
                var arrString = page.evaluate(function () {
                    var arr = [];
                    $('#J-floorBrandList-1 .J-brand-item-data1 .brand-item-page .brand-item a img').each(function (index,element) {
                        console.log('oo')
                        var imgsrc = $(element).attr('src')
                        console.log(imgsrc)
                        arr.push(imgsrc)
                    })
                    return arr;
                })
                //console.log(arrString);
                fs.write('./women.json',arrString,'w');
                phantom.exit(0);
            },5000)
        })
    }else{
        console.log('失败')
        phantom.exit(0);
    }
})