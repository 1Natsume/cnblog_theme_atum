<template>
    <div class="headertop filter-dot" style="height: auto;">
        <div id="banner_wave_1"></div>
        <div id="banner_wave_2"></div>
        <figure id="centerbg" class="centerbg">
            <!-- <div class="focusinfo no-select">
                <h1 class="center-text glitch is-glitching Ubuntu-font" data-text="Hi, Mashiro!">Hi, Mashiro!</h1>
                <div class="header-info">
                    <p><i class="fa fa-quote-left"></i> You got to put the past behind you before you can move on. <i
                            class="fa fa-quote-right"></i></p>
                    <div class="top-social_v2">
                        <li id="bg-pre"><img class="flipx"
                                src="https://jsdelivr.2heng.xin/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg"></li>
                        <li><a href="http://github.com/mashirozx" target="_blank" class="social-github"
                                title="github"><img
                                    src="https://jsdelivr.2heng.xin/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/github.png"></a>
                        </li>
                        <li><a href="http://weibo.com/mashirozx?is_all=1" target="_blank" class="social-sina"
                                title="sina"><img
                                    src="https://jsdelivr.2heng.xin/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/sina.png"></a>
                        </li>
                        <li><a href="https://t.me/SakurasoNoMashiro" target="_blank" class="social-lofter"
                                title="telegram"><img
                                    src="https://jsdelivr.2heng.xin/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/telegram.svg"></a>
                        </li>
                        <li><a rel="me" href="https://hello.2heng.xin/@mashiro" target="_blank" class="social-lofter"
                                title="Mastodon"><img
                                    src="https://2heng.xin/wp-content/themes/Sakura/images/Mastodon_Logotype_Simple.svg"></a>
                        </li>
                        <li><a href="https://music.163.com/m/user/home?id=2655217" target="_blank"
                                class="social-wangyiyun" title="CloudMusic"><img
                                    src="https://jsdelivr.2heng.xin/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wangyiyun.png"></a>
                        </li>
                        <li><a href="https://twitter.com/2hengxin" target="_blank" class="social-wangyiyun"
                                title="Twitter"><img
                                    src="https://jsdelivr.2heng.xin/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/twitter.png"></a>
                        </li>
                        <li><a href="https://www.zhihu.com/people/young-dolphin" target="_blank"
                                class="social-wangyiyun" title="Zhihu"><img
                                    src="https://jsdelivr.2heng.xin/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/zhihu.png"></a>
                        </li>
                        <li><a onclick="mail_me()" class="social-wangyiyun" title="E-mail"><img
                                    src="https://jsdelivr.2heng.xin/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/email.svg"></a>
                        </li>
                        <li id="bg-next"><img
                                src="https://jsdelivr.2heng.xin/gh/moezx/cdn@3.1.9/img/Sakura/images/next-b.svg"></li>
                    </div>
                </div>
            </div> -->
        </figure>
        <div id="video-container" style=""><video id="bgvideo" class="video" video-name="" src="" width="auto"
                preload="auto"></video>
            <div id="video-btn" class="loadvideo videolive"></div>
            <div id="video-add"></div>
            <div class="video-stu"></div>
        </div>
        <!-- <div class="headertop-down faa-float animated" onclick="headertop_down()"> <span> <i class="fa fa-chevron-down"
                    aria-hidden="true"></i> </span></div> -->
    </div>
</template>
<script>
import { mapState } from "vuex";
import video from "../../utils/video"
export default {
    name: "headertop",
    computed: {
        ...mapState(["config"]),
    },
    
    methods: {
        loadvideo() {
            video.loadvideo(this.$store.state.config)
        }
    },
    created() {
        this.loadvideo();
    },
}

</script>