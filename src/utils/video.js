import $ from "jquery";
let video = { 
    loadvideo:(ops)=> {
    let img = ops.bg === undefined ? [] : ops.bg
    let mv = ops.movies === undefined ? [] : ops.movies
    var Poi = {
        movies: {
            url: mv,
            live: 'close',
        },
        imgs: img,
        windowheight: 'fixed',
        codelamp: 'close',
        ajaxurl: '',
        order: 'asc',
        formpostion: 'bottom',
    }

    function getImageSizeByUrl(url, index, callback) {
        let image = new Image()
        image.onload = function() {
            callback(index, {
                width: image.width,
                height: image.height,
            })
        }
        image.onerror = function() {
            callback(index, {
                width: 0,
                height: 0,
            })
        }
        image.src = url
    }

    // 获取指定图像的尺寸信息
    function getImageSizeTest(imageUrl) {
        getImageSizeByUrl(imageUrl, 0, function(index, param) {
            if (param.width > param.height) {
                $('.video-container').css({
                    height: '' + param.height / 2 + '',
                })
            }
            if (param.width < param.height) {
                $('.video-container').css({
                    height: '' + param.height / 1.4 + '',
                })
            }
        })
    }

    var s = $('#bgvideo')[0],
        Siren = {
            splay: function() {
                $('#video-btn')
                    .addClass('video-pause')
                    .removeClass('video-play')
                    .show()
                $('.video-stu').css({
                    bottom: '-100px',
                })

                s.play()
                $('#bgimg').hide()
                $('.video-container').css({ height: 'auto' })
            },
            spause: function() {
                $('#video-btn')
                    .addClass('video-play')
                    .removeClass('video-pause')
                s.pause()
            },
            liveplay: function() {
                if (s.oncanplay != undefined && $('.haslive').length > 0) {
                    if ($('.videolive').length > 0) {
                        Siren.splay()
                    }
                }
            },
            livepause: function() {
                if (s.oncanplay != undefined && $('.haslive').length > 0) {
                    Siren.spause()
                    $('.video-stu')
                        .css({
                            bottom: '0px',
                        })
                        .html('已暂停 ...')
                }
            },
            addsource: function() {
                if (
                    typeof Poi.movies.url != 'undefined' ||
                    Poi.movies.url != null
                ) {
                    $('.video-stu')
                        .html('正在载入视频 ...')
                        .css({
                            bottom: '0px',
                        })
                    // var t = Poi.movies.url.split(','),
                    var t = Poi.movies.url,
                        _t = t[Math.floor(Math.random() * t.length)]
                    // $('#bgvideo').attr('src', Poi.movies.url + '/' + _t)
                    $('#bgvideo').attr('src', _t)
                    // $('#bgvideo').attr('video-name', _t)
                }
            },
            LV: function() {
                var _btn = $('#video-btn')
                _btn.on('click', function() {
                    if ($(this).hasClass('loadvideo')) {
                        $(this)
                            .addClass('video-pause')
                            .removeClass('loadvideo')
                            .hide()
                        Siren.addsource()
                        s.oncanplay = function() {
                            Siren.splay()
                            $('#video-add').show()
                            _btn.addClass('videolive')
                            _btn.addClass('haslive')
                        }
                    } else {
                        if ($(this).hasClass('video-pause')) {
                            Siren.spause()
                            _btn.removeClass('videolive')
                            $('.video-stu')
                                .css({
                                    bottom: '0px',
                                })
                                .html('已暂停 ...')
                        } else {
                            Siren.splay()
                            _btn.addClass('videolive')
                        }
                    }
                    s.onended = function() {
                        $('#bgvideo').attr('src', '')
                        $('#video-add').hide()
                        _btn.addClass('loadvideo').removeClass('video-pause')
                        _btn.removeClass('videolive')
                        _btn.removeClass('haslive')
                        $('#bgvideo').show()
                    }
                })
                $('#video-add').on('click', function() {
                    Siren.addsource()
                })
            },
            AH: function() {
                // if (Poi.windowheight == 'auto') {
                if ($('h1.main-title').length > 0) {
                    var _height = $(window).height()
                    $('#centerbg').css({
                        height: _height,
                    })
                    $('#bgvideo').css({
                        'min-height': _height,
                    })
                    $(window).resize(function() {
                        Siren.AH()
                    })
                    //   }
                } else {
                    var _height = $(window).height()
                    $('#centerbg').css({
                        height: _height,
                    })
                    $('.headertop').addClass('headertop-bar')
                    
                }
            },
            PE: function() {
                // if ($('.headertop').length > 0) {
                //   if ($('h1.main-title').length > 0) {
                //     $('.blank').css({
                //       'padding-top': '0px'
                //     })
                //     $('.headertop').css({
                //       'height': 'auto'
                //     }).show()
                // if (Poi.movies.live == 'open')
                Siren.liveplay()
                //   } else {
                //     $('.blank').css({
                //       'padding-top': '75px'
                //     })
                //     $('.headertop').css({
                //       'height': '0px'
                //     }).hide()
                //     Siren.livepause()
                //   }
                // }
            },
            IM: function() {
                
                if (Poi.movies.url == '') {
                    $('#bgvideo').hide()
                }
                var t = Poi.imgs,
                    _t = t[Math.floor(Math.random() * t.length)]
                $('#bgvideo').css({
                    'background-image': 'url(' + _t + ')',
                    height: '100%',
                })
                $('.centerbg').css({ 'background-image': 'url(' + _t + ')' })
                //getImageSizeTest(_t)
            },
            MP: function() {}
        }
    $(function() {
        //   Siren.addsource()
        Siren.AH()
        // Siren.PE()
        // Siren.LV()
        //Siren.IM()
        //Siren.MP()
        
    })
}
}
export default video;